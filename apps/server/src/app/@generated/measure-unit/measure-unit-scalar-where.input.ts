import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MeasureUnitScalarWhereInput {

    @Field(() => [MeasureUnitScalarWhereInput], {nullable:true})
    AND?: Array<MeasureUnitScalarWhereInput>;

    @Field(() => [MeasureUnitScalarWhereInput], {nullable:true})
    OR?: Array<MeasureUnitScalarWhereInput>;

    @Field(() => [MeasureUnitScalarWhereInput], {nullable:true})
    NOT?: Array<MeasureUnitScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;
}
