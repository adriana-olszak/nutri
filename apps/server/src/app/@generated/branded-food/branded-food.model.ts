import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Food } from '../food/food.model';
import { ImportInfo } from '../import-info/import-info.model';

@ObjectType()
export class BrandedFood {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => String, {nullable:false})
    brandOwner!: string;

    @Field(() => String, {nullable:true})
    gtinUpc!: string | null;

    @Field(() => String, {nullable:true})
    ingredients!: string | null;

    @Field(() => Float, {nullable:true})
    servingSize!: number | null;

    @Field(() => String, {nullable:true})
    servingUnit!: string | null;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    importInfoId!: string;

    @Field(() => Food, {nullable:false})
    food?: Food;

    @Field(() => ImportInfo, {nullable:false})
    importInfo?: ImportInfo;
}
