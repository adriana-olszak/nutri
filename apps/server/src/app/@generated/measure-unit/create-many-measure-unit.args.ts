import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasureUnitCreateManyInput } from './measure-unit-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMeasureUnitArgs {

    @Field(() => [MeasureUnitCreateManyInput], {nullable:false})
    @Type(() => MeasureUnitCreateManyInput)
    data!: Array<MeasureUnitCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
