import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutrientUpdateInput } from './nutrient-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NutrientWhereUniqueInput } from './nutrient-where-unique.input';

@ArgsType()
export class UpdateOneNutrientArgs {

    @Field(() => NutrientUpdateInput, {nullable:false})
    @Type(() => NutrientUpdateInput)
    data!: NutrientUpdateInput;

    @Field(() => NutrientWhereUniqueInput, {nullable:false})
    @Type(() => NutrientWhereUniqueInput)
    where!: Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>;
}
