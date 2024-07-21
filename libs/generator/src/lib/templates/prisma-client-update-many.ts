export function prismaClientUpdateManyTemplate(name: string): string {
  return `mutation UpdateMany${name}($data: ${name}UpdateManyMutationInput!, $where: ${name}WhereInput!) {
    updateMany${name}(data: $data, where: $where) {
      count
    }
  }`;
}
