import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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

export type ActionResponseModel = {
  __typename?: 'ActionResponseModel';
  accepted: Scalars['Boolean']['output'];
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

export type ColumnView = {
  __typename?: 'ColumnView';
  columnId: Scalars['Int']['output'];
  columnType: ColumnViewType;
  filter?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  visible: Scalars['Boolean']['output'];
  width: Scalars['Int']['output'];
};

export enum ColumnViewType {
  MatchesActions = 'MATCHES_ACTIONS',
  MatchesCreatedAt = 'MATCHES_CREATED_AT',
  MatchesIngredientText = 'MATCHES_INGREDIENT_TEXT',
  MatchesSelectedFoodMatchId = 'MATCHES_SELECTED_FOOD_MATCH_ID',
  MatchesStatus = 'MATCHES_STATUS',
  MatchesUpdatedAt = 'MATCHES_UPDATED_AT',
  PatientsAge = 'PATIENTS_AGE',
  PatientsAllergies = 'PATIENTS_ALLERGIES',
  PatientsBmi = 'PATIENTS_BMI',
  PatientsDietaryPreferences = 'PATIENTS_DIETARY_PREFERENCES',
  PatientsDietaryRestrictions = 'PATIENTS_DIETARY_RESTRICTIONS',
  PatientsFitnessLevel = 'PATIENTS_FITNESS_LEVEL',
  PatientsHealthProblems = 'PATIENTS_HEALTH_PROBLEMS',
  PatientsHeight = 'PATIENTS_HEIGHT',
  PatientsName = 'PATIENTS_NAME',
  PatientsWeight = 'PATIENTS_WEIGHT',
  PollsAuthor = 'POLLS_AUTHOR',
  PollsCreatedDate = 'POLLS_CREATED_DATE',
  PollsLastModifiedDate = 'POLLS_LAST_MODIFIED_DATE',
  PollsName = 'POLLS_NAME',
  PollsQuestionCount = 'POLLS_QUESTION_COUNT',
  PollsStatus = 'POLLS_STATUS',
  PollsTags = 'POLLS_TAGS',
  PollsUsedCount = 'POLLS_USED_COUNT',
  RecipesCookingTime = 'RECIPES_COOKING_TIME',
  RecipesCreatedAt = 'RECIPES_CREATED_AT',
  RecipesDescription = 'RECIPES_DESCRIPTION',
  RecipesPrepTime = 'RECIPES_PREP_TIME',
  RecipesServingsMax = 'RECIPES_SERVINGS_MAX',
  RecipesServingsMin = 'RECIPES_SERVINGS_MIN',
  RecipesServingsText = 'RECIPES_SERVINGS_TEXT',
  RecipesSourceUrl = 'RECIPES_SOURCE_URL',
  RecipesTitle = 'RECIPES_TITLE',
  RecipesUpdatedAt = 'RECIPES_UPDATED_AT'
}

export enum ComparisonOperator {
  Between = 'BETWEEN',
  Contains = 'CONTAINS',
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  In = 'IN',
  IsEmpty = 'IS_EMPTY',
  IsNoneOf = 'IS_NONE_OF',
  IsNotEmpty = 'IS_NOT_EMPTY',
  IsNull = 'IS_NULL',
  Lt = 'LT',
  Lte = 'LTE',
  NotContains = 'NOT_CONTAINS',
  StartsWith = 'STARTS_WITH'
}

export type CreateColumnViewInput = {
  columnId: Scalars['Int']['input'];
  columnType: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  visible: Scalars['Boolean']['input'];
  width: Scalars['Int']['input'];
};

export type CreateTableViewDefinitionInput = {
  columnView: Array<CreateColumnViewInput>;
  filters?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  isPreset: Scalars['Boolean']['input'];
  isShared: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  sorting?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['String']['input'];
  tableType: Scalars['String']['input'];
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

export type FilterPropertyMetadata = {
  __typename?: 'FilterPropertyMetadata';
  name: Scalars['String']['output'];
  operators: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Food = {
  __typename?: 'Food';
  category?: Maybe<FoodCategory>;
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
  conversionFactor: Scalars['Float']['output'];
  gramWeight: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
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

export type ManualReviewMatchesFilterInput = {
  AND?: InputMaybe<Array<ManualReviewMatchesFilterInputAbstract>>;
  NOT?: InputMaybe<ManualReviewMatchesFilterInputAbstract>;
  OR?: InputMaybe<Array<ManualReviewMatchesFilterInputAbstract>>;
  filter?: InputMaybe<ManualReviewMatchesFilterItem>;
};

export type ManualReviewMatchesFilterInputAbstract = {
  AND?: InputMaybe<Array<ManualReviewMatchesFilterInputAbstract>>;
  NOT?: InputMaybe<ManualReviewMatchesFilterInputAbstract>;
  OR?: InputMaybe<Array<ManualReviewMatchesFilterInputAbstract>>;
  filter?: InputMaybe<ManualReviewMatchesFilterItem>;
};

export type ManualReviewMatchesFilterItem = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  includeEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  operation: ComparisonOperator;
  property: ManualReviewMatchesFilterItemPropertyType;
  /** The value to filter by. Type depends on the property. */
  value: Scalars['String']['input'];
};

export enum ManualReviewMatchesFilterItemPropertyType {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type Match = {
  __typename?: 'Match';
  createdAt: Scalars['DateTime']['output'];
  foodMatches?: Maybe<Array<MatchFood>>;
  id: Scalars['ID']['output'];
  ingredientText: Scalars['String']['output'];
  manualReviews?: Maybe<Array<MatchManualReview>>;
  recipeIngredient: RecipeIngredient;
  selectedFoodMatch?: Maybe<MatchFood>;
  selectedFoodMatchId?: Maybe<Scalars['String']['output']>;
  status: MatchStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type MatchFood = {
  __typename?: 'MatchFood';
  algorithmData?: Maybe<Scalars['JSON']['output']>;
  algorithmVersion?: Maybe<Scalars['String']['output']>;
  confidence?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  food: Food;
  foodId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  matchId: Scalars['String']['output'];
  matchQuality?: Maybe<MatchQuality>;
  matchType: MatchType;
  rank?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MatchManualReview = {
  __typename?: 'MatchManualReview';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  match: Match;
  matchId: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  reviewStatus: ReviewStatus;
  reviewer?: Maybe<User>;
  reviewerId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MatchMeta = {
  __typename?: 'MatchMeta';
  currentPage: Scalars['Int']['output'];
  lastPage: Scalars['Int']['output'];
  next?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
  prev?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
};

export type MatchOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ingredientText?: InputMaybe<SortOrder>;
  selectedFoodMatchId?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MatchPaginatedModel = {
  __typename?: 'MatchPaginatedModel';
  data: Array<Match>;
  meta: MatchMeta;
};

export enum MatchQuality {
  Exact = 'EXACT',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Poor = 'POOR'
}

export enum MatchStatus {
  Approved = 'APPROVED',
  AutoApproved = 'AUTO_APPROVED',
  AutoMatchingFailed = 'AUTO_MATCHING_FAILED',
  AutoMatchingInProgress = 'AUTO_MATCHING_IN_PROGRESS',
  InReview = 'IN_REVIEW',
  NeedsRematch = 'NEEDS_REMATCH',
  PendingMatch = 'PENDING_MATCH',
  PendingReview = 'PENDING_REVIEW',
  Rejected = 'REJECTED'
}

export enum MatchType {
  Automatic = 'AUTOMATIC',
  Manual = 'MANUAL'
}

export type Mutation = {
  __typename?: 'Mutation';
  approveMatch: Match;
  archiveTableViewDefinition: ActionResponseModel;
  authLogin: AuthSessionModel;
  authLogout: Scalars['Boolean']['output'];
  authPasswordChange: Scalars['Boolean']['output'];
  authPasswordResetConfirmation: Scalars['Boolean']['output'];
  authPasswordResetRequest: Scalars['Boolean']['output'];
  authRefreshToken: AuthRefreshTokenModel;
  authRegister: AuthSessionModel;
  cancelManualFoodSelection: MatchManualReview;
  complete: Submission;
  completeManualFoodSelection: Match;
  createQuestion: Question;
  createQuestionnaire: Questionnaire;
  createRecipe: Recipe;
  createSection: Section;
  createSubmission: Submission;
  createTableViewDefinition: TableViewDefinition;
  deleteQuestion: Question;
  deleteSection: Section;
  initiateManualFoodSelection: MatchManualReview;
  initiateManualReview: MatchManualReview;
  rejectMatch: Match;
  removeRecipe: Recipe;
  requestFurtherReview: MatchManualReview;
  softDeleteQuestionnaire: Questionnaire;
  submitAllAnswers: Submission;
  submitAnswer: Answer;
  updateQuestion: Question;
  updateQuestionnaire: Questionnaire;
  updateRecipe: Recipe;
  updateReviewStatus: MatchManualReview;
  updateSection: Section;
  updateTableViewDefinition: TableViewDefinition;
};


export type MutationApproveMatchArgs = {
  matchFoodId: Scalars['ID']['input'];
  reviewId: Scalars['ID']['input'];
};


export type MutationArchiveTableViewDefinitionArgs = {
  id: Scalars['ID']['input'];
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


export type MutationCancelManualFoodSelectionArgs = {
  reviewId: Scalars['ID']['input'];
};


export type MutationCompleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCompleteManualFoodSelectionArgs = {
  foodId: Scalars['ID']['input'];
  reviewId: Scalars['ID']['input'];
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


export type MutationCreateTableViewDefinitionArgs = {
  input: CreateTableViewDefinitionInput;
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInitiateManualFoodSelectionArgs = {
  reviewId: Scalars['ID']['input'];
};


export type MutationInitiateManualReviewArgs = {
  matchId: Scalars['ID']['input'];
};


export type MutationRejectMatchArgs = {
  reason?: InputMaybe<Scalars['String']['input']>;
  reviewId: Scalars['ID']['input'];
};


export type MutationRemoveRecipeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRequestFurtherReviewArgs = {
  reason: Scalars['String']['input'];
  reviewId: Scalars['ID']['input'];
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


export type MutationUpdateReviewStatusArgs = {
  reviewId: Scalars['ID']['input'];
  status: ReviewStatus;
};


export type MutationUpdateSectionArgs = {
  id: Scalars['ID']['input'];
  input: SectionUpdateInput;
};


export type MutationUpdateTableViewDefinitionArgs = {
  updateTableViewDefinitionInput: UpdateTableViewDefinitionInput;
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
  getAutoApprovedMatches: Array<Match>;
  getMatchDetails: Match;
  getReviewDetails: MatchManualReview;
  getReviewHistory: Array<MatchManualReview>;
  paginatedFoods: FoodPaginatedModel;
  paginatedMatches: MatchPaginatedModel;
  paginatedQuestionnaires: QuestionnairePaginatedModel;
  paginatedRecipes: RecipePaginatedModel;
  question: Question;
  questionnaire: Questionnaire;
  recipe: Recipe;
  section: Section;
  submission: Submission;
  tableViewDefinition: TableViewDefinition;
  tableViewDefinitions: Array<TableViewDefinition>;
};


export type QueryFoodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFoodAutosuggestArgs = {
  input: FoodSearchInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAutoApprovedMatchesArgs = {
  limit?: Scalars['Float']['input'];
  offset?: Scalars['Float']['input'];
};


export type QueryGetMatchDetailsArgs = {
  matchId: Scalars['ID']['input'];
};


export type QueryGetReviewDetailsArgs = {
  reviewId: Scalars['ID']['input'];
};


export type QueryGetReviewHistoryArgs = {
  matchId: Scalars['ID']['input'];
};


export type QueryPaginatedFoodsArgs = {
  filterInput?: InputMaybe<FoodWhereInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortInput?: InputMaybe<FoodOrderByInput>;
};


export type QueryPaginatedMatchesArgs = {
  filterInput?: InputMaybe<ManualReviewMatchesFilterInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortInput?: InputMaybe<MatchOrderByInput>;
};


export type QueryPaginatedQuestionnairesArgs = {
  filterInput?: InputMaybe<QuestionnaireWhereInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortInput?: InputMaybe<QuestionnaireOrderByWithRelationInput>;
};


export type QueryPaginatedRecipesArgs = {
  filterInput?: InputMaybe<RecipeFilterInput>;
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


export type QueryTableViewDefinitionArgs = {
  id: Scalars['ID']['input'];
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

export type RecipeFilterInput = {
  AND?: InputMaybe<Array<RecipeFilterInputAbstract>>;
  NOT?: InputMaybe<RecipeFilterInputAbstract>;
  OR?: InputMaybe<Array<RecipeFilterInputAbstract>>;
  filter?: InputMaybe<RecipeFilterItem>;
};

export type RecipeFilterInputAbstract = {
  AND?: InputMaybe<Array<RecipeFilterInputAbstract>>;
  NOT?: InputMaybe<RecipeFilterInputAbstract>;
  OR?: InputMaybe<Array<RecipeFilterInputAbstract>>;
  filter?: InputMaybe<RecipeFilterItem>;
};

export type RecipeFilterItem = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  includeEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  operation: ComparisonOperator;
  property: RecipeFilterItemPropertyType;
  /** The value to filter by. Type depends on the property. */
  value: Scalars['String']['input'];
};

export enum RecipeFilterItemPropertyType {
  CookingTime = 'cookingTime',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  PrepTime = 'prepTime',
  ServingsMax = 'servingsMax',
  ServingsMin = 'servingsMin',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

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

export enum ReviewStatus {
  Approved = 'APPROVED',
  InProgress = 'IN_PROGRESS',
  ManualSelection = 'MANUAL_SELECTION',
  NeedsFurtherReview = 'NEEDS_FURTHER_REVIEW',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum Roles {
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export type Season = {
  __typename?: 'Season';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
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

export enum TableIdType {
  FavoriteRecipes = 'FAVORITE_RECIPES',
  Ingredients = 'INGREDIENTS',
  ManualReviewsFoodMatches = 'MANUAL_REVIEWS_FOOD_MATCHES',
  ManualReviewsMatches = 'MANUAL_REVIEWS_MATCHES',
  MealPlans = 'MEAL_PLANS',
  Patients = 'PATIENTS',
  Polls = 'POLLS',
  RecentlyAddedRecipes = 'RECENTLY_ADDED_RECIPES',
  Recipes = 'RECIPES',
  ShoppingLists = 'SHOPPING_LISTS'
}

export type TableViewDefinition = {
  __typename?: 'TableViewDefinition';
  columnView: Array<ColumnView>;
  createdAt: Scalars['DateTime']['output'];
  filters?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPreset: Scalars['Boolean']['output'];
  isShared: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  possibleFilters: Array<FilterPropertyMetadata>;
  sorting?: Maybe<Scalars['String']['output']>;
  tableId: TableIdType;
  tableType: TableViewType;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export enum TableViewType {
  Ingredients = 'INGREDIENTS',
  ManualReviews = 'MANUAL_REVIEWS',
  MealPlans = 'MEAL_PLANS',
  Patients = 'PATIENTS',
  Polls = 'POLLS',
  Recipes = 'RECIPES',
  ShoppingLists = 'SHOPPING_LISTS'
}

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TagCreateWithoutRecipesInput = {
  name: Scalars['String']['input'];
};

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UpdateColumnViewInput = {
  columnId?: InputMaybe<Scalars['Int']['input']>;
  columnType?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTableViewDefinitionInput = {
  columns?: InputMaybe<Array<UpdateColumnViewInput>>;
  filters?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isPreset?: InputMaybe<Scalars['Boolean']['input']>;
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  googleProfile?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  password?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Roles>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthLoginMutationVariables = Exact<{
  data: AuthLoginInput;
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', authLogin: { __typename?: 'AuthSessionModel', userId: string, accessToken: string, roles: Array<string>, accessTokenExpiresAt: any } };

export type AuthLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthLogoutMutation = { __typename?: 'Mutation', authLogout: boolean };

export type AuthPasswordChangeMutationVariables = Exact<{
  data: AuthPasswordChangeInput;
}>;


export type AuthPasswordChangeMutation = { __typename?: 'Mutation', authPasswordChange: boolean };

export type AuthPasswordResetConfirmationMutationVariables = Exact<{
  data: AuthPasswordResetConfirmationInput;
}>;


export type AuthPasswordResetConfirmationMutation = { __typename?: 'Mutation', authPasswordResetConfirmation: boolean };

export type AuthPasswordResetRequestMutationVariables = Exact<{
  data: AuthPasswordResetRequestInput;
}>;


export type AuthPasswordResetRequestMutation = { __typename?: 'Mutation', authPasswordResetRequest: boolean };

export type AuthRefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthRefreshTokenMutation = { __typename?: 'Mutation', authRefreshToken: { __typename?: 'AuthRefreshTokenModel', accessToken: string, accessTokenExpiresAt: any } };

export type AuthRegisterMutationVariables = Exact<{
  data: AuthRegisterInput;
}>;


export type AuthRegisterMutation = { __typename?: 'Mutation', authRegister: { __typename?: 'AuthSessionModel', userId: string, accessToken: string, accessTokenExpiresAt: any, roles: Array<string> } };

export type ApproveMatchMutationVariables = Exact<{
  reviewId: Scalars['ID']['input'];
  matchFoodId: Scalars['ID']['input'];
}>;


export type ApproveMatchMutation = { __typename?: 'Mutation', approveMatch: { __typename?: 'Match', id: string, status: MatchStatus } };

export type CancelManualFoodSelectionMutationVariables = Exact<{
  reviewId: Scalars['ID']['input'];
}>;


export type CancelManualFoodSelectionMutation = { __typename?: 'Mutation', cancelManualFoodSelection: { __typename?: 'MatchManualReview', id: string, reviewStatus: ReviewStatus } };

export type CompleteManualFoodSelectionMutationVariables = Exact<{
  reviewId: Scalars['ID']['input'];
  foodId: Scalars['ID']['input'];
}>;


export type CompleteManualFoodSelectionMutation = { __typename?: 'Mutation', completeManualFoodSelection: { __typename?: 'Match', id: string, status: MatchStatus } };

export type InitiateManualFoodSelectionMutationVariables = Exact<{
  reviewId: Scalars['ID']['input'];
}>;


export type InitiateManualFoodSelectionMutation = { __typename?: 'Mutation', initiateManualFoodSelection: { __typename?: 'MatchManualReview', id: string, reviewStatus: ReviewStatus } };

export type InitiateManualReviewMutationVariables = Exact<{
  matchId: Scalars['ID']['input'];
}>;


export type InitiateManualReviewMutation = { __typename?: 'Mutation', initiateManualReview: { __typename?: 'MatchManualReview', id: string, reviewStatus: ReviewStatus, match: { __typename?: 'Match', id: string, status: MatchStatus } } };

export type RejectMatchMutationVariables = Exact<{
  reviewId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}>;


export type RejectMatchMutation = { __typename?: 'Mutation', rejectMatch: { __typename?: 'Match', id: string, status: MatchStatus } };

export type RequestFurtherReviewMutationVariables = Exact<{
  reviewId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
}>;


export type RequestFurtherReviewMutation = { __typename?: 'Mutation', requestFurtherReview: { __typename?: 'MatchManualReview', id: string, reviewStatus: ReviewStatus, notes?: string | null } };

export type UpdateReviewStatusMutationVariables = Exact<{
  reviewId: Scalars['ID']['input'];
  status: ReviewStatus;
}>;


export type UpdateReviewStatusMutation = { __typename?: 'Mutation', updateReviewStatus: { __typename?: 'MatchManualReview', id: string, reviewStatus: ReviewStatus } };

export type ArchiveTableViewDefinitionMutationVariables = Exact<{
  archiveTableViewDefinitionId: Scalars['ID']['input'];
}>;


export type ArchiveTableViewDefinitionMutation = { __typename?: 'Mutation', archiveTableViewDefinition: { __typename?: 'ActionResponseModel', accepted: boolean } };

export type CreateTableViewDefinitionMutationVariables = Exact<{
  input: CreateTableViewDefinitionInput;
}>;


export type CreateTableViewDefinitionMutation = { __typename?: 'Mutation', createTableViewDefinition: { __typename?: 'TableViewDefinition', id: string } };

export type UpdateTableViewDefinitionMutationVariables = Exact<{
  updateTableViewDefinitionInput: UpdateTableViewDefinitionInput;
}>;


export type UpdateTableViewDefinitionMutation = { __typename?: 'Mutation', updateTableViewDefinition: { __typename?: 'TableViewDefinition', id: string } };

export type AccountInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountInfoQuery = { __typename?: 'Query', accountInfo: { __typename?: 'AuthAccountInfoModel', email: string, hasPassword: boolean, googleProfile?: { __typename?: 'AuthGoogleProfile', name: string, given_name: string, family_name: string, locale: string, email: string, picture: string } | null } };

export type FoodAutosuggestQueryVariables = Exact<{
  input: FoodSearchInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FoodAutosuggestQuery = { __typename?: 'Query', foodAutosuggest: Array<{ __typename?: 'FoodSearchResult', description: string, rank: number, food: { __typename?: 'Food', description: string, id: string } }> };

export type GetMatchDetailsQueryVariables = Exact<{
  matchId: Scalars['ID']['input'];
}>;


export type GetMatchDetailsQuery = { __typename?: 'Query', getMatchDetails: { __typename?: 'Match', id: string, status: MatchStatus, foodMatches?: Array<{ __typename?: 'MatchFood', id: string, confidence?: number | null, matchType: MatchType, food: { __typename?: 'Food', id: string, description: string } }> | null, manualReviews?: Array<{ __typename?: 'MatchManualReview', id: string, reviewStatus: ReviewStatus, notes?: string | null }> | null } };

export type PaginatedMatchesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  filterInput?: InputMaybe<ManualReviewMatchesFilterInput>;
}>;


export type PaginatedMatchesQuery = { __typename?: 'Query', paginatedMatches: { __typename?: 'MatchPaginatedModel', data: Array<{ __typename?: 'Match', id: string, status: MatchStatus, ingredientText: string, selectedFoodMatchId?: string | null, updatedAt: any, createdAt: any }>, meta: { __typename?: 'MatchMeta', lastPage: number, total: number, currentPage: number } } };

export type PaginatedRecipesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  filterInput?: InputMaybe<RecipeFilterInput>;
}>;


export type PaginatedRecipesQuery = { __typename?: 'Query', paginatedRecipes: { __typename?: 'RecipePaginatedModel', data: Array<{ __typename?: 'Recipe', cookingTime?: string | null, prepTime?: string | null, description?: string | null, id: string, servingsMax?: number | null, servingsMin?: number | null, servingsText?: string | null, sourceUrl?: string | null, title: string, createdAt: any, updatedAt: any, parts?: Array<{ __typename?: 'RecipePart', name: string, ingredients?: Array<{ __typename?: 'RecipeIngredient', id: string, extraInfo?: string | null, ingredientText?: string | null, quantity: number, maxQuantity?: number | null, minQuantity?: number | null, unit: string, unitText?: string | null }> | null }> | null, categories?: Array<{ __typename?: 'RecipeCategory', name: string }> | null, ingredients?: Array<{ __typename?: 'RecipeIngredient', id: string, extraInfo?: string | null, ingredientText?: string | null, quantity: number, maxQuantity?: number | null, minQuantity?: number | null, unit: string, unitText?: string | null }> | null, images?: Array<{ __typename?: 'RecipeImage', altText?: string | null, url: string }> | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null, seasons?: Array<{ __typename?: 'Season', id: string, name: string }> | null, instructions?: Array<{ __typename?: 'RecipeInstructions', content: string, listIndex?: number | null, order: number, type: RecipeInstructionsType }> | null }>, meta: { __typename?: 'RecipeMeta', lastPage: number, total: number, currentPage: number } } };

export type TableViewDefinitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type TableViewDefinitionsQuery = { __typename?: 'Query', tableViewDefinitions: Array<{ __typename?: 'TableViewDefinition', id: string, name: string, tableType: TableViewType, tableId: TableIdType, order: number, icon?: string | null, filters?: string | null, sorting?: string | null, isPreset: boolean, isShared: boolean, createdAt: any, updatedAt: any, columnView: Array<{ __typename?: 'ColumnView', columnId: number, columnType: ColumnViewType, name: string, width: number, visible: boolean, filter?: string | null }>, possibleFilters: Array<{ __typename?: 'FilterPropertyMetadata', name: string, type: string, operators: Array<string> }> }> };


export const AuthLoginDocument = gql`
    mutation AuthLogin($data: AuthLoginInput!) {
  authLogin(data: $data) {
    userId
    accessToken
    roles
    accessTokenExpiresAt
  }
}
    `;
export const AuthLogoutDocument = gql`
    mutation AuthLogout {
  authLogout
}
    `;
export const AuthPasswordChangeDocument = gql`
    mutation AuthPasswordChange($data: AuthPasswordChangeInput!) {
  authPasswordChange(data: $data)
}
    `;
export const AuthPasswordResetConfirmationDocument = gql`
    mutation AuthPasswordResetConfirmation($data: AuthPasswordResetConfirmationInput!) {
  authPasswordResetConfirmation(data: $data)
}
    `;
export const AuthPasswordResetRequestDocument = gql`
    mutation AuthPasswordResetRequest($data: AuthPasswordResetRequestInput!) {
  authPasswordResetRequest(data: $data)
}
    `;
export const AuthRefreshTokenDocument = gql`
    mutation AuthRefreshToken {
  authRefreshToken {
    accessToken
    accessTokenExpiresAt
  }
}
    `;
export const AuthRegisterDocument = gql`
    mutation AuthRegister($data: AuthRegisterInput!) {
  authRegister(data: $data) {
    userId
    accessToken
    accessTokenExpiresAt
    roles
  }
}
    `;
export const ApproveMatchDocument = gql`
    mutation ApproveMatch($reviewId: ID!, $matchFoodId: ID!) {
  approveMatch(reviewId: $reviewId, matchFoodId: $matchFoodId) {
    id
    status
  }
}
    `;
export const CancelManualFoodSelectionDocument = gql`
    mutation CancelManualFoodSelection($reviewId: ID!) {
  cancelManualFoodSelection(reviewId: $reviewId) {
    id
    reviewStatus
  }
}
    `;
export const CompleteManualFoodSelectionDocument = gql`
    mutation CompleteManualFoodSelection($reviewId: ID!, $foodId: ID!) {
  completeManualFoodSelection(reviewId: $reviewId, foodId: $foodId) {
    id
    status
  }
}
    `;
export const InitiateManualFoodSelectionDocument = gql`
    mutation InitiateManualFoodSelection($reviewId: ID!) {
  initiateManualFoodSelection(reviewId: $reviewId) {
    id
    reviewStatus
  }
}
    `;
export const InitiateManualReviewDocument = gql`
    mutation InitiateManualReview($matchId: ID!) {
  initiateManualReview(matchId: $matchId) {
    id
    reviewStatus
    match {
      id
      status
    }
  }
}
    `;
export const RejectMatchDocument = gql`
    mutation RejectMatch($reviewId: ID!, $reason: String) {
  rejectMatch(reviewId: $reviewId, reason: $reason) {
    id
    status
  }
}
    `;
export const RequestFurtherReviewDocument = gql`
    mutation RequestFurtherReview($reviewId: ID!, $reason: String!) {
  requestFurtherReview(reviewId: $reviewId, reason: $reason) {
    id
    reviewStatus
    notes
  }
}
    `;
export const UpdateReviewStatusDocument = gql`
    mutation UpdateReviewStatus($reviewId: ID!, $status: ReviewStatus!) {
  updateReviewStatus(reviewId: $reviewId, status: $status) {
    id
    reviewStatus
  }
}
    `;
export const ArchiveTableViewDefinitionDocument = gql`
    mutation ArchiveTableViewDefinition($archiveTableViewDefinitionId: ID!) {
  archiveTableViewDefinition(id: $archiveTableViewDefinitionId) {
    accepted
  }
}
    `;
export const CreateTableViewDefinitionDocument = gql`
    mutation CreateTableViewDefinition($input: CreateTableViewDefinitionInput!) {
  createTableViewDefinition(input: $input) {
    id
  }
}
    `;
export const UpdateTableViewDefinitionDocument = gql`
    mutation UpdateTableViewDefinition($updateTableViewDefinitionInput: UpdateTableViewDefinitionInput!) {
  updateTableViewDefinition(
    updateTableViewDefinitionInput: $updateTableViewDefinitionInput
  ) {
    id
  }
}
    `;
export const AccountInfoDocument = gql`
    query AccountInfo {
  accountInfo {
    email
    hasPassword
    googleProfile {
      name
      given_name
      family_name
      locale
      email
      picture
    }
  }
}
    `;
export const FoodAutosuggestDocument = gql`
    query FoodAutosuggest($input: FoodSearchInput!, $limit: Int) {
  foodAutosuggest(input: $input, limit: $limit) {
    description
    rank
    food {
      description
      id
    }
  }
}
    `;
export const GetMatchDetailsDocument = gql`
    query GetMatchDetails($matchId: ID!) {
  getMatchDetails(matchId: $matchId) {
    id
    status
    foodMatches {
      id
      confidence
      matchType
      food {
        id
        description
      }
    }
    manualReviews {
      id
      reviewStatus
      notes
    }
  }
}
    `;
export const PaginatedMatchesDocument = gql`
    query PaginatedMatches($page: Int, $perPage: Int, $filterInput: ManualReviewMatchesFilterInput) {
  paginatedMatches(page: $page, perPage: $perPage, filterInput: $filterInput) {
    data {
      id
      status
      ingredientText
      selectedFoodMatchId
      updatedAt
      createdAt
    }
    meta {
      lastPage
      total
      currentPage
    }
  }
}
    `;
export const PaginatedRecipesDocument = gql`
    query PaginatedRecipes($page: Int, $perPage: Int, $filterInput: RecipeFilterInput) {
  paginatedRecipes(page: $page, perPage: $perPage, filterInput: $filterInput) {
    data {
      cookingTime
      prepTime
      parts {
        name
        ingredients {
          id
          extraInfo
          ingredientText
          quantity
          maxQuantity
          minQuantity
          unit
          unitText
        }
      }
      categories {
        name
      }
      ingredients {
        id
        extraInfo
        ingredientText
        quantity
        maxQuantity
        minQuantity
        unit
        unitText
      }
      images {
        altText
        url
      }
      tags {
        name
      }
      description
      id
      seasons {
        id
        name
      }
      instructions {
        content
        listIndex
        order
        type
      }
      servingsMax
      servingsMin
      servingsText
      sourceUrl
      title
      createdAt
      updatedAt
    }
    meta {
      lastPage
      total
      currentPage
    }
  }
}
    `;
export const TableViewDefinitionsDocument = gql`
    query TableViewDefinitions {
  tableViewDefinitions {
    id
    name
    tableType
    tableId
    order
    icon
    filters
    sorting
    columnView {
      columnId
      columnType
      name
      width
      visible
      filter
    }
    isPreset
    isShared
    createdAt
    updatedAt
    possibleFilters {
      name
      type
      operators
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthLogin(variables: AuthLoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthLoginMutation>(AuthLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthLogin', 'mutation', variables);
    },
    AuthLogout(variables?: AuthLogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthLogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthLogoutMutation>(AuthLogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthLogout', 'mutation', variables);
    },
    AuthPasswordChange(variables: AuthPasswordChangeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordChangeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordChangeMutation>(AuthPasswordChangeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordChange', 'mutation', variables);
    },
    AuthPasswordResetConfirmation(variables: AuthPasswordResetConfirmationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordResetConfirmationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordResetConfirmationMutation>(AuthPasswordResetConfirmationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordResetConfirmation', 'mutation', variables);
    },
    AuthPasswordResetRequest(variables: AuthPasswordResetRequestMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordResetRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordResetRequestMutation>(AuthPasswordResetRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordResetRequest', 'mutation', variables);
    },
    AuthRefreshToken(variables?: AuthRefreshTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthRefreshTokenMutation>(AuthRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthRefreshToken', 'mutation', variables);
    },
    AuthRegister(variables: AuthRegisterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthRegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthRegisterMutation>(AuthRegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthRegister', 'mutation', variables);
    },
    ApproveMatch(variables: ApproveMatchMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ApproveMatchMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApproveMatchMutation>(ApproveMatchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ApproveMatch', 'mutation', variables);
    },
    CancelManualFoodSelection(variables: CancelManualFoodSelectionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CancelManualFoodSelectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CancelManualFoodSelectionMutation>(CancelManualFoodSelectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CancelManualFoodSelection', 'mutation', variables);
    },
    CompleteManualFoodSelection(variables: CompleteManualFoodSelectionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CompleteManualFoodSelectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompleteManualFoodSelectionMutation>(CompleteManualFoodSelectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CompleteManualFoodSelection', 'mutation', variables);
    },
    InitiateManualFoodSelection(variables: InitiateManualFoodSelectionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InitiateManualFoodSelectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InitiateManualFoodSelectionMutation>(InitiateManualFoodSelectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InitiateManualFoodSelection', 'mutation', variables);
    },
    InitiateManualReview(variables: InitiateManualReviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InitiateManualReviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InitiateManualReviewMutation>(InitiateManualReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InitiateManualReview', 'mutation', variables);
    },
    RejectMatch(variables: RejectMatchMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RejectMatchMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RejectMatchMutation>(RejectMatchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RejectMatch', 'mutation', variables);
    },
    RequestFurtherReview(variables: RequestFurtherReviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RequestFurtherReviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RequestFurtherReviewMutation>(RequestFurtherReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RequestFurtherReview', 'mutation', variables);
    },
    UpdateReviewStatus(variables: UpdateReviewStatusMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateReviewStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateReviewStatusMutation>(UpdateReviewStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateReviewStatus', 'mutation', variables);
    },
    ArchiveTableViewDefinition(variables: ArchiveTableViewDefinitionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArchiveTableViewDefinitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArchiveTableViewDefinitionMutation>(ArchiveTableViewDefinitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArchiveTableViewDefinition', 'mutation', variables);
    },
    CreateTableViewDefinition(variables: CreateTableViewDefinitionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateTableViewDefinitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTableViewDefinitionMutation>(CreateTableViewDefinitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateTableViewDefinition', 'mutation', variables);
    },
    UpdateTableViewDefinition(variables: UpdateTableViewDefinitionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateTableViewDefinitionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTableViewDefinitionMutation>(UpdateTableViewDefinitionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateTableViewDefinition', 'mutation', variables);
    },
    AccountInfo(variables?: AccountInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AccountInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AccountInfoQuery>(AccountInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AccountInfo', 'query', variables);
    },
    FoodAutosuggest(variables: FoodAutosuggestQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FoodAutosuggestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FoodAutosuggestQuery>(FoodAutosuggestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FoodAutosuggest', 'query', variables);
    },
    GetMatchDetails(variables: GetMatchDetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMatchDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMatchDetailsQuery>(GetMatchDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMatchDetails', 'query', variables);
    },
    PaginatedMatches(variables?: PaginatedMatchesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PaginatedMatchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PaginatedMatchesQuery>(PaginatedMatchesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PaginatedMatches', 'query', variables);
    },
    PaginatedRecipes(variables?: PaginatedRecipesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PaginatedRecipesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PaginatedRecipesQuery>(PaginatedRecipesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PaginatedRecipes', 'query', variables);
    },
    TableViewDefinitions(variables?: TableViewDefinitionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TableViewDefinitionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TableViewDefinitionsQuery>(TableViewDefinitionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TableViewDefinitions', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;