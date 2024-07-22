import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@nutri/server-auth';
import { GraphQLResolveInfo } from 'graphql';

import { PrismaSelectService, PrismaService } from '@nutri/server-db-client';
import type {
  AggregateSessionArgs,
  CreateManySessionArgs,
  CreateOneSessionArgs,
  DeleteManySessionArgs,
  DeleteOneSessionArgs,
  FindFirstSessionArgs,
  FindManySessionArgs,
  FindUniqueSessionArgs,
  UpdateManySessionArgs,
  UpdateOneSessionArgs,
  UpsertOneSessionArgs,
} from '../../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleSessionQuery: Session
//   }
//   extend type Mutation {
//     sampleSessionMutation(args: Int!): Boolean
//   }
//   extend type Session {
//     sampleSessionField: String
//   }
// `;

@Resolver('Session')
@UseGuards(RolesGuard('USER'))
export class SessionResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @Query()
  async findUniqueSession(@Args() args: FindUniqueSessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.findUnique(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findFirstSession(@Args() args: FindFirstSessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.findFirst(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManySession(@Args() args: FindManySessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.findMany(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManySessionCount(@Args() args: FindManySessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.count(this.prismaSelect.getArgs(args, info) as any);
  }

  @Query()
  async aggregateSession(@Args() args: AggregateSessionArgs) {
    return this.prisma.session.aggregate(args);
  }

  @Mutation()
  async createOneSession(@Args() args: CreateOneSessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.create(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async createManySession(@Args() args: CreateManySessionArgs) {
    return this.prisma.session.createMany(args);
  }

  @Mutation()
  async createManySessionAndReturn(@Args() args: CreateManySessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.createManyAndReturn(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async updateOneSession(@Args() args: UpdateOneSessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.update(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async upsertOneSession(@Args() args: UpsertOneSessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.upsert(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteOneSession(@Args() args: DeleteOneSessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.delete(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteManySession(@Args() args: DeleteManySessionArgs) {
    return this.prisma.session.deleteMany(args);
  }

  @Mutation()
  async updateManySession(@Args() args: UpdateManySessionArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.session.updateMany(this.prismaSelect.getArgs(args, info));
  }
}
