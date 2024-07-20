import { isLikelyPath } from './is-likely-path'; // Adjust the import path as necessary

describe('isLikelyPath', () => {
  // Test cases for path-related keys
  it('should return true for keys containing path-related words', () => {
    expect(isLikelyPath('filePath', 'some/file.txt')).toBe(true);
    expect(isLikelyPath('directoryPath', '/some/directory')).toBe(true);
    expect(isLikelyPath('outputFolder', 'output/')).toBe(true);
    expect(isLikelyPath('schemaFile', 'schema.json')).toBe(true);
  });

  // Test cases for URLs
  it('should return false for URLs', () => {
    expect(isLikelyPath('url', 'https://example.com/path')).toBe(false);
    expect(isLikelyPath('link', 'http://example.com')).toBe(false);
    expect(isLikelyPath('websiteUrl', 'ftp://ftp.example.com')).toBe(false);
  });

  // Test cases for absolute paths
  it('should return true for absolute paths', () => {
    expect(isLikelyPath('root', '/root/path')).toBe(true);
    expect(isLikelyPath('unixPath', '/var/log/app.log')).toBe(true);
  });

  // Test cases for relative paths
  it('should return true for relative paths', () => {
    expect(isLikelyPath('relative', './relative/path')).toBe(true);
    expect(isLikelyPath('parent', '../parent/path')).toBe(true);
    expect(isLikelyPath('current', 'file.txt')).toBe(true);
  });

  // Test cases for common directory names
  it('should return true for common directory names', () => {
    expect(isLikelyPath('srcDir', 'src/')).toBe(true);
    expect(isLikelyPath('buildOutput', 'dist/')).toBe(true);
    expect(isLikelyPath('publicAssets', 'public/')).toBe(true);
  });

  // Test cases for file extensions
  it('should return true for strings with file extensions', () => {
    expect(isLikelyPath('script', 'app.js')).toBe(true);
    expect(isLikelyPath('stylesheet', 'styles.css')).toBe(true);
    expect(isLikelyPath('document', 'report.pdf')).toBe(true);
  });

  // Test cases for strings that are not paths
  it('should return false for strings that are not paths', () => {
    expect(isLikelyPath('name', 'John Doe')).toBe(false);
    expect(isLikelyPath('description', 'This is a description')).toBe(false);
    expect(isLikelyPath('id', '12345')).toBe(false);
    expect(isLikelyPath('string', 'ola')).toBe(false);
  });

  // Test cases for edge cases
  it('should handle edge cases correctly', () => {
    expect(isLikelyPath('empty', '')).toBe(false);
    expect(isLikelyPath('singleDot', '.')).toBe(false);
    expect(isLikelyPath('doubleDot', '..')).toBe(true);
    expect(isLikelyPath('onlySlash', '/')).toBe(true);
    expect(isLikelyPath('spacesOnly', '   ')).toBe(false);
  });

  // Test cases for strings with spaces
  it('should handle strings with spaces correctly', () => {
    expect(isLikelyPath('spacedDir', './directory with spaces/')).toBe(true);
    expect(isLikelyPath('notAPath', 'just a string')).toBe(false);
  });
});
