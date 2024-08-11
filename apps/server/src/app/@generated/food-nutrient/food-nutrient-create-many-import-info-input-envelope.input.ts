import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateManyImportInfoInput } from './food-nutrient-create-many-import-info.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodNutrientCreateManyImportInfoInputEnvelope {

    @Field(() => [FoodNutrientCreateManyImportInfoInput], {nullable:false})
    @Type(() => FoodNutrientCreateManyImportInfoInput)
    data!: Array<FoodNutrientCreateManyImportInfoInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
