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

export type AnswerCreateManyQuestionInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  submissionId: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type AnswerCreateManyQuestionInputEnvelope = {
  data: Array<AnswerCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnswerCreateManySubmissionInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type AnswerCreateManySubmissionInputEnvelope = {
  data: Array<AnswerCreateManySubmissionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnswerCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AnswerCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<AnswerCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<AnswerCreateManyQuestionInputEnvelope>;
};

export type AnswerCreateNestedManyWithoutSubmissionInput = {
  connect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AnswerCreateOrConnectWithoutSubmissionInput>>;
  create?: InputMaybe<Array<AnswerCreateWithoutSubmissionInput>>;
  createMany?: InputMaybe<AnswerCreateManySubmissionInputEnvelope>;
};

export type AnswerCreateOrConnectWithoutQuestionInput = {
  create: AnswerCreateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateOrConnectWithoutSubmissionInput = {
  create: AnswerCreateWithoutSubmissionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateWithoutQuestionInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  submission: SubmissionCreateNestedOneWithoutAnswersInput;
  value: Scalars['JSON']['input'];
};

export type AnswerCreateWithoutSubmissionInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  question: QuestionCreateNestedOneWithoutAnswersInput;
  value: Scalars['JSON']['input'];
};

export type AnswerListRelationFilter = {
  every?: InputMaybe<AnswerWhereInput>;
  none?: InputMaybe<AnswerWhereInput>;
  some?: InputMaybe<AnswerWhereInput>;
};

export type AnswerScalarWhereInput = {
  AND?: InputMaybe<Array<AnswerScalarWhereInput>>;
  NOT?: InputMaybe<Array<AnswerScalarWhereInput>>;
  OR?: InputMaybe<Array<AnswerScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  questionId?: InputMaybe<StringFilter>;
  submissionId?: InputMaybe<StringFilter>;
  value?: InputMaybe<JsonFilter>;
};

export type AnswerUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
  data: AnswerUpdateManyMutationInput;
  where: AnswerScalarWhereInput;
};

export type AnswerUpdateManyWithWhereWithoutSubmissionInput = {
  data: AnswerUpdateManyMutationInput;
  where: AnswerScalarWhereInput;
};

