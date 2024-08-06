import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueFoodSearchVector: (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.findUnique(args)
    },
    findFirstFoodSearchVector: (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.findFirst(args)
    },
    findManyFoodSearchVector: (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.findMany(args)
    },
    findManyFoodSearchVectorCount: (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.count(args)
    },
    aggregateFoodSearchVector: (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.aggregate(args)
    },
  },
  Mutation: {
    createOneFoodSearchVector: (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.create(args)
    },
    updateOneFoodSearchVector: (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.update(args)
    },
    deleteOneFoodSearchVector: async (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.delete(args)
    },
    upsertOneFoodSearchVector: async (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.upsert(args)
    },
    deleteManyFoodSearchVector: async (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.deleteMany(args)
    },
    updateManyFoodSearchVector: (_parent, args, { prisma }) => {
      return prisma.foodSearchVector.updateMany(args)
    },
  },
}
export default resolvers
