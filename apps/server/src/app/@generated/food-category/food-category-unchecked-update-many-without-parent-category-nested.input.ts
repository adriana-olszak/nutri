import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateWithoutParentCategoryInput } from './food-category-create-without-parent-category.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateOrConnectWithoutParentCategoryInput } from './food-category-create-or-connect-without-parent-category.input';
import { FoodCategoryUpsertWithWhereUniqueWithoutParentCategoryInput } from './food-category-upsert-with-where-unique-without-parent-category.input';
import { FoodCategoryCreateManyParentCategoryInputEnvelope } from './food-category-create-many-parent-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { FoodCategoryUpdateWithWhereUniqueWithoutParentCategoryInput } from './food-category-update-with-where-unique-without-parent-category.input';
import { FoodCategoryUpdateManyWithWhereWithoutParentCategoryInput } from './food-category-update-many-with-where-without-parent-category.input';
import { FoodCategoryScalarWhereInput } from './food-category-scalar-where.input';

@InputType()
export class FoodCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput {

    @Field(() => [FoodCategoryCreateWithoutParentCategoryInput], {nullable:true})
    @Type(() => FoodCategoryCreateWithoutParentCategoryInput)
    create?: Array<FoodCategoryCreateWithoutParentCategoryInput>;

    @Field(() => [FoodCategoryCreateOrConnectWithoutParentCategoryInput], {nullable:true})
    @Type(() => FoodCategoryCreateOrConnectWithoutParentCategoryInput)
    connectOrCreate?: Array<FoodCategoryCreateOrConnectWithoutParentCategoryInput>;

    @Field(() => [FoodCategoryUpsertWithWhereUniqueWithoutParentCategoryInput], {nullable:true})
    @Type(() => FoodCategoryUpsertWithWhereUniqueWithoutParentCategoryInput)
    upsert?: Array<FoodCategoryUpsertWithWhereUniqueWithoutParentCategoryInput>;

    @Field(() => FoodCategoryCreateManyParentCategoryInputEnvelope, {nullable:true})
    @Type(() => FoodCategoryCreateManyParentCategoryInputEnvelope)
    createMany?: FoodCategoryCreateManyParentCategoryInputEnvelope;

    @Field(() => [FoodCategoryWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>>;

    @Field(() => [FoodCategoryWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>>;

    @Field(() => [FoodCategoryWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>>;

    @Field(() => [FoodCategoryWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>>;

    @Field(() => [FoodCategoryUpdateWithWhereUniqueWithoutParentCategoryInput], {nullable:true})
    @Type(() => FoodCategoryUpdateWithWhereUniqueWithoutParentCategoryInput)
    update?: Array<FoodCategoryUpdateWithWhereUniqueWithoutParentCategoryInput>;

    @Field(() => [FoodCategoryUpdateManyWithWhereWithoutParentCategoryInput], {nullable:true})
    @Type(() => FoodCategoryUpdateManyWithWhereWithoutParentCategoryInput)
    updateMany?: Array<FoodCategoryUpdateManyWithWhereWithoutParentCategoryInput>;

    @Field(() => [FoodCategoryScalarWhereInput], {nullable:true})
    @Type(() => FoodCategoryScalarWhereInput)
    deleteMany?: Array<FoodCategoryScalarWhereInput>;
}
