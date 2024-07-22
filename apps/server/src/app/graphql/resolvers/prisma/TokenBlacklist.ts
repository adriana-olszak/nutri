import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@nutri/server-auth';
import { GraphQLResolveInfo } from 'graphql';

import { PrismaSelectService, PrismaService } from '@nutri/server-db-client';
import type {
  AggregateTokenBlacklistArgs,
  CreateManyTokenBlacklistArgs,
  CreateOneTokenBlacklistArgs,
  DeleteManyTokenBlacklistArgs,
  DeleteOneTokenBlacklistArgs,
  FindFirstTokenBlacklistArgs,
  FindManyTokenBlacklistArgs,
  FindUniqueTokenBlacklistArgs,
  UpdateManyTokenBlacklistArgs,
  UpdateOneTokenBlacklistArgs,
  UpsertOneTokenBlacklistArgs,
} from '../../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleTokenBlacklistQuery: TokenBlacklist
//   }
//   extend type Mutation {
//     sampleTokenBlacklistMutation(args: Int!): Boolean
//   }
//   extend type TokenBlacklist {
//     sampleTokenBlacklistField: String
//   }
// `;

@Resolver('TokenBlacklist')
@UseGuards(RolesGuard('USER'))
export class TokenBlacklistResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @Query()
  async findUniqueTokenBlacklist(@Args() args: FindUniqueTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.findUnique(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findFirstTokenBlacklist(@Args() args: FindFirstTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.findFirst(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManyTokenBlacklist(@Args() args: FindManyTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.findMany(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManyTokenBlacklistCount(@Args() args: FindManyTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.count(this.prismaSelect.getArgs(args, info) as any);
  }

  @Query()
  async aggregateTokenBlacklist(@Args() args: AggregateTokenBlacklistArgs) {
    return this.prisma.tokenBlacklist.aggregate(args);
  }

  @Mutation()
  async createOneTokenBlacklist(@Args() args: CreateOneTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.create(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async createManyTokenBlacklist(@Args() args: CreateManyTokenBlacklistArgs) {
    return this.prisma.tokenBlacklist.createMany(args);
  }

  @Mutation()
  async createManyTokenBlacklistAndReturn(@Args() args: CreateManyTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.createManyAndReturn(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async updateOneTokenBlacklist(@Args() args: UpdateOneTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.update(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async upsertOneTokenBlacklist(@Args() args: UpsertOneTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.upsert(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteOneTokenBlacklist(@Args() args: DeleteOneTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.delete(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteManyTokenBlacklist(@Args() args: DeleteManyTokenBlacklistArgs) {
    return this.prisma.tokenBlacklist.deleteMany(args);
  }

  @Mutation()
  async updateManyTokenBlacklist(@Args() args: UpdateManyTokenBlacklistArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.tokenBlacklist.updateMany(this.prismaSelect.getArgs(args, info));
  }
}
