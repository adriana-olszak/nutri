import { GraphQLScalarType, Kind } from 'graphql';

export const JSONScalar = new GraphQLScalarType({
  name: 'JSON',
  description: 'JSON serialize',
  parseValue(value: unknown) {
    if (typeof value !== 'string') {
      throw new Error('Cannot parse non string value to JSON');
    }

    return JSON.parse(value);
  },
  serialize(value: any) {
    return JSON.stringify(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return JSON.parse(ast.value);
    }
    return null;
  },
});
