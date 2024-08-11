import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateManyImportInfoInput } from './food-portion-create-many-import-info.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodPortionCreateManyImportInfoInputEnvelope {

    @Field(() => [FoodPortionCreateManyImportInfoInput], {nullable:false})
    @Type(() => FoodPortionCreateManyImportInfoInput)
    data!: Array<FoodPortionCreateManyImportInfoInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
