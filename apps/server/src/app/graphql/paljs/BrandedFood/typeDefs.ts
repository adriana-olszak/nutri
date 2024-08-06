import gql from 'graphql-tag'

export default gql`
  type BrandedFood {
    id: String!
    foodId: String!
    brandOwner: String!
    gtinUpc: String
    ingredients: String
    servingSize: Float
    servingUnit: String
    sourceId: String!
    importInfoId: String!
    food: Food!
    importInfo: ImportInfo!
  }
`
