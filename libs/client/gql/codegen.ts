import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/lib/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'src/lib/graphql-types.ts': {
      plugins: ['typescript']
    },
    'src/lib/graphql.schema.json': {
      plugins: ['introspection']
    },
    'src/lib/graphql-operations.gen.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        // rawRequest: true,
        inlineFragmentTypes: 'combine'
      }
    }
  }
};

export default config;
