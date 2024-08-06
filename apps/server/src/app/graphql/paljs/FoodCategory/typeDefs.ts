import gql from 'graphql-tag'

export default gql`
  type FoodCategory {
    id: String!
    code: String
    description: String
    parentCategoryId: String
    level: Int!
    sourceId: String!
    importInfoId: String!
    foods(
      where: FoodCategoryOnFoodWhereInput
      orderBy: [FoodCategoryOnFoodOrderByWithRelationInput]
      cursor: FoodCategoryOnFoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodCategoryOnFoodScalarFieldEnum]
    ): [FoodCategoryOnFood!]!
    importInfo: ImportInfo!
    parentCategory(where: FoodCategoryWhereInput): FoodCategory
    childCategories(
      where: FoodCategoryWhereInput
      orderBy: [FoodCategoryOrderByWithRelationInput]
      cursor: FoodCategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodCategoryScalarFieldEnum]
    ): [FoodCategory!]!
    _count: FoodCategoryCountOutputType!
  }
`
