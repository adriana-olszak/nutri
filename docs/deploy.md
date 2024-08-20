## CSV Import to PostgreSQL

This project includes an automated system for importing CSV files into a PostgreSQL database using csvkit. The import process is containerized to ensure consistency across different environments.

### Setup

The import system consists of two main components:

1. A PostgreSQL container
2. A custom csvkit container for handling the import process

#### Directory Structure

Ensure your project structure looks like this:

```
project_root/
│
├── docker-compose.yml
├── Dockerfile.csvkit
└── deploy/
    └── docker-compose/
        └── postgres-nutri-usda/
          └── import_script.py
          └── Dockerfile.csvkit
          └── csv/
            ├── file1.csv
            ├── file2.csv
            └── ...
```

### How It Works

1. The PostgreSQL container is started first.
2. Once PostgreSQL is healthy, the csvkit container starts.
3. The csvkit container waits for the PostgreSQL service to be fully available.
4. It then reads all CSV files from the mounted `/csv` directory.
5. Each CSV file is imported into a separate table in the PostgreSQL database.
6. Table names are derived from the CSV filenames (without the .csv extension).

### Usage

1. Place your CSV files in the `deploy/docker-compose/postgres-nutri-usda/csv/` directory.
2. Ensure your environment variables are set correctly in your `.env` file or environment:
  - `USDA_DATABASE_PASSWORD`
  - `USDA_DATABASE_USER`
  - `USDA_DATABASE_NAME`
  - `USDA_DATABASE_PORT`
3. Run the following command to start the import process:

   ```bash
   docker-compose up --build
   ```

4. Wait for the process to complete. You should see log messages indicating the import progress.

### Customization

- To modify the import process, edit the `import_script.py` file.
- To change the Python or PostgreSQL client versions, edit the `Dockerfile.csvkit` file.
- To adjust volume mappings or container dependencies, modify the `docker-compose.yml` file.

### Troubleshooting

If you encounter any issues:

1. Check that your CSV files are correctly formatted and located in the right directory.
2. Ensure that your PostgreSQL container is running and healthy before the import starts.
3. Review the logs of both containers for any error messages:
   ```bash
   docker-compose logs postgres-nutri-usda
   docker-compose logs csvkit-importer
   ```
