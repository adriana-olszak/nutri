import os
import time
import psycopg2
from csvkit.utilities.csvsql import CSVSQL

DB_HOST = os.environ.get('POSTGRES_HOST', 'postgres-nutri')
DB_NAME = os.environ.get('POSTGRES_DB', 'your_db_name')
DB_USER = os.environ.get('POSTGRES_USER', 'your_username')
DB_PASS = os.environ.get('POSTGRES_PASSWORD', 'your_password')
CSV_DIR = '/csv'

def wait_for_postgres():
    while True:
        try:
            conn = psycopg2.connect(
                host=DB_HOST,
                database=DB_NAME,
                user=DB_USER,
                password=DB_PASS
            )
            conn.close()
            print("PostgreSQL is ready")
            break
        except psycopg2.OperationalError:
            print("Waiting for PostgreSQL...")
            time.sleep(1)

def import_csv_files():
    for filename in os.listdir(CSV_DIR):
        if filename.endswith('.csv'):
            file_path = os.path.join(CSV_DIR, filename)
            table_name = os.path.splitext(filename)[0]

            args = [
                '--db', f'postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}/{DB_NAME}',
                '--insert',
                '--tables', table_name,
                file_path
            ]

            csvsql = CSVSQL(args)
            csvsql.main()
            print(f"Imported {filename} into table {table_name}")

if __name__ == "__main__":
    wait_for_postgres()
    import_csv_files()
    print("All CSV files have been imported")
