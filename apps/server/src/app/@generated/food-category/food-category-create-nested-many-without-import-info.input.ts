import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateWithoutImportInfoInput } from './food-category-create-without-import-info.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateOrConnectWithoutImportInfoInput } from './food-category-create-or-connect-without-import-info.input';
import { FoodCategoryCreateManyImportInfoInputEnvelope } from './food-category-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';

@InputType()
export class FoodCategoryCreateNestedManyWithoutImportInfoInput {

    @Field(() => [FoodCategoryCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCategoryCreateWithoutImportInfoInput)
    create?: Array<FoodCategoryCreateWithoutImportInfoInput>;

    @Field(() => [FoodCategoryCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCategoryCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<FoodCategoryCreateOrConnectWithoutImportInfoInput>;

    @Field(() => FoodCategoryCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => FoodCategoryCreateManyImportInfoInputEnvelope)
    createMany?: FoodCategoryCreateManyImportInfoInputEnvelope;

    @Field(() => [FoodCategoryWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>>;
}
