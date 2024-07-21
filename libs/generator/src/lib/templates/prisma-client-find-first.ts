export function prismaClientFindFirstTemplate(name: string): string {
  return `query FindFirst${name}(
    $where: ${name}WhereInput
    $orderBy: [${name}OrderByWithRelationInput]
    $cursor: ${name}WhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [${name}ScalarFieldEnum]
  ) {
    findFirst${name}(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...${name}Fields
    }
  }`;
}
