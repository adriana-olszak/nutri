import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueTranslation: (_parent, args, { prisma }) => {
      return prisma.translation.findUnique(args)
    },
    findFirstTranslation: (_parent, args, { prisma }) => {
      return prisma.translation.findFirst(args)
    },
    findManyTranslation: (_parent, args, { prisma }) => {
      return prisma.translation.findMany(args)
    },
    findManyTranslationCount: (_parent, args, { prisma }) => {
      return prisma.translation.count(args)
    },
    aggregateTranslation: (_parent, args, { prisma }) => {
      return prisma.translation.aggregate(args)
    },
  },
  Mutation: {
    createOneTranslation: (_parent, args, { prisma }) => {
      return prisma.translation.create(args)
    },
    updateOneTranslation: (_parent, args, { prisma }) => {
      return prisma.translation.update(args)
    },
    deleteOneTranslation: async (_parent, args, { prisma }) => {
      return prisma.translation.delete(args)
    },
    upsertOneTranslation: async (_parent, args, { prisma }) => {
      return prisma.translation.upsert(args)
    },
    deleteManyTranslation: async (_parent, args, { prisma }) => {
      return prisma.translation.deleteMany(args)
    },
    updateManyTranslation: (_parent, args, { prisma }) => {
      return prisma.translation.updateMany(args)
    },
  },
}
export default resolvers
