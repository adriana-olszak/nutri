import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to read file content
function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error.message}`);
    return '';
  }
}

// Function to process a file or directory
function processPath(basePath, relativePath) {
  const fullPath = path.join(basePath, relativePath);
  let content = '';

  if (fs.statSync(fullPath).isDirectory()) {
    // If it's a directory, process all files in it
    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      content += processPath(basePath, path.join(relativePath, file));
    }
  } else {
    // If it's a file, add its content
    content += `// File: ${relativePath}\n`;
    content += readFileContent(fullPath);
    content += '\n\n';
  }

  return content;
}

// Main function
async function main() {
  const baseDir = process.cwd(); // Assumes the script is run from the project root
  const inputFile = 'file_list.txt'; // Name of the file containing the list of paths

  // Read the list of files
  const fileList = fs.readFileSync(inputFile, 'utf8').split('\n').filter(Boolean);

  let combinedContent = '';

  // Process each path
  for (const filePath of fileList) {
    combinedContent += processPath(baseDir, filePath);
  }

  // Dynamically import clipboardy
  const { default: clipboardy } = await import('clipboardy');

  // Copy to clipboard
  await clipboardy.write(combinedContent);

  // Print to terminal
  console.log(combinedContent);

  console.log('Combined content has been copied to clipboard and printed to terminal.');
}

main().catch(console.error);
