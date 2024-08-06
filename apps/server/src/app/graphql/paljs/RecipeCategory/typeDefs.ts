import gql from 'graphql-tag'

export default gql`
  type RecipeCategory {
    id: String!
    name: String!
    recipes(
      where: RecipeWhereInput
      orderBy: [RecipeOrderByWithRelationInput]
      cursor: RecipeWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RecipeScalarFieldEnum]
    ): [Recipe!]!
    _count: RecipeCategoryCountOutputType!
  }
`
