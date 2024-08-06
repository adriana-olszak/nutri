import gql from 'graphql-tag'

export default gql`
  type FoodPortion {
    id: String!
    amount: Float!
    gramWeight: Float!
    portionDescription: String
    sourceId: String!
    foodId: String!
    measureUnitName: String!
    importInfoId: String!
    food: Food!
    measureUnit: MeasureUnit!
    importInfo: ImportInfo!
  }
`
