import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateManyImportInfoInput } from './food-create-many-import-info.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodCreateManyImportInfoInputEnvelope {

    @Field(() => [FoodCreateManyImportInfoInput], {nullable:false})
    @Type(() => FoodCreateManyImportInfoInput)
    data!: Array<FoodCreateManyImportInfoInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
