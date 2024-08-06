import gql from 'graphql-tag'

export default gql`
  type FoodSearchVector {
    id: String!
    foodId: String!
    languageCode: String!
    food: Food!
    language: Language!
  }
`
