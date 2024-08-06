import gql from 'graphql-tag'

export default gql`
  type FoodCategoryOnFood {
    foodId: String!
    categoryId: String!
    isPrimaryCategory: Boolean!
    food: Food!
    category: FoodCategory!
  }
`
