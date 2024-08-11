import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class FoodSearchVectorScalarWhereInput {

    @Field(() => [FoodSearchVectorScalarWhereInput], {nullable:true})
    AND?: Array<FoodSearchVectorScalarWhereInput>;

    @Field(() => [FoodSearchVectorScalarWhereInput], {nullable:true})
    OR?: Array<FoodSearchVectorScalarWhereInput>;

    @Field(() => [FoodSearchVectorScalarWhereInput], {nullable:true})
    NOT?: Array<FoodSearchVectorScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    languageCode?: StringFilter;
}
