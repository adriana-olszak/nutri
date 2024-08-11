import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientScalarWhereInput } from './nutrient-scalar-where.input';
import { Type } from 'class-transformer';
import { NutrientUpdateManyMutationInput } from './nutrient-update-many-mutation.input';

@InputType()
export class NutrientUpdateManyWithWhereWithoutImportInfoInput {

    @Field(() => NutrientScalarWhereInput, {nullable:false})
    @Type(() => NutrientScalarWhereInput)
    where!: NutrientScalarWhereInput;

    @Field(() => NutrientUpdateManyMutationInput, {nullable:false})
    @Type(() => NutrientUpdateManyMutationInput)
    data!: NutrientUpdateManyMutationInput;
}
