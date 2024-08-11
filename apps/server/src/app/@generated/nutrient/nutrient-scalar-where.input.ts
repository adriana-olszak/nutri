import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class NutrientScalarWhereInput {

    @Field(() => [NutrientScalarWhereInput], {nullable:true})
    AND?: Array<NutrientScalarWhereInput>;

    @Field(() => [NutrientScalarWhereInput], {nullable:true})
    OR?: Array<NutrientScalarWhereInput>;

    @Field(() => [NutrientScalarWhereInput], {nullable:true})
    NOT?: Array<NutrientScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    unitName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;
}
