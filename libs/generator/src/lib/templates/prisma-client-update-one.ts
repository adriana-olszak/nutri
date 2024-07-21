export function prismaClientUpdateOneTemplate(name) {
    return `mutation UpdateOne${name}($data: ${name}UpdateInput!, $where: ${name}WhereUniqueInput!) {
    updateOne${name}(data: $data, where: $where) {
      ...${name}Fields
    }
  }`;
}
