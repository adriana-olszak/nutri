import hashlib

import psycopg2
from psycopg2.extras import execute_values
from psycopg2.sql import SQL
from sentence_transformers import SentenceTransformer
import uuid
from datetime import datetime, UTC
from decimal import Decimal
from config import load_config
import traceback
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def get_db_connection(connection_string):
  return psycopg2.connect(connection_string)


def generate_static_uuid(type_prefix, source_id):
  """
  Generate a static UUID based on the type prefix and source_id

  :param type_prefix: A string prefix indicating the type of data (e.g., 'food', 'nutrient', 'category')
  :param source_id: The original source ID of the item
  :return: A UUID string
  """
  combined_id = f"{type_prefix}:{source_id}"

  md5_hash = hashlib.md5(combined_id.encode()).hexdigest()

  return str(uuid.UUID(md5_hash))


def process_canadian_data(conn, schema_name):
  food_data = {}
  missing_food_groups = set()

  with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
    logging.info("Fetching data from the database...")
    cur.execute(f'SELECT * FROM "{schema_name}".food_name')
    food_name = cur.fetchall()
    cur.execute(f'SELECT * FROM "{schema_name}".food_group')
    food_group = cur.fetchall()
    cur.execute(f'SELECT * FROM "{schema_name}".conversion_factor')
    conversion_factor = cur.fetchall()
    cur.execute(f'SELECT * FROM "{schema_name}".measure_name')
    measure_name = cur.fetchall()
    cur.execute(f'SELECT * FROM "{schema_name}".nutrient_amount')
    nutrient_amount = cur.fetchall()
    cur.execute(f'SELECT * FROM "{schema_name}".nutrient_name')
    nutrient_name = cur.fetchall()

  logging.info("Processing food groups, measures, and nutrients...")
  food_group_dict = {row['FoodGroupID']: row for row in food_group}
  measure_dict = {row['MeasureID']: row for row in measure_name}
  nutrient_dict = {row['NutrientID']: row for row in nutrient_name}

  logging.info("Processing food data...")
  for food in food_name:
    food_group_id = food['FoodGroupID']
    if food_group_id not in food_group_dict:
      missing_food_groups.add(food_group_id)
      continue

    food_group_info = food_group_dict[food_group_id]
    food_data[food['FoodID']] = {
      'id': generate_static_uuid('food', food['FoodID']),  # Generate static UUID
      'source_id': food['FoodID'],
      'description': food['FoodDescription'],
      'scientificName': food['ScientificName'],
      'category': {
        'id': generate_static_uuid('category', food_group_info['FoodGroupID']),
        'source_id': food_group_info['FoodGroupID'],
        'name': food_group_info['FoodGroupName'],
        'code': food_group_info['FoodGroupCode']
      },
      'conversionFactors': [],
      'measures': [],
      'nutrients': []
    }

  logging.info("Processing conversion factors...")
  for cf in conversion_factor:
    if cf['FoodID'] in food_data:
      measure_id = cf['MeasureID'] if cf['MeasureID'] != 502468 else 1580
      measure = measure_dict.get(measure_id)

      if measure:
        food_data[cf['FoodID']]['conversionFactors'].append({
          'id': generate_static_uuid("food_portion", f"{cf['FoodID']}:{measure['MeasureID']}"),
          'foodId': generate_static_uuid("food", cf['FoodID']),
          'measureId': generate_static_uuid("measure", measure['MeasureID']),
          'measureSourceId': measure['MeasureID'],
          'measureDescription': measure['MeasureDescription'],
          'value': float(cf['ConversionFactorValue']) if isinstance(cf['ConversionFactorValue'], Decimal) else
          cf[
            'ConversionFactorValue'],
          'gramWeight': float(cf['ConversionFactorValue'] * 100) if isinstance(cf['ConversionFactorValue'],
                                                                               Decimal) else cf[
                                                                                               'ConversionFactorValue'] * 100,
        })

  logging.info("Processing nutrient amounts...")
  for na in nutrient_amount:
    if na['FoodID'] in food_data:
      nutrient = nutrient_dict.get(na['NutrientID'])
      if nutrient:
        food_data[na['FoodID']]['nutrients'].append({
          'id': generate_static_uuid("nutrient", nutrient['NutrientID']),
          'source_id': nutrient['NutrientID'],
          'name': nutrient['NutrientName'],
          'unit': nutrient['NutrientUnit'],
          'symbol': nutrient['NutrientSymbol'],
          'value': float(na['NutrientValue']) if isinstance(na['NutrientValue'], Decimal) else na[
            'NutrientValue'],
          'decimals': nutrient['NutrientDecimals']
        })

  if missing_food_groups:
    logging.warning(f"Missing food groups: {missing_food_groups}")
    logging.warning(f"Total number of missing food groups: {len(missing_food_groups)}")
    logging.warning(f"Total number of processed foods: {len(food_data)}")
    logging.warning(f"Total number of food groups: {len(food_group_dict)}")

  return food_data


