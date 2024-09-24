import os
import time
import psycopg2
from csvkit.utilities.csvsql import CSVSQL
import pandas as pd
import tempfile
import yaml
import re
import chardet

DB_HOST = os.environ.get("POSTGRES_HOST", "postgres-nutri")
DB_USER = os.environ.get("POSTGRES_USER", "nutri")
DB_NAME = os.environ.get("POSTGRES_DB", "nutri")
DB_PASS = os.environ.get("POSTGRES_PASSWORD", "nutri")
DATA_BASE_DIR = "/data"
CONFIG_FILE = "/config/import_config.yml"


def load_config():
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, "r") as file:
            return yaml.safe_load(file)
    return {}


config = load_config()


def wait_for_postgres(db_name):
    while True:
        try:
            conn = psycopg2.connect(
                host=DB_HOST, database=db_name, user=DB_USER, password=DB_PASS
            )
            conn.close()
            print(f"PostgreSQL is ready for database: {db_name}")
            break
        except psycopg2.OperationalError:
            print(f"Waiting for PostgreSQL database: {db_name}...")
            time.sleep(1)


def create_schema_if_not_exists(schema_name):
    try:
        conn = psycopg2.connect(
            host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASS
        )
        conn.autocommit = True
        cursor = conn.cursor()

        cursor.execute(f'CREATE SCHEMA IF NOT EXISTS "{schema_name}"')
        print(f"Created schema: {schema_name}")

        cursor.close()
        conn.close()
    except Exception as e:
        print(f"Error creating schame {schema_name}: {e}")


def detect_encoding(file_path):
    with open(file_path, "rb") as file:
        raw_data = file.read()
    result = chardet.detect(raw_data)
    return result["encoding"]


def import_csv_file(schema_name, file_path, table_name):
    encoding = detect_encoding(file_path)
    args = [
        "--db",
        f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}/{DB_NAME}",
        "--insert",
        "--db-schema",
        schema_name,
        "--tables",
        table_name,
        "-e",
        encoding,  # Specify the detected encoding
        file_path,
    ]

    csvsql = CSVSQL(args)
    csvsql.main()
    print(
        f"Imported {file_path} into table {table_name} in database {DB_NAME} schema {schema_name}"
    )


def excel_to_csv(excel_file_path, sheet_name):
    df = pd.read_excel(excel_file_path, sheet_name=sheet_name)
    with tempfile.NamedTemporaryFile(
        mode="w+", suffix=".csv", delete=False
    ) as temp_file:
        df.to_csv(temp_file.name, index=False)
        return temp_file.name


def normalize_name(name):
    # Remove any non-alphanumeric characters (except underscores)
    name = re.sub(r"[^\w\s]", "", name)
    # Replace spaces with underscores
    name = name.replace(" ", "_")
    # Remove leading digits and dots
    name = re.sub(r"^[\d.]+", "", name)
    # Remove leading underscores
    name = name.lstrip("_")
    # Convert to lowercase
    name = name.lower()
    # Ensure the name starts with a letter
    if not name[0].isalpha():
        name = "table_" + name
    return name


def import_files(schema_name, dir_path):
    dir_config = config.get(dir_path, {})
    skip_sheets = dir_config.get("skip_sheets", [])

    for filename in os.listdir(dir_path):
        file_path = os.path.join(dir_path, filename)

        if filename.endswith(".csv"):
            table_name = normalize_name(os.path.splitext(filename)[0])
            import_csv_file(schema_name, file_path, table_name)

        elif filename.endswith((".xlsx", ".xls")):
            excel_file = pd.ExcelFile(file_path)
            for sheet_name in excel_file.sheet_names:
                if sheet_name in skip_sheets:
                    print(
                        f"Skipping sheet {sheet_name} in {filename} as per configuration"
                    )
                    continue
                csv_file_path = excel_to_csv(file_path, sheet_name)
                normalized_sheet_name = normalize_name(sheet_name)
                table_name = f"{normalize_name(os.path.splitext(filename)[0])}_{normalized_sheet_name}"
                import_csv_file(schema_name, csv_file_path, table_name)
                os.unlink(csv_file_path)  # Remove temporary CSV file


def main():
    subdirs = [
        d
        for d in os.listdir(DATA_BASE_DIR)
        if os.path.isdir(os.path.join(DATA_BASE_DIR, d))
    ]

    wait_for_postgres("postgres")

    for subdir in subdirs:
        schema_name = subdir
        dir_path = os.path.join(DATA_BASE_DIR, subdir)
        create_schema_if_not_exists(schema_name)
        import_files(schema_name, dir_path)

    print("All files have been imported to their respective databases")


if __name__ == "__main__":
    main()
