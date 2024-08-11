import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateManyMeasureUnitInput } from './food-portion-create-many-measure-unit.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodPortionCreateManyMeasureUnitInputEnvelope {

    @Field(() => [FoodPortionCreateManyMeasureUnitInput], {nullable:false})
    @Type(() => FoodPortionCreateManyMeasureUnitInput)
    data!: Array<FoodPortionCreateManyMeasureUnitInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
