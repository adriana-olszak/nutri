import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueFood: (_parent, args, { prisma }) => {
      return prisma.food.findUnique(args)
    },
    findFirstFood: (_parent, args, { prisma }) => {
      return prisma.food.findFirst(args)
    },
    findManyFood: (_parent, args, { prisma }) => {
      return prisma.food.findMany(args)
    },
    findManyFoodCount: (_parent, args, { prisma }) => {
      return prisma.food.count(args)
    },
    aggregateFood: (_parent, args, { prisma }) => {
      return prisma.food.aggregate(args)
    },
  },
  Mutation: {
    createOneFood: (_parent, args, { prisma }) => {
      return prisma.food.create(args)
    },
    updateOneFood: (_parent, args, { prisma }) => {
      return prisma.food.update(args)
    },
    deleteOneFood: async (_parent, args, { prisma }) => {
      return prisma.food.delete(args)
    },
    upsertOneFood: async (_parent, args, { prisma }) => {
      return prisma.food.upsert(args)
    },
    deleteManyFood: async (_parent, args, { prisma }) => {
      return prisma.food.deleteMany(args)
    },
    updateManyFood: (_parent, args, { prisma }) => {
      return prisma.food.updateMany(args)
    },
  },
}
export default resolvers
