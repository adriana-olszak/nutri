import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RecipeCategoryScalarWhereInput {

    @Field(() => [RecipeCategoryScalarWhereInput], {nullable:true})
    AND?: Array<RecipeCategoryScalarWhereInput>;

    @Field(() => [RecipeCategoryScalarWhereInput], {nullable:true})
    OR?: Array<RecipeCategoryScalarWhereInput>;

    @Field(() => [RecipeCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeCategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
