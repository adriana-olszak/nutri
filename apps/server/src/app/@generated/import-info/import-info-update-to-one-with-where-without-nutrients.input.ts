import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoUpdateWithoutNutrientsInput } from './import-info-update-without-nutrients.input';

@InputType()
export class ImportInfoUpdateToOneWithWhereWithoutNutrientsInput {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => ImportInfoUpdateWithoutNutrientsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutNutrientsInput)
    data!: ImportInfoUpdateWithoutNutrientsInput;
}
