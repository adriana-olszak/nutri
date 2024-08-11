import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutrientWhereUniqueInput } from './nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { NutrientCreateInput } from './nutrient-create.input';
import { NutrientUpdateInput } from './nutrient-update.input';

@ArgsType()
export class UpsertOneNutrientArgs {

    @Field(() => NutrientWhereUniqueInput, {nullable:false})
    @Type(() => NutrientWhereUniqueInput)
    where!: Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => NutrientCreateInput, {nullable:false})
    @Type(() => NutrientCreateInput)
    create!: NutrientCreateInput;

    @Field(() => NutrientUpdateInput, {nullable:false})
    @Type(() => NutrientUpdateInput)
    update!: NutrientUpdateInput;
}
