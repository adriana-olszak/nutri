export function prismaClientFindManyCountTemplate(name: string): string {
  return `query FindMany${name}Count(
    $where: ${name}WhereInput
    $orderBy: [${name}OrderByWithRelationInput]
    $cursor: ${name}WhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [${name}ScalarFieldEnum]
  ) {
    findMany${name}Count(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }`;
}
