import { registerEnumType } from '@nestjs/graphql';

export enum RecipeInstructionsType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    PART = "PART"
}


registerEnumType(RecipeInstructionsType, { name: 'RecipeInstructionsType', description: undefined })