def populate_language_table(conn):
  current_time = datetime.now(UTC)
  language_ids = {}
  languages = [
    {"code": "en", "name": "English"},
    {"code": "pl", "name": "Polski"},
  ]

  with conn.cursor() as cur:
    language_data = [(lang['code'], lang['name'], current_time, current_time) for lang in languages]

    # Perform the batch insert/update
    execute_values(cur, """
            INSERT INTO "i18n_languages" (code, name, "updated_at", "created_at")
            VALUES %s
            ON CONFLICT (code) DO UPDATE SET
                name = EXCLUDED.name,
                "updated_at" = EXCLUDED."updated_at"
            RETURNING code
        """, language_data)

    # Fetch the returned codes
    returned_codes = cur.fetchall()

    # Populate the language_ids dictionary
    for lang, (code,) in zip(languages, returned_codes):
      language_ids[lang['code']] = code

  return language_ids


def batch_import_food(conn, food_data, import_info_id):
  with conn.cursor() as cur:
    # Prepare data for batch insert
    categories = []
    foods = []
    food_categories = []
    nutrients = []
    measure_units = []
    food_nutrients = []
    portions = []
    translations = []
    search_vectors = []

    category_ids = set()
    food_ids = set()
    nutrient_ids = set()

    for food_item in food_data.values():
      category = food_item['category']
      categories.append((
        category['id'],
        category['name'],
        1,
        import_info_id,
        category['source_id'],
        datetime.now(UTC),
        datetime.now(UTC)
      ))
      category_ids.add(category['id'])

      foods.append((
        food_item['id'],
        food_item['description'],
        food_item['source_id'],
        food_item['scientificName'],
        food_item['category']['id'],
        import_info_id,
        datetime.now(UTC),
        datetime.now(UTC)
      ))
      food_ids.add(food_item['id'])

      food_categories.append((
        food_item['id'],
        category['id'],
        True,
        datetime.now(UTC),
        datetime.now(UTC)
      ))

      for nutrient in food_item['nutrients']:
        nutrients.append((
          nutrient['id'],
          nutrient['name'],
          nutrient['unit'],
          nutrient['source_id'],
          datetime.now(UTC),
          datetime.now(UTC)
        ))
        nutrient_ids.add(nutrient['id'])

        food_nutrients.append((
          food_item['id'],
          nutrient['id'],
          nutrient['value'],
          nutrient['source_id'],
          import_info_id,
          datetime.now(UTC),
          datetime.now(UTC)
        ))

      for portion in food_item['conversionFactors']:
        measure_units.append((
          portion['measureId'],
          portion['measureDescription'],
          portion['measureSourceId'],
          import_info_id,
          datetime.now(UTC),
          datetime.now(UTC)
        ))
        portions.append((
          portion['id'],
          portion['value'],
          portion['gramWeight'],
          portion['measureId'],
          food_item['id'],
          import_info_id,
          datetime.now(UTC),
          datetime.now(UTC)
        ))

      translations.append((
        str(uuid.uuid4()),
        'en',
        'Food',
        food_item['id'],
        'description',
        food_item['description'],
        datetime.now(UTC),
        datetime.now(UTC)
      ))

      search_vectors.append((
        str(uuid.uuid4()),
        food_item['id'],
        'en',
        f"{food_item['description']} {category['name']}",
        datetime.now(UTC),
        datetime.now(UTC)
      ))

    # Batch insert data in order of dependencies
    print("Inserting categories...")
    execute_values(cur, '''
            INSERT INTO "food_categories" (id, description, "level", "import_info_id", "source_id", "updated_at", "created_at")
            VALUES %s
            ON CONFLICT ("id") DO NOTHING
            RETURNING id
        ''', categories)

    print("Inserting foods...")
    execute_values(cur, '''
            INSERT INTO "foods" (id, description, "source_id", "scientific_name", "category_id","import_info_id", "updated_at", "created_at")
            VALUES %s
            ON CONFLICT ("id") DO NOTHING
            RETURNING id
        ''', foods)

    print("Inserting nutrients...")
    execute_values(cur, '''
               INSERT INTO "food_nutrients" (id, name, "unit_name", "source_id", "updated_at", "created_at")
               VALUES %s
               ON CONFLICT ("id") DO NOTHING
               RETURNING id
           ''', nutrients)

    print("Inserting food nutrients...")
    food_nutrient_data = [
      (food['id'], n['id'], n['value'], n['source_id'], import_info_id, datetime.now(UTC), datetime.now(UTC))
      for food in food_data.values()
      for n in food['nutrients']
    ]
    execute_values(cur, '''
                  INSERT INTO "food_food_nutrients" ("food_id", "nutrient_id", amount, "source_id", "import_info_id", "updated_at", "created_at")
                  VALUES %s
                  ON CONFLICT ("food_id", "nutrient_id") DO NOTHING
              ''', food_nutrient_data)

    print("Inserting measure units...")
    execute_values(cur, '''
              INSERT INTO "food_measure_units" (id, "name", "source_id", "import_info_id", "updated_at", "created_at")
              VALUES %s
              ON CONFLICT ("id") DO NOTHING
          ''', measure_units)

    print("Inserting food portions...")
    execute_values(cur, '''
              INSERT INTO "food_portions" (id, "conversion_factor", "gram_weight", "measure_unit_id", "food_id", "import_info_id", "updated_at", "created_at")
              VALUES %s
              ON CONFLICT ("id") DO NOTHING
          ''', portions)

    print("Inserting translations...")
    execute_values(cur, '''
              INSERT INTO "i18n_translations" (id, "language_code", "entity_type", "entity_id", field, value, "updated_at", "created_at")
              VALUES %s
              ON CONFLICT ("entity_type", "entity_id", "language_code", field) DO NOTHING
          ''', translations)

    print("Updating search vectors...")
    execute_values(cur, '''
        INSERT INTO "food_search_vectors" (id, "food_id", "language_code", "search_vector", "updated_at", "created_at")
        VALUES %s
        ON CONFLICT ("food_id", "language_code") DO NOTHING
    ''', search_vectors, template='''(
        %s, %s, %s,
        to_tsvector('english', %s),
        %s, %s
    )''')

