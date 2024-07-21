export function prismaClientCreateOneTemplate(name: string): string {
  return `mutation CreateOne${name}($data: ${name}CreateInput!) {
    createOne${name}(data: $data) {
      ...${name}Fields
    }
  }`;
}
