import {
  IsString,
  IsArray,
  ValidateNested,
  validateSync
} from 'class-validator';
import { Type } from 'class-transformer';
import { ListNode } from './common.validator';


export class StepRoot {
  @IsString()
  type!: 'root';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ListNode)
  children!: ListNode[];
}

export function validateSteps(data: any): StepRoot {
  const stepRoot = new StepRoot();
  Object.assign(stepRoot, data);

  const errors = validateSync(stepRoot, { forbidUnknownValues: true, whitelist: true });
  if (errors.length > 0) {
    errors.map(e => console.error(e));
    throw new Error('Invalid steps data');
  }

  return stepRoot;
}
