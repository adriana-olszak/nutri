export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID']['output'];
  question: Question;
  questionId: Scalars['String']['output'];
  submission: Submission;
  submissionId: Scalars['String']['output'];
  value: Scalars['JSON']['output'];
};

export type AnswerCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
  submissionId: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type AuthAccountInfoModel = {
  __typename?: 'AuthAccountInfoModel';
  email: Scalars['String']['output'];
  googleProfile?: Maybe<AuthGoogleProfile>;
  hasPassword: Scalars['Boolean']['output'];
};

export type AuthGoogleProfile = {
  __typename?: 'AuthGoogleProfile';
  email: Scalars['String']['output'];
  family_name: Scalars['String']['output'];
  given_name: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture: Scalars['String']['output'];
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthPasswordChangeInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type AuthPasswordResetConfirmationInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AuthPasswordResetRequestInput = {
  email: Scalars['String']['input'];
};

export type AuthRefreshTokenModel = {
  __typename?: 'AuthRefreshTokenModel';
  accessToken: Scalars['String']['output'];
  accessTokenExpiresAt: Scalars['DateTime']['output'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthSessionModel = {
  __typename?: 'AuthSessionModel';
  accessToken: Scalars['String']['output'];
  accessTokenExpiresAt: Scalars['DateTime']['output'];
  roles: Array<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BrandedFood = {
  __typename?: 'BrandedFood';
  brandOwner: Scalars['String']['output'];
  gtinUpc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ingredientsLabel?: Maybe<Scalars['String']['output']>;
  nutritionLabel?: Maybe<NutritionLabel>;
  servingSize?: Maybe<Scalars['Float']['output']>;
  servingUnit?: Maybe<Scalars['String']['output']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Food = {
  __typename?: 'Food';
  brandedFood?: Maybe<BrandedFood>;
  categories?: Maybe<Array<FoodCategory>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nutrients?: Maybe<Array<FoodNutrient>>;
  nutritionalValue: NutritionalValue;
  portions?: Maybe<Array<FoodPortion>>;
  scientificName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type FoodNutritionalValueArgs = {
  amount?: Scalars['Float']['input'];
};

export type FoodCategory = {
  __typename?: 'FoodCategory';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type FoodMeta = {
  __typename?: 'FoodMeta';
  currentPage: Scalars['Int']['output'];
  lastPage: Scalars['Int']['output'];
  next?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
  prev?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
};

export type FoodNutrient = {
  __typename?: 'FoodNutrient';
  amount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  median?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  nutrientId: Scalars['String']['output'];
  unitName: Scalars['String']['output'];
};

export type FoodOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  importInfoId?: InputMaybe<SortOrderInput>;
  scientificName?: InputMaybe<SortOrderInput>;
  sourceId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FoodPaginatedModel = {
  __typename?: 'FoodPaginatedModel';
  data: Array<Food>;
  meta: FoodMeta;
};

export type FoodPortion = {
  __typename?: 'FoodPortion';
  amount: Scalars['Float']['output'];
  gramWeight: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  measureUnitName: Scalars['String']['output'];
  portionDescription?: Maybe<Scalars['String']['output']>;
};

export type FoodSearchInput = {
  name: Scalars['String']['input'];
  nonBrandedBoost?: InputMaybe<Scalars['Float']['input']>;
  similarityThreshold?: InputMaybe<Scalars['Float']['input']>;
};

export type FoodSearchResult = {
  __typename?: 'FoodSearchResult';
  description: Scalars['String']['output'];
  food: Food;
  id: Scalars['ID']['output'];
  rank: Scalars['Float']['output'];
};

export type FoodWhereInput = {
  AND?: InputMaybe<Array<FoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodWhereInput>>;
  OR?: InputMaybe<Array<FoodWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  scientificName?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authLogin: AuthSessionModel;
  authLogout: Scalars['Boolean']['output'];
  authPasswordChange: Scalars['Boolean']['output'];
  authPasswordResetConfirmation: Scalars['Boolean']['output'];
  authPasswordResetRequest: Scalars['Boolean']['output'];
  authRefreshToken: AuthRefreshTokenModel;
  authRegister: AuthSessionModel;
  complete: Submission;
  createQuestion: Question;
  createQuestionnaire: Questionnaire;
  createRecipe: Recipe;
  createSection: Section;
  createSubmission: Submission;
  deleteQuestion: Question;
  deleteSection: Section;
  removeRecipe: Recipe;
  softDeleteQuestionnaire: Questionnaire;
  submitAllAnswers: Submission;
  submitAnswer: Answer;
  updateQuestion: Question;
  updateQuestionnaire: Questionnaire;
  updateRecipe: Recipe;
  updateSection: Section;
};


export type MutationAuthLoginArgs = {
  data: AuthLoginInput;
};


export type MutationAuthPasswordChangeArgs = {
  data: AuthPasswordChangeInput;
};


export type MutationAuthPasswordResetConfirmationArgs = {
  data: AuthPasswordResetConfirmationInput;
};


export type MutationAuthPasswordResetRequestArgs = {
  data: AuthPasswordResetRequestInput;
};


export type MutationAuthRegisterArgs = {
  data: AuthRegisterInput;
};


export type MutationCompleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateQuestionArgs = {
  input: QuestionCreateInput;
};


export type MutationCreateQuestionnaireArgs = {
  input: QuestionnaireCreateInput;
};


export type MutationCreateRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateSectionArgs = {
  input: SectionCreateInput;
  questionnaireVersionId: Scalars['String']['input'];
};


export type MutationCreateSubmissionArgs = {
  input: SubmissionCreateInput;
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveRecipeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSoftDeleteQuestionnaireArgs = {
  id: Scalars['String']['input'];
};


export type MutationSubmitAllAnswersArgs = {
  answers: Array<AnswerCreateManyInput>;
  submissionId: Scalars['String']['input'];
};


export type MutationSubmitAnswerArgs = {
  input: AnswerCreateManyInput;
};


export type MutationUpdateQuestionArgs = {
  id: Scalars['ID']['input'];
  input: QuestionUpdateInput;
};


export type MutationUpdateQuestionnaireArgs = {
  id: Scalars['ID']['input'];
  input: QuestionnaireUpdateInput;
};


export type MutationUpdateRecipeArgs = {
  data: RecipeUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateSectionArgs = {
  id: Scalars['ID']['input'];
  input: SectionUpdateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type NutritionLabel = {
  __typename?: 'NutritionLabel';
  addedSugars?: Maybe<Scalars['Float']['output']>;
  calcium?: Maybe<Scalars['Float']['output']>;
  calories?: Maybe<Scalars['Float']['output']>;
  cholesterol?: Maybe<Scalars['Float']['output']>;
  dietaryFiber?: Maybe<Scalars['Float']['output']>;
  householdServingFullText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  iron?: Maybe<Scalars['Float']['output']>;
  potassium?: Maybe<Scalars['Float']['output']>;
  protein?: Maybe<Scalars['Float']['output']>;
  saturatedFat?: Maybe<Scalars['Float']['output']>;
  servingsPerContainer?: Maybe<Scalars['Float']['output']>;
  sodium?: Maybe<Scalars['Float']['output']>;
  totalCarbohydrate?: Maybe<Scalars['Float']['output']>;
  totalFat?: Maybe<Scalars['Float']['output']>;
  totalSugars?: Maybe<Scalars['Float']['output']>;
  transFat?: Maybe<Scalars['Float']['output']>;
  vitaminA?: Maybe<Scalars['Float']['output']>;
  vitaminC?: Maybe<Scalars['Float']['output']>;
  vitaminD?: Maybe<Scalars['Float']['output']>;
};

export type NutritionalValue = {
  __typename?: 'NutritionalValue';
  addedSugars?: Maybe<Scalars['Float']['output']>;
  calcium?: Maybe<Scalars['Float']['output']>;
  calories?: Maybe<Scalars['Float']['output']>;
  cholesterol?: Maybe<Scalars['Float']['output']>;
  dietaryFiber?: Maybe<Scalars['Float']['output']>;
  iron?: Maybe<Scalars['Float']['output']>;
  potassium?: Maybe<Scalars['Float']['output']>;
  protein?: Maybe<Scalars['Float']['output']>;
  saturatedFat?: Maybe<Scalars['Float']['output']>;
  sodium?: Maybe<Scalars['Float']['output']>;
  totalCarbohydrate?: Maybe<Scalars['Float']['output']>;
  totalFat?: Maybe<Scalars['Float']['output']>;
  totalSugars?: Maybe<Scalars['Float']['output']>;
  transFat?: Maybe<Scalars['Float']['output']>;
  vitaminA?: Maybe<Scalars['Float']['output']>;
  vitaminB?: Maybe<Scalars['Float']['output']>;
  vitaminC?: Maybe<Scalars['Float']['output']>;
  vitaminD?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  accountInfo: AuthAccountInfoModel;
  food?: Maybe<Food>;
  foodAutosuggest: Array<FoodSearchResult>;
  paginatedFoods: FoodPaginatedModel;
  paginatedQuestionnaires: QuestionnairePaginatedModel;
  paginatedRecipes: RecipePaginatedModel;
  question: Question;
  questionnaire: Questionnaire;
  recipe: Recipe;
  section: Section;
  submission: Submission;
};


export type QueryFoodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFoodAutosuggestArgs = {
  input: FoodSearchInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaginatedFoodsArgs = {
  filterInput?: InputMaybe<FoodWhereInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortInput?: InputMaybe<FoodOrderByInput>;
};


export type QueryPaginatedQuestionnairesArgs = {
  filterInput?: InputMaybe<QuestionnaireWhereInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortInput?: InputMaybe<QuestionnaireOrderByWithRelationInput>;
};


export type QueryPaginatedRecipesArgs = {
  filterInput?: InputMaybe<RecipeWhereInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortInput?: InputMaybe<RecipeOrderByWithRelationInput>;
};


export type QueryQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuestionnaireArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipeArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySectionArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySubmissionArgs = {
  id: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  answers?: Maybe<Array<Answer>>;
  config: Scalars['JSON']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isRequired: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  section: Section;
  sectionId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type QuestionCreateInput = {
  config: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Int']['input'];
  sectionId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type QuestionUpdateInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type Questionnaire = {
  __typename?: 'Questionnaire';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPublic: Scalars['Boolean']['output'];
  latestVersion: QuestionnaireVersion;
  submissions?: Maybe<Array<Submission>>;
  tenant?: Maybe<Tenant>;
  tenantId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versions?: Maybe<Array<QuestionnaireVersion>>;
};

export type QuestionnaireCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

export type QuestionnaireMeta = {
  __typename?: 'QuestionnaireMeta';
  currentPage: Scalars['Int']['output'];
  lastPage: Scalars['Int']['output'];
  next?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
  prev?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
};

export type QuestionnaireOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  isPublic?: InputMaybe<SortOrder>;
  tenantId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionnairePaginatedModel = {
  __typename?: 'QuestionnairePaginatedModel';
  data: Array<Questionnaire>;
  meta: QuestionnaireMeta;
};

export type QuestionnaireUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isPublic?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionnaireVersion = {
  __typename?: 'QuestionnaireVersion';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  questionnaire: Questionnaire;
  questionnaireId: Scalars['String']['output'];
  sections?: Maybe<Array<Section>>;
  submissions?: Maybe<Array<Submission>>;
  updatedAt: Scalars['DateTime']['output'];
  versionNumber: Scalars['Int']['output'];
};

export type QuestionnaireWhereInput = {
  AND?: InputMaybe<Array<QuestionnaireWhereInput>>;
  NOT?: InputMaybe<Array<QuestionnaireWhereInput>>;
  OR?: InputMaybe<Array<QuestionnaireWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isPublic?: InputMaybe<BoolFilter>;
  tenantId?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Recipe = {
  __typename?: 'Recipe';
  categories?: Maybe<Array<RecipeCategory>>;
  cookingTime?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<RecipeImage>>;
  ingredients?: Maybe<Array<RecipeIngredient>>;
  instructions?: Maybe<Array<RecipeInstructions>>;
  nutritionalValue?: Maybe<NutritionalValue>;
  parts?: Maybe<Array<RecipePart>>;
  prepTime?: Maybe<Scalars['String']['output']>;
  seasons?: Maybe<Array<Season>>;
  servingsMax?: Maybe<Scalars['Int']['output']>;
  servingsMin?: Maybe<Scalars['Int']['output']>;
  servingsText?: Maybe<Scalars['String']['output']>;
  sourceUrl?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type RecipeNutritionalValueArgs = {
  servings?: InputMaybe<Scalars['Float']['input']>;
};

export type RecipeCategory = {
  __typename?: 'RecipeCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type RecipeCategoryListRelationFilter = {
  every?: InputMaybe<RecipeCategoryWhereInput>;
  none?: InputMaybe<RecipeCategoryWhereInput>;
  some?: InputMaybe<RecipeCategoryWhereInput>;
};

export type RecipeCategoryWhereInput = {
  AND?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  NOT?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  OR?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  name?: InputMaybe<StringFilter>;
};

export type RecipeCategoryWhereUniqueInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeCreateInput = {
  categories?: InputMaybe<Array<RecipeCategoryWhereUniqueInput>>;
  cookingTime?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  instructions?: InputMaybe<Array<RecipeInstructionsCreateWithoutRecipeInput>>;
  parts?: InputMaybe<RecipePartCreateWithoutRecipeInput>;
  prepTime?: InputMaybe<Scalars['String']['input']>;
  seasons?: InputMaybe<Array<SeasonWhereUniqueInput>>;
  servingsMax?: InputMaybe<Scalars['Int']['input']>;
  servingsMin?: InputMaybe<Scalars['Int']['input']>;
  servingsText?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagCreateWithoutRecipesInput>>;
  title: Scalars['String']['input'];
};

export type RecipeImage = {
  __typename?: 'RecipeImage';
  altText?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  extraInfo?: Maybe<Scalars['String']['output']>;
  food?: Maybe<Food>;
  foodId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ingredientText?: Maybe<Scalars['String']['output']>;
  maxQuantity?: Maybe<Scalars['Float']['output']>;
  minQuantity?: Maybe<Scalars['Float']['output']>;
  nutritionalValue: NutritionalValue;
  partId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Float']['output'];
  quantityText?: Maybe<Scalars['String']['output']>;
  recipeId: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  unitText?: Maybe<Scalars['String']['output']>;
};


export type RecipeIngredientNutritionalValueArgs = {
  servings?: InputMaybe<Scalars['Float']['input']>;
};

export type RecipeIngredientWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  OR?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeInstructions = {
  __typename?: 'RecipeInstructions';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  listIndex?: Maybe<Scalars['Int']['output']>;
  order: Scalars['Int']['output'];
  recipeId: Scalars['String']['output'];
  type: RecipeInstructionsType;
};

export type RecipeInstructionsCreateWithoutRecipeInput = {
  content: Scalars['String']['input'];
  listIndex?: InputMaybe<Scalars['Int']['input']>;
  order: Scalars['Int']['input'];
  type: RecipeInstructionsType;
};

export enum RecipeInstructionsType {
  Image = 'IMAGE',
  Part = 'PART',
  Text = 'TEXT'
}

export type RecipeMeta = {
  __typename?: 'RecipeMeta';
  currentPage: Scalars['Int']['output'];
  lastPage: Scalars['Int']['output'];
  next?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
  prev?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
};

export type RecipeOrderByWithRelationInput = {
  cookingTime?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  prepTime?: InputMaybe<SortOrderInput>;
  servingsMax?: InputMaybe<SortOrderInput>;
  servingsMin?: InputMaybe<SortOrderInput>;
  servingsText?: InputMaybe<SortOrderInput>;
  sourceId?: InputMaybe<SortOrderInput>;
  sourceUrl?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RecipePaginatedModel = {
  __typename?: 'RecipePaginatedModel';
  data: Array<Recipe>;
  meta: RecipeMeta;
};

export type RecipePart = {
  __typename?: 'RecipePart';
  id: Scalars['ID']['output'];
  ingredients?: Maybe<Array<RecipeIngredient>>;
  name: Scalars['String']['output'];
  nutritionalValue: NutritionalValue;
  recipeId: Scalars['String']['output'];
};


export type RecipePartNutritionalValueArgs = {
  servings?: InputMaybe<Scalars['Float']['input']>;
};

export type RecipePartCreateWithoutRecipeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  name: Scalars['String']['input'];
};

export type RecipeUpdateInput = {
  categories?: InputMaybe<Array<RecipeCategoryWhereUniqueInput>>;
  cookingTime?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  instructions?: InputMaybe<Array<RecipeInstructionsCreateWithoutRecipeInput>>;
  parts?: InputMaybe<RecipePartCreateWithoutRecipeInput>;
  prepTime?: InputMaybe<Scalars['String']['input']>;
  seasons?: InputMaybe<Array<SeasonWhereUniqueInput>>;
  servingsMax?: InputMaybe<Scalars['Int']['input']>;
  servingsMin?: InputMaybe<Scalars['Int']['input']>;
  servingsText?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagCreateWithoutRecipesInput>>;
  title: Scalars['String']['input'];
};

export type RecipeWhereInput = {
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  NOT?: InputMaybe<Array<RecipeWhereInput>>;
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  categories?: InputMaybe<RecipeCategoryListRelationFilter>;
  cookingTime?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  prepTime?: InputMaybe<StringNullableFilter>;
  seasons?: InputMaybe<SeasonListRelationFilter>;
  servingsMax?: InputMaybe<IntNullableFilter>;
  servingsMin?: InputMaybe<IntNullableFilter>;
  servingsText?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringNullableFilter>;
  sourceUrl?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Season = {
  __typename?: 'Season';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SeasonListRelationFilter = {
  every?: InputMaybe<SeasonWhereInput>;
  none?: InputMaybe<SeasonWhereInput>;
  some?: InputMaybe<SeasonWhereInput>;
};

export type SeasonWhereInput = {
  AND?: InputMaybe<Array<SeasonWhereInput>>;
  NOT?: InputMaybe<Array<SeasonWhereInput>>;
  OR?: InputMaybe<Array<SeasonWhereInput>>;
  name?: InputMaybe<StringFilter>;
};

export type SeasonWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Section = {
  __typename?: 'Section';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  questionnaireVersionId: Scalars['String']['output'];
  questions?: Maybe<Array<Question>>;
  title: Scalars['String']['output'];
};

export type SectionCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type SectionUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Submission = {
  __typename?: 'Submission';
  answers?: Maybe<Array<Answer>>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isComplete: Scalars['Boolean']['output'];
  questionnaire: Questionnaire;
  questionnaireId: Scalars['String']['output'];
  questionnaireVersion: QuestionnaireVersion;
  questionnaireVersionId: Scalars['String']['output'];
  startedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type SubmissionCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  questionnaireId: Scalars['String']['input'];
  questionnaireVersionId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TagCreateWithoutRecipesInput = {
  name: Scalars['String']['input'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  name?: InputMaybe<StringFilter>;
};

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};
