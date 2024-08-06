import gql from 'graphql-tag'

export default gql`
  type RecipeIngredient {
    id: String!
    recipeId: String!
    partId: String
    foodId: String!
    quantity: Float!
    unit: String!
    recipe: Recipe!
    part(where: RecipePartWhereInput): RecipePart
    food: Food!
  }
`
