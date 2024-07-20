import { resolvePaths } from './resolve-paths';
import * as path from 'path';

describe('resolvePaths', () => {
  const rootDir = '/root';

  it('should resolve paths in nested objects', () => {
    const input = {
      topLevelPath: 'folder/file.txt',
      nested: {
        nestedPath: 'nested/file.txt',
        deeplyNested: {
          veryDeepPath: 'very/deep/file.txt'
        }
      },
      arrayOfPaths: ['path1.txt', 'path2.txt'],
      mixedArray: ['notAPath', { objectPath: 'object/path.txt' }]
    };

    const expected = {
      topLevelPath: path.resolve(rootDir, 'folder/file.txt'),
      nested: {
        nestedPath: path.resolve(rootDir, 'nested/file.txt'),
        deeplyNested: {
          veryDeepPath: path.resolve(rootDir, 'very/deep/file.txt')
        }
      },
      arrayOfPaths: [
        path.resolve(rootDir, 'path1.txt'),
        path.resolve(rootDir, 'path2.txt')
      ],
      mixedArray: [
        'notAPath',
        { objectPath: path.resolve(rootDir, 'object/path.txt') }
      ]
    };

    expect(resolvePaths(input, rootDir)).toEqual(expected);
  });

  it('should handle various path-like strings', () => {
    const input = {
      absolutePath: '/absolute/path.txt',
      relativePath: './relative/path.txt',
      parentPath: '../parent/path.txt',
      windowsPath: 'C:\\Windows\\path.txt',
      urlLikePath: 'https://example.com/path',
      httpUrl: 'http://example.com/path',
      notAPath: 'just a string',
      simpleFileName: 'file.txt'
    };

    const expected = {
      absolutePath: '/absolute/path.txt',
      relativePath: path.resolve(rootDir, './relative/path.txt'),
      parentPath: path.resolve(rootDir, '../parent/path.txt'),
      windowsPath: 'C:\\Windows\\path.txt', // This should remain unchanged on non-Windows systems
      urlLikePath: 'https://example.com/path', // URLs should not be treated as file paths
      httpUrl: 'http://example.com/path', // URLs should not be treated as file paths
      notAPath: 'just a string',
      simpleFileName: path.resolve(rootDir, 'file.txt')
    };

    expect(resolvePaths(input, rootDir)).toEqual(expected);
  });

  it('should handle arrays of paths', () => {
    const input = {
      arrayOfPaths: ['path1.txt', './path2.txt', '/absolute/path3.txt'],
      nestedArrays: [['nested/path1.txt'], { objectPath: 'object/path.txt' }]
    };

    const expected = {
      arrayOfPaths: [
        path.resolve(rootDir, 'path1.txt'),
        path.resolve(rootDir, './path2.txt'),
        '/absolute/path3.txt'
      ],
      nestedArrays: [
        [path.resolve(rootDir, 'nested/path1.txt')],
        { objectPath: path.resolve(rootDir, 'object/path.txt') }
      ]
    };

    expect(resolvePaths(input, rootDir)).toEqual(expected);
  });
});
