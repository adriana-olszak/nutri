import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateWithoutImportInfoInput } from './food-portion-create-without-import-info.input';

@InputType()
export class FoodPortionCreateOrConnectWithoutImportInfoInput {

    @Field(() => FoodPortionWhereUniqueInput, {nullable:false})
    @Type(() => FoodPortionWhereUniqueInput)
    where!: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;

    @Field(() => FoodPortionCreateWithoutImportInfoInput, {nullable:false})
    @Type(() => FoodPortionCreateWithoutImportInfoInput)
    create!: FoodPortionCreateWithoutImportInfoInput;
}
