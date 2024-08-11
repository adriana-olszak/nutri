import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoUpdateWithoutNutrientsInput } from './import-info-update-without-nutrients.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutNutrientsInput } from './import-info-create-without-nutrients.input';
import { ImportInfoWhereInput } from './import-info-where.input';

@InputType()
export class ImportInfoUpsertWithoutNutrientsInput {

    @Field(() => ImportInfoUpdateWithoutNutrientsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutNutrientsInput)
    update!: ImportInfoUpdateWithoutNutrientsInput;

    @Field(() => ImportInfoCreateWithoutNutrientsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutNutrientsInput)
    create!: ImportInfoCreateWithoutNutrientsInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;
}
