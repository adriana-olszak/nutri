import { registerEnumType } from '@nestjs/graphql';

export enum LanguageScalarFieldEnum {
    code = "code",
    name = "name"
}


registerEnumType(LanguageScalarFieldEnum, { name: 'LanguageScalarFieldEnum', description: undefined })
