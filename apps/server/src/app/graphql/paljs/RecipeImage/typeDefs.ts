import gql from 'graphql-tag'

export default gql`
  type RecipeImage {
    id: String!
    recipeId: String!
    url: String!
    altText: String
    width: Int
    height: Int
    recipe: Recipe!
  }
`
