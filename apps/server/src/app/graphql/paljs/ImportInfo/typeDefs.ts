import gql from 'graphql-tag'

export default gql`
  type ImportInfo {
    id: String!
    sourceVersion: String!
    importDate: DateTime!
    dataSource: FoodDataSource!
    foods(
      where: FoodWhereInput
      orderBy: [FoodOrderByWithRelationInput]
      cursor: FoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodScalarFieldEnum]
    ): [Food!]!
    foodCategories(
      where: FoodCategoryWhereInput
      orderBy: [FoodCategoryOrderByWithRelationInput]
      cursor: FoodCategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodCategoryScalarFieldEnum]
    ): [FoodCategory!]!
    brandedFoods(
      where: BrandedFoodWhereInput
      orderBy: [BrandedFoodOrderByWithRelationInput]
      cursor: BrandedFoodWhereUniqueInput
      take: Int
      skip: Int
      distinct: [BrandedFoodScalarFieldEnum]
    ): [BrandedFood!]!
    nutrients(
      where: NutrientWhereInput
      orderBy: [NutrientOrderByWithRelationInput]
      cursor: NutrientWhereUniqueInput
      take: Int
      skip: Int
      distinct: [NutrientScalarFieldEnum]
    ): [Nutrient!]!
    foodNutrients(
      where: FoodNutrientWhereInput
      orderBy: [FoodNutrientOrderByWithRelationInput]
      cursor: FoodNutrientWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodNutrientScalarFieldEnum]
    ): [FoodNutrient!]!
    foodPortions(
      where: FoodPortionWhereInput
      orderBy: [FoodPortionOrderByWithRelationInput]
      cursor: FoodPortionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodPortionScalarFieldEnum]
    ): [FoodPortion!]!
    measureUnits(
      where: MeasureUnitWhereInput
      orderBy: [MeasureUnitOrderByWithRelationInput]
      cursor: MeasureUnitWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MeasureUnitScalarFieldEnum]
    ): [MeasureUnit!]!
    _count: ImportInfoCountOutputType!
  }
`
