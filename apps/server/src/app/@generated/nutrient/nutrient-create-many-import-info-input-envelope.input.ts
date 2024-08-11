import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientCreateManyImportInfoInput } from './nutrient-create-many-import-info.input';
import { Type } from 'class-transformer';

@InputType()
export class NutrientCreateManyImportInfoInputEnvelope {

    @Field(() => [NutrientCreateManyImportInfoInput], {nullable:false})
    @Type(() => NutrientCreateManyImportInfoInput)
    data!: Array<NutrientCreateManyImportInfoInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
