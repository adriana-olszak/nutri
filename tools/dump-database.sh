#!/bin/bash

# Check if a service name argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <dbname> <container_name>"
  exit 1
fi


# Check if a dbname argument is provided
if [ -z "$2" ]; then
  echo "Usage: $0 <dbname> <container_name>"
  exit 1
fi

# The service name is passed as the first argument
dbname="$1"
container_name="$2"

read -p "Enter port value for db: $dbname " port
read -p "Enter username value for db: $dbname " username

chmod -R 700 ./deploy

# Get the current timestamp in the desired format
# Example format: YYYYMMDD-HHMMSS
timestamp=$(date +"%Y%m%d-%H%M%S")

# Concatenate to form the filename
dump_filename="${dbname}_${timestamp}_dump.sql"

# Print the filename (or use it as needed)
echo "The dump will be stored in: $dump_filename"

# Execute pg_dump using the dynamically created filename and other user inputs
pg_dump --file="./deploy/docker-compose/$container_name/$dump_filename" --username="$username" --host="127.0.0.1" --port="$port" --dbname="$dbname"

echo "Removing all dumps except the latest one"
# Remove all files with .sql  except the latest one
ls -t ./deploy/docker-compose/$container_name/*.sql | tail -n +2 | xargs rm --
ls -t ./deploy/docker-compose/$container_name/*.sql.cache | tail -n +2 | xargs rm --

