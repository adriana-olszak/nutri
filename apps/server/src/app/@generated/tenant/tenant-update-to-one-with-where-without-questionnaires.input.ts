import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutQuestionnairesInput } from './tenant-update-without-questionnaires.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutQuestionnairesInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutQuestionnairesInput, {nullable:false})
    @Type(() => TenantUpdateWithoutQuestionnairesInput)
    data!: TenantUpdateWithoutQuestionnairesInput;
}
