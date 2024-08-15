#!/bin/bash

# Function to process a single file
process_file() {
    local file=$1

    # Check if the file needs processing
    if head -n 1 "$file" | grep -q '^{"BrandedFoods": \[' || head -n 1 "$file" | grep -q '^{"FoundationFoods": \['; then
        echo "Processing $file..."

        # Remove the opening phrase from the first line in-place
        sed -i.bak '1s/^{"BrandedFoods": //; 1s/^{"FoundationFoods": //' "$file" && rm "${file}.bak"

        # Remove the closing brace from the last line if it exists
        if tail -n 1 "$file" | grep -q '}$'; then
            sed -i.bak '$ s/}$//' "$file" && rm "${file}.bak"
        fi

        echo "Processed $file"
    else
        echo "Skipping $file (already processed or doesn't need processing)"
    fi
}

# Main script
if [ $# -eq 0 ]; then
    echo "Usage: $0 <json_file1> [<json_file2> ...]"
    exit 1
fi

# Process each file provided as an argument
for file in "$@"; do
    if [ -f "$file" ]; then
        process_file "$file"
    else
        echo "File not found: $file"
    fi
done

echo "All files processed."
