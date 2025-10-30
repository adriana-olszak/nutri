module.exports = {
  nutri: {
    output: {
      mode: 'single',
      target: 'src/gen/endpoints',
      schemas: 'src/gen/models',
      client: 'fetch',
      mock: true,
    },
    input: {
      target: './src/nutri-openapi.yaml',
    },
  },
  nutriZod: {
    output: {
      mode: 'single',
      client: 'zod',
      target: 'src/gen/endpoints',
      fileExtension: '.zod.ts',
    },
    input: {
      target: './src/nutri-openapi.yaml',
    },
  },
};
