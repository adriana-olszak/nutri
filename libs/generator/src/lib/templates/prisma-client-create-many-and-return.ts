export function prismaClientCreateManyAndReturnTemplate(name) {
  return ` mutation CreateMany${name}AndReturn($data: [${name}CreateManyInput!]!) {
    createMany${name}AndReturn(data: $data) {
      ...${name}Fields
    }
  }`;
}
