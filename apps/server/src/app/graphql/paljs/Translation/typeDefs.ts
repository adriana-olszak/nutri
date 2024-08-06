import gql from 'graphql-tag'

export default gql`
  type Translation {
    id: String!
    languageCode: String!
    entityType: String!
    entityId: String!
    field: String!
    value: String!
    language: Language!
  }

  type Query {
    findUniqueTranslation(where: TranslationWhereUniqueInput!): Translation
    findFirstTranslation(
      where: TranslationWhereInput
      orderBy: [TranslationOrderByWithRelationInput]
      cursor: TranslationWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TranslationScalarFieldEnum]
    ): Translation
    findManyTranslation(
      where: TranslationWhereInput
      orderBy: [TranslationOrderByWithRelationInput]
      cursor: TranslationWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TranslationScalarFieldEnum]
    ): [Translation!]!
    findManyTranslationCount(
      where: TranslationWhereInput
      orderBy: [TranslationOrderByWithRelationInput]
      cursor: TranslationWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TranslationScalarFieldEnum]
    ): Int!
    aggregateTranslation(
      where: TranslationWhereInput
      orderBy: [TranslationOrderByWithRelationInput]
      cursor: TranslationWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateTranslation
  }

  type Mutation {
    createOneTranslation(data: TranslationCreateInput!): Translation!
    updateOneTranslation(
      data: TranslationUpdateInput!
      where: TranslationWhereUniqueInput!
    ): Translation!
    deleteOneTranslation(where: TranslationWhereUniqueInput!): Translation
    upsertOneTranslation(
      where: TranslationWhereUniqueInput!
      create: TranslationCreateInput!
      update: TranslationUpdateInput!
    ): Translation
    deleteManyTranslation(where: TranslationWhereInput): BatchPayload
    updateManyTranslation(
      data: TranslationUpdateManyMutationInput!
      where: TranslationWhereInput
    ): BatchPayload
  }
`
