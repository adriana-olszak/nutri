import gql from 'graphql-tag'

export default gql`
  type MeasureUnit {
    name: String!
    importInfoId: String!
    FoodPortion(
      where: FoodPortionWhereInput
      orderBy: [FoodPortionOrderByWithRelationInput]
      cursor: FoodPortionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodPortionScalarFieldEnum]
    ): [FoodPortion!]!
    importInfo: ImportInfo!
    _count: MeasureUnitCountOutputType!
  }
`
