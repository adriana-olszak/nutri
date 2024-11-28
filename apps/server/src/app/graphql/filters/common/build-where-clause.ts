import { FilterPropertyMetadata, PropertyType, OPERATORS_BY_TYPE } from './filter-property-metadata';

import { ComparisonOperator } from '@nutri/common-interfaces';

export function buildWhereClause<T extends string>(
  filter: any,
  propertyMetadata: FilterPropertyMetadata<T>,
): any {
  if (!filter) return {};

  const processFilter = (f: any): any => {
    if (f.AND) return { AND: f.AND.map(processFilter) };
    if (f.OR) return { OR: f.OR.map(processFilter) };
    if (f.NOT) return { NOT: processFilter(f.NOT) };
    if (f.filter) {
      const { property, operation, value, caseSensitive, includeEmpty } = f.filter;
      const metadata = propertyMetadata[property];

      if (!OPERATORS_BY_TYPE[metadata.type].has(operation)) {
        throw new Error(`Invalid operator ${operation} for property type ${metadata.type}`);
      }

      const condition: any = {};

      switch (operation) {
        case ComparisonOperator.EQ:
          condition[property] = { equals: parseValue(value, metadata.type) };
          break;
        case ComparisonOperator.CONTAINS:
          condition[property] = { contains: value, ...(caseSensitive !== undefined && { mode: caseSensitive ? 'default' : 'insensitive' }) };
          break;
        case ComparisonOperator.STARTS_WITH:
          condition[property] = { startsWith: value, ...(caseSensitive !== undefined && { mode: caseSensitive ? 'default' : 'insensitive' }) };
          break;
        case ComparisonOperator.LT:
          condition[property] = { lt: parseValue(value, metadata.type) };
          break;
        case ComparisonOperator.LTE:
          condition[property] = { lte: parseValue(value, metadata.type) };
          break;
        case ComparisonOperator.GT:
          condition[property] = { gt: parseValue(value, metadata.type) };
          break;
        case ComparisonOperator.GTE:
          condition[property] = { gte: parseValue(value, metadata.type) };
          break;
        case ComparisonOperator.BETWEEN:
          condition[property] = {
            gte: parseValue(value[0], metadata.type),
            lte: parseValue(value[1], metadata.type),
          };
          break;
        case ComparisonOperator.IN:
          condition[property] = { in: value.map((v: any) => parseValue(v, metadata.type)) };
          break;
        case ComparisonOperator.IS_NONE_OF:
          condition[property] = { notIn: value.map((v: any) => parseValue(v, metadata.type)) };
          break;
        case ComparisonOperator.IS_NULL:
          condition[property] = { equals: null };
          break;
        case ComparisonOperator.IS_EMPTY:
          condition[property] = { equals: '' };
          break;
        case ComparisonOperator.IS_NOT_EMPTY:
          condition[property] = { not: { equals: '' } };
          break;
        case ComparisonOperator.NOT_CONTAINS:
          condition[property] = { not: { contains: value, ...(caseSensitive !== undefined && { mode: caseSensitive ? 'default' : 'insensitive' }) } };
          break;
      }

      if (includeEmpty) {
        return { OR: [condition, { [property]: { equals: null } }, { [property]: { equals: '' } }] };
      }

      return condition;
    }
    return {};
  };

  return processFilter(filter);
}

function parseValue(value: any, type: PropertyType): any {
  switch (type) {
    case PropertyType.Number:
      return Number(value);
    case PropertyType.Boolean:
      return Boolean(value);
    case PropertyType.Date:
      return new Date(value);
    case PropertyType.Enum:
    case PropertyType.String:
    default:
      return value;
  }
}
