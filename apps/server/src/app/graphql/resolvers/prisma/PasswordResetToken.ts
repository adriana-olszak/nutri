import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@nutri/server-auth';
import { GraphQLResolveInfo } from 'graphql';

import { PrismaSelectService, PrismaService } from '@nutri/server-db-client';
import type {
  AggregatePasswordResetTokenArgs,
  CreateManyPasswordResetTokenArgs,
  CreateOnePasswordResetTokenArgs,
  DeleteManyPasswordResetTokenArgs,
  DeleteOnePasswordResetTokenArgs,
  FindFirstPasswordResetTokenArgs,
  FindManyPasswordResetTokenArgs,
  FindUniquePasswordResetTokenArgs,
  UpdateManyPasswordResetTokenArgs,
  UpdateOnePasswordResetTokenArgs,
  UpsertOnePasswordResetTokenArgs,
} from '../../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     samplePasswordResetTokenQuery: PasswordResetToken
//   }
//   extend type Mutation {
//     samplePasswordResetTokenMutation(args: Int!): Boolean
//   }
//   extend type PasswordResetToken {
//     samplePasswordResetTokenField: String
//   }
// `;

@Resolver('PasswordResetToken')
@UseGuards(RolesGuard('USER'))
export class PasswordResetTokenResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @Query()
  async findUniquePasswordResetToken(@Args() args: FindUniquePasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.findUnique(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findFirstPasswordResetToken(@Args() args: FindFirstPasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.findFirst(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManyPasswordResetToken(@Args() args: FindManyPasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.findMany(this.prismaSelect.getArgs(args, info));
  }

  @Query()
  async findManyPasswordResetTokenCount(@Args() args: FindManyPasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.count(this.prismaSelect.getArgs(args, info) as any);
  }

  @Query()
  async aggregatePasswordResetToken(@Args() args: AggregatePasswordResetTokenArgs) {
    return this.prisma.passwordResetToken.aggregate(args);
  }

  @Mutation()
  async createOnePasswordResetToken(@Args() args: CreateOnePasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.create(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async createManyPasswordResetToken(@Args() args: CreateManyPasswordResetTokenArgs) {
    return this.prisma.passwordResetToken.createMany(args);
  }

  @Mutation()
  async createManyPasswordResetTokenAndReturn(@Args() args: CreateManyPasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.createManyAndReturn(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async updateOnePasswordResetToken(@Args() args: UpdateOnePasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.update(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async upsertOnePasswordResetToken(@Args() args: UpsertOnePasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.upsert(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteOnePasswordResetToken(@Args() args: DeleteOnePasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.delete(this.prismaSelect.getArgs(args, info));
  }

  @Mutation()
  async deleteManyPasswordResetToken(@Args() args: DeleteManyPasswordResetTokenArgs) {
    return this.prisma.passwordResetToken.deleteMany(args);
  }

  @Mutation()
  async updateManyPasswordResetToken(@Args() args: UpdateManyPasswordResetTokenArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.passwordResetToken.updateMany(this.prismaSelect.getArgs(args, info));
  }
}
