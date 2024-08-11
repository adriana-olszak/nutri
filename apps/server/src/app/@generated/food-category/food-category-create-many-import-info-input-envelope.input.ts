import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateManyImportInfoInput } from './food-category-create-many-import-info.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodCategoryCreateManyImportInfoInputEnvelope {

    @Field(() => [FoodCategoryCreateManyImportInfoInput], {nullable:false})
    @Type(() => FoodCategoryCreateManyImportInfoInput)
    data!: Array<FoodCategoryCreateManyImportInfoInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