def create_food_embeddings(conn, food_data, model, modelVersion, batch_size=100):
  all_embeddings = []
  texts = []
  food_ids = []

  logging.info(f"Starting batch processing of {len(food_data)} food items")

  for food_id, food in food_data.items():
    text = f"{food['description']} {food['category']['name']}"
    texts.append(text)
    food_ids.append(food['id'])

  for i in range(0, len(texts), batch_size):
    batch_texts = texts[i:i + batch_size]
    batch_food_ids = food_ids[i:i + batch_size]

    logging.info(f"Processing batch {i // batch_size + 1} of {len(texts) // batch_size + 1}")

    batch_embeddings = model.encode(batch_texts)

    current_time = datetime.now(UTC)
    batch_data = [
      (
        str(uuid.uuid4()),  # id
        food_id,  # foodId
        'en',  # languageCode
        'sentenceTransformer',  # embeddingType
        embedding.tolist(),  # embedding
        modelVersion,  # modelVersion
        current_time,  # createdAt
        current_time  # updatedAt
      )
      for food_id, embedding in zip(batch_food_ids, batch_embeddings)
    ]

    all_embeddings.extend(batch_data)

  with conn.cursor() as cur:
    execute_values(cur, '''
            INSERT INTO "food_embeddings" (
                id, "food_id", "language_code", "embedding_type", embedding, "model_version", "created_at", "updated_at"
            ) VALUES %s
            ON CONFLICT ("food_id", "language_code", "embedding_type") DO UPDATE SET
                embedding = EXCLUDED.embedding,
                "model_version" = EXCLUDED."model_version",
                "updated_at" = EXCLUDED."updated_at"
        ''', all_embeddings)

  logging.info(f"Created {len(all_embeddings)} food embeddings")


def main():
  print("Loading configuration...")
  config = load_config('./config.yml')

  print("Connecting to database...")
  conn = get_db_connection(config.database_url)

  try:
    conn.autocommit = False

    print("Starting data processing...")
    food_data = process_canadian_data(conn, config.data_source.schema_name)

    print("Creating import info entry...")
    import_info_id = str(uuid.uuid4())
    with conn.cursor() as cur:
      cur.execute("""
            INSERT INTO "import_infos" ("id", "source_version", "import_date", "data_source")
            VALUES (%s, %s, CURRENT_TIMESTAMP, 'CANADA')
            """, (import_info_id, config.data_source.source_version))

    populate_language_table(conn)

    logging.info("Importing food data into the database...")
    batch_import_food(conn, food_data, import_info_id)

    logging.info("Preparing food description encodings...")
    modelVersion = "all-MiniLM-L6-v2"
    model = SentenceTransformer(modelVersion)

    logging.info("Creating and storing food embeddings...")
    create_food_embeddings(conn, food_data, model, modelVersion)
    conn.commit()
    print("Import and encoding completed successfully.")

  except Exception as e:
    conn.rollback()
    print("An error occurred:")
    print(f"Error type: {type(e).__name__}")
    print(f"Error message: {str(e)}")
    print("\nFull traceback:")
    traceback.print_exc()

  finally:
    conn.close()


if __name__ == "__main__":
  main()
