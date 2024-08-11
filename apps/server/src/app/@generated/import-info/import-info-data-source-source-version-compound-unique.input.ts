import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodDataSource } from '../prisma/food-data-source.enum';

@InputType()
export class ImportInfoDataSourceSourceVersionCompoundUniqueInput {

    @Field(() => FoodDataSource, {nullable:false})
    dataSource!: keyof typeof FoodDataSource;

    @Field(() => String, {nullable:false})
    sourceVersion!: string;
}
