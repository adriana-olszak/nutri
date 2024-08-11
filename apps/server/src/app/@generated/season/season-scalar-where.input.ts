import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SeasonScalarWhereInput {

    @Field(() => [SeasonScalarWhereInput], {nullable:true})
    AND?: Array<SeasonScalarWhereInput>;

    @Field(() => [SeasonScalarWhereInput], {nullable:true})
    OR?: Array<SeasonScalarWhereInput>;

    @Field(() => [SeasonScalarWhereInput], {nullable:true})
    NOT?: Array<SeasonScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
