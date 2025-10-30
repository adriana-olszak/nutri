import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import { CreateRecipeIngredientDto } from '../dtos/recipe-ingredient.dto';
import { CreateRecipeInstructionDto } from '../dtos/recipe-instruction.dto';
import { CreateRecipeDto } from '../dtos/recipe.dto';

// In-memory draft management system (in a real app, consider using Redis or similar for persistence)
type DraftRecipe = {
  basic: CreateRecipeDto;
  ingredients: CreateRecipeIngredientDto[];
  instructions: CreateRecipeInstructionDto[];
  draftId: string;
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
};

@Injectable()
export class RecipeDraftsService {
  private drafts: Map<string, DraftRecipe> = new Map();

  constructor(private readonly prisma: PrismaService) {}

  async createDraft(userId?: string): Promise<{ draftId: string }> {
    const draftId = this.generateDraftId();

    const draft: DraftRecipe = {
      basic: {} as CreateRecipeDto,
      ingredients: [],
      instructions: [],
      draftId,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.drafts.set(draftId, draft);
    return { draftId };
  }

  async getDraft(draftId: string): Promise<DraftRecipe | null> {
    return this.drafts.get(draftId) || null;
  }

  async updateDraftBasic(draftId: string, data: CreateRecipeDto): Promise<DraftRecipe | null> {
    const draft = this.drafts.get(draftId);
    if (!draft) return null;

    draft.basic = data;
    draft.updatedAt = new Date();
    this.drafts.set(draftId, draft);

    return draft;
  }

  async updateDraftIngredients(draftId: string, ingredients: CreateRecipeIngredientDto[]): Promise<DraftRecipe | null> {
    const draft = this.drafts.get(draftId);
    if (!draft) return null;

    draft.ingredients = ingredients;
    draft.updatedAt = new Date();
    this.drafts.set(draftId, draft);

    return draft;
  }

  async updateDraftInstructions(draftId: string, instructions: CreateRecipeInstructionDto[]): Promise<DraftRecipe | null> {
    const draft = this.drafts.get(draftId);
    if (!draft) return null;

    draft.instructions = instructions;
    draft.updatedAt = new Date();
    this.drafts.set(draftId, draft);

    return draft;
  }

  async finalizeDraft(draftId: string): Promise<{ recipeId: string } | null> {
    // Using a transaction to ensure all or nothing is saved
    const draft = this.drafts.get(draftId);
    if (!draft) return null;

    try {
      // Create the recipe with a transaction
      const result = await this.prisma.$transaction(async (tx) => {
        // Create recipe
        const recipe = await tx.recipe.create({
          data: draft.basic
        });

        // Create ingredients
        if (draft.ingredients.length > 0) {
          await tx.recipeIngredient.createMany({
            data: draft.ingredients.map(ing => ({
              ...ing,
              recipeId: recipe.id
            }))
          });
        }

        // Create instructions
        if (draft.instructions.length > 0) {
          await tx.recipeInstructions.createMany({
            data: draft.instructions.map(ins => ({
              ...ins,
              recipeId: recipe.id
            }))
          });
        }

        return { recipeId: recipe.id };
      });

      // Delete the draft after successful finalization
      this.drafts.delete(draftId);

      return result;
    } catch (error) {
      console.error('Error finalizing draft:', error);
      return null;
    }
  }

  async deleteDraft(draftId: string): Promise<boolean> {
    return this.drafts.delete(draftId);
  }

  private generateDraftId(): string {
    // Simple UUID generation
    return 'draft-' + Math.random().toString(36).substring(2, 15) +
           Math.random().toString(36).substring(2, 15);
  }

  // For maintenance - could be called on a schedule to clean up old drafts
  cleanupOldDrafts(maxAgeHours = 24): void {
    const now = new Date();
    const maxAge = maxAgeHours * 60 * 60 * 1000; // Convert to milliseconds

    for (const [id, draft] of this.drafts.entries()) {
      const age = now.getTime() - draft.updatedAt.getTime();
      if (age > maxAge) {
        this.drafts.delete(id);
      }
    }
  }
}
