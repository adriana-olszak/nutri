import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateWithoutImportInfoInput } from './food-category-create-without-import-info.input';

@InputType()
export class FoodCategoryCreateOrConnectWithoutImportInfoInput {

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => FoodCategoryCreateWithoutImportInfoInput, {nullable:false})
    @Type(() => FoodCategoryCreateWithoutImportInfoInput)
    create!: FoodCategoryCreateWithoutImportInfoInput;
}
