export function prismaClientDeleteOneTemplate(name) {
  return `mutation DeleteOne${name}($where: ${name}WhereUniqueInput!) {
    deleteOne${name}(where: $where) {
      id
    }
  }`;
}
