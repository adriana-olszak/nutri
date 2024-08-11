import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodCreateManyImportInfoInput } from './branded-food-create-many-import-info.input';
import { Type } from 'class-transformer';

@InputType()
export class BrandedFoodCreateManyImportInfoInputEnvelope {

    @Field(() => [BrandedFoodCreateManyImportInfoInput], {nullable:false})
    @Type(() => BrandedFoodCreateManyImportInfoInput)
    data!: Array<BrandedFoodCreateManyImportInfoInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
