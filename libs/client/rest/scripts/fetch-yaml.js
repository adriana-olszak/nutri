const fs = require('fs');
const path = require('path');

async function fetchYaml() {
  try {
    console.log('Fetching OpenAPI YAML from local endpoint...');
    const response = await fetch('http://localhost:4100/api-yaml');

    if (!response.ok) {
      throw new Error(`Failed to fetch YAML: ${response.statusText}`);
    }

    const yaml = await response.text();
    const outputPath = path.resolve(__dirname, '../src/nutri-openapi.yaml');

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, yaml);
    console.log(`YAML file successfully saved to: ${outputPath}`);

    // Successful exit
    process.exit(0);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.error(
        'Could not connect to the API server. Make sure it is running at http://localhost:4100',
      );
    } else {
      console.error('Error fetching YAML:', error);
    }
    process.exit(1);
  }
}

fetchYaml();
