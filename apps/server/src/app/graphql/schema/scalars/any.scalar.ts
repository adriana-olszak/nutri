import { GraphQLScalarType } from 'graphql';
import { Kind, ObjectValueNode } from 'graphql/language';

function toObject(ast: ObjectValueNode) {
  const result: Record<string, unknown> = {};

  for (const field of ast.fields) {
    if (field.value.kind === Kind.OBJECT) {
      result[field.name.value] = toObject(field.value as any);
      continue;
    }

    if (field.value.kind === Kind.INT || field.value.kind === Kind.FLOAT) {
      result[field.name.value] = +field.value.value;
      continue;
    }

    result[field.name.value] = (field.value as any)?.value || null;
  }

  return result;
}

export const AnyScalar = new GraphQLScalarType({
  name: 'Any',
  description: 'Any type',
  parseValue: (value) => {
    return value;
  },
  serialize: (value) => {
    return value;
  },
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.INT:
      case Kind.FLOAT:
        return +ast.value;
      case Kind.STRING:
        return JSON.parse(ast.value);
      case Kind.OBJECT:
        return toObject(ast);
      default:
        return (ast as any).value || null;
    }
  },
});
