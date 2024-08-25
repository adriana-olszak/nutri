#!/bin/bash

# Function to create a role if it doesn't exist
create_role_if_not_exists() {
    local role="$1"
    local password="$2"
    echo "Ensuring role exists: $role"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        DO
        \$\$
        BEGIN
            IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '$role') THEN
                CREATE ROLE "$role" WITH LOGIN PASSWORD '$password';
            END IF;
        END
        \$\$;
EOSQL
}

# Create necessary roles
create_role_if_not_exists "postgres" "$POSTGRES_PASSWORD"

# Function to create roles from SQL files
create_role_for_username() {
    local username="$1"
    local database="$2"
    username=$(echo "$username" | sed 's/^"//;s/"$//')

    echo "Creating role for username: $username in database: $database"

    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "$database" <<-EOSQL
        DO
        \$\$
        BEGIN
            IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '$username') THEN
                CREATE ROLE "$username" WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION PASSWORD NULL;
            END IF;
        END
        \$\$;
EOSQL
}

# Process SQL files for each database
for db in "$POSTGRES_DB" "$USDA_DATABASE_NAME"; do
    echo "Processing database: $db"
    for sql_file in /docker-entrypoint-initdb.d/"$db"/*.sql; do
        if [ -f "$sql_file" ]; then
            echo "Processing $sql_file"
            # Extract and create roles
            grep -oP "GRANT USAGE ON SCHEMA public TO \K[^;]+" "$sql_file" | while read -r username; do
                create_role_for_username "$username" "$db"
            done
            # Execute the SQL file
            psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "$db" -f "$sql_file"
        fi
    done
done

echo "Initialization complete."
