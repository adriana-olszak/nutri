export type FileOperation = 'write' | 'delete' | 'modify' | 'create';

export interface FileOperationRecord {
  path: string;
  operation: FileOperation;
}

export class FileOperationTracker {
  private operations: FileOperationRecord[] = [];

  trackOperation(path: string, operation: FileOperation): void {
    this.operations.push({ path, operation });
  }

  getOperations(): FileOperationRecord[] {
    return this.operations;
  }

  process(): this {
    this.operations = this.operations.reduce((acc, curr) => {
      // if operations have the same path, change the operation to modify
      const existingOperation = acc.find(op => op.path === curr.path);
      if (existingOperation) {
        existingOperation.operation = 'modify';
      } else {
        acc.push(curr);
      }
      return acc;
    }, [] as FileOperationRecord[]);
    return this;
  }

  clear(): void {
    this.operations = [];
  }

  getOperationCount(): number {
    return this.operations.length;
  }

  getOperationCountByType(operation: FileOperation): number {
    return this.operations.filter(op => op.operation === operation).length;
  }

  printOperationCounts(): void {
    console.log('Operation Counts:');
    const writeCount = this.getOperationCountByType('write');
    const deleteCount = this.getOperationCountByType('delete');
    const modifyCount = this.getOperationCountByType('modify');
    const createCount = this.getOperationCountByType('create');

    if (writeCount > 0) console.log('Write:', writeCount);
    if (deleteCount > 0) console.log('Delete:', deleteCount);
    if (modifyCount > 0) console.log('Modify:', modifyCount);
    if (createCount > 0) console.log('Create:', createCount);
  }
}
