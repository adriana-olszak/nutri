from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
import uuid
from datetime import datetime

def get_db_session(connection_string):
    engine = create_engine(connection_string)
    Session = sessionmaker(bind=engine)
    return Session()

def import_food(session, food_item, import_info_id):
    # Insert food category
    category_id = insert_food_category(session, food_item['category'], import_info_id)

    # Insert food
    food_id = insert_food(session, food_item, category_id, import_info_id)

    # Populate Nutrient table first
    populate_nutrient_table(session, food_item['nutrients'])

    # Then insert nutrients
    insert_nutrients(session, food_item['nutrients'], food_id, import_info_id)

    # Insert portions
    insert_portions(session, food_item['conversionFactors'], food_id, import_info_id)

    # Insert translation
    insert_translation(session, food_id, food_item['description'])

    # Populate search vector
    populate_food_search_vector(session, food_id, food_item['description'], food_item['category']['name'])

def insert_food_category(session, category, import_info_id):
    current_time = datetime.utcnow()
    stmt = text("""
    INSERT INTO "FoodCategory" (id, description, "level", "importInfoId", "sourceId", "updatedAt", "createdAt")
    VALUES (:id, :description, :level, :import_info_id, :source_id, :updated_at, :created_at)
    ON CONFLICT ("sourceId") DO UPDATE SET description = :description, "updatedAt" = :updated_at
    RETURNING id
    """)
    result = session.execute(stmt, {
        'id': str(uuid.uuid4()),
        'description': category['name'],
        'level': 1,
        'import_info_id': import_info_id,
        'source_id': str(category['sourceId']),
        'updated_at': current_time,
        'created_at': current_time
    })
    return result.scalar_one()

def insert_food(session, food_item, category_id, import_info_id):
    current_time = datetime.utcnow()
    stmt = text("""
    INSERT INTO "Food" (id, description, "sourceId", "scientificName", "importInfoId", "updatedAt", "createdAt")
    VALUES (:id, :description, :source_id, :scientific_name, :import_info_id, :updated_at, :created_at)
    ON CONFLICT ("sourceId") DO UPDATE SET
        description = :description,
        "scientificName" = :scientific_name,
        "importInfoId" = :import_info_id,
        "updatedAt" = :updated_at
    RETURNING id
    """)
    result = session.execute(stmt, {
        'id': food_item['id'],
        'description': food_item['description'],
        'source_id': str(food_item['sourceId']),
        'scientific_name': food_item['scientificName'],
        'import_info_id': import_info_id,
        'updated_at': current_time,
        'created_at': current_time
    })
    food_id = result.scalar_one()

    # Insert food category relationship
    stmt = text("""
    INSERT INTO "FoodCategoryOnFood" ("foodId", "categoryId", "isPrimaryCategory", "updatedAt", "createdAt")
    VALUES (:food_id, :category_id, :is_primary, :updated_at, :created_at)
    ON CONFLICT ("foodId", "categoryId") DO UPDATE SET
        "isPrimaryCategory" = :is_primary,
        "updatedAt" = :updated_at
    """)
    session.execute(stmt, {
        'food_id': food_id,
        'category_id': category_id,
        'is_primary': True,
        'updated_at': current_time,
        'created_at': current_time
    })

    return food_id

def populate_nutrient_table(session, nutrients):
    current_time = datetime.utcnow()
    nutrient_ids = {}  # To store the mapping of sourceId to new UUID
    for nutrient in nutrients:
        stmt = text("""
        INSERT INTO "Nutrient" (id, name, "unitName", "sourceId", "updatedAt", "createdAt")
        VALUES (:id, :name, :unit_name, :source_id, :updated_at, :created_at)
        ON CONFLICT ("sourceId") DO UPDATE SET
            name = EXCLUDED.name,
            "unitName" = EXCLUDED."unitName",
            "updatedAt" = EXCLUDED."updatedAt"
        RETURNING id
        """)
        result = session.execute(stmt, {
            'id': nutrient['id'],
            'name': nutrient['name'],
            'unit_name': nutrient['unit'],
            'source_id': str(nutrient['sourceId']),
            'updated_at': current_time,
            'created_at': current_time
        })
        nutrient_ids[str(nutrient['sourceId'])] = result.scalar_one()
    return nutrient_ids

