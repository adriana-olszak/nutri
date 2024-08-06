import gql from 'graphql-tag'

export default gql`
  type Language {
    code: String!
    name: String!
    translations(
      where: TranslationWhereInput
      orderBy: [TranslationOrderByWithRelationInput]
      cursor: TranslationWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TranslationScalarFieldEnum]
    ): [Translation!]!
    searchVectors(
      where: FoodSearchVectorWhereInput
      orderBy: [FoodSearchVectorOrderByWithRelationInput]
      cursor: FoodSearchVectorWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FoodSearchVectorScalarFieldEnum]
    ): [FoodSearchVector!]!
    _count: LanguageCountOutputType!
  }
`
