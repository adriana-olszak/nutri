import gql from 'graphql-tag'

export default gql`
  type RecipePart {
    id: String!
    name: String!
    recipeId: String!
    recipe: Recipe!
    ingredients(
      where: RecipeIngredientWhereInput
      orderBy: [RecipeIngredientOrderByWithRelationInput]
      cursor: RecipeIngredientWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RecipeIngredientScalarFieldEnum]
    ): [RecipeIngredient!]!
    _count: RecipePartCountOutputType!
  }
`
