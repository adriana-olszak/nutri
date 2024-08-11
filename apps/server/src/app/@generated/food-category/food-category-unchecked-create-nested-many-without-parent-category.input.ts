import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateWithoutParentCategoryInput } from './food-category-create-without-parent-category.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateOrConnectWithoutParentCategoryInput } from './food-category-create-or-connect-without-parent-category.input';
import { FoodCategoryCreateManyParentCategoryInputEnvelope } from './food-category-create-many-parent-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';

@InputType()
export class FoodCategoryUncheckedCreateNestedManyWithoutParentCategoryInput {

    @Field(() => [FoodCategoryCreateWithoutParentCategoryInput], {nullable:true})
    @Type(() => FoodCategoryCreateWithoutParentCategoryInput)
    create?: Array<FoodCategoryCreateWithoutParentCategoryInput>;

    @Field(() => [FoodCategoryCreateOrConnectWithoutParentCategoryInput], {nullable:true})
    @Type(() => FoodCategoryCreateOrConnectWithoutParentCategoryInput)
    connectOrCreate?: Array<FoodCategoryCreateOrConnectWithoutParentCategoryInput>;

    @Field(() => FoodCategoryCreateManyParentCategoryInputEnvelope, {nullable:true})
    @Type(() => FoodCategoryCreateManyParentCategoryInputEnvelope)
    createMany?: FoodCategoryCreateManyParentCategoryInputEnvelope;

    @Field(() => [FoodCategoryWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>>;
}
