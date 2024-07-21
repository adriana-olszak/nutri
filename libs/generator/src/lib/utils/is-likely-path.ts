import * as path from 'node:path';
import * as url from 'url';

export function isLikelyPath(key: string, value: string): boolean {
  // // Check if the key ends with 'path' or is a common path-related key
  // const pathRelatedKeys = ['path', 'dir', 'directory', 'folder', 'file', 'schema', 'output', 'document'];
  // if (pathRelatedKeys.some(k => key.toLowerCase().includes(k))) {
  //   return true;
  // }

  // Check if the value is a URL
  try {
    new url.URL(value);
    return false;  // It's a valid URL, not a file path
  } catch {
    // Not a URL, continue checking
  }

  // Check if it's an absolute path (including Windows paths)
  if (path.isAbsolute(value) || /^[a-zA-Z]:\\/.test(value)) {
    return true;
  }

  // Check for common relative path patterns
  if (value === '..' || value.startsWith('./') || value.startsWith('../')) {
    return true;
  }

  // Check if the value contains directory separators, common path patterns, or file extensions
  const pathPatterns = ['src/', 'dist/', 'build/'];
  const fileExtensions = ['.txt', '.js', '.ts', '.json', '.xml', '.html', '.css', '.png', '.jpg', '.gif', '.pdf'];
  if (!value.includes(' ') && pathPatterns.some(pattern => value.includes(pattern)) ||
    fileExtensions.some(ext => value.toLowerCase().endsWith(ext)) ||
    value.includes('/') || value.includes('\\')) {
    return true;
  }

  // // If the string contains spaces and doesn't start with a dot or end with a known file extension, it's likely not a path
  // if (value.includes(' ') && !value.startsWith('.') && !fileExtensions.some(ext => value.toLowerCase().endsWith(ext))) {
  //   return false;
  // }

  return false;
}
