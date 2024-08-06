import gql from 'graphql-tag'

export default gql`
  type Recipe {
    id: String!
    title: String!
    sourceId: String
    sourceUrl: String
    description: String
    cookingTime: String
    prepTime: String
    instructions: String
    servingsText: String
    servingsMin: Int
    servingsMax: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    parts(
      where: RecipePartWhereInput
      orderBy: [RecipePartOrderByWithRelationInput]
      cursor: RecipePartWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RecipePartScalarFieldEnum]
    ): [RecipePart!]!
    ingredients(
      where: RecipeIngredientWhereInput
      orderBy: [RecipeIngredientOrderByWithRelationInput]
      cursor: RecipeIngredientWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RecipeIngredientScalarFieldEnum]
    ): [RecipeIngredient!]!
    categories(
      where: RecipeCategoryWhereInput
      orderBy: [RecipeCategoryOrderByWithRelationInput]
      cursor: RecipeCategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RecipeCategoryScalarFieldEnum]
    ): [RecipeCategory!]!
    images(
      where: RecipeImageWhereInput
      orderBy: [RecipeImageOrderByWithRelationInput]
      cursor: RecipeImageWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RecipeImageScalarFieldEnum]
    ): [RecipeImage!]!
    seasons(
      where: SeasonWhereInput
      orderBy: [SeasonOrderByWithRelationInput]
      cursor: SeasonWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SeasonScalarFieldEnum]
    ): [Season!]!
    tags(
      where: TagWhereInput
      orderBy: [TagOrderByWithRelationInput]
      cursor: TagWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TagScalarFieldEnum]
    ): [Tag!]!
    _count: RecipeCountOutputType!
  }
`
