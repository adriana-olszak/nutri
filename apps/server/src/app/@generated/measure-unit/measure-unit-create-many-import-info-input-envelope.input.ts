import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitCreateManyImportInfoInput } from './measure-unit-create-many-import-info.input';
import { Type } from 'class-transformer';

@InputType()
export class MeasureUnitCreateManyImportInfoInputEnvelope {

    @Field(() => [MeasureUnitCreateManyImportInfoInput], {nullable:false})
    @Type(() => MeasureUnitCreateManyImportInfoInput)
    data!: Array<MeasureUnitCreateManyImportInfoInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
