export function prismaClientFindUniqueTemplate(name: string): string {
  return `query FindUnique${name}($where: ${name}WhereUniqueInput!) {
    findUnique${name}(where: $where) {
      ...${name}Fields
    }
  }`;
}
