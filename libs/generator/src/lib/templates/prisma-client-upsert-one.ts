export function prismaClientUpsertOneTemplate(name) {
  return `mutation UpsertOne${name}(
    $where: ${name}WhereUniqueInput!
    $create: ${name}CreateInput!
    $update: ${name}UpdateInput!
  ) {
    upsertOne${name}(where: $where, create: $create, update: $update) {
      ...${name}Fields
    }
  }`;
}
