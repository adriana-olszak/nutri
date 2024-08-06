import gql from 'graphql-tag'

export default gql`
  type Food {
    id: String!
    sourceId: String!
    description: String!
    scientificName: String
    importInfoId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
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
    searchVectors(
      where: FoodSearchVectorWhereInput
      orderBy: [FoodSearchVectorOrderByWithRelationInput]
      cursor: FoodSearchVectorWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodSearchVectorScalarFieldEnum]
    ): [FoodSearchVector!]!
    importInfo: ImportInfo!
    RecipeIngredient(
      where: RecipeIngredientWhereInput
      orderBy: [RecipeIngredientOrderByWithRelationInput]
      cursor: RecipeIngredientWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RecipeIngredientScalarFieldEnum]
    ): [RecipeIngredient!]!
    _count: FoodCountOutputType!
  }
`
