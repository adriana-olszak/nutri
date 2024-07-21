import * as path from 'node:path';
import { isLikelyPath } from './is-likely-path';

export function resolvePaths<T>(obj: T, rootDir: string): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item =>
      typeof item === 'string' && isLikelyPath('', item)
        ? path.resolve(rootDir, item)
        : resolvePaths(item, rootDir)
    ) as any;
  }

  const result: any = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string' && isLikelyPath(key, value)) {
      if (path.isAbsolute(value) || /^[a-zA-Z]:\\/.test(value) || value.startsWith('http://') || value.startsWith('https://')) {
        result[key] = value;  // Keep absolute paths, Windows paths, and URLs as they are
      } else {
        result[key] = path.resolve(rootDir, value);
      }
    } else if (typeof value === 'object' && value !== null) {
      result[key] = resolvePaths(value, rootDir);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}
