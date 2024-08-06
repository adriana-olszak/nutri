import gql from 'graphql-tag'

export default gql`
  type FoodNutrient {
    id: String!
    foodId: String!
    nutrientId: String!
    amount: Float!
    min: Float
    median: Float
    max: Float
    confidenceCode: String
    sourceId: String!
    importInfoId: String!
    food: Food!
    nutrient: Nutrient!
    importInfo: ImportInfo!
  }
`
