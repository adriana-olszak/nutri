import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutQuestionnairesInput } from './tenant-update-without-questionnaires.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutQuestionnairesInput } from './tenant-create-without-questionnaires.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutQuestionnairesInput {

    @Field(() => TenantUpdateWithoutQuestionnairesInput, {nullable:false})
    @Type(() => TenantUpdateWithoutQuestionnairesInput)
    update!: TenantUpdateWithoutQuestionnairesInput;

    @Field(() => TenantCreateWithoutQuestionnairesInput, {nullable:false})
    @Type(() => TenantCreateWithoutQuestionnairesInput)
    create!: TenantCreateWithoutQuestionnairesInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
