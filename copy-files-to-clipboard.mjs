import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to read file content with line limit
function readFileContent(filePath, maxLines = Infinity) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    return lines.slice(0, maxLines).join('\n');
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error.message}`);
    return '';
  }
}

// Function to process a file or directory
function processPath(basePath, relativePath, maxLines) {
  const fullPath = path.join(basePath, relativePath);
  let content = '';

  if (fs.statSync(fullPath).isDirectory()) {
    // If it's a directory, process all files in it
    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      content += processPath(basePath, path.join(relativePath, file), maxLines);
    }
  } else {
    // If it's a file, add its content
    content += `// File: ${relativePath}\n`;
    content += readFileContent(fullPath, maxLines);
    content += '\n\n';
  }

  return content;
}

// Main function
async function main() {
  const baseDir = process.cwd(); // Assumes the script is run from the project root
  const inputFile = 'file_list.txt'; // Name of the file containing the list of paths
  const maxLines = process.env.MAX_LINES ? parseInt(process.env.MAX_LINES, 10) : Infinity;

  // Read the list of files
  const fileList = fs.readFileSync(inputFile, 'utf8').split('\n').filter(Boolean);

  let combinedContent = '';

  // Process each path
  for (const filePath of fileList) {
    combinedContent += processPath(baseDir, filePath, maxLines);
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
