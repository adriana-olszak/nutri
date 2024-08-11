import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateWithoutImportInfoInput } from './food-category-create-without-import-info.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateOrConnectWithoutImportInfoInput } from './food-category-create-or-connect-without-import-info.input';
import { FoodCategoryUpsertWithWhereUniqueWithoutImportInfoInput } from './food-category-upsert-with-where-unique-without-import-info.input';
import { FoodCategoryCreateManyImportInfoInputEnvelope } from './food-category-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { FoodCategoryUpdateWithWhereUniqueWithoutImportInfoInput } from './food-category-update-with-where-unique-without-import-info.input';
import { FoodCategoryUpdateManyWithWhereWithoutImportInfoInput } from './food-category-update-many-with-where-without-import-info.input';
import { FoodCategoryScalarWhereInput } from './food-category-scalar-where.input';

@InputType()
export class FoodCategoryUpdateManyWithoutImportInfoNestedInput {

    @Field(() => [FoodCategoryCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCategoryCreateWithoutImportInfoInput)
    create?: Array<FoodCategoryCreateWithoutImportInfoInput>;

    @Field(() => [FoodCategoryCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCategoryCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<FoodCategoryCreateOrConnectWithoutImportInfoInput>;

    @Field(() => [FoodCategoryUpsertWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCategoryUpsertWithWhereUniqueWithoutImportInfoInput)
    upsert?: Array<FoodCategoryUpsertWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => FoodCategoryCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => FoodCategoryCreateManyImportInfoInputEnvelope)
    createMany?: FoodCategoryCreateManyImportInfoInputEnvelope;

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

    @Field(() => [FoodCategoryUpdateWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCategoryUpdateWithWhereUniqueWithoutImportInfoInput)
    update?: Array<FoodCategoryUpdateWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => [FoodCategoryUpdateManyWithWhereWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCategoryUpdateManyWithWhereWithoutImportInfoInput)
    updateMany?: Array<FoodCategoryUpdateManyWithWhereWithoutImportInfoInput>;

    @Field(() => [FoodCategoryScalarWhereInput], {nullable:true})
    @Type(() => FoodCategoryScalarWhereInput)
    deleteMany?: Array<FoodCategoryScalarWhereInput>;
}
