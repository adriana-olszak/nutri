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

  type Query {
    findUniqueLanguage(where: LanguageWhereUniqueInput!): Language
    findFirstLanguage(
      where: LanguageWhereInput
      orderBy: [LanguageOrderByWithRelationInput]
      cursor: LanguageWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LanguageScalarFieldEnum]
    ): Language
    findManyLanguage(
      where: LanguageWhereInput
      orderBy: [LanguageOrderByWithRelationInput]
      cursor: LanguageWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LanguageScalarFieldEnum]
    ): [Language!]!
    findManyLanguageCount(
      where: LanguageWhereInput
      orderBy: [LanguageOrderByWithRelationInput]
      cursor: LanguageWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LanguageScalarFieldEnum]
    ): Int!
    aggregateLanguage(
      where: LanguageWhereInput
      orderBy: [LanguageOrderByWithRelationInput]
      cursor: LanguageWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateLanguage
  }

  type Mutation {
    createOneLanguage(data: LanguageCreateInput!): Language!
    updateOneLanguage(
      data: LanguageUpdateInput!
      where: LanguageWhereUniqueInput!
    ): Language!
    deleteOneLanguage(where: LanguageWhereUniqueInput!): Language
    upsertOneLanguage(
      where: LanguageWhereUniqueInput!
      create: LanguageCreateInput!
      update: LanguageUpdateInput!
    ): Language
    deleteManyLanguage(where: LanguageWhereInput): BatchPayload
    updateManyLanguage(
      data: LanguageUpdateManyMutationInput!
      where: LanguageWhereInput
    ): BatchPayload
  }
`
