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

export type ColumnView = {
  __typename?: 'ColumnView';
  columnId: Scalars['Int']['output'];
  columnType: Scalars['String']['output'];
  filter?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tableViewDefinitionId: Scalars['String']['output'];
  visible: Scalars['Boolean']['output'];
  width: Scalars['Int']['output'];
};

export type CreateColumnViewInput = {
  columnId: Scalars['Int']['input'];
  columnType: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  visible: Scalars['Boolean']['input'];
  width: Scalars['Int']['input'];
};

export type CreateTableViewDefinitionInput = {
  columns: Array<CreateColumnViewInput>;
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
  createRecipe: Recipe;
  createTableViewDefinition: TableViewDefinition;
  removeRecipe: Recipe;
  removeTableViewDefinition: TableViewDefinition;
  updateRecipe: Recipe;
  updateTableViewDefinition: TableViewDefinition;
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


export type MutationCreateRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateTableViewDefinitionArgs = {
  createTableViewDefinitionInput: CreateTableViewDefinitionInput;
};


export type MutationRemoveRecipeArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveTableViewDefinitionArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateRecipeArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
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

export type Query = {
  __typename?: 'Query';
  accountInfo: AuthAccountInfoModel;
  food?: Maybe<Food>;
  foodAutosuggest: Array<FoodSearchResult>;
  paginatedRecipes: RecipePaginatedModel;
  recipe: Recipe;
  recipes: Array<Recipe>;
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


export type QueryPaginatedRecipesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRecipeArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipesArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryTableViewDefinitionArgs = {
  id: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

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

export enum RecipeScalarFieldEnum {
  CookingTime = 'cookingTime',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  PrepTime = 'prepTime',
  ServingsMax = 'servingsMax',
  ServingsMin = 'servingsMin',
  ServingsText = 'servingsText',
  SourceId = 'sourceId',
  SourceUrl = 'sourceUrl',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

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

export type TableViewDefinition = {
  __typename?: 'TableViewDefinition';
  columns: Array<ColumnView>;
  createdAt: Scalars['DateTime']['output'];
  filters?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isPreset: Scalars['Boolean']['output'];
  isShared: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  sorting?: Maybe<Scalars['String']['output']>;
  tableId: Scalars['String']['output'];
  tableType: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
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

export type AccountInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountInfoQuery = { __typename?: 'Query', accountInfo: { __typename?: 'AuthAccountInfoModel', email: string, hasPassword: boolean, googleProfile?: { __typename?: 'AuthGoogleProfile', name: string, given_name: string, family_name: string, locale: string, email: string, picture: string } | null } };

export type FoodQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FoodQuery = { __typename?: 'Query', food?: { __typename?: 'Food', description: string, id: string, sourceId: string, scientificName?: string | null, importInfoId?: string | null, createdAt: any, updatedAt: any, nutrients?: Array<{ __typename?: 'FoodNutrient', id: string, amount: number, min?: number | null, median?: number | null, max?: number | null, confidenceCode?: string | null, sourceId: string, nutrientId: string, nutrient: { __typename?: 'Nutrient', name: string, unitName: string } }> | null } | null };

export type FoodAutosuggestQueryVariables = Exact<{
  input: FoodSearchInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FoodAutosuggestQuery = { __typename?: 'Query', foodAutosuggest: Array<{ __typename?: 'FoodSearchResult', description: string, rank: number, food: { __typename?: 'Food', description: string, id: string } }> };

export type RecipesQueryVariables = Exact<{
  where?: InputMaybe<RecipeWhereInput>;
}>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', cookingTime?: string | null, prepTime?: string | null, description?: string | null, id: string, servingsMax?: number | null, servingsMin?: number | null, servingsText?: string | null, sourceId?: string | null, sourceUrl?: string | null, title: string, parts?: Array<{ __typename?: 'RecipePart', name: string, ingredients?: Array<{ __typename?: 'RecipeIngredient', id: string, extraInfo?: string | null, ingredientText?: string | null, quantity: number, maxQuantity?: number | null, minQuantity?: number | null, unit: string, unitText?: string | null }> | null }> | null, categories?: Array<{ __typename?: 'RecipeCategory', name: string }> | null, ingredients?: Array<{ __typename?: 'RecipeIngredient', id: string, extraInfo?: string | null, ingredientText?: string | null, quantity: number, maxQuantity?: number | null, minQuantity?: number | null, unit: string, unitText?: string | null }> | null, images?: Array<{ __typename?: 'RecipeImage', altText?: string | null, url: string }> | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null, seasons?: Array<{ __typename?: 'Season', id: string, name: string }> | null, instructions?: Array<{ __typename?: 'RecipeInstructions', content: string, listIndex?: number | null, order: number, type: RecipeInstructionsType }> | null }> };


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
export const FoodDocument = gql`
    query Food($id: ID!) {
  food(id: $id) {
    description
    id
    sourceId
    scientificName
    importInfoId
    createdAt
    updatedAt
    nutrients {
      id
      amount
      min
      median
      max
      confidenceCode
      sourceId
      nutrientId
      nutrient {
        name
        unitName
      }
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
export const RecipesDocument = gql`
    query Recipes($where: RecipeWhereInput) {
  recipes(where: $where) {
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
    sourceId
    sourceUrl
    title
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
    AccountInfo(variables?: AccountInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AccountInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AccountInfoQuery>(AccountInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AccountInfo', 'query', variables);
    },
    Food(variables: FoodQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FoodQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FoodQuery>(FoodDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Food', 'query', variables);
    },
    FoodAutosuggest(variables: FoodAutosuggestQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FoodAutosuggestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FoodAutosuggestQuery>(FoodAutosuggestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FoodAutosuggest', 'query', variables);
    },
    Recipes(variables?: RecipesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RecipesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecipesQuery>(RecipesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Recipes', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;