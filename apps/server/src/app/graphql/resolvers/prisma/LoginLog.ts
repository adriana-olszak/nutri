import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@nutri/server-auth';
import { GraphQLResolveInfo } from 'graphql';

import { PrismaSelectService, PrismaService } from '@nutri/server-db-client';
import type {
  AggregateLoginLogArgs,
  CreateManyLoginLogArgs,
  CreateOneLoginLogArgs,
  DeleteManyLoginLogArgs,
  DeleteOneLoginLogArgs,
  FindFirstLoginLogArgs,
  FindManyLoginLogArgs,
  FindUniqueLoginLogArgs,
  UpdateManyLoginLogArgs,
  UpdateOneLoginLogArgs,
  UpsertOneLoginLogArgs,
} from '../../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleLoginLogQuery: LoginLog
//   }
//   extend type Mutation {
//     sampleLoginLogMutation(args: Int!): Boolean
//   }
//   extend type LoginLog {
//     sampleLoginLogField: String
//   }
// `;

@Resolver('LoginLog')
@UseGuards(RolesGuard('USER'))
export class LoginLogResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @Query()
  async findUniqueLoginLog(@Args() args: FindUniqueLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.findUnique(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findFirstLoginLog(@Args() args: FindFirstLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.findFirst(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManyLoginLog(@Args() args: FindManyLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.findMany(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManyLoginLogCount(@Args() args: FindManyLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.count(this.prismaSelect.getArgs(args, info) as any);
  }

  @Query()
  async aggregateLoginLog(@Args() args: AggregateLoginLogArgs) {
    return this.prisma.loginLog.aggregate(args);
  }

  @Mutation()
  async createOneLoginLog(@Args() args: CreateOneLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.create(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async createManyLoginLog(@Args() args: CreateManyLoginLogArgs) {
    return this.prisma.loginLog.createMany(args);
  }

  @Mutation()
  async createManyLoginLogAndReturn(@Args() args: CreateManyLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.createManyAndReturn(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async updateOneLoginLog(@Args() args: UpdateOneLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.update(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async upsertOneLoginLog(@Args() args: UpsertOneLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.upsert(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteOneLoginLog(@Args() args: DeleteOneLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.delete(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteManyLoginLog(@Args() args: DeleteManyLoginLogArgs) {
    return this.prisma.loginLog.deleteMany(args);
  }

  @Mutation()
  async updateManyLoginLog(@Args() args: UpdateManyLoginLogArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.loginLog.updateMany(this.prismaSelect.getArgs(args, info));
  }
}
