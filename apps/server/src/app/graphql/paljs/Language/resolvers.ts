import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueLanguage: (_parent, args, { prisma }) => {
      return prisma.language.findUnique(args)
    },
    findFirstLanguage: (_parent, args, { prisma }) => {
      return prisma.language.findFirst(args)
    },
    findManyLanguage: (_parent, args, { prisma }) => {
      return prisma.language.findMany(args)
    },
    findManyLanguageCount: (_parent, args, { prisma }) => {
      return prisma.language.count(args)
    },
    aggregateLanguage: (_parent, args, { prisma }) => {
      return prisma.language.aggregate(args)
    },
  },
  Mutation: {
    createOneLanguage: (_parent, args, { prisma }) => {
      return prisma.language.create(args)
    },
    updateOneLanguage: (_parent, args, { prisma }) => {
      return prisma.language.update(args)
    },
    deleteOneLanguage: async (_parent, args, { prisma }) => {
      return prisma.language.delete(args)
    },
    upsertOneLanguage: async (_parent, args, { prisma }) => {
      return prisma.language.upsert(args)
    },
    deleteManyLanguage: async (_parent, args, { prisma }) => {
      return prisma.language.deleteMany(args)
    },
    updateManyLanguage: (_parent, args, { prisma }) => {
      return prisma.language.updateMany(args)
    },
  },
}
export default resolvers
