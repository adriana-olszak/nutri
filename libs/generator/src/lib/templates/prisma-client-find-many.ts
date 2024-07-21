export function prismaClientFindManyTemplate(name: string): string {
  return `query FindMany${name}(
    $where: ${name}WhereInput
    $orderBy: [${name}OrderByWithRelationInput]
    $cursor: ${name}WhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [${name}ScalarFieldEnum]
  ) {
    findMany${name}(
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
