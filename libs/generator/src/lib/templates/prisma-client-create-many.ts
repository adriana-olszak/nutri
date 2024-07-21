export function prismaClientCreateManyTemplate(name) {
    return `mutation CreateMany${name}($data: [${name}CreateManyInput!]!) {
    createMany${name}(data: $data) {
      count
    }
  }`;
}
