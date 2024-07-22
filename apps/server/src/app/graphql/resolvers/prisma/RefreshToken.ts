import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@nutri/server-auth';
import { GraphQLResolveInfo } from 'graphql';

import { PrismaSelectService, PrismaService } from '@nutri/server-db-client';
import type {
  AggregateRefreshTokenArgs,
  CreateManyRefreshTokenArgs,
  CreateOneRefreshTokenArgs,
  DeleteManyRefreshTokenArgs,
  DeleteOneRefreshTokenArgs,
  FindFirstRefreshTokenArgs,
  FindManyRefreshTokenArgs,
  FindUniqueRefreshTokenArgs,
  UpdateManyRefreshTokenArgs,
  UpdateOneRefreshTokenArgs,
  UpsertOneRefreshTokenArgs,
} from '../../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleRefreshTokenQuery: RefreshToken
//   }
//   extend type Mutation {
//     sampleRefreshTokenMutation(args: Int!): Boolean
//   }
//   extend type RefreshToken {
//     sampleRefreshTokenField: String
//   }
// `;

@Resolver('RefreshToken')
@UseGuards(RolesGuard('USER'))
export class RefreshTokenResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @Query()
  async findUniqueRefreshToken(@Args() args: FindUniqueRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.findUnique(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findFirstRefreshToken(@Args() args: FindFirstRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.findFirst(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManyRefreshToken(@Args() args: FindManyRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.findMany(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManyRefreshTokenCount(@Args() args: FindManyRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.count(this.prismaSelect.getArgs(args, info) as any);
  }

  @Query()
  async aggregateRefreshToken(@Args() args: AggregateRefreshTokenArgs) {
    return this.prisma.refreshToken.aggregate(args);
  }

  @Mutation()
  async createOneRefreshToken(@Args() args: CreateOneRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.create(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async createManyRefreshToken(@Args() args: CreateManyRefreshTokenArgs) {
    return this.prisma.refreshToken.createMany(args);
  }

  @Mutation()
  async createManyRefreshTokenAndReturn(@Args() args: CreateManyRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.createManyAndReturn(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async updateOneRefreshToken(@Args() args: UpdateOneRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.update(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async upsertOneRefreshToken(@Args() args: UpsertOneRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.upsert(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteOneRefreshToken(@Args() args: DeleteOneRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.delete(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteManyRefreshToken(@Args() args: DeleteManyRefreshTokenArgs) {
    return this.prisma.refreshToken.deleteMany(args);
  }

  @Mutation()
  async updateManyRefreshToken(@Args() args: UpdateManyRefreshTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.refreshToken.updateMany(this.prismaSelect.getArgs(args, info));
  }
}
