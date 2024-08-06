import gql from 'graphql-tag'

export default gql`
  type Nutrient {
    id: String!
    name: String!
    unitName: String!
    sourceId: String!
    importInfoId: String!
    foodNutrients(
      where: FoodNutrientWhereInput
      orderBy: [FoodNutrientOrderByWithRelationInput]
      cursor: FoodNutrientWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodNutrientScalarFieldEnum]
    ): [FoodNutrient!]!
    importInfo: ImportInfo!
    _count: NutrientCountOutputType!
  }
`