def insert_nutrients(session, nutrients, food_id, import_info_id):
    current_time = datetime.utcnow()
    nutrient_ids = populate_nutrient_table(session, nutrients)
    for nutrient in nutrients:
        if nutrient['value']:
            stmt = text("""
            INSERT INTO "FoodNutrient" (
                "foodId", "nutrientId", amount,
                "sourceId", "importInfoId", "updatedAt", "createdAt"
            )
            VALUES (
                 :food_id, :nutrient_id, :amount,
                :source_id, :import_info_id, :updated_at, :created_at
            )
            ON CONFLICT ("foodId", "nutrientId") DO UPDATE SET
                amount = :amount,
                "updatedAt" = :updated_at
            """)
            session.execute(stmt, {
                'food_id': food_id,
                'nutrient_id': nutrient_ids[str(nutrient['sourceId'])],
                'amount': nutrient['value'],
                'source_id': str(nutrient['sourceId']),
                'import_info_id': import_info_id,
                'updated_at': current_time,
                'created_at': current_time
            })

def populate_measure_unit_table(session, portions, import_info_id):
    current_time = datetime.utcnow()
    measure_unit_ids = {}
    for portion in portions:
        stmt = text("""
        INSERT INTO "MeasureUnit" (name, "importInfoId", "createdAt", "updatedAt")
        VALUES (:name, :import_info_id, :created_at, :updated_at)
        ON CONFLICT ("name") DO UPDATE SET
            name = EXCLUDED.name,
            "importInfoId" = EXCLUDED."importInfoId",
            "updatedAt" = EXCLUDED."updatedAt"
        RETURNING name
        """)
        result = session.execute(stmt, {
            'name': portion['measureDescription'],
            'import_info_id': import_info_id,
            'created_at': current_time,
            'updated_at': current_time,
        })
        measure_unit_ids[str(portion['measureDescription'])] = result.scalar_one()
    return measure_unit_ids

def insert_portions(session, portions, food_id, import_info_id):
    current_time = datetime.utcnow()
    measure_unit_ids = populate_measure_unit_table(session, portions, import_info_id)
    for portion in portions:
        stmt = text("""
        INSERT INTO "FoodPortion" (
            id, amount, "gramWeight", "measureUnitName", "foodId", "sourceId",
            "importInfoId", "updatedAt", "createdAt"
        )
        VALUES (
            :id, :amount, :gram_weight, :measure_unit_name, :food_id, :source_id,
            :import_info_id, :updated_at, :created_at
        )
        ON CONFLICT ("foodId", "measureUnitName") DO UPDATE SET
            amount = :amount,
            "gramWeight" = :gram_weight,
            "measureUnitName" = :measure_unit_name,
            "updatedAt" = :updated_at
        """)
        session.execute(stmt, {
            'id': portion['id'],
            'amount': portion['value'],
            'gram_weight': portion['value'] * 100,
            'measure_unit_name': measure_unit_ids[str(portion['measureDescription'])],
            'food_id': food_id,
            'source_id': str(portion['measureId']),
            'import_info_id': import_info_id,
            'updated_at': current_time,
            'created_at': current_time
        })

def populate_language_table(session, import_info_id):
    current_time = datetime.utcnow()
    language_ids = {}
    languages = [
        {"code": "en", "name": "English"},
    ]

    for lang in languages:
        stmt = text("""
        INSERT INTO "Language" (code, name,  "updatedAt", "createdAt")
        VALUES ( :code, :name, :updated_at, :created_at)
        ON CONFLICT (code) DO UPDATE SET
            name = EXCLUDED.name,
            "updatedAt" = EXCLUDED."updatedAt"
        RETURNING code
        """)
        result = session.execute(stmt, {
            'code': lang['code'],
            'name': lang['name'],
            'updated_at': current_time,
            'created_at': current_time
        })
        language_ids[lang['code']] = result.scalar_one()

    return language_ids

def insert_translation(session, food_id, description):
    current_time = datetime.utcnow()
    stmt = text("""
    INSERT INTO "Translation" (id, "languageCode", "entityType", "entityId", field, value, "updatedAt", "createdAt")
    VALUES (:id, 'en', 'Food', :entity_id, 'description', :value, :updated_at, :created_at)
    ON CONFLICT ("entityType", "entityId", "languageCode", field) DO UPDATE SET
        value = :value,
        "updatedAt" = :updated_at
    """)
    session.execute(stmt, {
        'id': str(uuid.uuid4()),
        'entity_id': food_id,
        'value': description,
        'updated_at': current_time,
        'created_at': current_time
    })

def populate_food_search_vector(session, food_id, description, category_description):
    current_time = datetime.utcnow()
    stmt = text("""
    INSERT INTO "FoodSearchVector" (id, "foodId", "languageCode", "searchVector", "updatedAt", "createdAt")
    VALUES (:id, :food_id, 'en', to_tsvector(:description), :updated_at, :created_at)
    ON CONFLICT ("foodId", "languageCode") DO UPDATE SET
        "searchVector" = to_tsvector(:description),
        "updatedAt" = :updated_at
    """)
    session.execute(stmt, {
        'id': str(uuid.uuid4()),
        'food_id': food_id,
        'description': f"{description} {category_description}",
        'updated_at': current_time,
        'created_at': current_time
    })
