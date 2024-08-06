import gql from 'graphql-tag'

export default gql`
  type Food {
    id: String!
    sourceId: String!
    scientificName: String
    dataSource: FoodDataSource!
    importInfoId: String!
    nutrients(
      where: FoodNutrientWhereInput
      orderBy: [FoodNutrientOrderByWithRelationInput]
      cursor: FoodNutrientWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodNutrientScalarFieldEnum]
    ): [FoodNutrient!]!
    portions(
      where: FoodPortionWhereInput
      orderBy: [FoodPortionOrderByWithRelationInput]
      cursor: FoodPortionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodPortionScalarFieldEnum]
    ): [FoodPortion!]!
    brandedFood(where: BrandedFoodWhereInput): BrandedFood
    categories(
      where: FoodCategoryOnFoodWhereInput
      orderBy: [FoodCategoryOnFoodOrderByWithRelationInput]
      cursor: FoodCategoryOnFoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodCategoryOnFoodScalarFieldEnum]
    ): [FoodCategoryOnFood!]!
    ingredients(
      where: InputFoodWhereInput
      orderBy: [InputFoodOrderByWithRelationInput]
      cursor: InputFoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [InputFoodScalarFieldEnum]
    ): [InputFood!]!
    usedAsIngredientIn(
      where: InputFoodWhereInput
      orderBy: [InputFoodOrderByWithRelationInput]
      cursor: InputFoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [InputFoodScalarFieldEnum]
    ): [InputFood!]!
    searchVectors(
      where: FoodSearchVectorWhereInput
      orderBy: [FoodSearchVectorOrderByWithRelationInput]
      cursor: FoodSearchVectorWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodSearchVectorScalarFieldEnum]
    ): [FoodSearchVector!]!
    importInfo: ImportInfo!
    _count: FoodCountOutputType!
  }

  type Query {
    findUniqueFood(where: FoodWhereUniqueInput!): Food
    findFirstFood(
      where: FoodWhereInput
      orderBy: [FoodOrderByWithRelationInput]
      cursor: FoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodScalarFieldEnum]
    ): Food
    findManyFood(
      where: FoodWhereInput
      orderBy: [FoodOrderByWithRelationInput]
      cursor: FoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodScalarFieldEnum]
    ): [Food!]!
    findManyFoodCount(
      where: FoodWhereInput
      orderBy: [FoodOrderByWithRelationInput]
      cursor: FoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodScalarFieldEnum]
    ): Int!
    aggregateFood(
      where: FoodWhereInput
      orderBy: [FoodOrderByWithRelationInput]
      cursor: FoodWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateFood
  }

  type Mutation {
    createOneFood(data: FoodCreateInput!): Food!
    updateOneFood(data: FoodUpdateInput!, where: FoodWhereUniqueInput!): Food!
    deleteOneFood(where: FoodWhereUniqueInput!): Food
    upsertOneFood(
      where: FoodWhereUniqueInput!
      create: FoodCreateInput!
      update: FoodUpdateInput!
    ): Food
    deleteManyFood(where: FoodWhereInput): BatchPayload
    updateManyFood(
      data: FoodUpdateManyMutationInput!
      where: FoodWhereInput
    ): BatchPayload
  }
`
