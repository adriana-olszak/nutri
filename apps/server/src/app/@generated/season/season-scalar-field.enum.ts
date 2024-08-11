import { registerEnumType } from '@nestjs/graphql';

export enum SeasonScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(SeasonScalarFieldEnum, { name: 'SeasonScalarFieldEnum', description: undefined })