export type AnswerUpdateManyWithoutQuestionNestedInput = {
  connect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AnswerCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<AnswerCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<AnswerCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AnswerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  set?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  update?: InputMaybe<Array<AnswerUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<AnswerUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<AnswerUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type AnswerUpdateManyWithoutSubmissionNestedInput = {
  connect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AnswerCreateOrConnectWithoutSubmissionInput>>;
  create?: InputMaybe<Array<AnswerCreateWithoutSubmissionInput>>;
  createMany?: InputMaybe<AnswerCreateManySubmissionInputEnvelope>;
  delete?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AnswerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  set?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  update?: InputMaybe<Array<AnswerUpdateWithWhereUniqueWithoutSubmissionInput>>;
  updateMany?: InputMaybe<Array<AnswerUpdateManyWithWhereWithoutSubmissionInput>>;
  upsert?: InputMaybe<Array<AnswerUpsertWithWhereUniqueWithoutSubmissionInput>>;
};

export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
  data: AnswerUpdateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateWithWhereUniqueWithoutSubmissionInput = {
  data: AnswerUpdateWithoutSubmissionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateWithoutQuestionInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  submission?: InputMaybe<SubmissionUpdateOneRequiredWithoutAnswersNestedInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type AnswerUpdateWithoutSubmissionInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutAnswersNestedInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
  create: AnswerCreateWithoutQuestionInput;
  update: AnswerUpdateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpsertWithWhereUniqueWithoutSubmissionInput = {
  create: AnswerCreateWithoutSubmissionInput;
  update: AnswerUpdateWithoutSubmissionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerWhereInput = {
  AND?: InputMaybe<Array<AnswerWhereInput>>;
  NOT?: InputMaybe<Array<AnswerWhereInput>>;
  OR?: InputMaybe<Array<AnswerWhereInput>>;
  id?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  submission?: InputMaybe<SubmissionRelationFilter>;
  submissionId?: InputMaybe<StringFilter>;
  value?: InputMaybe<JsonFilter>;
};

export type AnswerWhereUniqueInput = {
  AND?: InputMaybe<Array<AnswerWhereInput>>;
  NOT?: InputMaybe<Array<AnswerWhereInput>>;
  OR?: InputMaybe<Array<AnswerWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  submission?: InputMaybe<SubmissionRelationFilter>;
  submissionId?: InputMaybe<StringFilter>;
  value?: InputMaybe<JsonFilter>;
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
  food: Food;
  foodId: Scalars['String']['output'];
  gtinUpc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  importInfo?: Maybe<ImportInfo>;
  importInfoId?: Maybe<Scalars['String']['output']>;
  ingredients?: Maybe<Scalars['String']['output']>;
  nutritionLabel?: Maybe<NutritionLabel>;
  servingSize?: Maybe<Scalars['Float']['output']>;
  servingUnit?: Maybe<Scalars['String']['output']>;
  sourceId: Scalars['String']['output'];
};

export type BrandedFoodCreateManyImportInfoInput = {
  brandOwner: Scalars['String']['input'];
  foodId: Scalars['String']['input'];
  gtinUpc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  servingSize?: InputMaybe<Scalars['Float']['input']>;
  servingUnit?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type BrandedFoodCreateManyImportInfoInputEnvelope = {
  data: Array<BrandedFoodCreateManyImportInfoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandedFoodCreateNestedManyWithoutImportInfoInput = {
  connect?: InputMaybe<Array<BrandedFoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BrandedFoodCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<BrandedFoodCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<BrandedFoodCreateManyImportInfoInputEnvelope>;
};

export type BrandedFoodCreateNestedOneWithoutFoodInput = {
  connect?: InputMaybe<BrandedFoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BrandedFoodCreateOrConnectWithoutFoodInput>;
  create?: InputMaybe<BrandedFoodCreateWithoutFoodInput>;
};

export type BrandedFoodCreateOrConnectWithoutFoodInput = {
  create: BrandedFoodCreateWithoutFoodInput;
  where: BrandedFoodWhereUniqueInput;
};

export type BrandedFoodCreateOrConnectWithoutImportInfoInput = {
  create: BrandedFoodCreateWithoutImportInfoInput;
  where: BrandedFoodWhereUniqueInput;
};

export type BrandedFoodCreateWithoutFoodInput = {
  brandOwner: Scalars['String']['input'];
  gtinUpc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutBrandedFoodsInput>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  nutritionLabel?: InputMaybe<NutritionLabelCreateNestedOneWithoutBrandedFoodInput>;
  servingSize?: InputMaybe<Scalars['Float']['input']>;
  servingUnit?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type BrandedFoodCreateWithoutImportInfoInput = {
  brandOwner: Scalars['String']['input'];
  food: FoodCreateNestedOneWithoutBrandedFoodInput;
  gtinUpc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  nutritionLabel?: InputMaybe<NutritionLabelCreateNestedOneWithoutBrandedFoodInput>;
  servingSize?: InputMaybe<Scalars['Float']['input']>;
  servingUnit?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type BrandedFoodListRelationFilter = {
  every?: InputMaybe<BrandedFoodWhereInput>;
  none?: InputMaybe<BrandedFoodWhereInput>;
  some?: InputMaybe<BrandedFoodWhereInput>;
};

export type BrandedFoodNullableRelationFilter = {
  is?: InputMaybe<BrandedFoodWhereInput>;
  isNot?: InputMaybe<BrandedFoodWhereInput>;
};

export type BrandedFoodOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BrandedFoodOrderByWithRelationInput = {
  brandOwner?: InputMaybe<SortOrder>;
  food?: InputMaybe<FoodOrderByWithRelationInput>;
  foodId?: InputMaybe<SortOrder>;
  gtinUpc?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  importInfo?: InputMaybe<ImportInfoOrderByWithRelationInput>;
  importInfoId?: InputMaybe<SortOrderInput>;
  ingredients?: InputMaybe<SortOrderInput>;
  nutritionLabel?: InputMaybe<NutritionLabelOrderByWithRelationInput>;
  servingSize?: InputMaybe<SortOrderInput>;
  servingUnit?: InputMaybe<SortOrderInput>;
  sourceId?: InputMaybe<SortOrder>;
};

export type BrandedFoodRelationFilter = {
  is?: InputMaybe<BrandedFoodWhereInput>;
  isNot?: InputMaybe<BrandedFoodWhereInput>;
};

export type BrandedFoodScalarWhereInput = {
  AND?: InputMaybe<Array<BrandedFoodScalarWhereInput>>;
  NOT?: InputMaybe<Array<BrandedFoodScalarWhereInput>>;
  OR?: InputMaybe<Array<BrandedFoodScalarWhereInput>>;
  brandOwner?: InputMaybe<StringFilter>;
  foodId?: InputMaybe<StringFilter>;
  gtinUpc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  ingredients?: InputMaybe<StringNullableFilter>;
  servingSize?: InputMaybe<FloatNullableFilter>;
  servingUnit?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type BrandedFoodUpdateManyMutationInput = {
  brandOwner?: InputMaybe<StringFieldUpdateOperationsInput>;
  gtinUpc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ingredients?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  servingSize?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  servingUnit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BrandedFoodUpdateManyWithWhereWithoutImportInfoInput = {
  data: BrandedFoodUpdateManyMutationInput;
  where: BrandedFoodScalarWhereInput;
};

export type BrandedFoodUpdateManyWithoutImportInfoNestedInput = {
  connect?: InputMaybe<Array<BrandedFoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BrandedFoodCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<BrandedFoodCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<BrandedFoodCreateManyImportInfoInputEnvelope>;
  delete?: InputMaybe<Array<BrandedFoodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BrandedFoodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BrandedFoodWhereUniqueInput>>;
  set?: InputMaybe<Array<BrandedFoodWhereUniqueInput>>;
  update?: InputMaybe<Array<BrandedFoodUpdateWithWhereUniqueWithoutImportInfoInput>>;
  updateMany?: InputMaybe<Array<BrandedFoodUpdateManyWithWhereWithoutImportInfoInput>>;
  upsert?: InputMaybe<Array<BrandedFoodUpsertWithWhereUniqueWithoutImportInfoInput>>;
};

export type BrandedFoodUpdateOneWithoutFoodNestedInput = {
  connect?: InputMaybe<BrandedFoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BrandedFoodCreateOrConnectWithoutFoodInput>;
  create?: InputMaybe<BrandedFoodCreateWithoutFoodInput>;
  delete?: InputMaybe<BrandedFoodWhereInput>;
  disconnect?: InputMaybe<BrandedFoodWhereInput>;
  update?: InputMaybe<BrandedFoodUpdateToOneWithWhereWithoutFoodInput>;
  upsert?: InputMaybe<BrandedFoodUpsertWithoutFoodInput>;
};

export type BrandedFoodUpdateToOneWithWhereWithoutFoodInput = {
  data: BrandedFoodUpdateWithoutFoodInput;
  where?: InputMaybe<BrandedFoodWhereInput>;
};

export type BrandedFoodUpdateWithWhereUniqueWithoutImportInfoInput = {
  data: BrandedFoodUpdateWithoutImportInfoInput;
  where: BrandedFoodWhereUniqueInput;
};

export type BrandedFoodUpdateWithoutFoodInput = {
  brandOwner?: InputMaybe<StringFieldUpdateOperationsInput>;
  gtinUpc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutBrandedFoodsNestedInput>;
  ingredients?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nutritionLabel?: InputMaybe<NutritionLabelUpdateOneWithoutBrandedFoodNestedInput>;
  servingSize?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  servingUnit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BrandedFoodUpdateWithoutImportInfoInput = {
  brandOwner?: InputMaybe<StringFieldUpdateOperationsInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutBrandedFoodNestedInput>;
  gtinUpc?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ingredients?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nutritionLabel?: InputMaybe<NutritionLabelUpdateOneWithoutBrandedFoodNestedInput>;
  servingSize?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  servingUnit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BrandedFoodUpsertWithWhereUniqueWithoutImportInfoInput = {
  create: BrandedFoodCreateWithoutImportInfoInput;
  update: BrandedFoodUpdateWithoutImportInfoInput;
  where: BrandedFoodWhereUniqueInput;
};

export type BrandedFoodUpsertWithoutFoodInput = {
  create: BrandedFoodCreateWithoutFoodInput;
  update: BrandedFoodUpdateWithoutFoodInput;
  where?: InputMaybe<BrandedFoodWhereInput>;
};

export type BrandedFoodWhereInput = {
  AND?: InputMaybe<Array<BrandedFoodWhereInput>>;
  NOT?: InputMaybe<Array<BrandedFoodWhereInput>>;
  OR?: InputMaybe<Array<BrandedFoodWhereInput>>;
  brandOwner?: InputMaybe<StringFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  gtinUpc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  ingredients?: InputMaybe<StringNullableFilter>;
  nutritionLabel?: InputMaybe<NutritionLabelNullableRelationFilter>;
  servingSize?: InputMaybe<FloatNullableFilter>;
  servingUnit?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type BrandedFoodWhereUniqueInput = {
  AND?: InputMaybe<Array<BrandedFoodWhereInput>>;
  NOT?: InputMaybe<Array<BrandedFoodWhereInput>>;
  OR?: InputMaybe<Array<BrandedFoodWhereInput>>;
  brandOwner?: InputMaybe<StringFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<Scalars['String']['input']>;
  gtinUpc?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  ingredients?: InputMaybe<StringNullableFilter>;
  nutritionLabel?: InputMaybe<NutritionLabelNullableRelationFilter>;
  servingSize?: InputMaybe<FloatNullableFilter>;
  servingUnit?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
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

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumFoodDataSourceFieldUpdateOperationsInput = {
  set?: InputMaybe<FoodDataSource>;
};

export type EnumFoodDataSourceFilter = {
  equals?: InputMaybe<FoodDataSource>;
  in?: InputMaybe<Array<FoodDataSource>>;
  not?: InputMaybe<NestedEnumFoodDataSourceFilter>;
  notIn?: InputMaybe<Array<FoodDataSource>>;
};

export type EnumRecipeInstructionsTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<RecipeInstructionsType>;
};

export type EnumRecipeInstructionsTypeFilter = {
  equals?: InputMaybe<RecipeInstructionsType>;
  in?: InputMaybe<Array<RecipeInstructionsType>>;
  not?: InputMaybe<NestedEnumRecipeInstructionsTypeFilter>;
  notIn?: InputMaybe<Array<RecipeInstructionsType>>;
};

export type EnumRolesNullableListFilter = {
  equals?: InputMaybe<Array<Roles>>;
  has?: InputMaybe<Roles>;
  hasEvery?: InputMaybe<Array<Roles>>;
  hasSome?: InputMaybe<Array<Roles>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Food = {
  __typename?: 'Food';
  RecipeIngredient?: Maybe<Array<RecipeIngredient>>;
  _count: FoodCount;
  brandedFood?: Maybe<BrandedFood>;
  categories?: Maybe<Array<FoodCategoryOnFood>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  importInfo?: Maybe<ImportInfo>;
  importInfoId?: Maybe<Scalars['String']['output']>;
  nutrients?: Maybe<Array<FoodNutrient>>;
  portions?: Maybe<Array<FoodPortion>>;
  scientificName?: Maybe<Scalars['String']['output']>;
  searchVectors?: Maybe<Array<FoodSearchVector>>;
  sourceId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FoodCategory = {
  __typename?: 'FoodCategory';
  _count: FoodCategoryCount;
  childCategories?: Maybe<Array<FoodCategory>>;
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  foods?: Maybe<Array<FoodCategoryOnFood>>;
  id: Scalars['ID']['output'];
  importInfo?: Maybe<ImportInfo>;
  importInfoId?: Maybe<Scalars['String']['output']>;
  level: Scalars['Int']['output'];
  parentCategory?: Maybe<FoodCategory>;
  parentCategoryId?: Maybe<Scalars['String']['output']>;
  sourceId: Scalars['String']['output'];
};

export type FoodCategoryCount = {
  __typename?: 'FoodCategoryCount';
  childCategories: Scalars['Int']['output'];
  foods: Scalars['Int']['output'];
};

export type FoodCategoryCreateManyImportInfoInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  level: Scalars['Int']['input'];
  parentCategoryId?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodCategoryCreateManyImportInfoInputEnvelope = {
  data: Array<FoodCategoryCreateManyImportInfoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCategoryCreateManyParentCategoryInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfoId?: InputMaybe<Scalars['String']['input']>;
  level: Scalars['Int']['input'];
  sourceId: Scalars['String']['input'];
};

export type FoodCategoryCreateManyParentCategoryInputEnvelope = {
  data: Array<FoodCategoryCreateManyParentCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCategoryCreateNestedManyWithoutImportInfoInput = {
  connect?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCategoryCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<FoodCategoryCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<FoodCategoryCreateManyImportInfoInputEnvelope>;
};

export type FoodCategoryCreateNestedManyWithoutParentCategoryInput = {
  connect?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCategoryCreateOrConnectWithoutParentCategoryInput>>;
  create?: InputMaybe<Array<FoodCategoryCreateWithoutParentCategoryInput>>;
  createMany?: InputMaybe<FoodCategoryCreateManyParentCategoryInputEnvelope>;
};

export type FoodCategoryCreateNestedOneWithoutChildCategoriesInput = {
  connect?: InputMaybe<FoodCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCategoryCreateOrConnectWithoutChildCategoriesInput>;
  create?: InputMaybe<FoodCategoryCreateWithoutChildCategoriesInput>;
};

export type FoodCategoryCreateNestedOneWithoutFoodsInput = {
  connect?: InputMaybe<FoodCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCategoryCreateOrConnectWithoutFoodsInput>;
  create?: InputMaybe<FoodCategoryCreateWithoutFoodsInput>;
};

export type FoodCategoryCreateOrConnectWithoutChildCategoriesInput = {
  create: FoodCategoryCreateWithoutChildCategoriesInput;
  where: FoodCategoryWhereUniqueInput;
};

export type FoodCategoryCreateOrConnectWithoutFoodsInput = {
  create: FoodCategoryCreateWithoutFoodsInput;
  where: FoodCategoryWhereUniqueInput;
};

export type FoodCategoryCreateOrConnectWithoutImportInfoInput = {
  create: FoodCategoryCreateWithoutImportInfoInput;
  where: FoodCategoryWhereUniqueInput;
};

export type FoodCategoryCreateOrConnectWithoutParentCategoryInput = {
  create: FoodCategoryCreateWithoutParentCategoryInput;
  where: FoodCategoryWhereUniqueInput;
};

export type FoodCategoryCreateWithoutChildCategoriesInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foods?: InputMaybe<FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodCategoriesInput>;
  level: Scalars['Int']['input'];
  parentCategory?: InputMaybe<FoodCategoryCreateNestedOneWithoutChildCategoriesInput>;
  sourceId: Scalars['String']['input'];
};

export type FoodCategoryCreateWithoutFoodsInput = {
  childCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutParentCategoryInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodCategoriesInput>;
  level: Scalars['Int']['input'];
  parentCategory?: InputMaybe<FoodCategoryCreateNestedOneWithoutChildCategoriesInput>;
  sourceId: Scalars['String']['input'];
};

export type FoodCategoryCreateWithoutImportInfoInput = {
  childCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutParentCategoryInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foods?: InputMaybe<FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  level: Scalars['Int']['input'];
  parentCategory?: InputMaybe<FoodCategoryCreateNestedOneWithoutChildCategoriesInput>;
  sourceId: Scalars['String']['input'];
};

export type FoodCategoryCreateWithoutParentCategoryInput = {
  childCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutParentCategoryInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foods?: InputMaybe<FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodCategoriesInput>;
  level: Scalars['Int']['input'];
  sourceId: Scalars['String']['input'];
};

export type FoodCategoryListRelationFilter = {
  every?: InputMaybe<FoodCategoryWhereInput>;
  none?: InputMaybe<FoodCategoryWhereInput>;
  some?: InputMaybe<FoodCategoryWhereInput>;
};

export type FoodCategoryNullableRelationFilter = {
  is?: InputMaybe<FoodCategoryWhereInput>;
  isNot?: InputMaybe<FoodCategoryWhereInput>;
};

export type FoodCategoryOnFood = {
  __typename?: 'FoodCategoryOnFood';
  category: FoodCategory;
  categoryId: Scalars['String']['output'];
  food: Food;
  foodId: Scalars['String']['output'];
  isPrimaryCategory: Scalars['Boolean']['output'];
};

export type FoodCategoryOnFoodCreateManyCategoryInput = {
  foodId: Scalars['String']['input'];
  isPrimaryCategory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCategoryOnFoodCreateManyCategoryInputEnvelope = {
  data: Array<FoodCategoryOnFoodCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCategoryOnFoodCreateManyFoodInput = {
  categoryId: Scalars['String']['input'];
  isPrimaryCategory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCategoryOnFoodCreateManyFoodInputEnvelope = {
  data: Array<FoodCategoryOnFoodCreateManyFoodInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<FoodCategoryOnFoodCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<FoodCategoryOnFoodCreateManyCategoryInputEnvelope>;
};

export type FoodCategoryOnFoodCreateNestedManyWithoutFoodInput = {
  connect?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCategoryOnFoodCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<FoodCategoryOnFoodCreateWithoutFoodInput>>;
  createMany?: InputMaybe<FoodCategoryOnFoodCreateManyFoodInputEnvelope>;
};

export type FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput = {
  create: FoodCategoryOnFoodCreateWithoutCategoryInput;
  where: FoodCategoryOnFoodWhereUniqueInput;
};

export type FoodCategoryOnFoodCreateOrConnectWithoutFoodInput = {
  create: FoodCategoryOnFoodCreateWithoutFoodInput;
  where: FoodCategoryOnFoodWhereUniqueInput;
};

export type FoodCategoryOnFoodCreateWithoutCategoryInput = {
  food: FoodCreateNestedOneWithoutCategoriesInput;
  isPrimaryCategory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCategoryOnFoodCreateWithoutFoodInput = {
  category: FoodCategoryCreateNestedOneWithoutFoodsInput;
  isPrimaryCategory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCategoryOnFoodFoodIdCategoryIdCompoundUniqueInput = {
  categoryId: Scalars['String']['input'];
  foodId: Scalars['String']['input'];
};

export type FoodCategoryOnFoodListRelationFilter = {
  every?: InputMaybe<FoodCategoryOnFoodWhereInput>;
  none?: InputMaybe<FoodCategoryOnFoodWhereInput>;
  some?: InputMaybe<FoodCategoryOnFoodWhereInput>;
};

export type FoodCategoryOnFoodOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodCategoryOnFoodScalarWhereInput = {
  AND?: InputMaybe<Array<FoodCategoryOnFoodScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodCategoryOnFoodScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodCategoryOnFoodScalarWhereInput>>;
  categoryId?: InputMaybe<StringFilter>;
  foodId?: InputMaybe<StringFilter>;
  isPrimaryCategory?: InputMaybe<BoolFilter>;
};

export type FoodCategoryOnFoodUpdateManyMutationInput = {
  isPrimaryCategory?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type FoodCategoryOnFoodUpdateManyWithWhereWithoutCategoryInput = {
  data: FoodCategoryOnFoodUpdateManyMutationInput;
  where: FoodCategoryOnFoodScalarWhereInput;
};

export type FoodCategoryOnFoodUpdateManyWithWhereWithoutFoodInput = {
  data: FoodCategoryOnFoodUpdateManyMutationInput;
  where: FoodCategoryOnFoodScalarWhereInput;
};

export type FoodCategoryOnFoodUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<FoodCategoryOnFoodCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<FoodCategoryOnFoodCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodCategoryOnFoodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodCategoryOnFoodUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<FoodCategoryOnFoodUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<FoodCategoryOnFoodUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput = {
  connect?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCategoryOnFoodCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<FoodCategoryOnFoodCreateWithoutFoodInput>>;
  createMany?: InputMaybe<FoodCategoryOnFoodCreateManyFoodInputEnvelope>;
  delete?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodCategoryOnFoodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodCategoryOnFoodWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodCategoryOnFoodUpdateWithWhereUniqueWithoutFoodInput>>;
  updateMany?: InputMaybe<Array<FoodCategoryOnFoodUpdateManyWithWhereWithoutFoodInput>>;
  upsert?: InputMaybe<Array<FoodCategoryOnFoodUpsertWithWhereUniqueWithoutFoodInput>>;
};

export type FoodCategoryOnFoodUpdateWithWhereUniqueWithoutCategoryInput = {
  data: FoodCategoryOnFoodUpdateWithoutCategoryInput;
  where: FoodCategoryOnFoodWhereUniqueInput;
};

export type FoodCategoryOnFoodUpdateWithWhereUniqueWithoutFoodInput = {
  data: FoodCategoryOnFoodUpdateWithoutFoodInput;
  where: FoodCategoryOnFoodWhereUniqueInput;
};

export type FoodCategoryOnFoodUpdateWithoutCategoryInput = {
  food?: InputMaybe<FoodUpdateOneRequiredWithoutCategoriesNestedInput>;
  isPrimaryCategory?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type FoodCategoryOnFoodUpdateWithoutFoodInput = {
  category?: InputMaybe<FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput>;
  isPrimaryCategory?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type FoodCategoryOnFoodUpsertWithWhereUniqueWithoutCategoryInput = {
  create: FoodCategoryOnFoodCreateWithoutCategoryInput;
  update: FoodCategoryOnFoodUpdateWithoutCategoryInput;
  where: FoodCategoryOnFoodWhereUniqueInput;
};

export type FoodCategoryOnFoodUpsertWithWhereUniqueWithoutFoodInput = {
  create: FoodCategoryOnFoodCreateWithoutFoodInput;
  update: FoodCategoryOnFoodUpdateWithoutFoodInput;
  where: FoodCategoryOnFoodWhereUniqueInput;
};

export type FoodCategoryOnFoodWhereInput = {
  AND?: InputMaybe<Array<FoodCategoryOnFoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodCategoryOnFoodWhereInput>>;
  OR?: InputMaybe<Array<FoodCategoryOnFoodWhereInput>>;
  category?: InputMaybe<FoodCategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  isPrimaryCategory?: InputMaybe<BoolFilter>;
};

export type FoodCategoryOnFoodWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodCategoryOnFoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodCategoryOnFoodWhereInput>>;
  OR?: InputMaybe<Array<FoodCategoryOnFoodWhereInput>>;
  category?: InputMaybe<FoodCategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  foodId_categoryId?: InputMaybe<FoodCategoryOnFoodFoodIdCategoryIdCompoundUniqueInput>;
  isPrimaryCategory?: InputMaybe<BoolFilter>;
};

export type FoodCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodCategoryRelationFilter = {
  is?: InputMaybe<FoodCategoryWhereInput>;
  isNot?: InputMaybe<FoodCategoryWhereInput>;
};

export type FoodCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<FoodCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodCategoryScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  level?: InputMaybe<IntFilter>;
  parentCategoryId?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type FoodCategoryUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodCategoryUpdateManyWithWhereWithoutImportInfoInput = {
  data: FoodCategoryUpdateManyMutationInput;
  where: FoodCategoryScalarWhereInput;
};

export type FoodCategoryUpdateManyWithWhereWithoutParentCategoryInput = {
  data: FoodCategoryUpdateManyMutationInput;
  where: FoodCategoryScalarWhereInput;
};

export type FoodCategoryUpdateManyWithoutImportInfoNestedInput = {
  connect?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCategoryCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<FoodCategoryCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<FoodCategoryCreateManyImportInfoInputEnvelope>;
  delete?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodCategoryUpdateWithWhereUniqueWithoutImportInfoInput>>;
  updateMany?: InputMaybe<Array<FoodCategoryUpdateManyWithWhereWithoutImportInfoInput>>;
  upsert?: InputMaybe<Array<FoodCategoryUpsertWithWhereUniqueWithoutImportInfoInput>>;
};

export type FoodCategoryUpdateManyWithoutParentCategoryNestedInput = {
  connect?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCategoryCreateOrConnectWithoutParentCategoryInput>>;
  create?: InputMaybe<Array<FoodCategoryCreateWithoutParentCategoryInput>>;
  createMany?: InputMaybe<FoodCategoryCreateManyParentCategoryInputEnvelope>;
  delete?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodCategoryUpdateWithWhereUniqueWithoutParentCategoryInput>>;
  updateMany?: InputMaybe<Array<FoodCategoryUpdateManyWithWhereWithoutParentCategoryInput>>;
  upsert?: InputMaybe<Array<FoodCategoryUpsertWithWhereUniqueWithoutParentCategoryInput>>;
};

export type FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput = {
  connect?: InputMaybe<FoodCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCategoryCreateOrConnectWithoutFoodsInput>;
  create?: InputMaybe<FoodCategoryCreateWithoutFoodsInput>;
  update?: InputMaybe<FoodCategoryUpdateToOneWithWhereWithoutFoodsInput>;
  upsert?: InputMaybe<FoodCategoryUpsertWithoutFoodsInput>;
};

export type FoodCategoryUpdateOneWithoutChildCategoriesNestedInput = {
  connect?: InputMaybe<FoodCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCategoryCreateOrConnectWithoutChildCategoriesInput>;
  create?: InputMaybe<FoodCategoryCreateWithoutChildCategoriesInput>;
  delete?: InputMaybe<FoodCategoryWhereInput>;
  disconnect?: InputMaybe<FoodCategoryWhereInput>;
  update?: InputMaybe<FoodCategoryUpdateToOneWithWhereWithoutChildCategoriesInput>;
  upsert?: InputMaybe<FoodCategoryUpsertWithoutChildCategoriesInput>;
};

export type FoodCategoryUpdateToOneWithWhereWithoutChildCategoriesInput = {
  data: FoodCategoryUpdateWithoutChildCategoriesInput;
  where?: InputMaybe<FoodCategoryWhereInput>;
};

export type FoodCategoryUpdateToOneWithWhereWithoutFoodsInput = {
  data: FoodCategoryUpdateWithoutFoodsInput;
  where?: InputMaybe<FoodCategoryWhereInput>;
};

export type FoodCategoryUpdateWithWhereUniqueWithoutImportInfoInput = {
  data: FoodCategoryUpdateWithoutImportInfoInput;
  where: FoodCategoryWhereUniqueInput;
};

export type FoodCategoryUpdateWithWhereUniqueWithoutParentCategoryInput = {
  data: FoodCategoryUpdateWithoutParentCategoryInput;
  where: FoodCategoryWhereUniqueInput;
};

export type FoodCategoryUpdateWithoutChildCategoriesInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foods?: InputMaybe<FoodCategoryOnFoodUpdateManyWithoutCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodCategoriesNestedInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  parentCategory?: InputMaybe<FoodCategoryUpdateOneWithoutChildCategoriesNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodCategoryUpdateWithoutFoodsInput = {
  childCategories?: InputMaybe<FoodCategoryUpdateManyWithoutParentCategoryNestedInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodCategoriesNestedInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  parentCategory?: InputMaybe<FoodCategoryUpdateOneWithoutChildCategoriesNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodCategoryUpdateWithoutImportInfoInput = {
  childCategories?: InputMaybe<FoodCategoryUpdateManyWithoutParentCategoryNestedInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foods?: InputMaybe<FoodCategoryOnFoodUpdateManyWithoutCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  parentCategory?: InputMaybe<FoodCategoryUpdateOneWithoutChildCategoriesNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodCategoryUpdateWithoutParentCategoryInput = {
  childCategories?: InputMaybe<FoodCategoryUpdateManyWithoutParentCategoryNestedInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foods?: InputMaybe<FoodCategoryOnFoodUpdateManyWithoutCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodCategoriesNestedInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodCategoryUpsertWithWhereUniqueWithoutImportInfoInput = {
  create: FoodCategoryCreateWithoutImportInfoInput;
  update: FoodCategoryUpdateWithoutImportInfoInput;
  where: FoodCategoryWhereUniqueInput;
};

export type FoodCategoryUpsertWithWhereUniqueWithoutParentCategoryInput = {
  create: FoodCategoryCreateWithoutParentCategoryInput;
  update: FoodCategoryUpdateWithoutParentCategoryInput;
  where: FoodCategoryWhereUniqueInput;
};

export type FoodCategoryUpsertWithoutChildCategoriesInput = {
  create: FoodCategoryCreateWithoutChildCategoriesInput;
  update: FoodCategoryUpdateWithoutChildCategoriesInput;
  where?: InputMaybe<FoodCategoryWhereInput>;
};

export type FoodCategoryUpsertWithoutFoodsInput = {
  create: FoodCategoryCreateWithoutFoodsInput;
  update: FoodCategoryUpdateWithoutFoodsInput;
  where?: InputMaybe<FoodCategoryWhereInput>;
};

export type FoodCategoryWhereInput = {
  AND?: InputMaybe<Array<FoodCategoryWhereInput>>;
  NOT?: InputMaybe<Array<FoodCategoryWhereInput>>;
  OR?: InputMaybe<Array<FoodCategoryWhereInput>>;
  childCategories?: InputMaybe<FoodCategoryListRelationFilter>;
  code?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  foods?: InputMaybe<FoodCategoryOnFoodListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  level?: InputMaybe<IntFilter>;
  parentCategory?: InputMaybe<FoodCategoryNullableRelationFilter>;
  parentCategoryId?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type FoodCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodCategoryWhereInput>>;
  NOT?: InputMaybe<Array<FoodCategoryWhereInput>>;
  OR?: InputMaybe<Array<FoodCategoryWhereInput>>;
  childCategories?: InputMaybe<FoodCategoryListRelationFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  foods?: InputMaybe<FoodCategoryOnFoodListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  level?: InputMaybe<IntFilter>;
  parentCategory?: InputMaybe<FoodCategoryNullableRelationFilter>;
  parentCategoryId?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
};

export type FoodCount = {
  __typename?: 'FoodCount';
  RecipeIngredient: Scalars['Int']['output'];
  categories: Scalars['Int']['output'];
  nutrients: Scalars['Int']['output'];
  portions: Scalars['Int']['output'];
  searchVectors: Scalars['Int']['output'];
};

export type FoodCreateManyImportInfoInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  scientificName?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FoodCreateManyImportInfoInputEnvelope = {
  data: Array<FoodCreateManyImportInfoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCreateNestedManyWithoutImportInfoInput = {
  connect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<FoodCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<FoodCreateManyImportInfoInputEnvelope>;
};

export type FoodCreateNestedOneWithoutBrandedFoodInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutBrandedFoodInput>;
  create?: InputMaybe<FoodCreateWithoutBrandedFoodInput>;
};

export type FoodCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<FoodCreateWithoutCategoriesInput>;
};

export type FoodCreateNestedOneWithoutNutrientsInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutNutrientsInput>;
  create?: InputMaybe<FoodCreateWithoutNutrientsInput>;
};

export type FoodCreateNestedOneWithoutPortionsInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutPortionsInput>;
  create?: InputMaybe<FoodCreateWithoutPortionsInput>;
};

export type FoodCreateNestedOneWithoutRecipeIngredientInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutRecipeIngredientInput>;
  create?: InputMaybe<FoodCreateWithoutRecipeIngredientInput>;
};

export type FoodCreateOrConnectWithoutBrandedFoodInput = {
  create: FoodCreateWithoutBrandedFoodInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateOrConnectWithoutCategoriesInput = {
  create: FoodCreateWithoutCategoriesInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateOrConnectWithoutImportInfoInput = {
  create: FoodCreateWithoutImportInfoInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateOrConnectWithoutNutrientsInput = {
  create: FoodCreateWithoutNutrientsInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateOrConnectWithoutPortionsInput = {
  create: FoodCreateWithoutPortionsInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateOrConnectWithoutRecipeIngredientInput = {
  create: FoodCreateWithoutRecipeIngredientInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateWithoutBrandedFoodInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutFoodInput>;
  categories?: InputMaybe<FoodCategoryOnFoodCreateNestedManyWithoutFoodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodsInput>;
  nutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutFoodInput>;
  portions?: InputMaybe<FoodPortionCreateNestedManyWithoutFoodInput>;
  scientificName?: InputMaybe<Scalars['String']['input']>;
  searchVectors?: InputMaybe<FoodSearchVectorCreateNestedManyWithoutFoodInput>;
  sourceId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FoodCreateWithoutCategoriesInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutFoodInput>;
  brandedFood?: InputMaybe<BrandedFoodCreateNestedOneWithoutFoodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodsInput>;
  nutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutFoodInput>;
  portions?: InputMaybe<FoodPortionCreateNestedManyWithoutFoodInput>;
  scientificName?: InputMaybe<Scalars['String']['input']>;
  searchVectors?: InputMaybe<FoodSearchVectorCreateNestedManyWithoutFoodInput>;
  sourceId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FoodCreateWithoutImportInfoInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutFoodInput>;
  brandedFood?: InputMaybe<BrandedFoodCreateNestedOneWithoutFoodInput>;
  categories?: InputMaybe<FoodCategoryOnFoodCreateNestedManyWithoutFoodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  nutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutFoodInput>;
  portions?: InputMaybe<FoodPortionCreateNestedManyWithoutFoodInput>;
  scientificName?: InputMaybe<Scalars['String']['input']>;
  searchVectors?: InputMaybe<FoodSearchVectorCreateNestedManyWithoutFoodInput>;
  sourceId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FoodCreateWithoutNutrientsInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutFoodInput>;
  brandedFood?: InputMaybe<BrandedFoodCreateNestedOneWithoutFoodInput>;
  categories?: InputMaybe<FoodCategoryOnFoodCreateNestedManyWithoutFoodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodsInput>;
  portions?: InputMaybe<FoodPortionCreateNestedManyWithoutFoodInput>;
  scientificName?: InputMaybe<Scalars['String']['input']>;
  searchVectors?: InputMaybe<FoodSearchVectorCreateNestedManyWithoutFoodInput>;
  sourceId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FoodCreateWithoutPortionsInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutFoodInput>;
  brandedFood?: InputMaybe<BrandedFoodCreateNestedOneWithoutFoodInput>;
  categories?: InputMaybe<FoodCategoryOnFoodCreateNestedManyWithoutFoodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodsInput>;
  nutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutFoodInput>;
  scientificName?: InputMaybe<Scalars['String']['input']>;
  searchVectors?: InputMaybe<FoodSearchVectorCreateNestedManyWithoutFoodInput>;
  sourceId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FoodCreateWithoutRecipeIngredientInput = {
  brandedFood?: InputMaybe<BrandedFoodCreateNestedOneWithoutFoodInput>;
  categories?: InputMaybe<FoodCategoryOnFoodCreateNestedManyWithoutFoodInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodsInput>;
  nutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutFoodInput>;
  portions?: InputMaybe<FoodPortionCreateNestedManyWithoutFoodInput>;
  scientificName?: InputMaybe<Scalars['String']['input']>;
  searchVectors?: InputMaybe<FoodSearchVectorCreateNestedManyWithoutFoodInput>;
  sourceId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum FoodDataSource {
  Ciqual = 'CIQUAL',
  Eurofir = 'EUROFIR',
  Usda = 'USDA',
  UserInput = 'USER_INPUT'
}

export type FoodListRelationFilter = {
  every?: InputMaybe<FoodWhereInput>;
  none?: InputMaybe<FoodWhereInput>;
  some?: InputMaybe<FoodWhereInput>;
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
  confidenceCode?: Maybe<Scalars['String']['output']>;
  food: Food;
  foodId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  importInfo?: Maybe<ImportInfo>;
  importInfoId?: Maybe<Scalars['String']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  median?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nutrient: Nutrient;
  nutrientId: Scalars['String']['output'];
  sourceId: Scalars['String']['output'];
};

export type FoodNutrientCreateManyFoodInput = {
  amount: Scalars['Float']['input'];
  confidenceCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfoId?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  median?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  nutrientId: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
};

export type FoodNutrientCreateManyFoodInputEnvelope = {
  data: Array<FoodNutrientCreateManyFoodInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodNutrientCreateManyImportInfoInput = {
  amount: Scalars['Float']['input'];
  confidenceCode?: InputMaybe<Scalars['String']['input']>;
  foodId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  median?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  nutrientId: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
};

export type FoodNutrientCreateManyImportInfoInputEnvelope = {
  data: Array<FoodNutrientCreateManyImportInfoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodNutrientCreateManyNutrientInput = {
  amount: Scalars['Float']['input'];
  confidenceCode?: InputMaybe<Scalars['String']['input']>;
  foodId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfoId?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  median?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodNutrientCreateManyNutrientInputEnvelope = {
  data: Array<FoodNutrientCreateManyNutrientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodNutrientCreateNestedManyWithoutFoodInput = {
  connect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodNutrientCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<FoodNutrientCreateWithoutFoodInput>>;
  createMany?: InputMaybe<FoodNutrientCreateManyFoodInputEnvelope>;
};

export type FoodNutrientCreateNestedManyWithoutImportInfoInput = {
  connect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodNutrientCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<FoodNutrientCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<FoodNutrientCreateManyImportInfoInputEnvelope>;
};

export type FoodNutrientCreateNestedManyWithoutNutrientInput = {
  connect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodNutrientCreateOrConnectWithoutNutrientInput>>;
  create?: InputMaybe<Array<FoodNutrientCreateWithoutNutrientInput>>;
  createMany?: InputMaybe<FoodNutrientCreateManyNutrientInputEnvelope>;
};

export type FoodNutrientCreateOrConnectWithoutFoodInput = {
  create: FoodNutrientCreateWithoutFoodInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientCreateOrConnectWithoutImportInfoInput = {
  create: FoodNutrientCreateWithoutImportInfoInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientCreateOrConnectWithoutNutrientInput = {
  create: FoodNutrientCreateWithoutNutrientInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientCreateWithoutFoodInput = {
  amount: Scalars['Float']['input'];
  confidenceCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodNutrientsInput>;
  max?: InputMaybe<Scalars['Float']['input']>;
  median?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  nutrient: NutrientCreateNestedOneWithoutFoodNutrientsInput;
  sourceId: Scalars['String']['input'];
};

export type FoodNutrientCreateWithoutImportInfoInput = {
  amount: Scalars['Float']['input'];
  confidenceCode?: InputMaybe<Scalars['String']['input']>;
  food: FoodCreateNestedOneWithoutNutrientsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  median?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  nutrient: NutrientCreateNestedOneWithoutFoodNutrientsInput;
  sourceId: Scalars['String']['input'];
};

export type FoodNutrientCreateWithoutNutrientInput = {
  amount: Scalars['Float']['input'];
  confidenceCode?: InputMaybe<Scalars['String']['input']>;
  food: FoodCreateNestedOneWithoutNutrientsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodNutrientsInput>;
  max?: InputMaybe<Scalars['Float']['input']>;
  median?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodNutrientListRelationFilter = {
  every?: InputMaybe<FoodNutrientWhereInput>;
  none?: InputMaybe<FoodNutrientWhereInput>;
  some?: InputMaybe<FoodNutrientWhereInput>;
};

export type FoodNutrientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodNutrientScalarWhereInput = {
  AND?: InputMaybe<Array<FoodNutrientScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodNutrientScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodNutrientScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  confidenceCode?: InputMaybe<StringNullableFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  max?: InputMaybe<FloatNullableFilter>;
  median?: InputMaybe<FloatNullableFilter>;
  min?: InputMaybe<FloatNullableFilter>;
  nutrientId?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type FoodNutrientUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  confidenceCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  max?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  median?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  min?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodNutrientUpdateManyWithWhereWithoutFoodInput = {
  data: FoodNutrientUpdateManyMutationInput;
  where: FoodNutrientScalarWhereInput;
};

export type FoodNutrientUpdateManyWithWhereWithoutImportInfoInput = {
  data: FoodNutrientUpdateManyMutationInput;
  where: FoodNutrientScalarWhereInput;
};

export type FoodNutrientUpdateManyWithWhereWithoutNutrientInput = {
  data: FoodNutrientUpdateManyMutationInput;
  where: FoodNutrientScalarWhereInput;
};

export type FoodNutrientUpdateManyWithoutFoodNestedInput = {
  connect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodNutrientCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<FoodNutrientCreateWithoutFoodInput>>;
  createMany?: InputMaybe<FoodNutrientCreateManyFoodInputEnvelope>;
  delete?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodNutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodNutrientUpdateWithWhereUniqueWithoutFoodInput>>;
  updateMany?: InputMaybe<Array<FoodNutrientUpdateManyWithWhereWithoutFoodInput>>;
  upsert?: InputMaybe<Array<FoodNutrientUpsertWithWhereUniqueWithoutFoodInput>>;
};

export type FoodNutrientUpdateManyWithoutImportInfoNestedInput = {
  connect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodNutrientCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<FoodNutrientCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<FoodNutrientCreateManyImportInfoInputEnvelope>;
  delete?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodNutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodNutrientUpdateWithWhereUniqueWithoutImportInfoInput>>;
  updateMany?: InputMaybe<Array<FoodNutrientUpdateManyWithWhereWithoutImportInfoInput>>;
  upsert?: InputMaybe<Array<FoodNutrientUpsertWithWhereUniqueWithoutImportInfoInput>>;
};

export type FoodNutrientUpdateManyWithoutNutrientNestedInput = {
  connect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodNutrientCreateOrConnectWithoutNutrientInput>>;
  create?: InputMaybe<Array<FoodNutrientCreateWithoutNutrientInput>>;
  createMany?: InputMaybe<FoodNutrientCreateManyNutrientInputEnvelope>;
  delete?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodNutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodNutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput>>;
  updateMany?: InputMaybe<Array<FoodNutrientUpdateManyWithWhereWithoutNutrientInput>>;
  upsert?: InputMaybe<Array<FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput>>;
};

export type FoodNutrientUpdateWithWhereUniqueWithoutFoodInput = {
  data: FoodNutrientUpdateWithoutFoodInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientUpdateWithWhereUniqueWithoutImportInfoInput = {
  data: FoodNutrientUpdateWithoutImportInfoInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientUpdateWithWhereUniqueWithoutNutrientInput = {
  data: FoodNutrientUpdateWithoutNutrientInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientUpdateWithoutFoodInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  confidenceCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodNutrientsNestedInput>;
  max?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  median?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  min?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nutrient?: InputMaybe<NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodNutrientUpdateWithoutImportInfoInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  confidenceCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutNutrientsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  max?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  median?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  min?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nutrient?: InputMaybe<NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodNutrientUpdateWithoutNutrientInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  confidenceCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutNutrientsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodNutrientsNestedInput>;
  max?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  median?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  min?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodNutrientUpsertWithWhereUniqueWithoutFoodInput = {
  create: FoodNutrientCreateWithoutFoodInput;
  update: FoodNutrientUpdateWithoutFoodInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientUpsertWithWhereUniqueWithoutImportInfoInput = {
  create: FoodNutrientCreateWithoutImportInfoInput;
  update: FoodNutrientUpdateWithoutImportInfoInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput = {
  create: FoodNutrientCreateWithoutNutrientInput;
  update: FoodNutrientUpdateWithoutNutrientInput;
  where: FoodNutrientWhereUniqueInput;
};

export type FoodNutrientWhereInput = {
  AND?: InputMaybe<Array<FoodNutrientWhereInput>>;
  NOT?: InputMaybe<Array<FoodNutrientWhereInput>>;
  OR?: InputMaybe<Array<FoodNutrientWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  confidenceCode?: InputMaybe<StringNullableFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  max?: InputMaybe<FloatNullableFilter>;
  median?: InputMaybe<FloatNullableFilter>;
  min?: InputMaybe<FloatNullableFilter>;
  nutrient?: InputMaybe<NutrientRelationFilter>;
  nutrientId?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type FoodNutrientWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodNutrientWhereInput>>;
  NOT?: InputMaybe<Array<FoodNutrientWhereInput>>;
  OR?: InputMaybe<Array<FoodNutrientWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  confidenceCode?: InputMaybe<StringNullableFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  max?: InputMaybe<FloatNullableFilter>;
  median?: InputMaybe<FloatNullableFilter>;
  min?: InputMaybe<FloatNullableFilter>;
  nutrient?: InputMaybe<NutrientRelationFilter>;
  nutrientId?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type FoodOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodOrderByWithRelationInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientOrderByRelationAggregateInput>;
  brandedFood?: InputMaybe<BrandedFoodOrderByWithRelationInput>;
  categories?: InputMaybe<FoodCategoryOnFoodOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  importInfo?: InputMaybe<ImportInfoOrderByWithRelationInput>;
  importInfoId?: InputMaybe<SortOrderInput>;
  nutrients?: InputMaybe<FoodNutrientOrderByRelationAggregateInput>;
  portions?: InputMaybe<FoodPortionOrderByRelationAggregateInput>;
  scientificName?: InputMaybe<SortOrderInput>;
  searchVectors?: InputMaybe<FoodSearchVectorOrderByRelationAggregateInput>;
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
  food: Food;
  foodId: Scalars['String']['output'];
  gramWeight: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  importInfo?: Maybe<ImportInfo>;
  importInfoId?: Maybe<Scalars['String']['output']>;
  measureUnit: MeasureUnit;
  measureUnitName: Scalars['String']['output'];
  portionDescription?: Maybe<Scalars['String']['output']>;
  sourceId: Scalars['String']['output'];
};

export type FoodPortionCreateManyFoodInput = {
  amount: Scalars['Float']['input'];
  gramWeight: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfoId?: InputMaybe<Scalars['String']['input']>;
  measureUnitName: Scalars['String']['input'];
  portionDescription?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodPortionCreateManyFoodInputEnvelope = {
  data: Array<FoodPortionCreateManyFoodInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodPortionCreateManyImportInfoInput = {
  amount: Scalars['Float']['input'];
  foodId: Scalars['String']['input'];
  gramWeight: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  measureUnitName: Scalars['String']['input'];
  portionDescription?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodPortionCreateManyImportInfoInputEnvelope = {
  data: Array<FoodPortionCreateManyImportInfoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodPortionCreateManyMeasureUnitInput = {
  amount: Scalars['Float']['input'];
  foodId: Scalars['String']['input'];
  gramWeight: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfoId?: InputMaybe<Scalars['String']['input']>;
  portionDescription?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodPortionCreateManyMeasureUnitInputEnvelope = {
  data: Array<FoodPortionCreateManyMeasureUnitInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodPortionCreateNestedManyWithoutFoodInput = {
  connect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodPortionCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<FoodPortionCreateWithoutFoodInput>>;
  createMany?: InputMaybe<FoodPortionCreateManyFoodInputEnvelope>;
};

export type FoodPortionCreateNestedManyWithoutImportInfoInput = {
  connect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodPortionCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<FoodPortionCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<FoodPortionCreateManyImportInfoInputEnvelope>;
};

export type FoodPortionCreateNestedManyWithoutMeasureUnitInput = {
  connect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodPortionCreateOrConnectWithoutMeasureUnitInput>>;
  create?: InputMaybe<Array<FoodPortionCreateWithoutMeasureUnitInput>>;
  createMany?: InputMaybe<FoodPortionCreateManyMeasureUnitInputEnvelope>;
};

export type FoodPortionCreateOrConnectWithoutFoodInput = {
  create: FoodPortionCreateWithoutFoodInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionCreateOrConnectWithoutImportInfoInput = {
  create: FoodPortionCreateWithoutImportInfoInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionCreateOrConnectWithoutMeasureUnitInput = {
  create: FoodPortionCreateWithoutMeasureUnitInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionCreateWithoutFoodInput = {
  amount: Scalars['Float']['input'];
  gramWeight: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodPortionsInput>;
  measureUnit: MeasureUnitCreateNestedOneWithoutFoodPortionInput;
  portionDescription?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodPortionCreateWithoutImportInfoInput = {
  amount: Scalars['Float']['input'];
  food: FoodCreateNestedOneWithoutPortionsInput;
  gramWeight: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  measureUnit: MeasureUnitCreateNestedOneWithoutFoodPortionInput;
  portionDescription?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodPortionCreateWithoutMeasureUnitInput = {
  amount: Scalars['Float']['input'];
  food: FoodCreateNestedOneWithoutPortionsInput;
  gramWeight: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutFoodPortionsInput>;
  portionDescription?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
};

export type FoodPortionListRelationFilter = {
  every?: InputMaybe<FoodPortionWhereInput>;
  none?: InputMaybe<FoodPortionWhereInput>;
  some?: InputMaybe<FoodPortionWhereInput>;
};

export type FoodPortionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodPortionScalarWhereInput = {
  AND?: InputMaybe<Array<FoodPortionScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodPortionScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodPortionScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  foodId?: InputMaybe<StringFilter>;
  gramWeight?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  measureUnitName?: InputMaybe<StringFilter>;
  portionDescription?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type FoodPortionUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  gramWeight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  portionDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodPortionUpdateManyWithWhereWithoutFoodInput = {
  data: FoodPortionUpdateManyMutationInput;
  where: FoodPortionScalarWhereInput;
};

export type FoodPortionUpdateManyWithWhereWithoutImportInfoInput = {
  data: FoodPortionUpdateManyMutationInput;
  where: FoodPortionScalarWhereInput;
};

export type FoodPortionUpdateManyWithWhereWithoutMeasureUnitInput = {
  data: FoodPortionUpdateManyMutationInput;
  where: FoodPortionScalarWhereInput;
};

export type FoodPortionUpdateManyWithoutFoodNestedInput = {
  connect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodPortionCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<FoodPortionCreateWithoutFoodInput>>;
  createMany?: InputMaybe<FoodPortionCreateManyFoodInputEnvelope>;
  delete?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodPortionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodPortionUpdateWithWhereUniqueWithoutFoodInput>>;
  updateMany?: InputMaybe<Array<FoodPortionUpdateManyWithWhereWithoutFoodInput>>;
  upsert?: InputMaybe<Array<FoodPortionUpsertWithWhereUniqueWithoutFoodInput>>;
};

export type FoodPortionUpdateManyWithoutImportInfoNestedInput = {
  connect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodPortionCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<FoodPortionCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<FoodPortionCreateManyImportInfoInputEnvelope>;
  delete?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodPortionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodPortionUpdateWithWhereUniqueWithoutImportInfoInput>>;
  updateMany?: InputMaybe<Array<FoodPortionUpdateManyWithWhereWithoutImportInfoInput>>;
  upsert?: InputMaybe<Array<FoodPortionUpsertWithWhereUniqueWithoutImportInfoInput>>;
};

export type FoodPortionUpdateManyWithoutMeasureUnitNestedInput = {
  connect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodPortionCreateOrConnectWithoutMeasureUnitInput>>;
  create?: InputMaybe<Array<FoodPortionCreateWithoutMeasureUnitInput>>;
  createMany?: InputMaybe<FoodPortionCreateManyMeasureUnitInputEnvelope>;
  delete?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodPortionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodPortionWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodPortionUpdateWithWhereUniqueWithoutMeasureUnitInput>>;
  updateMany?: InputMaybe<Array<FoodPortionUpdateManyWithWhereWithoutMeasureUnitInput>>;
  upsert?: InputMaybe<Array<FoodPortionUpsertWithWhereUniqueWithoutMeasureUnitInput>>;
};

export type FoodPortionUpdateWithWhereUniqueWithoutFoodInput = {
  data: FoodPortionUpdateWithoutFoodInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionUpdateWithWhereUniqueWithoutImportInfoInput = {
  data: FoodPortionUpdateWithoutImportInfoInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionUpdateWithWhereUniqueWithoutMeasureUnitInput = {
  data: FoodPortionUpdateWithoutMeasureUnitInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionUpdateWithoutFoodInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  gramWeight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodPortionsNestedInput>;
  measureUnit?: InputMaybe<MeasureUnitUpdateOneRequiredWithoutFoodPortionNestedInput>;
  portionDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodPortionUpdateWithoutImportInfoInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutPortionsNestedInput>;
  gramWeight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  measureUnit?: InputMaybe<MeasureUnitUpdateOneRequiredWithoutFoodPortionNestedInput>;
  portionDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodPortionUpdateWithoutMeasureUnitInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutPortionsNestedInput>;
  gramWeight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodPortionsNestedInput>;
  portionDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodPortionUpsertWithWhereUniqueWithoutFoodInput = {
  create: FoodPortionCreateWithoutFoodInput;
  update: FoodPortionUpdateWithoutFoodInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionUpsertWithWhereUniqueWithoutImportInfoInput = {
  create: FoodPortionCreateWithoutImportInfoInput;
  update: FoodPortionUpdateWithoutImportInfoInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionUpsertWithWhereUniqueWithoutMeasureUnitInput = {
  create: FoodPortionCreateWithoutMeasureUnitInput;
  update: FoodPortionUpdateWithoutMeasureUnitInput;
  where: FoodPortionWhereUniqueInput;
};

export type FoodPortionWhereInput = {
  AND?: InputMaybe<Array<FoodPortionWhereInput>>;
  NOT?: InputMaybe<Array<FoodPortionWhereInput>>;
  OR?: InputMaybe<Array<FoodPortionWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  gramWeight?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  measureUnit?: InputMaybe<MeasureUnitRelationFilter>;
  measureUnitName?: InputMaybe<StringFilter>;
  portionDescription?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type FoodPortionWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodPortionWhereInput>>;
  NOT?: InputMaybe<Array<FoodPortionWhereInput>>;
  OR?: InputMaybe<Array<FoodPortionWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  gramWeight?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  measureUnit?: InputMaybe<MeasureUnitRelationFilter>;
  measureUnitName?: InputMaybe<StringFilter>;
  portionDescription?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type FoodRelationFilter = {
  is?: InputMaybe<FoodWhereInput>;
  isNot?: InputMaybe<FoodWhereInput>;
};

export type FoodScalarWhereInput = {
  AND?: InputMaybe<Array<FoodScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  scientificName?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
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

export type FoodSearchVector = {
  __typename?: 'FoodSearchVector';
  food: Food;
  foodId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  language: Language;
  languageCode: Scalars['String']['output'];
};

export type FoodSearchVectorCreateNestedManyWithoutFoodInput = {
  connect?: InputMaybe<Array<FoodSearchVectorWhereUniqueInput>>;
};

export type FoodSearchVectorFoodIdLanguageCodeCompoundUniqueInput = {
  foodId: Scalars['String']['input'];
  languageCode: Scalars['String']['input'];
};

export type FoodSearchVectorListRelationFilter = {
  every?: InputMaybe<FoodSearchVectorWhereInput>;
  none?: InputMaybe<FoodSearchVectorWhereInput>;
  some?: InputMaybe<FoodSearchVectorWhereInput>;
};

export type FoodSearchVectorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodSearchVectorScalarWhereInput = {
  AND?: InputMaybe<Array<FoodSearchVectorScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodSearchVectorScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodSearchVectorScalarWhereInput>>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  languageCode?: InputMaybe<StringFilter>;
};

export type FoodSearchVectorUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodSearchVectorUpdateManyWithWhereWithoutFoodInput = {
  data: FoodSearchVectorUpdateManyMutationInput;
  where: FoodSearchVectorScalarWhereInput;
};

export type FoodSearchVectorUpdateManyWithoutFoodNestedInput = {
  connect?: InputMaybe<Array<FoodSearchVectorWhereUniqueInput>>;
  delete?: InputMaybe<Array<FoodSearchVectorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodSearchVectorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodSearchVectorWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodSearchVectorWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodSearchVectorUpdateWithWhereUniqueWithoutFoodInput>>;
  updateMany?: InputMaybe<Array<FoodSearchVectorUpdateManyWithWhereWithoutFoodInput>>;
};

export type FoodSearchVectorUpdateWithWhereUniqueWithoutFoodInput = {
  data: FoodSearchVectorUpdateWithoutFoodInput;
  where: FoodSearchVectorWhereUniqueInput;
};

export type FoodSearchVectorUpdateWithoutFoodInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  language?: InputMaybe<LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput>;
};

export type FoodSearchVectorWhereInput = {
  AND?: InputMaybe<Array<FoodSearchVectorWhereInput>>;
  NOT?: InputMaybe<Array<FoodSearchVectorWhereInput>>;
  OR?: InputMaybe<Array<FoodSearchVectorWhereInput>>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  language?: InputMaybe<LanguageRelationFilter>;
  languageCode?: InputMaybe<StringFilter>;
};

export type FoodSearchVectorWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodSearchVectorWhereInput>>;
  NOT?: InputMaybe<Array<FoodSearchVectorWhereInput>>;
  OR?: InputMaybe<Array<FoodSearchVectorWhereInput>>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  foodId_languageCode?: InputMaybe<FoodSearchVectorFoodIdLanguageCodeCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageRelationFilter>;
  languageCode?: InputMaybe<StringFilter>;
};

export type FoodUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  scientificName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpdateManyWithWhereWithoutImportInfoInput = {
  data: FoodUpdateManyMutationInput;
  where: FoodScalarWhereInput;
};

export type FoodUpdateManyWithoutImportInfoNestedInput = {
  connect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<FoodCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<FoodCreateManyImportInfoInputEnvelope>;
  delete?: InputMaybe<Array<FoodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodUpdateWithWhereUniqueWithoutImportInfoInput>>;
  updateMany?: InputMaybe<Array<FoodUpdateManyWithWhereWithoutImportInfoInput>>;
  upsert?: InputMaybe<Array<FoodUpsertWithWhereUniqueWithoutImportInfoInput>>;
};

export type FoodUpdateOneRequiredWithoutBrandedFoodNestedInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutBrandedFoodInput>;
  create?: InputMaybe<FoodCreateWithoutBrandedFoodInput>;
  update?: InputMaybe<FoodUpdateToOneWithWhereWithoutBrandedFoodInput>;
  upsert?: InputMaybe<FoodUpsertWithoutBrandedFoodInput>;
};

export type FoodUpdateOneRequiredWithoutCategoriesNestedInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<FoodCreateWithoutCategoriesInput>;
  update?: InputMaybe<FoodUpdateToOneWithWhereWithoutCategoriesInput>;
  upsert?: InputMaybe<FoodUpsertWithoutCategoriesInput>;
};

export type FoodUpdateOneRequiredWithoutNutrientsNestedInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutNutrientsInput>;
  create?: InputMaybe<FoodCreateWithoutNutrientsInput>;
  update?: InputMaybe<FoodUpdateToOneWithWhereWithoutNutrientsInput>;
  upsert?: InputMaybe<FoodUpsertWithoutNutrientsInput>;
};

export type FoodUpdateOneRequiredWithoutPortionsNestedInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutPortionsInput>;
  create?: InputMaybe<FoodCreateWithoutPortionsInput>;
  update?: InputMaybe<FoodUpdateToOneWithWhereWithoutPortionsInput>;
  upsert?: InputMaybe<FoodUpsertWithoutPortionsInput>;
};

export type FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutRecipeIngredientInput>;
  create?: InputMaybe<FoodCreateWithoutRecipeIngredientInput>;
  update?: InputMaybe<FoodUpdateToOneWithWhereWithoutRecipeIngredientInput>;
  upsert?: InputMaybe<FoodUpsertWithoutRecipeIngredientInput>;
};

export type FoodUpdateToOneWithWhereWithoutBrandedFoodInput = {
  data: FoodUpdateWithoutBrandedFoodInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpdateToOneWithWhereWithoutCategoriesInput = {
  data: FoodUpdateWithoutCategoriesInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpdateToOneWithWhereWithoutNutrientsInput = {
  data: FoodUpdateWithoutNutrientsInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpdateToOneWithWhereWithoutPortionsInput = {
  data: FoodUpdateWithoutPortionsInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpdateToOneWithWhereWithoutRecipeIngredientInput = {
  data: FoodUpdateWithoutRecipeIngredientInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpdateWithWhereUniqueWithoutImportInfoInput = {
  data: FoodUpdateWithoutImportInfoInput;
  where: FoodWhereUniqueInput;
};

export type FoodUpdateWithoutBrandedFoodInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutFoodNestedInput>;
  categories?: InputMaybe<FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodsNestedInput>;
  nutrients?: InputMaybe<FoodNutrientUpdateManyWithoutFoodNestedInput>;
  portions?: InputMaybe<FoodPortionUpdateManyWithoutFoodNestedInput>;
  scientificName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  searchVectors?: InputMaybe<FoodSearchVectorUpdateManyWithoutFoodNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpdateWithoutCategoriesInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutFoodNestedInput>;
  brandedFood?: InputMaybe<BrandedFoodUpdateOneWithoutFoodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodsNestedInput>;
  nutrients?: InputMaybe<FoodNutrientUpdateManyWithoutFoodNestedInput>;
  portions?: InputMaybe<FoodPortionUpdateManyWithoutFoodNestedInput>;
  scientificName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  searchVectors?: InputMaybe<FoodSearchVectorUpdateManyWithoutFoodNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpdateWithoutImportInfoInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutFoodNestedInput>;
  brandedFood?: InputMaybe<BrandedFoodUpdateOneWithoutFoodNestedInput>;
  categories?: InputMaybe<FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutrients?: InputMaybe<FoodNutrientUpdateManyWithoutFoodNestedInput>;
  portions?: InputMaybe<FoodPortionUpdateManyWithoutFoodNestedInput>;
  scientificName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  searchVectors?: InputMaybe<FoodSearchVectorUpdateManyWithoutFoodNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpdateWithoutNutrientsInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutFoodNestedInput>;
  brandedFood?: InputMaybe<BrandedFoodUpdateOneWithoutFoodNestedInput>;
  categories?: InputMaybe<FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodsNestedInput>;
  portions?: InputMaybe<FoodPortionUpdateManyWithoutFoodNestedInput>;
  scientificName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  searchVectors?: InputMaybe<FoodSearchVectorUpdateManyWithoutFoodNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpdateWithoutPortionsInput = {
  RecipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutFoodNestedInput>;
  brandedFood?: InputMaybe<BrandedFoodUpdateOneWithoutFoodNestedInput>;
  categories?: InputMaybe<FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodsNestedInput>;
  nutrients?: InputMaybe<FoodNutrientUpdateManyWithoutFoodNestedInput>;
  scientificName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  searchVectors?: InputMaybe<FoodSearchVectorUpdateManyWithoutFoodNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpdateWithoutRecipeIngredientInput = {
  brandedFood?: InputMaybe<BrandedFoodUpdateOneWithoutFoodNestedInput>;
  categories?: InputMaybe<FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutFoodsNestedInput>;
  nutrients?: InputMaybe<FoodNutrientUpdateManyWithoutFoodNestedInput>;
  portions?: InputMaybe<FoodPortionUpdateManyWithoutFoodNestedInput>;
  scientificName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  searchVectors?: InputMaybe<FoodSearchVectorUpdateManyWithoutFoodNestedInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpsertWithWhereUniqueWithoutImportInfoInput = {
  create: FoodCreateWithoutImportInfoInput;
  update: FoodUpdateWithoutImportInfoInput;
  where: FoodWhereUniqueInput;
};

export type FoodUpsertWithoutBrandedFoodInput = {
  create: FoodCreateWithoutBrandedFoodInput;
  update: FoodUpdateWithoutBrandedFoodInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpsertWithoutCategoriesInput = {
  create: FoodCreateWithoutCategoriesInput;
  update: FoodUpdateWithoutCategoriesInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpsertWithoutNutrientsInput = {
  create: FoodCreateWithoutNutrientsInput;
  update: FoodUpdateWithoutNutrientsInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpsertWithoutPortionsInput = {
  create: FoodCreateWithoutPortionsInput;
  update: FoodUpdateWithoutPortionsInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpsertWithoutRecipeIngredientInput = {
  create: FoodCreateWithoutRecipeIngredientInput;
  update: FoodUpdateWithoutRecipeIngredientInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodWhereInput = {
  AND?: InputMaybe<Array<FoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodWhereInput>>;
  OR?: InputMaybe<Array<FoodWhereInput>>;
  RecipeIngredient?: InputMaybe<RecipeIngredientListRelationFilter>;
  brandedFood?: InputMaybe<BrandedFoodNullableRelationFilter>;
  categories?: InputMaybe<FoodCategoryOnFoodListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  nutrients?: InputMaybe<FoodNutrientListRelationFilter>;
  portions?: InputMaybe<FoodPortionListRelationFilter>;
  scientificName?: InputMaybe<StringNullableFilter>;
  searchVectors?: InputMaybe<FoodSearchVectorListRelationFilter>;
  sourceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FoodWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodWhereInput>>;
  OR?: InputMaybe<Array<FoodWhereInput>>;
  RecipeIngredient?: InputMaybe<RecipeIngredientListRelationFilter>;
  brandedFood?: InputMaybe<BrandedFoodNullableRelationFilter>;
  categories?: InputMaybe<FoodCategoryOnFoodListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  nutrients?: InputMaybe<FoodNutrientListRelationFilter>;
  portions?: InputMaybe<FoodPortionListRelationFilter>;
  scientificName?: InputMaybe<StringNullableFilter>;
  searchVectors?: InputMaybe<FoodSearchVectorListRelationFilter>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ImportInfo = {
  __typename?: 'ImportInfo';
  _count: ImportInfoCount;
  brandedFoods?: Maybe<Array<BrandedFood>>;
  dataSource: FoodDataSource;
  foodCategories?: Maybe<Array<FoodCategory>>;
  foodNutrients?: Maybe<Array<FoodNutrient>>;
  foodPortions?: Maybe<Array<FoodPortion>>;
  foods?: Maybe<Array<Food>>;
  id: Scalars['ID']['output'];
  importDate: Scalars['DateTime']['output'];
  measureUnits?: Maybe<Array<MeasureUnit>>;
  nutrients?: Maybe<Array<Nutrient>>;
  sourceVersion: Scalars['String']['output'];
};

export type ImportInfoCount = {
  __typename?: 'ImportInfoCount';
  brandedFoods: Scalars['Int']['output'];
  foodCategories: Scalars['Int']['output'];
  foodNutrients: Scalars['Int']['output'];
  foodPortions: Scalars['Int']['output'];
  foods: Scalars['Int']['output'];
  measureUnits: Scalars['Int']['output'];
  nutrients: Scalars['Int']['output'];
};

export type ImportInfoCreateNestedOneWithoutBrandedFoodsInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutBrandedFoodsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutBrandedFoodsInput>;
};

export type ImportInfoCreateNestedOneWithoutFoodCategoriesInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutFoodCategoriesInput>;
  create?: InputMaybe<ImportInfoCreateWithoutFoodCategoriesInput>;
};

export type ImportInfoCreateNestedOneWithoutFoodNutrientsInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutFoodNutrientsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutFoodNutrientsInput>;
};

export type ImportInfoCreateNestedOneWithoutFoodPortionsInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutFoodPortionsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutFoodPortionsInput>;
};

export type ImportInfoCreateNestedOneWithoutFoodsInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutFoodsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutFoodsInput>;
};

export type ImportInfoCreateNestedOneWithoutMeasureUnitsInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutMeasureUnitsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutMeasureUnitsInput>;
};

export type ImportInfoCreateNestedOneWithoutNutrientsInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutNutrientsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutNutrientsInput>;
};

export type ImportInfoCreateOrConnectWithoutBrandedFoodsInput = {
  create: ImportInfoCreateWithoutBrandedFoodsInput;
  where: ImportInfoWhereUniqueInput;
};

export type ImportInfoCreateOrConnectWithoutFoodCategoriesInput = {
  create: ImportInfoCreateWithoutFoodCategoriesInput;
  where: ImportInfoWhereUniqueInput;
};

export type ImportInfoCreateOrConnectWithoutFoodNutrientsInput = {
  create: ImportInfoCreateWithoutFoodNutrientsInput;
  where: ImportInfoWhereUniqueInput;
};

export type ImportInfoCreateOrConnectWithoutFoodPortionsInput = {
  create: ImportInfoCreateWithoutFoodPortionsInput;
  where: ImportInfoWhereUniqueInput;
};

export type ImportInfoCreateOrConnectWithoutFoodsInput = {
  create: ImportInfoCreateWithoutFoodsInput;
  where: ImportInfoWhereUniqueInput;
};

export type ImportInfoCreateOrConnectWithoutMeasureUnitsInput = {
  create: ImportInfoCreateWithoutMeasureUnitsInput;
  where: ImportInfoWhereUniqueInput;
};

export type ImportInfoCreateOrConnectWithoutNutrientsInput = {
  create: ImportInfoCreateWithoutNutrientsInput;
  where: ImportInfoWhereUniqueInput;
};

export type ImportInfoCreateWithoutBrandedFoodsInput = {
  dataSource: FoodDataSource;
  foodCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutImportInfoInput>;
  foodNutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutImportInfoInput>;
  foodPortions?: InputMaybe<FoodPortionCreateNestedManyWithoutImportInfoInput>;
  foods?: InputMaybe<FoodCreateNestedManyWithoutImportInfoInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importDate: Scalars['DateTime']['input'];
  measureUnits?: InputMaybe<MeasureUnitCreateNestedManyWithoutImportInfoInput>;
  nutrients?: InputMaybe<NutrientCreateNestedManyWithoutImportInfoInput>;
  sourceVersion: Scalars['String']['input'];
};

export type ImportInfoCreateWithoutFoodCategoriesInput = {
  brandedFoods?: InputMaybe<BrandedFoodCreateNestedManyWithoutImportInfoInput>;
  dataSource: FoodDataSource;
  foodNutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutImportInfoInput>;
  foodPortions?: InputMaybe<FoodPortionCreateNestedManyWithoutImportInfoInput>;
  foods?: InputMaybe<FoodCreateNestedManyWithoutImportInfoInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importDate: Scalars['DateTime']['input'];
  measureUnits?: InputMaybe<MeasureUnitCreateNestedManyWithoutImportInfoInput>;
  nutrients?: InputMaybe<NutrientCreateNestedManyWithoutImportInfoInput>;
  sourceVersion: Scalars['String']['input'];
};

export type ImportInfoCreateWithoutFoodNutrientsInput = {
  brandedFoods?: InputMaybe<BrandedFoodCreateNestedManyWithoutImportInfoInput>;
  dataSource: FoodDataSource;
  foodCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutImportInfoInput>;
  foodPortions?: InputMaybe<FoodPortionCreateNestedManyWithoutImportInfoInput>;
  foods?: InputMaybe<FoodCreateNestedManyWithoutImportInfoInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importDate: Scalars['DateTime']['input'];
  measureUnits?: InputMaybe<MeasureUnitCreateNestedManyWithoutImportInfoInput>;
  nutrients?: InputMaybe<NutrientCreateNestedManyWithoutImportInfoInput>;
  sourceVersion: Scalars['String']['input'];
};

export type ImportInfoCreateWithoutFoodPortionsInput = {
  brandedFoods?: InputMaybe<BrandedFoodCreateNestedManyWithoutImportInfoInput>;
  dataSource: FoodDataSource;
  foodCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutImportInfoInput>;
  foodNutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutImportInfoInput>;
  foods?: InputMaybe<FoodCreateNestedManyWithoutImportInfoInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importDate: Scalars['DateTime']['input'];
  measureUnits?: InputMaybe<MeasureUnitCreateNestedManyWithoutImportInfoInput>;
  nutrients?: InputMaybe<NutrientCreateNestedManyWithoutImportInfoInput>;
  sourceVersion: Scalars['String']['input'];
};

export type ImportInfoCreateWithoutFoodsInput = {
  brandedFoods?: InputMaybe<BrandedFoodCreateNestedManyWithoutImportInfoInput>;
  dataSource: FoodDataSource;
  foodCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutImportInfoInput>;
  foodNutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutImportInfoInput>;
  foodPortions?: InputMaybe<FoodPortionCreateNestedManyWithoutImportInfoInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importDate: Scalars['DateTime']['input'];
  measureUnits?: InputMaybe<MeasureUnitCreateNestedManyWithoutImportInfoInput>;
  nutrients?: InputMaybe<NutrientCreateNestedManyWithoutImportInfoInput>;
  sourceVersion: Scalars['String']['input'];
};

export type ImportInfoCreateWithoutMeasureUnitsInput = {
  brandedFoods?: InputMaybe<BrandedFoodCreateNestedManyWithoutImportInfoInput>;
  dataSource: FoodDataSource;
  foodCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutImportInfoInput>;
  foodNutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutImportInfoInput>;
  foodPortions?: InputMaybe<FoodPortionCreateNestedManyWithoutImportInfoInput>;
  foods?: InputMaybe<FoodCreateNestedManyWithoutImportInfoInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importDate: Scalars['DateTime']['input'];
  nutrients?: InputMaybe<NutrientCreateNestedManyWithoutImportInfoInput>;
  sourceVersion: Scalars['String']['input'];
};

export type ImportInfoCreateWithoutNutrientsInput = {
  brandedFoods?: InputMaybe<BrandedFoodCreateNestedManyWithoutImportInfoInput>;
  dataSource: FoodDataSource;
  foodCategories?: InputMaybe<FoodCategoryCreateNestedManyWithoutImportInfoInput>;
  foodNutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutImportInfoInput>;
  foodPortions?: InputMaybe<FoodPortionCreateNestedManyWithoutImportInfoInput>;
  foods?: InputMaybe<FoodCreateNestedManyWithoutImportInfoInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  importDate: Scalars['DateTime']['input'];
  measureUnits?: InputMaybe<MeasureUnitCreateNestedManyWithoutImportInfoInput>;
  sourceVersion: Scalars['String']['input'];
};

export type ImportInfoDataSourceSourceVersionCompoundUniqueInput = {
  dataSource: FoodDataSource;
  sourceVersion: Scalars['String']['input'];
};

export type ImportInfoNullableRelationFilter = {
  is?: InputMaybe<ImportInfoWhereInput>;
  isNot?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoOrderByWithRelationInput = {
  brandedFoods?: InputMaybe<BrandedFoodOrderByRelationAggregateInput>;
  dataSource?: InputMaybe<SortOrder>;
  foodCategories?: InputMaybe<FoodCategoryOrderByRelationAggregateInput>;
  foodNutrients?: InputMaybe<FoodNutrientOrderByRelationAggregateInput>;
  foodPortions?: InputMaybe<FoodPortionOrderByRelationAggregateInput>;
  foods?: InputMaybe<FoodOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  importDate?: InputMaybe<SortOrder>;
  measureUnits?: InputMaybe<MeasureUnitOrderByRelationAggregateInput>;
  nutrients?: InputMaybe<NutrientOrderByRelationAggregateInput>;
  sourceVersion?: InputMaybe<SortOrder>;
};

export type ImportInfoUpdateOneWithoutBrandedFoodsNestedInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutBrandedFoodsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutBrandedFoodsInput>;
  delete?: InputMaybe<ImportInfoWhereInput>;
  disconnect?: InputMaybe<ImportInfoWhereInput>;
  update?: InputMaybe<ImportInfoUpdateToOneWithWhereWithoutBrandedFoodsInput>;
  upsert?: InputMaybe<ImportInfoUpsertWithoutBrandedFoodsInput>;
};

export type ImportInfoUpdateOneWithoutFoodCategoriesNestedInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutFoodCategoriesInput>;
  create?: InputMaybe<ImportInfoCreateWithoutFoodCategoriesInput>;
  delete?: InputMaybe<ImportInfoWhereInput>;
  disconnect?: InputMaybe<ImportInfoWhereInput>;
  update?: InputMaybe<ImportInfoUpdateToOneWithWhereWithoutFoodCategoriesInput>;
  upsert?: InputMaybe<ImportInfoUpsertWithoutFoodCategoriesInput>;
};

export type ImportInfoUpdateOneWithoutFoodNutrientsNestedInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutFoodNutrientsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutFoodNutrientsInput>;
  delete?: InputMaybe<ImportInfoWhereInput>;
  disconnect?: InputMaybe<ImportInfoWhereInput>;
  update?: InputMaybe<ImportInfoUpdateToOneWithWhereWithoutFoodNutrientsInput>;
  upsert?: InputMaybe<ImportInfoUpsertWithoutFoodNutrientsInput>;
};

export type ImportInfoUpdateOneWithoutFoodPortionsNestedInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutFoodPortionsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutFoodPortionsInput>;
  delete?: InputMaybe<ImportInfoWhereInput>;
  disconnect?: InputMaybe<ImportInfoWhereInput>;
  update?: InputMaybe<ImportInfoUpdateToOneWithWhereWithoutFoodPortionsInput>;
  upsert?: InputMaybe<ImportInfoUpsertWithoutFoodPortionsInput>;
};

export type ImportInfoUpdateOneWithoutFoodsNestedInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutFoodsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutFoodsInput>;
  delete?: InputMaybe<ImportInfoWhereInput>;
  disconnect?: InputMaybe<ImportInfoWhereInput>;
  update?: InputMaybe<ImportInfoUpdateToOneWithWhereWithoutFoodsInput>;
  upsert?: InputMaybe<ImportInfoUpsertWithoutFoodsInput>;
};

export type ImportInfoUpdateOneWithoutMeasureUnitsNestedInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutMeasureUnitsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutMeasureUnitsInput>;
  delete?: InputMaybe<ImportInfoWhereInput>;
  disconnect?: InputMaybe<ImportInfoWhereInput>;
  update?: InputMaybe<ImportInfoUpdateToOneWithWhereWithoutMeasureUnitsInput>;
  upsert?: InputMaybe<ImportInfoUpsertWithoutMeasureUnitsInput>;
};

export type ImportInfoUpdateOneWithoutNutrientsNestedInput = {
  connect?: InputMaybe<ImportInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImportInfoCreateOrConnectWithoutNutrientsInput>;
  create?: InputMaybe<ImportInfoCreateWithoutNutrientsInput>;
  delete?: InputMaybe<ImportInfoWhereInput>;
  disconnect?: InputMaybe<ImportInfoWhereInput>;
  update?: InputMaybe<ImportInfoUpdateToOneWithWhereWithoutNutrientsInput>;
  upsert?: InputMaybe<ImportInfoUpsertWithoutNutrientsInput>;
};

export type ImportInfoUpdateToOneWithWhereWithoutBrandedFoodsInput = {
  data: ImportInfoUpdateWithoutBrandedFoodsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpdateToOneWithWhereWithoutFoodCategoriesInput = {
  data: ImportInfoUpdateWithoutFoodCategoriesInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpdateToOneWithWhereWithoutFoodNutrientsInput = {
  data: ImportInfoUpdateWithoutFoodNutrientsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpdateToOneWithWhereWithoutFoodPortionsInput = {
  data: ImportInfoUpdateWithoutFoodPortionsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpdateToOneWithWhereWithoutFoodsInput = {
  data: ImportInfoUpdateWithoutFoodsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpdateToOneWithWhereWithoutMeasureUnitsInput = {
  data: ImportInfoUpdateWithoutMeasureUnitsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpdateToOneWithWhereWithoutNutrientsInput = {
  data: ImportInfoUpdateWithoutNutrientsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpdateWithoutBrandedFoodsInput = {
  dataSource?: InputMaybe<EnumFoodDataSourceFieldUpdateOperationsInput>;
  foodCategories?: InputMaybe<FoodCategoryUpdateManyWithoutImportInfoNestedInput>;
  foodNutrients?: InputMaybe<FoodNutrientUpdateManyWithoutImportInfoNestedInput>;
  foodPortions?: InputMaybe<FoodPortionUpdateManyWithoutImportInfoNestedInput>;
  foods?: InputMaybe<FoodUpdateManyWithoutImportInfoNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  measureUnits?: InputMaybe<MeasureUnitUpdateManyWithoutImportInfoNestedInput>;
  nutrients?: InputMaybe<NutrientUpdateManyWithoutImportInfoNestedInput>;
  sourceVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImportInfoUpdateWithoutFoodCategoriesInput = {
  brandedFoods?: InputMaybe<BrandedFoodUpdateManyWithoutImportInfoNestedInput>;
  dataSource?: InputMaybe<EnumFoodDataSourceFieldUpdateOperationsInput>;
  foodNutrients?: InputMaybe<FoodNutrientUpdateManyWithoutImportInfoNestedInput>;
  foodPortions?: InputMaybe<FoodPortionUpdateManyWithoutImportInfoNestedInput>;
  foods?: InputMaybe<FoodUpdateManyWithoutImportInfoNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  measureUnits?: InputMaybe<MeasureUnitUpdateManyWithoutImportInfoNestedInput>;
  nutrients?: InputMaybe<NutrientUpdateManyWithoutImportInfoNestedInput>;
  sourceVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImportInfoUpdateWithoutFoodNutrientsInput = {
  brandedFoods?: InputMaybe<BrandedFoodUpdateManyWithoutImportInfoNestedInput>;
  dataSource?: InputMaybe<EnumFoodDataSourceFieldUpdateOperationsInput>;
  foodCategories?: InputMaybe<FoodCategoryUpdateManyWithoutImportInfoNestedInput>;
  foodPortions?: InputMaybe<FoodPortionUpdateManyWithoutImportInfoNestedInput>;
  foods?: InputMaybe<FoodUpdateManyWithoutImportInfoNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  measureUnits?: InputMaybe<MeasureUnitUpdateManyWithoutImportInfoNestedInput>;
  nutrients?: InputMaybe<NutrientUpdateManyWithoutImportInfoNestedInput>;
  sourceVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImportInfoUpdateWithoutFoodPortionsInput = {
  brandedFoods?: InputMaybe<BrandedFoodUpdateManyWithoutImportInfoNestedInput>;
  dataSource?: InputMaybe<EnumFoodDataSourceFieldUpdateOperationsInput>;
  foodCategories?: InputMaybe<FoodCategoryUpdateManyWithoutImportInfoNestedInput>;
  foodNutrients?: InputMaybe<FoodNutrientUpdateManyWithoutImportInfoNestedInput>;
  foods?: InputMaybe<FoodUpdateManyWithoutImportInfoNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  measureUnits?: InputMaybe<MeasureUnitUpdateManyWithoutImportInfoNestedInput>;
  nutrients?: InputMaybe<NutrientUpdateManyWithoutImportInfoNestedInput>;
  sourceVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImportInfoUpdateWithoutFoodsInput = {
  brandedFoods?: InputMaybe<BrandedFoodUpdateManyWithoutImportInfoNestedInput>;
  dataSource?: InputMaybe<EnumFoodDataSourceFieldUpdateOperationsInput>;
  foodCategories?: InputMaybe<FoodCategoryUpdateManyWithoutImportInfoNestedInput>;
  foodNutrients?: InputMaybe<FoodNutrientUpdateManyWithoutImportInfoNestedInput>;
  foodPortions?: InputMaybe<FoodPortionUpdateManyWithoutImportInfoNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  measureUnits?: InputMaybe<MeasureUnitUpdateManyWithoutImportInfoNestedInput>;
  nutrients?: InputMaybe<NutrientUpdateManyWithoutImportInfoNestedInput>;
  sourceVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImportInfoUpdateWithoutMeasureUnitsInput = {
  brandedFoods?: InputMaybe<BrandedFoodUpdateManyWithoutImportInfoNestedInput>;
  dataSource?: InputMaybe<EnumFoodDataSourceFieldUpdateOperationsInput>;
  foodCategories?: InputMaybe<FoodCategoryUpdateManyWithoutImportInfoNestedInput>;
  foodNutrients?: InputMaybe<FoodNutrientUpdateManyWithoutImportInfoNestedInput>;
  foodPortions?: InputMaybe<FoodPortionUpdateManyWithoutImportInfoNestedInput>;
  foods?: InputMaybe<FoodUpdateManyWithoutImportInfoNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  nutrients?: InputMaybe<NutrientUpdateManyWithoutImportInfoNestedInput>;
  sourceVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImportInfoUpdateWithoutNutrientsInput = {
  brandedFoods?: InputMaybe<BrandedFoodUpdateManyWithoutImportInfoNestedInput>;
  dataSource?: InputMaybe<EnumFoodDataSourceFieldUpdateOperationsInput>;
  foodCategories?: InputMaybe<FoodCategoryUpdateManyWithoutImportInfoNestedInput>;
  foodNutrients?: InputMaybe<FoodNutrientUpdateManyWithoutImportInfoNestedInput>;
  foodPortions?: InputMaybe<FoodPortionUpdateManyWithoutImportInfoNestedInput>;
  foods?: InputMaybe<FoodUpdateManyWithoutImportInfoNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  measureUnits?: InputMaybe<MeasureUnitUpdateManyWithoutImportInfoNestedInput>;
  sourceVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImportInfoUpsertWithoutBrandedFoodsInput = {
  create: ImportInfoCreateWithoutBrandedFoodsInput;
  update: ImportInfoUpdateWithoutBrandedFoodsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpsertWithoutFoodCategoriesInput = {
  create: ImportInfoCreateWithoutFoodCategoriesInput;
  update: ImportInfoUpdateWithoutFoodCategoriesInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpsertWithoutFoodNutrientsInput = {
  create: ImportInfoCreateWithoutFoodNutrientsInput;
  update: ImportInfoUpdateWithoutFoodNutrientsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpsertWithoutFoodPortionsInput = {
  create: ImportInfoCreateWithoutFoodPortionsInput;
  update: ImportInfoUpdateWithoutFoodPortionsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpsertWithoutFoodsInput = {
  create: ImportInfoCreateWithoutFoodsInput;
  update: ImportInfoUpdateWithoutFoodsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpsertWithoutMeasureUnitsInput = {
  create: ImportInfoCreateWithoutMeasureUnitsInput;
  update: ImportInfoUpdateWithoutMeasureUnitsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoUpsertWithoutNutrientsInput = {
  create: ImportInfoCreateWithoutNutrientsInput;
  update: ImportInfoUpdateWithoutNutrientsInput;
  where?: InputMaybe<ImportInfoWhereInput>;
};

export type ImportInfoWhereInput = {
  AND?: InputMaybe<Array<ImportInfoWhereInput>>;
  NOT?: InputMaybe<Array<ImportInfoWhereInput>>;
  OR?: InputMaybe<Array<ImportInfoWhereInput>>;
  brandedFoods?: InputMaybe<BrandedFoodListRelationFilter>;
  dataSource?: InputMaybe<EnumFoodDataSourceFilter>;
  foodCategories?: InputMaybe<FoodCategoryListRelationFilter>;
  foodNutrients?: InputMaybe<FoodNutrientListRelationFilter>;
  foodPortions?: InputMaybe<FoodPortionListRelationFilter>;
  foods?: InputMaybe<FoodListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  importDate?: InputMaybe<DateTimeFilter>;
  measureUnits?: InputMaybe<MeasureUnitListRelationFilter>;
  nutrients?: InputMaybe<NutrientListRelationFilter>;
  sourceVersion?: InputMaybe<StringFilter>;
};

export type ImportInfoWhereUniqueInput = {
  AND?: InputMaybe<Array<ImportInfoWhereInput>>;
  NOT?: InputMaybe<Array<ImportInfoWhereInput>>;
  OR?: InputMaybe<Array<ImportInfoWhereInput>>;
  brandedFoods?: InputMaybe<BrandedFoodListRelationFilter>;
  dataSource?: InputMaybe<EnumFoodDataSourceFilter>;
  dataSource_sourceVersion?: InputMaybe<ImportInfoDataSourceSourceVersionCompoundUniqueInput>;
  foodCategories?: InputMaybe<FoodCategoryListRelationFilter>;
  foodNutrients?: InputMaybe<FoodNutrientListRelationFilter>;
  foodPortions?: InputMaybe<FoodPortionListRelationFilter>;
  foods?: InputMaybe<FoodListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  importDate?: InputMaybe<DateTimeFilter>;
  measureUnits?: InputMaybe<MeasureUnitListRelationFilter>;
  nutrients?: InputMaybe<NutrientListRelationFilter>;
  sourceVersion?: InputMaybe<StringFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
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

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Language = {
  __typename?: 'Language';
  _count: LanguageCount;
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  searchVectors?: Maybe<Array<FoodSearchVector>>;
  translations?: Maybe<Array<Translation>>;
};

export type LanguageCount = {
  __typename?: 'LanguageCount';
  searchVectors: Scalars['Int']['output'];
  translations: Scalars['Int']['output'];
};

export type LanguageCreateOrConnectWithoutSearchVectorsInput = {
  create: LanguageCreateWithoutSearchVectorsInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageCreateWithoutSearchVectorsInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
  translations?: InputMaybe<TranslationCreateNestedManyWithoutLanguageInput>;
};

export type LanguageRelationFilter = {
  is?: InputMaybe<LanguageWhereInput>;
  isNot?: InputMaybe<LanguageWhereInput>;
};

export type LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput = {
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguageCreateOrConnectWithoutSearchVectorsInput>;
  create?: InputMaybe<LanguageCreateWithoutSearchVectorsInput>;
  update?: InputMaybe<LanguageUpdateToOneWithWhereWithoutSearchVectorsInput>;
  upsert?: InputMaybe<LanguageUpsertWithoutSearchVectorsInput>;
};

export type LanguageUpdateToOneWithWhereWithoutSearchVectorsInput = {
  data: LanguageUpdateWithoutSearchVectorsInput;
  where?: InputMaybe<LanguageWhereInput>;
};

export type LanguageUpdateWithoutSearchVectorsInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  translations?: InputMaybe<TranslationUpdateManyWithoutLanguageNestedInput>;
};

export type LanguageUpsertWithoutSearchVectorsInput = {
  create: LanguageCreateWithoutSearchVectorsInput;
  update: LanguageUpdateWithoutSearchVectorsInput;
  where?: InputMaybe<LanguageWhereInput>;
};

export type LanguageWhereInput = {
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  code?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  searchVectors?: InputMaybe<FoodSearchVectorListRelationFilter>;
  translations?: InputMaybe<TranslationListRelationFilter>;
};

export type LanguageWhereUniqueInput = {
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  searchVectors?: InputMaybe<FoodSearchVectorListRelationFilter>;
  translations?: InputMaybe<TranslationListRelationFilter>;
};

export type LoginLog = {
  __typename?: 'LoginLog';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type LoginLogCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogCreateManyUserInputEnvelope = {
  data: Array<LoginLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LoginLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LoginLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LoginLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<LoginLogCreateManyUserInputEnvelope>;
};

export type LoginLogCreateOrConnectWithoutUserInput = {
  create: LoginLogCreateWithoutUserInput;
  where: LoginLogWhereUniqueInput;
};

export type LoginLogCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogListRelationFilter = {
  every?: InputMaybe<LoginLogWhereInput>;
  none?: InputMaybe<LoginLogWhereInput>;
  some?: InputMaybe<LoginLogWhereInput>;
};

export type LoginLogScalarWhereInput = {
  AND?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  NOT?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  OR?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  success?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type LoginLogUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  success?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userAgent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LoginLogUpdateManyWithWhereWithoutUserInput = {
  data: LoginLogUpdateManyMutationInput;
  where: LoginLogScalarWhereInput;
};

export type LoginLogUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LoginLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LoginLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<LoginLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  set?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  update?: InputMaybe<Array<LoginLogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LoginLogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LoginLogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LoginLogUpdateWithWhereUniqueWithoutUserInput = {
  data: LoginLogUpdateWithoutUserInput;
  where: LoginLogWhereUniqueInput;
};

export type LoginLogUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  success?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userAgent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LoginLogUpsertWithWhereUniqueWithoutUserInput = {
  create: LoginLogCreateWithoutUserInput;
  update: LoginLogUpdateWithoutUserInput;
  where: LoginLogWhereUniqueInput;
};

export type LoginLogWhereInput = {
  AND?: InputMaybe<Array<LoginLogWhereInput>>;
  NOT?: InputMaybe<Array<LoginLogWhereInput>>;
  OR?: InputMaybe<Array<LoginLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  success?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type LoginLogWhereUniqueInput = {
  AND?: InputMaybe<Array<LoginLogWhereInput>>;
  NOT?: InputMaybe<Array<LoginLogWhereInput>>;
  OR?: InputMaybe<Array<LoginLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  success?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type MeasureUnit = {
  __typename?: 'MeasureUnit';
  FoodPortion?: Maybe<Array<FoodPortion>>;
  _count: MeasureUnitCount;
  importInfo?: Maybe<ImportInfo>;
  importInfoId?: Maybe<Scalars['String']['output']>;
  name: Scalars['ID']['output'];
};

export type MeasureUnitCount = {
  __typename?: 'MeasureUnitCount';
  FoodPortion: Scalars['Int']['output'];
};

export type MeasureUnitCreateManyImportInfoInput = {
  name: Scalars['String']['input'];
};

export type MeasureUnitCreateManyImportInfoInputEnvelope = {
  data: Array<MeasureUnitCreateManyImportInfoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MeasureUnitCreateNestedManyWithoutImportInfoInput = {
  connect?: InputMaybe<Array<MeasureUnitWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MeasureUnitCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<MeasureUnitCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<MeasureUnitCreateManyImportInfoInputEnvelope>;
};

export type MeasureUnitCreateNestedOneWithoutFoodPortionInput = {
  connect?: InputMaybe<MeasureUnitWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MeasureUnitCreateOrConnectWithoutFoodPortionInput>;
  create?: InputMaybe<MeasureUnitCreateWithoutFoodPortionInput>;
};

export type MeasureUnitCreateOrConnectWithoutFoodPortionInput = {
  create: MeasureUnitCreateWithoutFoodPortionInput;
  where: MeasureUnitWhereUniqueInput;
};

export type MeasureUnitCreateOrConnectWithoutImportInfoInput = {
  create: MeasureUnitCreateWithoutImportInfoInput;
  where: MeasureUnitWhereUniqueInput;
};

export type MeasureUnitCreateWithoutFoodPortionInput = {
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutMeasureUnitsInput>;
  name: Scalars['String']['input'];
};

export type MeasureUnitCreateWithoutImportInfoInput = {
  FoodPortion?: InputMaybe<FoodPortionCreateNestedManyWithoutMeasureUnitInput>;
  name: Scalars['String']['input'];
};

export type MeasureUnitListRelationFilter = {
  every?: InputMaybe<MeasureUnitWhereInput>;
  none?: InputMaybe<MeasureUnitWhereInput>;
  some?: InputMaybe<MeasureUnitWhereInput>;
};

export type MeasureUnitOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MeasureUnitRelationFilter = {
  is?: InputMaybe<MeasureUnitWhereInput>;
  isNot?: InputMaybe<MeasureUnitWhereInput>;
};

export type MeasureUnitScalarWhereInput = {
  AND?: InputMaybe<Array<MeasureUnitScalarWhereInput>>;
  NOT?: InputMaybe<Array<MeasureUnitScalarWhereInput>>;
  OR?: InputMaybe<Array<MeasureUnitScalarWhereInput>>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MeasureUnitUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MeasureUnitUpdateManyWithWhereWithoutImportInfoInput = {
  data: MeasureUnitUpdateManyMutationInput;
  where: MeasureUnitScalarWhereInput;
};

export type MeasureUnitUpdateManyWithoutImportInfoNestedInput = {
  connect?: InputMaybe<Array<MeasureUnitWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MeasureUnitCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<MeasureUnitCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<MeasureUnitCreateManyImportInfoInputEnvelope>;
  delete?: InputMaybe<Array<MeasureUnitWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MeasureUnitScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MeasureUnitWhereUniqueInput>>;
  set?: InputMaybe<Array<MeasureUnitWhereUniqueInput>>;
  update?: InputMaybe<Array<MeasureUnitUpdateWithWhereUniqueWithoutImportInfoInput>>;
  updateMany?: InputMaybe<Array<MeasureUnitUpdateManyWithWhereWithoutImportInfoInput>>;
  upsert?: InputMaybe<Array<MeasureUnitUpsertWithWhereUniqueWithoutImportInfoInput>>;
};

export type MeasureUnitUpdateOneRequiredWithoutFoodPortionNestedInput = {
  connect?: InputMaybe<MeasureUnitWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MeasureUnitCreateOrConnectWithoutFoodPortionInput>;
  create?: InputMaybe<MeasureUnitCreateWithoutFoodPortionInput>;
  update?: InputMaybe<MeasureUnitUpdateToOneWithWhereWithoutFoodPortionInput>;
  upsert?: InputMaybe<MeasureUnitUpsertWithoutFoodPortionInput>;
};

export type MeasureUnitUpdateToOneWithWhereWithoutFoodPortionInput = {
  data: MeasureUnitUpdateWithoutFoodPortionInput;
  where?: InputMaybe<MeasureUnitWhereInput>;
};

export type MeasureUnitUpdateWithWhereUniqueWithoutImportInfoInput = {
  data: MeasureUnitUpdateWithoutImportInfoInput;
  where: MeasureUnitWhereUniqueInput;
};

export type MeasureUnitUpdateWithoutFoodPortionInput = {
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutMeasureUnitsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MeasureUnitUpdateWithoutImportInfoInput = {
  FoodPortion?: InputMaybe<FoodPortionUpdateManyWithoutMeasureUnitNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MeasureUnitUpsertWithWhereUniqueWithoutImportInfoInput = {
  create: MeasureUnitCreateWithoutImportInfoInput;
  update: MeasureUnitUpdateWithoutImportInfoInput;
  where: MeasureUnitWhereUniqueInput;
};

export type MeasureUnitUpsertWithoutFoodPortionInput = {
  create: MeasureUnitCreateWithoutFoodPortionInput;
  update: MeasureUnitUpdateWithoutFoodPortionInput;
  where?: InputMaybe<MeasureUnitWhereInput>;
};

export type MeasureUnitWhereInput = {
  AND?: InputMaybe<Array<MeasureUnitWhereInput>>;
  FoodPortion?: InputMaybe<FoodPortionListRelationFilter>;
  NOT?: InputMaybe<Array<MeasureUnitWhereInput>>;
  OR?: InputMaybe<Array<MeasureUnitWhereInput>>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MeasureUnitWhereUniqueInput = {
  AND?: InputMaybe<Array<MeasureUnitWhereInput>>;
  FoodPortion?: InputMaybe<FoodPortionListRelationFilter>;
  NOT?: InputMaybe<Array<MeasureUnitWhereInput>>;
  OR?: InputMaybe<Array<MeasureUnitWhereInput>>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  updateSubmission: Submission;
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


export type MutationCreateQuestionArgs = {
  input: QuestionCreateInput;
};


export type MutationCreateQuestionnaireArgs = {
  data: QuestionnaireCreateInput;
};


export type MutationCreateRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateSectionArgs = {
  input: SectionCreateInput;
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
  where: RecipeWhereUniqueInput;
};


export type MutationUpdateSectionArgs = {
  id: Scalars['ID']['input'];
  input: SectionUpdateInput;
};


export type MutationUpdateSubmissionArgs = {
  id: Scalars['String']['input'];
  input: SubmissionUpdateInput;
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

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumFoodDataSourceFilter = {
  equals?: InputMaybe<FoodDataSource>;
  in?: InputMaybe<Array<FoodDataSource>>;
  not?: InputMaybe<NestedEnumFoodDataSourceFilter>;
  notIn?: InputMaybe<Array<FoodDataSource>>;
};

export type NestedEnumRecipeInstructionsTypeFilter = {
  equals?: InputMaybe<RecipeInstructionsType>;
  in?: InputMaybe<Array<RecipeInstructionsType>>;
  not?: InputMaybe<NestedEnumRecipeInstructionsTypeFilter>;
  notIn?: InputMaybe<Array<RecipeInstructionsType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
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

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Nutrient = {
  __typename?: 'Nutrient';
  _count: NutrientCount;
  foodNutrients?: Maybe<Array<FoodNutrient>>;
  id: Scalars['ID']['output'];
  importInfo?: Maybe<ImportInfo>;
  importInfoId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  sourceId: Scalars['String']['output'];
  unitName: Scalars['String']['output'];
};

export type NutrientCount = {
  __typename?: 'NutrientCount';
  foodNutrients: Scalars['Int']['output'];
};

export type NutrientCreateManyImportInfoInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
  unitName: Scalars['String']['input'];
};

export type NutrientCreateManyImportInfoInputEnvelope = {
  data: Array<NutrientCreateManyImportInfoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NutrientCreateNestedManyWithoutImportInfoInput = {
  connect?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutrientCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<NutrientCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<NutrientCreateManyImportInfoInputEnvelope>;
};

export type NutrientCreateNestedOneWithoutFoodNutrientsInput = {
  connect?: InputMaybe<NutrientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutrientCreateOrConnectWithoutFoodNutrientsInput>;
  create?: InputMaybe<NutrientCreateWithoutFoodNutrientsInput>;
};

export type NutrientCreateOrConnectWithoutFoodNutrientsInput = {
  create: NutrientCreateWithoutFoodNutrientsInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientCreateOrConnectWithoutImportInfoInput = {
  create: NutrientCreateWithoutImportInfoInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientCreateWithoutFoodNutrientsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoCreateNestedOneWithoutNutrientsInput>;
  name: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
  unitName: Scalars['String']['input'];
};

export type NutrientCreateWithoutImportInfoInput = {
  foodNutrients?: InputMaybe<FoodNutrientCreateNestedManyWithoutNutrientInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
  unitName: Scalars['String']['input'];
};

export type NutrientListRelationFilter = {
  every?: InputMaybe<NutrientWhereInput>;
  none?: InputMaybe<NutrientWhereInput>;
  some?: InputMaybe<NutrientWhereInput>;
};

export type NutrientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NutrientRelationFilter = {
  is?: InputMaybe<NutrientWhereInput>;
  isNot?: InputMaybe<NutrientWhereInput>;
};

export type NutrientScalarWhereInput = {
  AND?: InputMaybe<Array<NutrientScalarWhereInput>>;
  NOT?: InputMaybe<Array<NutrientScalarWhereInput>>;
  OR?: InputMaybe<Array<NutrientScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<StringFilter>;
  unitName?: InputMaybe<StringFilter>;
};

export type NutrientUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  unitName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NutrientUpdateManyWithWhereWithoutImportInfoInput = {
  data: NutrientUpdateManyMutationInput;
  where: NutrientScalarWhereInput;
};

export type NutrientUpdateManyWithoutImportInfoNestedInput = {
  connect?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutrientCreateOrConnectWithoutImportInfoInput>>;
  create?: InputMaybe<Array<NutrientCreateWithoutImportInfoInput>>;
  createMany?: InputMaybe<NutrientCreateManyImportInfoInputEnvelope>;
  delete?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NutrientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  set?: InputMaybe<Array<NutrientWhereUniqueInput>>;
  update?: InputMaybe<Array<NutrientUpdateWithWhereUniqueWithoutImportInfoInput>>;
  updateMany?: InputMaybe<Array<NutrientUpdateManyWithWhereWithoutImportInfoInput>>;
  upsert?: InputMaybe<Array<NutrientUpsertWithWhereUniqueWithoutImportInfoInput>>;
};

export type NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput = {
  connect?: InputMaybe<NutrientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutrientCreateOrConnectWithoutFoodNutrientsInput>;
  create?: InputMaybe<NutrientCreateWithoutFoodNutrientsInput>;
  update?: InputMaybe<NutrientUpdateToOneWithWhereWithoutFoodNutrientsInput>;
  upsert?: InputMaybe<NutrientUpsertWithoutFoodNutrientsInput>;
};

export type NutrientUpdateToOneWithWhereWithoutFoodNutrientsInput = {
  data: NutrientUpdateWithoutFoodNutrientsInput;
  where?: InputMaybe<NutrientWhereInput>;
};

export type NutrientUpdateWithWhereUniqueWithoutImportInfoInput = {
  data: NutrientUpdateWithoutImportInfoInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientUpdateWithoutFoodNutrientsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  importInfo?: InputMaybe<ImportInfoUpdateOneWithoutNutrientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  unitName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NutrientUpdateWithoutImportInfoInput = {
  foodNutrients?: InputMaybe<FoodNutrientUpdateManyWithoutNutrientNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  unitName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NutrientUpsertWithWhereUniqueWithoutImportInfoInput = {
  create: NutrientCreateWithoutImportInfoInput;
  update: NutrientUpdateWithoutImportInfoInput;
  where: NutrientWhereUniqueInput;
};

export type NutrientUpsertWithoutFoodNutrientsInput = {
  create: NutrientCreateWithoutFoodNutrientsInput;
  update: NutrientUpdateWithoutFoodNutrientsInput;
  where?: InputMaybe<NutrientWhereInput>;
};

export type NutrientWhereInput = {
  AND?: InputMaybe<Array<NutrientWhereInput>>;
  NOT?: InputMaybe<Array<NutrientWhereInput>>;
  OR?: InputMaybe<Array<NutrientWhereInput>>;
  foodNutrients?: InputMaybe<FoodNutrientListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<StringFilter>;
  unitName?: InputMaybe<StringFilter>;
};

export type NutrientWhereUniqueInput = {
  AND?: InputMaybe<Array<NutrientWhereInput>>;
  NOT?: InputMaybe<Array<NutrientWhereInput>>;
  OR?: InputMaybe<Array<NutrientWhereInput>>;
  foodNutrients?: InputMaybe<FoodNutrientListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  importInfo?: InputMaybe<ImportInfoNullableRelationFilter>;
  importInfoId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  unitName?: InputMaybe<StringFilter>;
};

export type NutritionLabel = {
  __typename?: 'NutritionLabel';
  addedSugars?: Maybe<Scalars['Float']['output']>;
  brandedFood: BrandedFood;
  brandedFoodId: Scalars['String']['output'];
  calcium?: Maybe<Scalars['Float']['output']>;
  calories?: Maybe<Scalars['Float']['output']>;
  cholesterol?: Maybe<Scalars['Float']['output']>;
  dietaryFiber?: Maybe<Scalars['Float']['output']>;
  householdServingFullText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  iron?: Maybe<Scalars['Float']['output']>;
  percentDailyValueCalcium?: Maybe<Scalars['Float']['output']>;
  percentDailyValueCarbohydrate?: Maybe<Scalars['Float']['output']>;
  percentDailyValueCholesterol?: Maybe<Scalars['Float']['output']>;
  percentDailyValueFat?: Maybe<Scalars['Float']['output']>;
  percentDailyValueFiber?: Maybe<Scalars['Float']['output']>;
  percentDailyValueIron?: Maybe<Scalars['Float']['output']>;
  percentDailyValuePotassium?: Maybe<Scalars['Float']['output']>;
  percentDailyValueProtein?: Maybe<Scalars['Float']['output']>;
  percentDailyValueSaturatedFat?: Maybe<Scalars['Float']['output']>;
  percentDailyValueSodium?: Maybe<Scalars['Float']['output']>;
  percentDailyValueVitaminA?: Maybe<Scalars['Float']['output']>;
  percentDailyValueVitaminC?: Maybe<Scalars['Float']['output']>;
  percentDailyValueVitaminD?: Maybe<Scalars['Float']['output']>;
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

export type NutritionLabelCreateNestedOneWithoutBrandedFoodInput = {
  connect?: InputMaybe<NutritionLabelWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutritionLabelCreateOrConnectWithoutBrandedFoodInput>;
  create?: InputMaybe<NutritionLabelCreateWithoutBrandedFoodInput>;
};

export type NutritionLabelCreateOrConnectWithoutBrandedFoodInput = {
  create: NutritionLabelCreateWithoutBrandedFoodInput;
  where: NutritionLabelWhereUniqueInput;
};

export type NutritionLabelCreateWithoutBrandedFoodInput = {
  addedSugars?: InputMaybe<Scalars['Float']['input']>;
  calcium?: InputMaybe<Scalars['Float']['input']>;
  calories?: InputMaybe<Scalars['Float']['input']>;
  cholesterol?: InputMaybe<Scalars['Float']['input']>;
  dietaryFiber?: InputMaybe<Scalars['Float']['input']>;
  householdServingFullText?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iron?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueCalcium?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueCarbohydrate?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueCholesterol?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueFat?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueFiber?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueIron?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValuePotassium?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueProtein?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueSaturatedFat?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueSodium?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueVitaminA?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueVitaminC?: InputMaybe<Scalars['Float']['input']>;
  percentDailyValueVitaminD?: InputMaybe<Scalars['Float']['input']>;
  potassium?: InputMaybe<Scalars['Float']['input']>;
  protein?: InputMaybe<Scalars['Float']['input']>;
  saturatedFat?: InputMaybe<Scalars['Float']['input']>;
  servingsPerContainer?: InputMaybe<Scalars['Float']['input']>;
  sodium?: InputMaybe<Scalars['Float']['input']>;
  totalCarbohydrate?: InputMaybe<Scalars['Float']['input']>;
  totalFat?: InputMaybe<Scalars['Float']['input']>;
  totalSugars?: InputMaybe<Scalars['Float']['input']>;
  transFat?: InputMaybe<Scalars['Float']['input']>;
  vitaminA?: InputMaybe<Scalars['Float']['input']>;
  vitaminC?: InputMaybe<Scalars['Float']['input']>;
  vitaminD?: InputMaybe<Scalars['Float']['input']>;
};

export type NutritionLabelNullableRelationFilter = {
  is?: InputMaybe<NutritionLabelWhereInput>;
  isNot?: InputMaybe<NutritionLabelWhereInput>;
};

export type NutritionLabelOrderByWithRelationInput = {
  addedSugars?: InputMaybe<SortOrderInput>;
  brandedFood?: InputMaybe<BrandedFoodOrderByWithRelationInput>;
  brandedFoodId?: InputMaybe<SortOrder>;
  calcium?: InputMaybe<SortOrderInput>;
  calories?: InputMaybe<SortOrderInput>;
  cholesterol?: InputMaybe<SortOrderInput>;
  dietaryFiber?: InputMaybe<SortOrderInput>;
  householdServingFullText?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  iron?: InputMaybe<SortOrderInput>;
  percentDailyValueCalcium?: InputMaybe<SortOrderInput>;
  percentDailyValueCarbohydrate?: InputMaybe<SortOrderInput>;
  percentDailyValueCholesterol?: InputMaybe<SortOrderInput>;
  percentDailyValueFat?: InputMaybe<SortOrderInput>;
  percentDailyValueFiber?: InputMaybe<SortOrderInput>;
  percentDailyValueIron?: InputMaybe<SortOrderInput>;
  percentDailyValuePotassium?: InputMaybe<SortOrderInput>;
  percentDailyValueProtein?: InputMaybe<SortOrderInput>;
  percentDailyValueSaturatedFat?: InputMaybe<SortOrderInput>;
  percentDailyValueSodium?: InputMaybe<SortOrderInput>;
  percentDailyValueVitaminA?: InputMaybe<SortOrderInput>;
  percentDailyValueVitaminC?: InputMaybe<SortOrderInput>;
  percentDailyValueVitaminD?: InputMaybe<SortOrderInput>;
  potassium?: InputMaybe<SortOrderInput>;
  protein?: InputMaybe<SortOrderInput>;
  saturatedFat?: InputMaybe<SortOrderInput>;
  servingsPerContainer?: InputMaybe<SortOrderInput>;
  sodium?: InputMaybe<SortOrderInput>;
  totalCarbohydrate?: InputMaybe<SortOrderInput>;
  totalFat?: InputMaybe<SortOrderInput>;
  totalSugars?: InputMaybe<SortOrderInput>;
  transFat?: InputMaybe<SortOrderInput>;
  vitaminA?: InputMaybe<SortOrderInput>;
  vitaminC?: InputMaybe<SortOrderInput>;
  vitaminD?: InputMaybe<SortOrderInput>;
};

export type NutritionLabelUpdateOneWithoutBrandedFoodNestedInput = {
  connect?: InputMaybe<NutritionLabelWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NutritionLabelCreateOrConnectWithoutBrandedFoodInput>;
  create?: InputMaybe<NutritionLabelCreateWithoutBrandedFoodInput>;
  delete?: InputMaybe<NutritionLabelWhereInput>;
  disconnect?: InputMaybe<NutritionLabelWhereInput>;
  update?: InputMaybe<NutritionLabelUpdateToOneWithWhereWithoutBrandedFoodInput>;
  upsert?: InputMaybe<NutritionLabelUpsertWithoutBrandedFoodInput>;
};

export type NutritionLabelUpdateToOneWithWhereWithoutBrandedFoodInput = {
  data: NutritionLabelUpdateWithoutBrandedFoodInput;
  where?: InputMaybe<NutritionLabelWhereInput>;
};

export type NutritionLabelUpdateWithoutBrandedFoodInput = {
  addedSugars?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  calcium?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  calories?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  cholesterol?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  dietaryFiber?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  householdServingFullText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  iron?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueCalcium?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueCarbohydrate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueCholesterol?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueFat?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueFiber?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueIron?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValuePotassium?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueProtein?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueSaturatedFat?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueSodium?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueVitaminA?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueVitaminC?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  percentDailyValueVitaminD?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  potassium?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  protein?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  saturatedFat?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  servingsPerContainer?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  sodium?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  totalCarbohydrate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  totalFat?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  totalSugars?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  transFat?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  vitaminA?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  vitaminC?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  vitaminD?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type NutritionLabelUpsertWithoutBrandedFoodInput = {
  create: NutritionLabelCreateWithoutBrandedFoodInput;
  update: NutritionLabelUpdateWithoutBrandedFoodInput;
  where?: InputMaybe<NutritionLabelWhereInput>;
};

export type NutritionLabelWhereInput = {
  AND?: InputMaybe<Array<NutritionLabelWhereInput>>;
  NOT?: InputMaybe<Array<NutritionLabelWhereInput>>;
  OR?: InputMaybe<Array<NutritionLabelWhereInput>>;
  addedSugars?: InputMaybe<FloatNullableFilter>;
  brandedFood?: InputMaybe<BrandedFoodRelationFilter>;
  brandedFoodId?: InputMaybe<StringFilter>;
  calcium?: InputMaybe<FloatNullableFilter>;
  calories?: InputMaybe<FloatNullableFilter>;
  cholesterol?: InputMaybe<FloatNullableFilter>;
  dietaryFiber?: InputMaybe<FloatNullableFilter>;
  householdServingFullText?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  iron?: InputMaybe<FloatNullableFilter>;
  percentDailyValueCalcium?: InputMaybe<FloatNullableFilter>;
  percentDailyValueCarbohydrate?: InputMaybe<FloatNullableFilter>;
  percentDailyValueCholesterol?: InputMaybe<FloatNullableFilter>;
  percentDailyValueFat?: InputMaybe<FloatNullableFilter>;
  percentDailyValueFiber?: InputMaybe<FloatNullableFilter>;
  percentDailyValueIron?: InputMaybe<FloatNullableFilter>;
  percentDailyValuePotassium?: InputMaybe<FloatNullableFilter>;
  percentDailyValueProtein?: InputMaybe<FloatNullableFilter>;
  percentDailyValueSaturatedFat?: InputMaybe<FloatNullableFilter>;
  percentDailyValueSodium?: InputMaybe<FloatNullableFilter>;
  percentDailyValueVitaminA?: InputMaybe<FloatNullableFilter>;
  percentDailyValueVitaminC?: InputMaybe<FloatNullableFilter>;
  percentDailyValueVitaminD?: InputMaybe<FloatNullableFilter>;
  potassium?: InputMaybe<FloatNullableFilter>;
  protein?: InputMaybe<FloatNullableFilter>;
  saturatedFat?: InputMaybe<FloatNullableFilter>;
  servingsPerContainer?: InputMaybe<FloatNullableFilter>;
  sodium?: InputMaybe<FloatNullableFilter>;
  totalCarbohydrate?: InputMaybe<FloatNullableFilter>;
  totalFat?: InputMaybe<FloatNullableFilter>;
  totalSugars?: InputMaybe<FloatNullableFilter>;
  transFat?: InputMaybe<FloatNullableFilter>;
  vitaminA?: InputMaybe<FloatNullableFilter>;
  vitaminC?: InputMaybe<FloatNullableFilter>;
  vitaminD?: InputMaybe<FloatNullableFilter>;
};

export type NutritionLabelWhereUniqueInput = {
  AND?: InputMaybe<Array<NutritionLabelWhereInput>>;
  NOT?: InputMaybe<Array<NutritionLabelWhereInput>>;
  OR?: InputMaybe<Array<NutritionLabelWhereInput>>;
  addedSugars?: InputMaybe<FloatNullableFilter>;
  brandedFood?: InputMaybe<BrandedFoodRelationFilter>;
  brandedFoodId?: InputMaybe<Scalars['String']['input']>;
  calcium?: InputMaybe<FloatNullableFilter>;
  calories?: InputMaybe<FloatNullableFilter>;
  cholesterol?: InputMaybe<FloatNullableFilter>;
  dietaryFiber?: InputMaybe<FloatNullableFilter>;
  householdServingFullText?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  iron?: InputMaybe<FloatNullableFilter>;
  percentDailyValueCalcium?: InputMaybe<FloatNullableFilter>;
  percentDailyValueCarbohydrate?: InputMaybe<FloatNullableFilter>;
  percentDailyValueCholesterol?: InputMaybe<FloatNullableFilter>;
  percentDailyValueFat?: InputMaybe<FloatNullableFilter>;
  percentDailyValueFiber?: InputMaybe<FloatNullableFilter>;
  percentDailyValueIron?: InputMaybe<FloatNullableFilter>;
  percentDailyValuePotassium?: InputMaybe<FloatNullableFilter>;
  percentDailyValueProtein?: InputMaybe<FloatNullableFilter>;
  percentDailyValueSaturatedFat?: InputMaybe<FloatNullableFilter>;
  percentDailyValueSodium?: InputMaybe<FloatNullableFilter>;
  percentDailyValueVitaminA?: InputMaybe<FloatNullableFilter>;
  percentDailyValueVitaminC?: InputMaybe<FloatNullableFilter>;
  percentDailyValueVitaminD?: InputMaybe<FloatNullableFilter>;
  potassium?: InputMaybe<FloatNullableFilter>;
  protein?: InputMaybe<FloatNullableFilter>;
  saturatedFat?: InputMaybe<FloatNullableFilter>;
  servingsPerContainer?: InputMaybe<FloatNullableFilter>;
  sodium?: InputMaybe<FloatNullableFilter>;
  totalCarbohydrate?: InputMaybe<FloatNullableFilter>;
  totalFat?: InputMaybe<FloatNullableFilter>;
  totalSugars?: InputMaybe<FloatNullableFilter>;
  transFat?: InputMaybe<FloatNullableFilter>;
  vitaminA?: InputMaybe<FloatNullableFilter>;
  vitaminC?: InputMaybe<FloatNullableFilter>;
  vitaminD?: InputMaybe<FloatNullableFilter>;
};

export type PasswordResetToken = {
  __typename?: 'PasswordResetToken';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type PasswordResetTokenCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenCreateManyUserInputEnvelope = {
  data: Array<PasswordResetTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PasswordResetTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PasswordResetTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<PasswordResetTokenCreateManyUserInputEnvelope>;
};

export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
  create: PasswordResetTokenCreateWithoutUserInput;
  where: PasswordResetTokenWhereUniqueInput;
};

export type PasswordResetTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenListRelationFilter = {
  every?: InputMaybe<PasswordResetTokenWhereInput>;
  none?: InputMaybe<PasswordResetTokenWhereInput>;
  some?: InputMaybe<PasswordResetTokenWhereInput>;
};

export type PasswordResetTokenScalarWhereInput = {
  AND?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PasswordResetTokenUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
  data: PasswordResetTokenUpdateManyMutationInput;
  where: PasswordResetTokenScalarWhereInput;
};

export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PasswordResetTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PasswordResetTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<PasswordResetTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PasswordResetTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: PasswordResetTokenUpdateWithoutUserInput;
  where: PasswordResetTokenWhereUniqueInput;
};

export type PasswordResetTokenUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: PasswordResetTokenCreateWithoutUserInput;
  update: PasswordResetTokenUpdateWithoutUserInput;
  where: PasswordResetTokenWhereUniqueInput;
};

export type PasswordResetTokenWhereInput = {
  AND?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PasswordResetTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
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
  sortInput?: InputMaybe<FoodOrderByWithRelationInput>;
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
  _count: QuestionCount;
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

export type QuestionCount = {
  __typename?: 'QuestionCount';
  answers: Scalars['Int']['output'];
};

export type QuestionCreateInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutQuestionInput>;
  config: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Int']['input'];
  section: SectionCreateNestedOneWithoutQuestionsInput;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type QuestionCreateManySectionInput = {
  config: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type QuestionCreateManySectionInputEnvelope = {
  data: Array<QuestionCreateManySectionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateNestedManyWithoutSectionInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutSectionInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutSectionInput>>;
  createMany?: InputMaybe<QuestionCreateManySectionInputEnvelope>;
};

export type QuestionCreateNestedOneWithoutAnswersInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<QuestionCreateWithoutAnswersInput>;
};

export type QuestionCreateOrConnectWithoutAnswersInput = {
  create: QuestionCreateWithoutAnswersInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutSectionInput = {
  create: QuestionCreateWithoutSectionInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutAnswersInput = {
  config: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Int']['input'];
  section: SectionCreateNestedOneWithoutQuestionsInput;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type QuestionCreateWithoutSectionInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutQuestionInput>;
  config: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>;
  none?: InputMaybe<QuestionWhereInput>;
  some?: InputMaybe<QuestionWhereInput>;
};

export type QuestionRelationFilter = {
  is?: InputMaybe<QuestionWhereInput>;
  isNot?: InputMaybe<QuestionWhereInput>;
};

export type QuestionScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereInput>>;
  config?: InputMaybe<JsonFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isRequired?: InputMaybe<BoolFilter>;
  order?: InputMaybe<IntFilter>;
  sectionId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type QuestionUpdateInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutQuestionNestedInput>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<SectionUpdateOneRequiredWithoutQuestionsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutSectionInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutSectionNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutSectionInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutSectionInput>>;
  createMany?: InputMaybe<QuestionCreateManySectionInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutSectionInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutSectionInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutSectionInput>>;
};

export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<QuestionCreateWithoutAnswersInput>;
  update?: InputMaybe<QuestionUpdateToOneWithWhereWithoutAnswersInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutAnswersInput>;
};

export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
  data: QuestionUpdateWithoutAnswersInput;
  where?: InputMaybe<QuestionWhereInput>;
};

export type QuestionUpdateWithWhereUniqueWithoutSectionInput = {
  data: QuestionUpdateWithoutSectionInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutAnswersInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<SectionUpdateOneRequiredWithoutQuestionsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutSectionInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutQuestionNestedInput>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionUpsertWithWhereUniqueWithoutSectionInput = {
  create: QuestionCreateWithoutSectionInput;
  update: QuestionUpdateWithoutSectionInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithoutAnswersInput = {
  create: QuestionCreateWithoutAnswersInput;
  update: QuestionUpdateWithoutAnswersInput;
  where?: InputMaybe<QuestionWhereInput>;
};

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  config?: InputMaybe<JsonFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isRequired?: InputMaybe<BoolFilter>;
  order?: InputMaybe<IntFilter>;
  section?: InputMaybe<SectionRelationFilter>;
  sectionId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type QuestionWhereUniqueInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  config?: InputMaybe<JsonFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRequired?: InputMaybe<BoolFilter>;
  order?: InputMaybe<IntFilter>;
  section?: InputMaybe<SectionRelationFilter>;
  sectionId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type Questionnaire = {
  __typename?: 'Questionnaire';
  _count: QuestionnaireCount;
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

export type QuestionnaireCount = {
  __typename?: 'QuestionnaireCount';
  submissions: Scalars['Int']['output'];
  versions: Scalars['Int']['output'];
};

export type QuestionnaireCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutQuestionnaireInput>;
  tenant?: InputMaybe<TenantCreateNestedOneWithoutQuestionnairesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<QuestionnaireVersionCreateNestedManyWithoutQuestionnaireInput>;
};

export type QuestionnaireCreateNestedOneWithoutSubmissionsInput = {
  connect?: InputMaybe<QuestionnaireWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<QuestionnaireCreateWithoutSubmissionsInput>;
};

export type QuestionnaireCreateNestedOneWithoutVersionsInput = {
  connect?: InputMaybe<QuestionnaireWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireCreateOrConnectWithoutVersionsInput>;
  create?: InputMaybe<QuestionnaireCreateWithoutVersionsInput>;
};

export type QuestionnaireCreateOrConnectWithoutSubmissionsInput = {
  create: QuestionnaireCreateWithoutSubmissionsInput;
  where: QuestionnaireWhereUniqueInput;
};

export type QuestionnaireCreateOrConnectWithoutVersionsInput = {
  create: QuestionnaireCreateWithoutVersionsInput;
  where: QuestionnaireWhereUniqueInput;
};

export type QuestionnaireCreateWithoutSubmissionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  tenant?: InputMaybe<TenantCreateNestedOneWithoutQuestionnairesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versions?: InputMaybe<QuestionnaireVersionCreateNestedManyWithoutQuestionnaireInput>;
};

export type QuestionnaireCreateWithoutVersionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutQuestionnaireInput>;
  tenant?: InputMaybe<TenantCreateNestedOneWithoutQuestionnairesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuestionnaireListRelationFilter = {
  every?: InputMaybe<QuestionnaireWhereInput>;
  none?: InputMaybe<QuestionnaireWhereInput>;
  some?: InputMaybe<QuestionnaireWhereInput>;
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

export type QuestionnaireOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionnaireOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  isPublic?: InputMaybe<SortOrder>;
  submissions?: InputMaybe<SubmissionOrderByRelationAggregateInput>;
  tenant?: InputMaybe<TenantOrderByWithRelationInput>;
  tenantId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  versions?: InputMaybe<QuestionnaireVersionOrderByRelationAggregateInput>;
};

export type QuestionnairePaginatedModel = {
  __typename?: 'QuestionnairePaginatedModel';
  data: Array<Questionnaire>;
  meta: QuestionnaireMeta;
};

export type QuestionnaireRelationFilter = {
  is?: InputMaybe<QuestionnaireWhereInput>;
  isNot?: InputMaybe<QuestionnaireWhereInput>;
};

export type QuestionnaireUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPublic?: InputMaybe<BoolFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutQuestionnaireNestedInput>;
  tenant?: InputMaybe<TenantUpdateOneWithoutQuestionnairesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  versions?: InputMaybe<QuestionnaireVersionUpdateManyWithoutQuestionnaireNestedInput>;
};

export type QuestionnaireUpdateOneRequiredWithoutSubmissionsNestedInput = {
  connect?: InputMaybe<QuestionnaireWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<QuestionnaireCreateWithoutSubmissionsInput>;
  update?: InputMaybe<QuestionnaireUpdateToOneWithWhereWithoutSubmissionsInput>;
  upsert?: InputMaybe<QuestionnaireUpsertWithoutSubmissionsInput>;
};

export type QuestionnaireUpdateOneRequiredWithoutVersionsNestedInput = {
  connect?: InputMaybe<QuestionnaireWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireCreateOrConnectWithoutVersionsInput>;
  create?: InputMaybe<QuestionnaireCreateWithoutVersionsInput>;
  update?: InputMaybe<QuestionnaireUpdateToOneWithWhereWithoutVersionsInput>;
  upsert?: InputMaybe<QuestionnaireUpsertWithoutVersionsInput>;
};

export type QuestionnaireUpdateToOneWithWhereWithoutSubmissionsInput = {
  data: QuestionnaireUpdateWithoutSubmissionsInput;
  where?: InputMaybe<QuestionnaireWhereInput>;
};

export type QuestionnaireUpdateToOneWithWhereWithoutVersionsInput = {
  data: QuestionnaireUpdateWithoutVersionsInput;
  where?: InputMaybe<QuestionnaireWhereInput>;
};

export type QuestionnaireUpdateWithoutSubmissionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPublic?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tenant?: InputMaybe<TenantUpdateOneWithoutQuestionnairesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  versions?: InputMaybe<QuestionnaireVersionUpdateManyWithoutQuestionnaireNestedInput>;
};

export type QuestionnaireUpdateWithoutVersionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPublic?: InputMaybe<BoolFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutQuestionnaireNestedInput>;
  tenant?: InputMaybe<TenantUpdateOneWithoutQuestionnairesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type QuestionnaireUpsertWithoutSubmissionsInput = {
  create: QuestionnaireCreateWithoutSubmissionsInput;
  update: QuestionnaireUpdateWithoutSubmissionsInput;
  where?: InputMaybe<QuestionnaireWhereInput>;
};

export type QuestionnaireUpsertWithoutVersionsInput = {
  create: QuestionnaireCreateWithoutVersionsInput;
  update: QuestionnaireUpdateWithoutVersionsInput;
  where?: InputMaybe<QuestionnaireWhereInput>;
};

export type QuestionnaireVersion = {
  __typename?: 'QuestionnaireVersion';
  _count: QuestionnaireVersionCount;
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

export type QuestionnaireVersionCount = {
  __typename?: 'QuestionnaireVersionCount';
  sections: Scalars['Int']['output'];
  submissions: Scalars['Int']['output'];
};

export type QuestionnaireVersionCreateManyQuestionnaireInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versionNumber: Scalars['Int']['input'];
};

export type QuestionnaireVersionCreateManyQuestionnaireInputEnvelope = {
  data: Array<QuestionnaireVersionCreateManyQuestionnaireInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionnaireVersionCreateNestedManyWithoutQuestionnaireInput = {
  connect?: InputMaybe<Array<QuestionnaireVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput>>;
  create?: InputMaybe<Array<QuestionnaireVersionCreateWithoutQuestionnaireInput>>;
  createMany?: InputMaybe<QuestionnaireVersionCreateManyQuestionnaireInputEnvelope>;
};

export type QuestionnaireVersionCreateNestedOneWithoutSectionsInput = {
  connect?: InputMaybe<QuestionnaireVersionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireVersionCreateOrConnectWithoutSectionsInput>;
  create?: InputMaybe<QuestionnaireVersionCreateWithoutSectionsInput>;
};

export type QuestionnaireVersionCreateNestedOneWithoutSubmissionsInput = {
  connect?: InputMaybe<QuestionnaireVersionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireVersionCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<QuestionnaireVersionCreateWithoutSubmissionsInput>;
};

export type QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput = {
  create: QuestionnaireVersionCreateWithoutQuestionnaireInput;
  where: QuestionnaireVersionWhereUniqueInput;
};

export type QuestionnaireVersionCreateOrConnectWithoutSectionsInput = {
  create: QuestionnaireVersionCreateWithoutSectionsInput;
  where: QuestionnaireVersionWhereUniqueInput;
};

export type QuestionnaireVersionCreateOrConnectWithoutSubmissionsInput = {
  create: QuestionnaireVersionCreateWithoutSubmissionsInput;
  where: QuestionnaireVersionWhereUniqueInput;
};

export type QuestionnaireVersionCreateWithoutQuestionnaireInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  sections?: InputMaybe<SectionCreateNestedManyWithoutQuestionnaireVersionInput>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutQuestionnaireVersionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versionNumber: Scalars['Int']['input'];
};

export type QuestionnaireVersionCreateWithoutSectionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaire: QuestionnaireCreateNestedOneWithoutVersionsInput;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutQuestionnaireVersionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versionNumber: Scalars['Int']['input'];
};

export type QuestionnaireVersionCreateWithoutSubmissionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaire: QuestionnaireCreateNestedOneWithoutVersionsInput;
  sections?: InputMaybe<SectionCreateNestedManyWithoutQuestionnaireVersionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  versionNumber: Scalars['Int']['input'];
};

export type QuestionnaireVersionListRelationFilter = {
  every?: InputMaybe<QuestionnaireVersionWhereInput>;
  none?: InputMaybe<QuestionnaireVersionWhereInput>;
  some?: InputMaybe<QuestionnaireVersionWhereInput>;
};

export type QuestionnaireVersionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionnaireVersionQuestionnaireIdVersionNumberCompoundUniqueInput = {
  questionnaireId: Scalars['String']['input'];
  versionNumber: Scalars['Int']['input'];
};

export type QuestionnaireVersionRelationFilter = {
  is?: InputMaybe<QuestionnaireVersionWhereInput>;
  isNot?: InputMaybe<QuestionnaireVersionWhereInput>;
};

export type QuestionnaireVersionScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionnaireVersionScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionnaireVersionScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionnaireVersionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  questionnaireId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  versionNumber?: InputMaybe<IntFilter>;
};

export type QuestionnaireVersionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  versionNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type QuestionnaireVersionUpdateManyWithWhereWithoutQuestionnaireInput = {
  data: QuestionnaireVersionUpdateManyMutationInput;
  where: QuestionnaireVersionScalarWhereInput;
};

export type QuestionnaireVersionUpdateManyWithoutQuestionnaireNestedInput = {
  connect?: InputMaybe<Array<QuestionnaireVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput>>;
  create?: InputMaybe<Array<QuestionnaireVersionCreateWithoutQuestionnaireInput>>;
  createMany?: InputMaybe<QuestionnaireVersionCreateManyQuestionnaireInputEnvelope>;
  delete?: InputMaybe<Array<QuestionnaireVersionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionnaireVersionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionnaireVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionnaireVersionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionnaireVersionUpdateWithWhereUniqueWithoutQuestionnaireInput>>;
  updateMany?: InputMaybe<Array<QuestionnaireVersionUpdateManyWithWhereWithoutQuestionnaireInput>>;
  upsert?: InputMaybe<Array<QuestionnaireVersionUpsertWithWhereUniqueWithoutQuestionnaireInput>>;
};

export type QuestionnaireVersionUpdateOneRequiredWithoutSectionsNestedInput = {
  connect?: InputMaybe<QuestionnaireVersionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireVersionCreateOrConnectWithoutSectionsInput>;
  create?: InputMaybe<QuestionnaireVersionCreateWithoutSectionsInput>;
  update?: InputMaybe<QuestionnaireVersionUpdateToOneWithWhereWithoutSectionsInput>;
  upsert?: InputMaybe<QuestionnaireVersionUpsertWithoutSectionsInput>;
};

export type QuestionnaireVersionUpdateOneRequiredWithoutSubmissionsNestedInput = {
  connect?: InputMaybe<QuestionnaireVersionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireVersionCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<QuestionnaireVersionCreateWithoutSubmissionsInput>;
  update?: InputMaybe<QuestionnaireVersionUpdateToOneWithWhereWithoutSubmissionsInput>;
  upsert?: InputMaybe<QuestionnaireVersionUpsertWithoutSubmissionsInput>;
};

export type QuestionnaireVersionUpdateToOneWithWhereWithoutSectionsInput = {
  data: QuestionnaireVersionUpdateWithoutSectionsInput;
  where?: InputMaybe<QuestionnaireVersionWhereInput>;
};

export type QuestionnaireVersionUpdateToOneWithWhereWithoutSubmissionsInput = {
  data: QuestionnaireVersionUpdateWithoutSubmissionsInput;
  where?: InputMaybe<QuestionnaireVersionWhereInput>;
};

export type QuestionnaireVersionUpdateWithWhereUniqueWithoutQuestionnaireInput = {
  data: QuestionnaireVersionUpdateWithoutQuestionnaireInput;
  where: QuestionnaireVersionWhereUniqueInput;
};

export type QuestionnaireVersionUpdateWithoutQuestionnaireInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  sections?: InputMaybe<SectionUpdateManyWithoutQuestionnaireVersionNestedInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutQuestionnaireVersionNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  versionNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type QuestionnaireVersionUpdateWithoutSectionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutVersionsNestedInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutQuestionnaireVersionNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  versionNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type QuestionnaireVersionUpdateWithoutSubmissionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutVersionsNestedInput>;
  sections?: InputMaybe<SectionUpdateManyWithoutQuestionnaireVersionNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  versionNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type QuestionnaireVersionUpsertWithWhereUniqueWithoutQuestionnaireInput = {
  create: QuestionnaireVersionCreateWithoutQuestionnaireInput;
  update: QuestionnaireVersionUpdateWithoutQuestionnaireInput;
  where: QuestionnaireVersionWhereUniqueInput;
};

export type QuestionnaireVersionUpsertWithoutSectionsInput = {
  create: QuestionnaireVersionCreateWithoutSectionsInput;
  update: QuestionnaireVersionUpdateWithoutSectionsInput;
  where?: InputMaybe<QuestionnaireVersionWhereInput>;
};

export type QuestionnaireVersionUpsertWithoutSubmissionsInput = {
  create: QuestionnaireVersionCreateWithoutSubmissionsInput;
  update: QuestionnaireVersionUpdateWithoutSubmissionsInput;
  where?: InputMaybe<QuestionnaireVersionWhereInput>;
};

export type QuestionnaireVersionWhereInput = {
  AND?: InputMaybe<Array<QuestionnaireVersionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionnaireVersionWhereInput>>;
  OR?: InputMaybe<Array<QuestionnaireVersionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  questionnaire?: InputMaybe<QuestionnaireRelationFilter>;
  questionnaireId?: InputMaybe<StringFilter>;
  sections?: InputMaybe<SectionListRelationFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  versionNumber?: InputMaybe<IntFilter>;
};

export type QuestionnaireVersionWhereUniqueInput = {
  AND?: InputMaybe<Array<QuestionnaireVersionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionnaireVersionWhereInput>>;
  OR?: InputMaybe<Array<QuestionnaireVersionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<BoolFilter>;
  questionnaire?: InputMaybe<QuestionnaireRelationFilter>;
  questionnaireId?: InputMaybe<StringFilter>;
  questionnaireId_versionNumber?: InputMaybe<QuestionnaireVersionQuestionnaireIdVersionNumberCompoundUniqueInput>;
  sections?: InputMaybe<SectionListRelationFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  versionNumber?: InputMaybe<IntFilter>;
};

export type QuestionnaireWhereInput = {
  AND?: InputMaybe<Array<QuestionnaireWhereInput>>;
  NOT?: InputMaybe<Array<QuestionnaireWhereInput>>;
  OR?: InputMaybe<Array<QuestionnaireWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isPublic?: InputMaybe<BoolFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  tenant?: InputMaybe<TenantNullableRelationFilter>;
  tenantId?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  versions?: InputMaybe<QuestionnaireVersionListRelationFilter>;
};

export type QuestionnaireWhereUniqueInput = {
  AND?: InputMaybe<Array<QuestionnaireWhereInput>>;
  NOT?: InputMaybe<Array<QuestionnaireWhereInput>>;
  OR?: InputMaybe<Array<QuestionnaireWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<BoolFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  tenant?: InputMaybe<TenantNullableRelationFilter>;
  tenantId?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  versions?: InputMaybe<QuestionnaireVersionListRelationFilter>;
};

export type Recipe = {
  __typename?: 'Recipe';
  _count: RecipeCount;
  categories?: Maybe<Array<RecipeCategory>>;
  cookingTime?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<RecipeImage>>;
  ingredients?: Maybe<Array<RecipeIngredient>>;
  instructions?: Maybe<Array<RecipeInstructions>>;
  parts?: Maybe<Array<RecipePart>>;
  prepTime?: Maybe<Scalars['String']['output']>;
  seasons?: Maybe<Array<Season>>;
  servingsMax?: Maybe<Scalars['Int']['output']>;
  servingsMin?: Maybe<Scalars['Int']['output']>;
  servingsText?: Maybe<Scalars['String']['output']>;
  sourceId?: Maybe<Scalars['String']['output']>;
  sourceUrl?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeCategory = {
  __typename?: 'RecipeCategory';
  _count: RecipeCategoryCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
};

export type RecipeCategoryCount = {
  __typename?: 'RecipeCategoryCount';
  recipes: Scalars['Int']['output'];
};

export type RecipeCategoryCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<RecipeCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCategoryCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<RecipeCategoryCreateWithoutRecipesInput>>;
};

export type RecipeCategoryCreateOrConnectWithoutRecipesInput = {
  create: RecipeCategoryCreateWithoutRecipesInput;
  where: RecipeCategoryWhereUniqueInput;
};

export type RecipeCategoryCreateWithoutRecipesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type RecipeCategoryListRelationFilter = {
  every?: InputMaybe<RecipeCategoryWhereInput>;
  none?: InputMaybe<RecipeCategoryWhereInput>;
  some?: InputMaybe<RecipeCategoryWhereInput>;
};

export type RecipeCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeCategoryScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type RecipeCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipeCategoryUpdateManyWithWhereWithoutRecipesInput = {
  data: RecipeCategoryUpdateManyMutationInput;
  where: RecipeCategoryScalarWhereInput;
};

export type RecipeCategoryUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<RecipeCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCategoryCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<RecipeCategoryCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<RecipeCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeCategoryUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<RecipeCategoryUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<RecipeCategoryUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type RecipeCategoryUpdateWithWhereUniqueWithoutRecipesInput = {
  data: RecipeCategoryUpdateWithoutRecipesInput;
  where: RecipeCategoryWhereUniqueInput;
};

export type RecipeCategoryUpdateWithoutRecipesInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipeCategoryUpsertWithWhereUniqueWithoutRecipesInput = {
  create: RecipeCategoryCreateWithoutRecipesInput;
  update: RecipeCategoryUpdateWithoutRecipesInput;
  where: RecipeCategoryWhereUniqueInput;
};

export type RecipeCategoryWhereInput = {
  AND?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  NOT?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  OR?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type RecipeCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  NOT?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  OR?: InputMaybe<Array<RecipeCategoryWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type RecipeCount = {
  __typename?: 'RecipeCount';
  categories: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  ingredients: Scalars['Int']['output'];
  instructions: Scalars['Int']['output'];
  parts: Scalars['Int']['output'];
  seasons: Scalars['Int']['output'];
  tags: Scalars['Int']['output'];
};

export type RecipeCreateInput = {
  categories?: InputMaybe<RecipeCategoryCreateNestedManyWithoutRecipesInput>;
  cookingTime?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<RecipeImageCreateNestedManyWithoutRecipeInput>;
  ingredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  instructions?: InputMaybe<RecipeInstructionsCreateNestedManyWithoutRecipeInput>;
  parts?: InputMaybe<RecipePartCreateNestedManyWithoutRecipeInput>;
  prepTime?: InputMaybe<Scalars['String']['input']>;
  seasons?: InputMaybe<SeasonCreateNestedManyWithoutRecipesInput>;
  servingsMax?: InputMaybe<Scalars['Int']['input']>;
  servingsMin?: InputMaybe<Scalars['Int']['input']>;
  servingsText?: InputMaybe<Scalars['String']['input']>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutRecipesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecipeCreateNestedOneWithoutIngredientsInput = {
  connect?: InputMaybe<RecipeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeCreateOrConnectWithoutIngredientsInput>;
  create?: InputMaybe<RecipeCreateWithoutIngredientsInput>;
};

export type RecipeCreateNestedOneWithoutPartsInput = {
  connect?: InputMaybe<RecipeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeCreateOrConnectWithoutPartsInput>;
  create?: InputMaybe<RecipeCreateWithoutPartsInput>;
};

export type RecipeCreateOrConnectWithoutIngredientsInput = {
  create: RecipeCreateWithoutIngredientsInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutPartsInput = {
  create: RecipeCreateWithoutPartsInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateWithoutIngredientsInput = {
  categories?: InputMaybe<RecipeCategoryCreateNestedManyWithoutRecipesInput>;
  cookingTime?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<RecipeImageCreateNestedManyWithoutRecipeInput>;
  instructions?: InputMaybe<RecipeInstructionsCreateNestedManyWithoutRecipeInput>;
  parts?: InputMaybe<RecipePartCreateNestedManyWithoutRecipeInput>;
  prepTime?: InputMaybe<Scalars['String']['input']>;
  seasons?: InputMaybe<SeasonCreateNestedManyWithoutRecipesInput>;
  servingsMax?: InputMaybe<Scalars['Int']['input']>;
  servingsMin?: InputMaybe<Scalars['Int']['input']>;
  servingsText?: InputMaybe<Scalars['String']['input']>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutRecipesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecipeCreateWithoutPartsInput = {
  categories?: InputMaybe<RecipeCategoryCreateNestedManyWithoutRecipesInput>;
  cookingTime?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<RecipeImageCreateNestedManyWithoutRecipeInput>;
  ingredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  instructions?: InputMaybe<RecipeInstructionsCreateNestedManyWithoutRecipeInput>;
  prepTime?: InputMaybe<Scalars['String']['input']>;
  seasons?: InputMaybe<SeasonCreateNestedManyWithoutRecipesInput>;
  servingsMax?: InputMaybe<Scalars['Int']['input']>;
  servingsMin?: InputMaybe<Scalars['Int']['input']>;
  servingsText?: InputMaybe<Scalars['String']['input']>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutRecipesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecipeImage = {
  __typename?: 'RecipeImage';
  altText?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  recipe: Recipe;
  recipeId: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type RecipeImageCreateManyRecipeInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type RecipeImageCreateManyRecipeInputEnvelope = {
  data: Array<RecipeImageCreateManyRecipeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeImageCreateNestedManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipeImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeImageCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeImageCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipeImageCreateManyRecipeInputEnvelope>;
};

export type RecipeImageCreateOrConnectWithoutRecipeInput = {
  create: RecipeImageCreateWithoutRecipeInput;
  where: RecipeImageWhereUniqueInput;
};

export type RecipeImageCreateWithoutRecipeInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type RecipeImageListRelationFilter = {
  every?: InputMaybe<RecipeImageWhereInput>;
  none?: InputMaybe<RecipeImageWhereInput>;
  some?: InputMaybe<RecipeImageWhereInput>;
};

export type RecipeImageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeImageScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeImageScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeImageScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeImageScalarWhereInput>>;
  altText?: InputMaybe<StringNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  recipeId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type RecipeImageUpdateManyMutationInput = {
  altText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type RecipeImageUpdateManyWithWhereWithoutRecipeInput = {
  data: RecipeImageUpdateManyMutationInput;
  where: RecipeImageScalarWhereInput;
};

export type RecipeImageUpdateManyWithoutRecipeNestedInput = {
  connect?: InputMaybe<Array<RecipeImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeImageCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeImageCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipeImageCreateManyRecipeInputEnvelope>;
  delete?: InputMaybe<Array<RecipeImageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeImageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeImageWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeImageWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeImageUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: InputMaybe<Array<RecipeImageUpdateManyWithWhereWithoutRecipeInput>>;
  upsert?: InputMaybe<Array<RecipeImageUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type RecipeImageUpdateWithWhereUniqueWithoutRecipeInput = {
  data: RecipeImageUpdateWithoutRecipeInput;
  where: RecipeImageWhereUniqueInput;
};

export type RecipeImageUpdateWithoutRecipeInput = {
  altText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type RecipeImageUpsertWithWhereUniqueWithoutRecipeInput = {
  create: RecipeImageCreateWithoutRecipeInput;
  update: RecipeImageUpdateWithoutRecipeInput;
  where: RecipeImageWhereUniqueInput;
};

export type RecipeImageWhereInput = {
  AND?: InputMaybe<Array<RecipeImageWhereInput>>;
  NOT?: InputMaybe<Array<RecipeImageWhereInput>>;
  OR?: InputMaybe<Array<RecipeImageWhereInput>>;
  altText?: InputMaybe<StringNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type RecipeImageWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipeImageWhereInput>>;
  NOT?: InputMaybe<Array<RecipeImageWhereInput>>;
  OR?: InputMaybe<Array<RecipeImageWhereInput>>;
  altText?: InputMaybe<StringNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  extraInfo?: Maybe<Scalars['String']['output']>;
  food: Food;
  foodId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ingredientText?: Maybe<Scalars['String']['output']>;
  maxQuantity?: Maybe<Scalars['Float']['output']>;
  minQuantity?: Maybe<Scalars['Float']['output']>;
  part?: Maybe<RecipePart>;
  partId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Float']['output'];
  quantityText?: Maybe<Scalars['String']['output']>;
  recipe: Recipe;
  recipeId: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  unitText?: Maybe<Scalars['String']['output']>;
};

export type RecipeIngredientCreateManyFoodInput = {
  extraInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredientText?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  partId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
  quantityText?: InputMaybe<Scalars['String']['input']>;
  recipeId: Scalars['String']['input'];
  unit: Scalars['String']['input'];
  unitText?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeIngredientCreateManyFoodInputEnvelope = {
  data: Array<RecipeIngredientCreateManyFoodInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeIngredientCreateManyPartInput = {
  extraInfo?: InputMaybe<Scalars['String']['input']>;
  foodId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  ingredientText?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  quantity: Scalars['Float']['input'];
  quantityText?: InputMaybe<Scalars['String']['input']>;
  recipeId: Scalars['String']['input'];
  unit: Scalars['String']['input'];
  unitText?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeIngredientCreateManyPartInputEnvelope = {
  data: Array<RecipeIngredientCreateManyPartInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeIngredientCreateManyRecipeInput = {
  extraInfo?: InputMaybe<Scalars['String']['input']>;
  foodId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  ingredientText?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  partId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
  quantityText?: InputMaybe<Scalars['String']['input']>;
  unit: Scalars['String']['input'];
  unitText?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeIngredientCreateManyRecipeInputEnvelope = {
  data: Array<RecipeIngredientCreateManyRecipeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeIngredientCreateNestedManyWithoutFoodInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutFoodInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyFoodInputEnvelope>;
};

export type RecipeIngredientCreateNestedManyWithoutPartInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutPartInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutPartInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyPartInputEnvelope>;
};

export type RecipeIngredientCreateNestedManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyRecipeInputEnvelope>;
};

export type RecipeIngredientCreateOrConnectWithoutFoodInput = {
  create: RecipeIngredientCreateWithoutFoodInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientCreateOrConnectWithoutPartInput = {
  create: RecipeIngredientCreateWithoutPartInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientCreateOrConnectWithoutRecipeInput = {
  create: RecipeIngredientCreateWithoutRecipeInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientCreateWithoutFoodInput = {
  extraInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredientText?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  part?: InputMaybe<RecipePartCreateNestedOneWithoutIngredientsInput>;
  quantity: Scalars['Float']['input'];
  quantityText?: InputMaybe<Scalars['String']['input']>;
  recipe: RecipeCreateNestedOneWithoutIngredientsInput;
  unit: Scalars['String']['input'];
  unitText?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeIngredientCreateWithoutPartInput = {
  extraInfo?: InputMaybe<Scalars['String']['input']>;
  food: FoodCreateNestedOneWithoutRecipeIngredientInput;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredientText?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  quantity: Scalars['Float']['input'];
  quantityText?: InputMaybe<Scalars['String']['input']>;
  recipe: RecipeCreateNestedOneWithoutIngredientsInput;
  unit: Scalars['String']['input'];
  unitText?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeIngredientCreateWithoutRecipeInput = {
  extraInfo?: InputMaybe<Scalars['String']['input']>;
  food: FoodCreateNestedOneWithoutRecipeIngredientInput;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredientText?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  part?: InputMaybe<RecipePartCreateNestedOneWithoutIngredientsInput>;
  quantity: Scalars['Float']['input'];
  quantityText?: InputMaybe<Scalars['String']['input']>;
  unit: Scalars['String']['input'];
  unitText?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeIngredientListRelationFilter = {
  every?: InputMaybe<RecipeIngredientWhereInput>;
  none?: InputMaybe<RecipeIngredientWhereInput>;
  some?: InputMaybe<RecipeIngredientWhereInput>;
};

export type RecipeIngredientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeIngredientScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  extraInfo?: InputMaybe<StringNullableFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  ingredientText?: InputMaybe<StringNullableFilter>;
  maxQuantity?: InputMaybe<FloatNullableFilter>;
  minQuantity?: InputMaybe<FloatNullableFilter>;
  partId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<FloatFilter>;
  quantityText?: InputMaybe<StringNullableFilter>;
  recipeId?: InputMaybe<StringFilter>;
  unit?: InputMaybe<StringFilter>;
  unitText?: InputMaybe<StringNullableFilter>;
};

export type RecipeIngredientUpdateManyMutationInput = {
  extraInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ingredientText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maxQuantity?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  minQuantity?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  quantityText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unit?: InputMaybe<StringFieldUpdateOperationsInput>;
  unitText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpdateManyWithWhereWithoutFoodInput = {
  data: RecipeIngredientUpdateManyMutationInput;
  where: RecipeIngredientScalarWhereInput;
};

export type RecipeIngredientUpdateManyWithWhereWithoutPartInput = {
  data: RecipeIngredientUpdateManyMutationInput;
  where: RecipeIngredientScalarWhereInput;
};

export type RecipeIngredientUpdateManyWithWhereWithoutRecipeInput = {
  data: RecipeIngredientUpdateManyMutationInput;
  where: RecipeIngredientScalarWhereInput;
};

export type RecipeIngredientUpdateManyWithoutFoodNestedInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutFoodInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyFoodInputEnvelope>;
  delete?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeIngredientUpdateWithWhereUniqueWithoutFoodInput>>;
  updateMany?: InputMaybe<Array<RecipeIngredientUpdateManyWithWhereWithoutFoodInput>>;
  upsert?: InputMaybe<Array<RecipeIngredientUpsertWithWhereUniqueWithoutFoodInput>>;
};

export type RecipeIngredientUpdateManyWithoutPartNestedInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutPartInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutPartInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyPartInputEnvelope>;
  delete?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeIngredientUpdateWithWhereUniqueWithoutPartInput>>;
  updateMany?: InputMaybe<Array<RecipeIngredientUpdateManyWithWhereWithoutPartInput>>;
  upsert?: InputMaybe<Array<RecipeIngredientUpsertWithWhereUniqueWithoutPartInput>>;
};

export type RecipeIngredientUpdateManyWithoutRecipeNestedInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyRecipeInputEnvelope>;
  delete?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: InputMaybe<Array<RecipeIngredientUpdateManyWithWhereWithoutRecipeInput>>;
  upsert?: InputMaybe<Array<RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type RecipeIngredientUpdateWithWhereUniqueWithoutFoodInput = {
  data: RecipeIngredientUpdateWithoutFoodInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpdateWithWhereUniqueWithoutPartInput = {
  data: RecipeIngredientUpdateWithoutPartInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput = {
  data: RecipeIngredientUpdateWithoutRecipeInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpdateWithoutFoodInput = {
  extraInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ingredientText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maxQuantity?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  minQuantity?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  part?: InputMaybe<RecipePartUpdateOneWithoutIngredientsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  quantityText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutIngredientsNestedInput>;
  unit?: InputMaybe<StringFieldUpdateOperationsInput>;
  unitText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpdateWithoutPartInput = {
  extraInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ingredientText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maxQuantity?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  minQuantity?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  quantityText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutIngredientsNestedInput>;
  unit?: InputMaybe<StringFieldUpdateOperationsInput>;
  unitText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpdateWithoutRecipeInput = {
  extraInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ingredientText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maxQuantity?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  minQuantity?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  part?: InputMaybe<RecipePartUpdateOneWithoutIngredientsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  quantityText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unit?: InputMaybe<StringFieldUpdateOperationsInput>;
  unitText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpsertWithWhereUniqueWithoutFoodInput = {
  create: RecipeIngredientCreateWithoutFoodInput;
  update: RecipeIngredientUpdateWithoutFoodInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpsertWithWhereUniqueWithoutPartInput = {
  create: RecipeIngredientCreateWithoutPartInput;
  update: RecipeIngredientUpdateWithoutPartInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput = {
  create: RecipeIngredientCreateWithoutRecipeInput;
  update: RecipeIngredientUpdateWithoutRecipeInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientWhereInput = {
  AND?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  extraInfo?: InputMaybe<StringNullableFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  ingredientText?: InputMaybe<StringNullableFilter>;
  maxQuantity?: InputMaybe<FloatNullableFilter>;
  minQuantity?: InputMaybe<FloatNullableFilter>;
  part?: InputMaybe<RecipePartNullableRelationFilter>;
  partId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<FloatFilter>;
  quantityText?: InputMaybe<StringNullableFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
  unit?: InputMaybe<StringFilter>;
  unitText?: InputMaybe<StringNullableFilter>;
};

export type RecipeIngredientWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  extraInfo?: InputMaybe<StringNullableFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredientText?: InputMaybe<StringNullableFilter>;
  maxQuantity?: InputMaybe<FloatNullableFilter>;
  minQuantity?: InputMaybe<FloatNullableFilter>;
  part?: InputMaybe<RecipePartNullableRelationFilter>;
  partId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<FloatFilter>;
  quantityText?: InputMaybe<StringNullableFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
  unit?: InputMaybe<StringFilter>;
  unitText?: InputMaybe<StringNullableFilter>;
};

export type RecipeInstructions = {
  __typename?: 'RecipeInstructions';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  listIndex?: Maybe<Scalars['Int']['output']>;
  order: Scalars['Int']['output'];
  recipe: Recipe;
  recipeId: Scalars['String']['output'];
  type: RecipeInstructionsType;
};

export type RecipeInstructionsCreateManyRecipeInput = {
  content: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  listIndex?: InputMaybe<Scalars['Int']['input']>;
  order: Scalars['Int']['input'];
  type: RecipeInstructionsType;
};

export type RecipeInstructionsCreateManyRecipeInputEnvelope = {
  data: Array<RecipeInstructionsCreateManyRecipeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeInstructionsCreateNestedManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipeInstructionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeInstructionsCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeInstructionsCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipeInstructionsCreateManyRecipeInputEnvelope>;
};

export type RecipeInstructionsCreateOrConnectWithoutRecipeInput = {
  create: RecipeInstructionsCreateWithoutRecipeInput;
  where: RecipeInstructionsWhereUniqueInput;
};

export type RecipeInstructionsCreateWithoutRecipeInput = {
  content: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  listIndex?: InputMaybe<Scalars['Int']['input']>;
  order: Scalars['Int']['input'];
  type: RecipeInstructionsType;
};

export type RecipeInstructionsListRelationFilter = {
  every?: InputMaybe<RecipeInstructionsWhereInput>;
  none?: InputMaybe<RecipeInstructionsWhereInput>;
  some?: InputMaybe<RecipeInstructionsWhereInput>;
};

export type RecipeInstructionsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeInstructionsScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeInstructionsScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeInstructionsScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeInstructionsScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  listIndex?: InputMaybe<IntNullableFilter>;
  order?: InputMaybe<IntFilter>;
  recipeId?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumRecipeInstructionsTypeFilter>;
};

export enum RecipeInstructionsType {
  Image = 'IMAGE',
  Part = 'PART',
  Text = 'TEXT'
}

export type RecipeInstructionsUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listIndex?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumRecipeInstructionsTypeFieldUpdateOperationsInput>;
};

export type RecipeInstructionsUpdateManyWithWhereWithoutRecipeInput = {
  data: RecipeInstructionsUpdateManyMutationInput;
  where: RecipeInstructionsScalarWhereInput;
};

export type RecipeInstructionsUpdateManyWithoutRecipeNestedInput = {
  connect?: InputMaybe<Array<RecipeInstructionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeInstructionsCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeInstructionsCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipeInstructionsCreateManyRecipeInputEnvelope>;
  delete?: InputMaybe<Array<RecipeInstructionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeInstructionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeInstructionsWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeInstructionsWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeInstructionsUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: InputMaybe<Array<RecipeInstructionsUpdateManyWithWhereWithoutRecipeInput>>;
  upsert?: InputMaybe<Array<RecipeInstructionsUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type RecipeInstructionsUpdateWithWhereUniqueWithoutRecipeInput = {
  data: RecipeInstructionsUpdateWithoutRecipeInput;
  where: RecipeInstructionsWhereUniqueInput;
};

export type RecipeInstructionsUpdateWithoutRecipeInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  listIndex?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumRecipeInstructionsTypeFieldUpdateOperationsInput>;
};

export type RecipeInstructionsUpsertWithWhereUniqueWithoutRecipeInput = {
  create: RecipeInstructionsCreateWithoutRecipeInput;
  update: RecipeInstructionsUpdateWithoutRecipeInput;
  where: RecipeInstructionsWhereUniqueInput;
};

export type RecipeInstructionsWhereInput = {
  AND?: InputMaybe<Array<RecipeInstructionsWhereInput>>;
  NOT?: InputMaybe<Array<RecipeInstructionsWhereInput>>;
  OR?: InputMaybe<Array<RecipeInstructionsWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  listIndex?: InputMaybe<IntNullableFilter>;
  order?: InputMaybe<IntFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumRecipeInstructionsTypeFilter>;
};

export type RecipeInstructionsWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipeInstructionsWhereInput>>;
  NOT?: InputMaybe<Array<RecipeInstructionsWhereInput>>;
  OR?: InputMaybe<Array<RecipeInstructionsWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  listIndex?: InputMaybe<IntNullableFilter>;
  order?: InputMaybe<IntFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumRecipeInstructionsTypeFilter>;
};

export type RecipeListRelationFilter = {
  every?: InputMaybe<RecipeWhereInput>;
  none?: InputMaybe<RecipeWhereInput>;
  some?: InputMaybe<RecipeWhereInput>;
};

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
  categories?: InputMaybe<RecipeCategoryOrderByRelationAggregateInput>;
  cookingTime?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<RecipeImageOrderByRelationAggregateInput>;
  ingredients?: InputMaybe<RecipeIngredientOrderByRelationAggregateInput>;
  instructions?: InputMaybe<RecipeInstructionsOrderByRelationAggregateInput>;
  parts?: InputMaybe<RecipePartOrderByRelationAggregateInput>;
  prepTime?: InputMaybe<SortOrderInput>;
  seasons?: InputMaybe<SeasonOrderByRelationAggregateInput>;
  servingsMax?: InputMaybe<SortOrderInput>;
  servingsMin?: InputMaybe<SortOrderInput>;
  servingsText?: InputMaybe<SortOrderInput>;
  sourceId?: InputMaybe<SortOrderInput>;
  sourceUrl?: InputMaybe<SortOrderInput>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
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
  _count: RecipePartCount;
  id: Scalars['ID']['output'];
  ingredients?: Maybe<Array<RecipeIngredient>>;
  name: Scalars['String']['output'];
  recipe: Recipe;
  recipeId: Scalars['String']['output'];
};

export type RecipePartCount = {
  __typename?: 'RecipePartCount';
  ingredients: Scalars['Int']['output'];
};

export type RecipePartCreateManyRecipeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type RecipePartCreateManyRecipeInputEnvelope = {
  data: Array<RecipePartCreateManyRecipeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipePartCreateNestedManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipePartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipePartCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipePartCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipePartCreateManyRecipeInputEnvelope>;
};

export type RecipePartCreateNestedOneWithoutIngredientsInput = {
  connect?: InputMaybe<RecipePartWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipePartCreateOrConnectWithoutIngredientsInput>;
  create?: InputMaybe<RecipePartCreateWithoutIngredientsInput>;
};

export type RecipePartCreateOrConnectWithoutIngredientsInput = {
  create: RecipePartCreateWithoutIngredientsInput;
  where: RecipePartWhereUniqueInput;
};

export type RecipePartCreateOrConnectWithoutRecipeInput = {
  create: RecipePartCreateWithoutRecipeInput;
  where: RecipePartWhereUniqueInput;
};

export type RecipePartCreateWithoutIngredientsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  recipe: RecipeCreateNestedOneWithoutPartsInput;
};

export type RecipePartCreateWithoutRecipeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutPartInput>;
  name: Scalars['String']['input'];
};

export type RecipePartListRelationFilter = {
  every?: InputMaybe<RecipePartWhereInput>;
  none?: InputMaybe<RecipePartWhereInput>;
  some?: InputMaybe<RecipePartWhereInput>;
};

export type RecipePartNullableRelationFilter = {
  is?: InputMaybe<RecipePartWhereInput>;
  isNot?: InputMaybe<RecipePartWhereInput>;
};

export type RecipePartOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipePartScalarWhereInput = {
  AND?: InputMaybe<Array<RecipePartScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipePartScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipePartScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  recipeId?: InputMaybe<StringFilter>;
};

export type RecipePartUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipePartUpdateManyWithWhereWithoutRecipeInput = {
  data: RecipePartUpdateManyMutationInput;
  where: RecipePartScalarWhereInput;
};

export type RecipePartUpdateManyWithoutRecipeNestedInput = {
  connect?: InputMaybe<Array<RecipePartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipePartCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipePartCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipePartCreateManyRecipeInputEnvelope>;
  delete?: InputMaybe<Array<RecipePartWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipePartScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipePartWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipePartWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipePartUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: InputMaybe<Array<RecipePartUpdateManyWithWhereWithoutRecipeInput>>;
  upsert?: InputMaybe<Array<RecipePartUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type RecipePartUpdateOneWithoutIngredientsNestedInput = {
  connect?: InputMaybe<RecipePartWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipePartCreateOrConnectWithoutIngredientsInput>;
  create?: InputMaybe<RecipePartCreateWithoutIngredientsInput>;
  delete?: InputMaybe<RecipePartWhereInput>;
  disconnect?: InputMaybe<RecipePartWhereInput>;
  update?: InputMaybe<RecipePartUpdateToOneWithWhereWithoutIngredientsInput>;
  upsert?: InputMaybe<RecipePartUpsertWithoutIngredientsInput>;
};

export type RecipePartUpdateToOneWithWhereWithoutIngredientsInput = {
  data: RecipePartUpdateWithoutIngredientsInput;
  where?: InputMaybe<RecipePartWhereInput>;
};

export type RecipePartUpdateWithWhereUniqueWithoutRecipeInput = {
  data: RecipePartUpdateWithoutRecipeInput;
  where: RecipePartWhereUniqueInput;
};

export type RecipePartUpdateWithoutIngredientsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutPartsNestedInput>;
};

export type RecipePartUpdateWithoutRecipeInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ingredients?: InputMaybe<RecipeIngredientUpdateManyWithoutPartNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipePartUpsertWithWhereUniqueWithoutRecipeInput = {
  create: RecipePartCreateWithoutRecipeInput;
  update: RecipePartUpdateWithoutRecipeInput;
  where: RecipePartWhereUniqueInput;
};

export type RecipePartUpsertWithoutIngredientsInput = {
  create: RecipePartCreateWithoutIngredientsInput;
  update: RecipePartUpdateWithoutIngredientsInput;
  where?: InputMaybe<RecipePartWhereInput>;
};

export type RecipePartWhereInput = {
  AND?: InputMaybe<Array<RecipePartWhereInput>>;
  NOT?: InputMaybe<Array<RecipePartWhereInput>>;
  OR?: InputMaybe<Array<RecipePartWhereInput>>;
  id?: InputMaybe<StringFilter>;
  ingredients?: InputMaybe<RecipeIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
};

export type RecipePartWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipePartWhereInput>>;
  NOT?: InputMaybe<Array<RecipePartWhereInput>>;
  OR?: InputMaybe<Array<RecipePartWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<RecipeIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
};

export type RecipeRelationFilter = {
  is?: InputMaybe<RecipeWhereInput>;
  isNot?: InputMaybe<RecipeWhereInput>;
};

export type RecipeUpdateInput = {
  categories?: InputMaybe<RecipeCategoryUpdateManyWithoutRecipesNestedInput>;
  cookingTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<RecipeImageUpdateManyWithoutRecipeNestedInput>;
  ingredients?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  instructions?: InputMaybe<RecipeInstructionsUpdateManyWithoutRecipeNestedInput>;
  parts?: InputMaybe<RecipePartUpdateManyWithoutRecipeNestedInput>;
  prepTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonUpdateManyWithoutRecipesNestedInput>;
  servingsMax?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  servingsMin?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  servingsText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutRecipesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
  connect?: InputMaybe<RecipeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeCreateOrConnectWithoutIngredientsInput>;
  create?: InputMaybe<RecipeCreateWithoutIngredientsInput>;
  update?: InputMaybe<RecipeUpdateToOneWithWhereWithoutIngredientsInput>;
  upsert?: InputMaybe<RecipeUpsertWithoutIngredientsInput>;
};

export type RecipeUpdateOneRequiredWithoutPartsNestedInput = {
  connect?: InputMaybe<RecipeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeCreateOrConnectWithoutPartsInput>;
  create?: InputMaybe<RecipeCreateWithoutPartsInput>;
  update?: InputMaybe<RecipeUpdateToOneWithWhereWithoutPartsInput>;
  upsert?: InputMaybe<RecipeUpsertWithoutPartsInput>;
};

export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
  data: RecipeUpdateWithoutIngredientsInput;
  where?: InputMaybe<RecipeWhereInput>;
};

export type RecipeUpdateToOneWithWhereWithoutPartsInput = {
  data: RecipeUpdateWithoutPartsInput;
  where?: InputMaybe<RecipeWhereInput>;
};

export type RecipeUpdateWithoutIngredientsInput = {
  categories?: InputMaybe<RecipeCategoryUpdateManyWithoutRecipesNestedInput>;
  cookingTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<RecipeImageUpdateManyWithoutRecipeNestedInput>;
  instructions?: InputMaybe<RecipeInstructionsUpdateManyWithoutRecipeNestedInput>;
  parts?: InputMaybe<RecipePartUpdateManyWithoutRecipeNestedInput>;
  prepTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonUpdateManyWithoutRecipesNestedInput>;
  servingsMax?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  servingsMin?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  servingsText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutRecipesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipeUpdateWithoutPartsInput = {
  categories?: InputMaybe<RecipeCategoryUpdateManyWithoutRecipesNestedInput>;
  cookingTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<RecipeImageUpdateManyWithoutRecipeNestedInput>;
  ingredients?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  instructions?: InputMaybe<RecipeInstructionsUpdateManyWithoutRecipeNestedInput>;
  prepTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonUpdateManyWithoutRecipesNestedInput>;
  servingsMax?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  servingsMin?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  servingsText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sourceUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutRecipesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipeUpsertWithoutIngredientsInput = {
  create: RecipeCreateWithoutIngredientsInput;
  update: RecipeUpdateWithoutIngredientsInput;
  where?: InputMaybe<RecipeWhereInput>;
};

export type RecipeUpsertWithoutPartsInput = {
  create: RecipeCreateWithoutPartsInput;
  update: RecipeUpdateWithoutPartsInput;
  where?: InputMaybe<RecipeWhereInput>;
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
  images?: InputMaybe<RecipeImageListRelationFilter>;
  ingredients?: InputMaybe<RecipeIngredientListRelationFilter>;
  instructions?: InputMaybe<RecipeInstructionsListRelationFilter>;
  parts?: InputMaybe<RecipePartListRelationFilter>;
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

export type RecipeWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  NOT?: InputMaybe<Array<RecipeWhereInput>>;
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  categories?: InputMaybe<RecipeCategoryListRelationFilter>;
  cookingTime?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<RecipeImageListRelationFilter>;
  ingredients?: InputMaybe<RecipeIngredientListRelationFilter>;
  instructions?: InputMaybe<RecipeInstructionsListRelationFilter>;
  parts?: InputMaybe<RecipePartListRelationFilter>;
  prepTime?: InputMaybe<StringNullableFilter>;
  seasons?: InputMaybe<SeasonListRelationFilter>;
  servingsMax?: InputMaybe<IntNullableFilter>;
  servingsMin?: InputMaybe<IntNullableFilter>;
  servingsText?: InputMaybe<StringNullableFilter>;
  sourceId?: InputMaybe<StringNullableFilter>;
  sourceUrl?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  familyId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sessionId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  used: Scalars['Boolean']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type RefreshTokenCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  familyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionId: Scalars['String']['input'];
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: Array<RefreshTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  familyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionId: Scalars['String']['input'];
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenListRelationFilter = {
  every?: InputMaybe<RefreshTokenWhereInput>;
  none?: InputMaybe<RefreshTokenWhereInput>;
  some?: InputMaybe<RefreshTokenWhereInput>;
};

export type RefreshTokenScalarWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  sessionId?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  used?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  familyId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionId?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  used?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
  data: RefreshTokenUpdateManyMutationInput;
  where: RefreshTokenScalarWhereInput;
};

export type RefreshTokenUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: RefreshTokenUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  familyId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionId?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  used?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  update: RefreshTokenUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  sessionId?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  used?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<StringFilter>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  used?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum Roles {
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export type Season = {
  __typename?: 'Season';
  _count: SeasonCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
};

export type SeasonCount = {
  __typename?: 'SeasonCount';
  recipes: Scalars['Int']['output'];
};

export type SeasonCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<SeasonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<SeasonCreateWithoutRecipesInput>>;
};

export type SeasonCreateOrConnectWithoutRecipesInput = {
  create: SeasonCreateWithoutRecipesInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonCreateWithoutRecipesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type SeasonListRelationFilter = {
  every?: InputMaybe<SeasonWhereInput>;
  none?: InputMaybe<SeasonWhereInput>;
  some?: InputMaybe<SeasonWhereInput>;
};

export type SeasonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SeasonScalarWhereInput = {
  AND?: InputMaybe<Array<SeasonScalarWhereInput>>;
  NOT?: InputMaybe<Array<SeasonScalarWhereInput>>;
  OR?: InputMaybe<Array<SeasonScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SeasonUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SeasonUpdateManyWithWhereWithoutRecipesInput = {
  data: SeasonUpdateManyMutationInput;
  where: SeasonScalarWhereInput;
};

export type SeasonUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<SeasonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<SeasonCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<SeasonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SeasonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SeasonWhereUniqueInput>>;
  set?: InputMaybe<Array<SeasonWhereUniqueInput>>;
  update?: InputMaybe<Array<SeasonUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<SeasonUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<SeasonUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type SeasonUpdateWithWhereUniqueWithoutRecipesInput = {
  data: SeasonUpdateWithoutRecipesInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonUpdateWithoutRecipesInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SeasonUpsertWithWhereUniqueWithoutRecipesInput = {
  create: SeasonCreateWithoutRecipesInput;
  update: SeasonUpdateWithoutRecipesInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonWhereInput = {
  AND?: InputMaybe<Array<SeasonWhereInput>>;
  NOT?: InputMaybe<Array<SeasonWhereInput>>;
  OR?: InputMaybe<Array<SeasonWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type SeasonWhereUniqueInput = {
  AND?: InputMaybe<Array<SeasonWhereInput>>;
  NOT?: InputMaybe<Array<SeasonWhereInput>>;
  OR?: InputMaybe<Array<SeasonWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type Section = {
  __typename?: 'Section';
  _count: SectionCount;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  questionnaireVersion: QuestionnaireVersion;
  questionnaireVersionId: Scalars['String']['output'];
  questions?: Maybe<Array<Question>>;
  title: Scalars['String']['output'];
};

export type SectionCount = {
  __typename?: 'SectionCount';
  questions: Scalars['Int']['output'];
};

export type SectionCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  questionnaireVersion: QuestionnaireVersionCreateNestedOneWithoutSectionsInput;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutSectionInput>;
  title: Scalars['String']['input'];
};

export type SectionCreateManyQuestionnaireVersionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type SectionCreateManyQuestionnaireVersionInputEnvelope = {
  data: Array<SectionCreateManyQuestionnaireVersionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SectionCreateNestedManyWithoutQuestionnaireVersionInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionCreateOrConnectWithoutQuestionnaireVersionInput>>;
  create?: InputMaybe<Array<SectionCreateWithoutQuestionnaireVersionInput>>;
  createMany?: InputMaybe<SectionCreateManyQuestionnaireVersionInputEnvelope>;
};

export type SectionCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<SectionCreateWithoutQuestionsInput>;
};

export type SectionCreateOrConnectWithoutQuestionnaireVersionInput = {
  create: SectionCreateWithoutQuestionnaireVersionInput;
  where: SectionWhereUniqueInput;
};

export type SectionCreateOrConnectWithoutQuestionsInput = {
  create: SectionCreateWithoutQuestionsInput;
  where: SectionWhereUniqueInput;
};

export type SectionCreateWithoutQuestionnaireVersionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  questions?: InputMaybe<QuestionCreateNestedManyWithoutSectionInput>;
  title: Scalars['String']['input'];
};

export type SectionCreateWithoutQuestionsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  questionnaireVersion: QuestionnaireVersionCreateNestedOneWithoutSectionsInput;
  title: Scalars['String']['input'];
};

export type SectionListRelationFilter = {
  every?: InputMaybe<SectionWhereInput>;
  none?: InputMaybe<SectionWhereInput>;
  some?: InputMaybe<SectionWhereInput>;
};

export type SectionRelationFilter = {
  is?: InputMaybe<SectionWhereInput>;
  isNot?: InputMaybe<SectionWhereInput>;
};

export type SectionScalarWhereInput = {
  AND?: InputMaybe<Array<SectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SectionScalarWhereInput>>;
  OR?: InputMaybe<Array<SectionScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  questionnaireVersionId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SectionUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionUpdateOneRequiredWithoutSectionsNestedInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutSectionNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpdateManyWithWhereWithoutQuestionnaireVersionInput = {
  data: SectionUpdateManyMutationInput;
  where: SectionScalarWhereInput;
};

export type SectionUpdateManyWithoutQuestionnaireVersionNestedInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionCreateOrConnectWithoutQuestionnaireVersionInput>>;
  create?: InputMaybe<Array<SectionCreateWithoutQuestionnaireVersionInput>>;
  createMany?: InputMaybe<SectionCreateManyQuestionnaireVersionInputEnvelope>;
  delete?: InputMaybe<Array<SectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  set?: InputMaybe<Array<SectionWhereUniqueInput>>;
  update?: InputMaybe<Array<SectionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput>>;
  updateMany?: InputMaybe<Array<SectionUpdateManyWithWhereWithoutQuestionnaireVersionInput>>;
  upsert?: InputMaybe<Array<SectionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput>>;
};

export type SectionUpdateOneRequiredWithoutQuestionsNestedInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<SectionCreateWithoutQuestionsInput>;
  update?: InputMaybe<SectionUpdateToOneWithWhereWithoutQuestionsInput>;
  upsert?: InputMaybe<SectionUpsertWithoutQuestionsInput>;
};

export type SectionUpdateToOneWithWhereWithoutQuestionsInput = {
  data: SectionUpdateWithoutQuestionsInput;
  where?: InputMaybe<SectionWhereInput>;
};

export type SectionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput = {
  data: SectionUpdateWithoutQuestionnaireVersionInput;
  where: SectionWhereUniqueInput;
};

export type SectionUpdateWithoutQuestionnaireVersionInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutSectionNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpdateWithoutQuestionsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionUpdateOneRequiredWithoutSectionsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput = {
  create: SectionCreateWithoutQuestionnaireVersionInput;
  update: SectionUpdateWithoutQuestionnaireVersionInput;
  where: SectionWhereUniqueInput;
};

export type SectionUpsertWithoutQuestionsInput = {
  create: SectionCreateWithoutQuestionsInput;
  update: SectionUpdateWithoutQuestionsInput;
  where?: InputMaybe<SectionWhereInput>;
};

export type SectionWhereInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>;
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  OR?: InputMaybe<Array<SectionWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionRelationFilter>;
  questionnaireVersionId?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SectionWhereUniqueInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>;
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  OR?: InputMaybe<Array<SectionWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<IntFilter>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionRelationFilter>;
  questionnaireVersionId?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTime']['output'];
  deviceInfo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastActiveAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type SessionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceInfo?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  lastActiveAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deviceInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastActiveAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deviceInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastActiveAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceInfo?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  lastActiveAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceInfo?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  lastActiveAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
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
  _count: SubmissionCount;
  answers?: Maybe<Array<Answer>>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isComplete: Scalars['Boolean']['output'];
  questionnaire: Questionnaire;
  questionnaireId: Scalars['String']['output'];
  questionnaireVersion: QuestionnaireVersion;
  questionnaireVersionId: Scalars['String']['output'];
  startedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type SubmissionCount = {
  __typename?: 'SubmissionCount';
  answers: Scalars['Int']['output'];
};

export type SubmissionCreateInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutSubmissionInput>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isComplete?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaire: QuestionnaireCreateNestedOneWithoutSubmissionsInput;
  questionnaireVersion: QuestionnaireVersionCreateNestedOneWithoutSubmissionsInput;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutSubmissionsInput;
};

export type SubmissionCreateManyQuestionnaireInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isComplete?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaireVersionId: Scalars['String']['input'];
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type SubmissionCreateManyQuestionnaireInputEnvelope = {
  data: Array<SubmissionCreateManyQuestionnaireInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubmissionCreateManyQuestionnaireVersionInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isComplete?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaireId: Scalars['String']['input'];
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type SubmissionCreateManyQuestionnaireVersionInputEnvelope = {
  data: Array<SubmissionCreateManyQuestionnaireVersionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubmissionCreateNestedManyWithoutQuestionnaireInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionCreateOrConnectWithoutQuestionnaireInput>>;
  create?: InputMaybe<Array<SubmissionCreateWithoutQuestionnaireInput>>;
  createMany?: InputMaybe<SubmissionCreateManyQuestionnaireInputEnvelope>;
};

export type SubmissionCreateNestedManyWithoutQuestionnaireVersionInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionCreateOrConnectWithoutQuestionnaireVersionInput>>;
  create?: InputMaybe<Array<SubmissionCreateWithoutQuestionnaireVersionInput>>;
  createMany?: InputMaybe<SubmissionCreateManyQuestionnaireVersionInputEnvelope>;
};

export type SubmissionCreateNestedOneWithoutAnswersInput = {
  connect?: InputMaybe<SubmissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubmissionCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<SubmissionCreateWithoutAnswersInput>;
};

export type SubmissionCreateOrConnectWithoutAnswersInput = {
  create: SubmissionCreateWithoutAnswersInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateOrConnectWithoutQuestionnaireInput = {
  create: SubmissionCreateWithoutQuestionnaireInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateOrConnectWithoutQuestionnaireVersionInput = {
  create: SubmissionCreateWithoutQuestionnaireVersionInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateWithoutAnswersInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isComplete?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaire: QuestionnaireCreateNestedOneWithoutSubmissionsInput;
  questionnaireVersion: QuestionnaireVersionCreateNestedOneWithoutSubmissionsInput;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutSubmissionsInput;
};

export type SubmissionCreateWithoutQuestionnaireInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutSubmissionInput>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isComplete?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaireVersion: QuestionnaireVersionCreateNestedOneWithoutSubmissionsInput;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutSubmissionsInput;
};

export type SubmissionCreateWithoutQuestionnaireVersionInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutSubmissionInput>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isComplete?: InputMaybe<Scalars['Boolean']['input']>;
  questionnaire: QuestionnaireCreateNestedOneWithoutSubmissionsInput;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutSubmissionsInput;
};

export type SubmissionListRelationFilter = {
  every?: InputMaybe<SubmissionWhereInput>;
  none?: InputMaybe<SubmissionWhereInput>;
  some?: InputMaybe<SubmissionWhereInput>;
};

export type SubmissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubmissionRelationFilter = {
  is?: InputMaybe<SubmissionWhereInput>;
  isNot?: InputMaybe<SubmissionWhereInput>;
};

export type SubmissionScalarWhereInput = {
  AND?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  OR?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isComplete?: InputMaybe<BoolFilter>;
  questionnaireId?: InputMaybe<StringFilter>;
  questionnaireVersionId?: InputMaybe<StringFilter>;
  startedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SubmissionUpdateInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutSubmissionNestedInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutSubmissionsNestedInput>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionUpdateOneRequiredWithoutSubmissionsNestedInput>;
  startedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubmissionsNestedInput>;
};

export type SubmissionUpdateManyMutationInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  startedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionUpdateManyWithWhereWithoutQuestionnaireInput = {
  data: SubmissionUpdateManyMutationInput;
  where: SubmissionScalarWhereInput;
};

export type SubmissionUpdateManyWithWhereWithoutQuestionnaireVersionInput = {
  data: SubmissionUpdateManyMutationInput;
  where: SubmissionScalarWhereInput;
};

export type SubmissionUpdateManyWithoutQuestionnaireNestedInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionCreateOrConnectWithoutQuestionnaireInput>>;
  create?: InputMaybe<Array<SubmissionCreateWithoutQuestionnaireInput>>;
  createMany?: InputMaybe<SubmissionCreateManyQuestionnaireInputEnvelope>;
  delete?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubmissionUpdateWithWhereUniqueWithoutQuestionnaireInput>>;
  updateMany?: InputMaybe<Array<SubmissionUpdateManyWithWhereWithoutQuestionnaireInput>>;
  upsert?: InputMaybe<Array<SubmissionUpsertWithWhereUniqueWithoutQuestionnaireInput>>;
};

export type SubmissionUpdateManyWithoutQuestionnaireVersionNestedInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionCreateOrConnectWithoutQuestionnaireVersionInput>>;
  create?: InputMaybe<Array<SubmissionCreateWithoutQuestionnaireVersionInput>>;
  createMany?: InputMaybe<SubmissionCreateManyQuestionnaireVersionInputEnvelope>;
  delete?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubmissionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput>>;
  updateMany?: InputMaybe<Array<SubmissionUpdateManyWithWhereWithoutQuestionnaireVersionInput>>;
  upsert?: InputMaybe<Array<SubmissionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput>>;
};

export type SubmissionUpdateOneRequiredWithoutAnswersNestedInput = {
  connect?: InputMaybe<SubmissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubmissionCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<SubmissionCreateWithoutAnswersInput>;
  update?: InputMaybe<SubmissionUpdateToOneWithWhereWithoutAnswersInput>;
  upsert?: InputMaybe<SubmissionUpsertWithoutAnswersInput>;
};

export type SubmissionUpdateToOneWithWhereWithoutAnswersInput = {
  data: SubmissionUpdateWithoutAnswersInput;
  where?: InputMaybe<SubmissionWhereInput>;
};

export type SubmissionUpdateWithWhereUniqueWithoutQuestionnaireInput = {
  data: SubmissionUpdateWithoutQuestionnaireInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput = {
  data: SubmissionUpdateWithoutQuestionnaireVersionInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpdateWithoutAnswersInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutSubmissionsNestedInput>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionUpdateOneRequiredWithoutSubmissionsNestedInput>;
  startedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubmissionsNestedInput>;
};

export type SubmissionUpdateWithoutQuestionnaireInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutSubmissionNestedInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionUpdateOneRequiredWithoutSubmissionsNestedInput>;
  startedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubmissionsNestedInput>;
};

export type SubmissionUpdateWithoutQuestionnaireVersionInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutSubmissionNestedInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutSubmissionsNestedInput>;
  startedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubmissionsNestedInput>;
};

export type SubmissionUpsertWithWhereUniqueWithoutQuestionnaireInput = {
  create: SubmissionCreateWithoutQuestionnaireInput;
  update: SubmissionUpdateWithoutQuestionnaireInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput = {
  create: SubmissionCreateWithoutQuestionnaireVersionInput;
  update: SubmissionUpdateWithoutQuestionnaireVersionInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpsertWithoutAnswersInput = {
  create: SubmissionCreateWithoutAnswersInput;
  update: SubmissionUpdateWithoutAnswersInput;
  where?: InputMaybe<SubmissionWhereInput>;
};

export type SubmissionWhereInput = {
  AND?: InputMaybe<Array<SubmissionWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionWhereInput>>;
  OR?: InputMaybe<Array<SubmissionWhereInput>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isComplete?: InputMaybe<BoolFilter>;
  questionnaire?: InputMaybe<QuestionnaireRelationFilter>;
  questionnaireId?: InputMaybe<StringFilter>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionRelationFilter>;
  questionnaireVersionId?: InputMaybe<StringFilter>;
  startedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SubmissionWhereUniqueInput = {
  AND?: InputMaybe<Array<SubmissionWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionWhereInput>>;
  OR?: InputMaybe<Array<SubmissionWhereInput>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isComplete?: InputMaybe<BoolFilter>;
  questionnaire?: InputMaybe<QuestionnaireRelationFilter>;
  questionnaireId?: InputMaybe<StringFilter>;
  questionnaireVersion?: InputMaybe<QuestionnaireVersionRelationFilter>;
  questionnaireVersionId?: InputMaybe<StringFilter>;
  startedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  _count: TagCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
};

export type TagCount = {
  __typename?: 'TagCount';
  recipes: Scalars['Int']['output'];
};

export type TagCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<TagCreateWithoutRecipesInput>>;
};

export type TagCreateOrConnectWithoutRecipesInput = {
  create: TagCreateWithoutRecipesInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutRecipesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TagUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutRecipesInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<TagCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type TagUpdateWithWhereUniqueWithoutRecipesInput = {
  data: TagUpdateWithoutRecipesInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutRecipesInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutRecipesInput = {
  create: TagCreateWithoutRecipesInput;
  update: TagUpdateWithoutRecipesInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type TagWhereUniqueInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type Tenant = {
  __typename?: 'Tenant';
  _count: TenantCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  questionnaires?: Maybe<Array<Questionnaire>>;
};

export type TenantCount = {
  __typename?: 'TenantCount';
  questionnaires: Scalars['Int']['output'];
};

export type TenantCreateNestedOneWithoutQuestionnairesInput = {
  connect?: InputMaybe<TenantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TenantCreateOrConnectWithoutQuestionnairesInput>;
  create?: InputMaybe<TenantCreateWithoutQuestionnairesInput>;
};

export type TenantCreateOrConnectWithoutQuestionnairesInput = {
  create: TenantCreateWithoutQuestionnairesInput;
  where: TenantWhereUniqueInput;
};

export type TenantCreateWithoutQuestionnairesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type TenantNullableRelationFilter = {
  is?: InputMaybe<TenantWhereInput>;
  isNot?: InputMaybe<TenantWhereInput>;
};

export type TenantOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  questionnaires?: InputMaybe<QuestionnaireOrderByRelationAggregateInput>;
};

export type TenantUpdateOneWithoutQuestionnairesNestedInput = {
  connect?: InputMaybe<TenantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TenantCreateOrConnectWithoutQuestionnairesInput>;
  create?: InputMaybe<TenantCreateWithoutQuestionnairesInput>;
  delete?: InputMaybe<TenantWhereInput>;
  disconnect?: InputMaybe<TenantWhereInput>;
  update?: InputMaybe<TenantUpdateToOneWithWhereWithoutQuestionnairesInput>;
  upsert?: InputMaybe<TenantUpsertWithoutQuestionnairesInput>;
};

export type TenantUpdateToOneWithWhereWithoutQuestionnairesInput = {
  data: TenantUpdateWithoutQuestionnairesInput;
  where?: InputMaybe<TenantWhereInput>;
};

export type TenantUpdateWithoutQuestionnairesInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TenantUpsertWithoutQuestionnairesInput = {
  create: TenantCreateWithoutQuestionnairesInput;
  update: TenantUpdateWithoutQuestionnairesInput;
  where?: InputMaybe<TenantWhereInput>;
};

export type TenantWhereInput = {
  AND?: InputMaybe<Array<TenantWhereInput>>;
  NOT?: InputMaybe<Array<TenantWhereInput>>;
  OR?: InputMaybe<Array<TenantWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questionnaires?: InputMaybe<QuestionnaireListRelationFilter>;
};

export type TenantWhereUniqueInput = {
  AND?: InputMaybe<Array<TenantWhereInput>>;
  NOT?: InputMaybe<Array<TenantWhereInput>>;
  OR?: InputMaybe<Array<TenantWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  questionnaires?: InputMaybe<QuestionnaireListRelationFilter>;
};

export type Translation = {
  __typename?: 'Translation';
  entityId: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  language: Language;
  languageCode: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TranslationCreateManyLanguageInput = {
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  field: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type TranslationCreateManyLanguageInputEnvelope = {
  data: Array<TranslationCreateManyLanguageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TranslationCreateNestedManyWithoutLanguageInput = {
  connect?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TranslationCreateOrConnectWithoutLanguageInput>>;
  create?: InputMaybe<Array<TranslationCreateWithoutLanguageInput>>;
  createMany?: InputMaybe<TranslationCreateManyLanguageInputEnvelope>;
};

export type TranslationCreateOrConnectWithoutLanguageInput = {
  create: TranslationCreateWithoutLanguageInput;
  where: TranslationWhereUniqueInput;
};

export type TranslationCreateWithoutLanguageInput = {
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  field: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type TranslationLanguageCodeEntityTypeEntityIdFieldCompoundUniqueInput = {
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  field: Scalars['String']['input'];
  languageCode: Scalars['String']['input'];
};

export type TranslationListRelationFilter = {
  every?: InputMaybe<TranslationWhereInput>;
  none?: InputMaybe<TranslationWhereInput>;
  some?: InputMaybe<TranslationWhereInput>;
};

export type TranslationScalarWhereInput = {
  AND?: InputMaybe<Array<TranslationScalarWhereInput>>;
  NOT?: InputMaybe<Array<TranslationScalarWhereInput>>;
  OR?: InputMaybe<Array<TranslationScalarWhereInput>>;
  entityId?: InputMaybe<StringFilter>;
  entityType?: InputMaybe<StringFilter>;
  field?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  languageCode?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TranslationUpdateManyMutationInput = {
  entityId?: InputMaybe<StringFieldUpdateOperationsInput>;
  entityType?: InputMaybe<StringFieldUpdateOperationsInput>;
  field?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TranslationUpdateManyWithWhereWithoutLanguageInput = {
  data: TranslationUpdateManyMutationInput;
  where: TranslationScalarWhereInput;
};

export type TranslationUpdateManyWithoutLanguageNestedInput = {
  connect?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TranslationCreateOrConnectWithoutLanguageInput>>;
  create?: InputMaybe<Array<TranslationCreateWithoutLanguageInput>>;
  createMany?: InputMaybe<TranslationCreateManyLanguageInputEnvelope>;
  delete?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TranslationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  set?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  update?: InputMaybe<Array<TranslationUpdateWithWhereUniqueWithoutLanguageInput>>;
  updateMany?: InputMaybe<Array<TranslationUpdateManyWithWhereWithoutLanguageInput>>;
  upsert?: InputMaybe<Array<TranslationUpsertWithWhereUniqueWithoutLanguageInput>>;
};

export type TranslationUpdateWithWhereUniqueWithoutLanguageInput = {
  data: TranslationUpdateWithoutLanguageInput;
  where: TranslationWhereUniqueInput;
};

export type TranslationUpdateWithoutLanguageInput = {
  entityId?: InputMaybe<StringFieldUpdateOperationsInput>;
  entityType?: InputMaybe<StringFieldUpdateOperationsInput>;
  field?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TranslationUpsertWithWhereUniqueWithoutLanguageInput = {
  create: TranslationCreateWithoutLanguageInput;
  update: TranslationUpdateWithoutLanguageInput;
  where: TranslationWhereUniqueInput;
};

export type TranslationWhereInput = {
  AND?: InputMaybe<Array<TranslationWhereInput>>;
  NOT?: InputMaybe<Array<TranslationWhereInput>>;
  OR?: InputMaybe<Array<TranslationWhereInput>>;
  entityId?: InputMaybe<StringFilter>;
  entityType?: InputMaybe<StringFilter>;
  field?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  language?: InputMaybe<LanguageRelationFilter>;
  languageCode?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TranslationWhereUniqueInput = {
  AND?: InputMaybe<Array<TranslationWhereInput>>;
  NOT?: InputMaybe<Array<TranslationWhereInput>>;
  OR?: InputMaybe<Array<TranslationWhereInput>>;
  entityId?: InputMaybe<StringFilter>;
  entityType?: InputMaybe<StringFilter>;
  field?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageRelationFilter>;
  languageCode?: InputMaybe<StringFilter>;
  languageCode_entityType_entityId_field?: InputMaybe<TranslationLanguageCodeEntityTypeEntityIdFieldCompoundUniqueInput>;
  value?: InputMaybe<StringFilter>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  googleProfile?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  loginLogs?: Maybe<Array<LoginLog>>;
  password?: Maybe<Scalars['String']['output']>;
  passwordResetTokens?: Maybe<Array<PasswordResetToken>>;
  refreshTokens?: Maybe<Array<RefreshToken>>;
  roles?: Maybe<Array<Roles>>;
  sessions?: Maybe<Array<Session>>;
  submissions?: Maybe<Array<Submission>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  loginLogs: Scalars['Int']['output'];
  passwordResetTokens: Scalars['Int']['output'];
  refreshTokens: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
  submissions: Scalars['Int']['output'];
};

export type UserCreateNestedOneWithoutSubmissionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<UserCreateWithoutSubmissionsInput>;
};

export type UserCreateOrConnectWithoutSubmissionsInput = {
  create: UserCreateWithoutSubmissionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutSubmissionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenCreateNestedManyWithoutUserInput>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<UserCreaterolesInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreaterolesInput = {
  set: Array<Roles>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<UserCreateWithoutSubmissionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSubmissionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSubmissionsInput>;
};

export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
  data: UserUpdateWithoutSubmissionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutSubmissionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  googleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  googleProfile?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  loginLogs?: InputMaybe<LoginLogUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUpdateManyWithoutUserNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdaterolesInput = {
  push?: InputMaybe<Array<Roles>>;
  set?: InputMaybe<Array<Roles>>;
};

export type UserUpsertWithoutSubmissionsInput = {
  create: UserCreateWithoutSubmissionsInput;
  update: UserUpdateWithoutSubmissionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  googleId?: InputMaybe<StringNullableFilter>;
  googleProfile?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  loginLogs?: InputMaybe<LoginLogListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenListRelationFilter>;
  refreshTokens?: InputMaybe<RefreshTokenListRelationFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenListRelationFilter>;
  refreshTokens?: InputMaybe<RefreshTokenListRelationFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};
