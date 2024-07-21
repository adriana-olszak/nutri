export function prismaClientDeleteManyTemplate(name) {
  return `mutation DeleteMany${name}($where: ${name}WhereInput!) {
    deleteMany${name}(where: $where) {
      count
    }
  }`;
}
