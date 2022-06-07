import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** columns and relationships of "auth.providers" */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: authProviders */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

/** columns and relationships of "auth.refresh_tokens" */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.roles" */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: authRoles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.user_providers" */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.user_roles" */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "quest_log_entries" */
  delete_quest_log_entries?: Maybe<Quest_Log_Entries_Mutation_Response>;
  /** delete single row from the table: "quest_log_entries" */
  delete_quest_log_entries_by_pk?: Maybe<Quest_Log_Entries>;
  /** delete data from the table: "quest_tags" */
  delete_quest_tags?: Maybe<Quest_Tags_Mutation_Response>;
  /** delete single row from the table: "quest_tags" */
  delete_quest_tags_by_pk?: Maybe<Quest_Tags>;
  /** delete data from the table: "quests" */
  delete_quests?: Maybe<Quests_Mutation_Response>;
  /** delete single row from the table: "quests" */
  delete_quests_by_pk?: Maybe<Quests>;
  /** delete data from the table: "rewards" */
  delete_rewards?: Maybe<Rewards_Mutation_Response>;
  /** delete single row from the table: "rewards" */
  delete_rewards_by_pk?: Maybe<Rewards>;
  /** delete data from the table: "statuses" */
  delete_statuses?: Maybe<Statuses_Mutation_Response>;
  /** delete single row from the table: "statuses" */
  delete_statuses_by_pk?: Maybe<Statuses>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "quest_log_entries" */
  insert_quest_log_entries?: Maybe<Quest_Log_Entries_Mutation_Response>;
  /** insert a single row into the table: "quest_log_entries" */
  insert_quest_log_entries_one?: Maybe<Quest_Log_Entries>;
  /** insert data into the table: "quest_tags" */
  insert_quest_tags?: Maybe<Quest_Tags_Mutation_Response>;
  /** insert a single row into the table: "quest_tags" */
  insert_quest_tags_one?: Maybe<Quest_Tags>;
  /** insert data into the table: "quests" */
  insert_quests?: Maybe<Quests_Mutation_Response>;
  /** insert a single row into the table: "quests" */
  insert_quests_one?: Maybe<Quests>;
  /** insert data into the table: "rewards" */
  insert_rewards?: Maybe<Rewards_Mutation_Response>;
  /** insert a single row into the table: "rewards" */
  insert_rewards_one?: Maybe<Rewards>;
  /** insert data into the table: "statuses" */
  insert_statuses?: Maybe<Statuses_Mutation_Response>;
  /** insert a single row into the table: "statuses" */
  insert_statuses_one?: Maybe<Statuses>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "quest_log_entries" */
  update_quest_log_entries?: Maybe<Quest_Log_Entries_Mutation_Response>;
  /** update single row of the table: "quest_log_entries" */
  update_quest_log_entries_by_pk?: Maybe<Quest_Log_Entries>;
  /** update data of the table: "quest_tags" */
  update_quest_tags?: Maybe<Quest_Tags_Mutation_Response>;
  /** update single row of the table: "quest_tags" */
  update_quest_tags_by_pk?: Maybe<Quest_Tags>;
  /** update data of the table: "quests" */
  update_quests?: Maybe<Quests_Mutation_Response>;
  /** update single row of the table: "quests" */
  update_quests_by_pk?: Maybe<Quests>;
  /** update data of the table: "rewards" */
  update_rewards?: Maybe<Rewards_Mutation_Response>;
  /** update single row of the table: "rewards" */
  update_rewards_by_pk?: Maybe<Rewards>;
  /** update data of the table: "statuses" */
  update_statuses?: Maybe<Statuses_Mutation_Response>;
  /** update single row of the table: "statuses" */
  update_statuses_by_pk?: Maybe<Statuses>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_Log_EntriesArgs = {
  where: Quest_Log_Entries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_Log_Entries_By_PkArgs = {
  quest_id: Scalars['Int'];
  step: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Quest_TagsArgs = {
  where: Quest_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_Tags_By_PkArgs = {
  quest_id: Scalars['Int'];
  tag_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_QuestsArgs = {
  where: Quests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quests_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RewardsArgs = {
  where: Rewards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rewards_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StatusesArgs = {
  where: Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Statuses_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Log_EntriesArgs = {
  objects: Array<Quest_Log_Entries_Insert_Input>;
  on_conflict?: InputMaybe<Quest_Log_Entries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Log_Entries_OneArgs = {
  object: Quest_Log_Entries_Insert_Input;
  on_conflict?: InputMaybe<Quest_Log_Entries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_TagsArgs = {
  objects: Array<Quest_Tags_Insert_Input>;
  on_conflict?: InputMaybe<Quest_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Tags_OneArgs = {
  object: Quest_Tags_Insert_Input;
  on_conflict?: InputMaybe<Quest_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestsArgs = {
  objects: Array<Quests_Insert_Input>;
  on_conflict?: InputMaybe<Quests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quests_OneArgs = {
  object: Quests_Insert_Input;
  on_conflict?: InputMaybe<Quests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RewardsArgs = {
  objects: Array<Rewards_Insert_Input>;
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rewards_OneArgs = {
  object: Rewards_Insert_Input;
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StatusesArgs = {
  objects: Array<Statuses_Insert_Input>;
  on_conflict?: InputMaybe<Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Statuses_OneArgs = {
  object: Statuses_Insert_Input;
  on_conflict?: InputMaybe<Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Log_EntriesArgs = {
  _inc?: InputMaybe<Quest_Log_Entries_Inc_Input>;
  _set?: InputMaybe<Quest_Log_Entries_Set_Input>;
  where: Quest_Log_Entries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Log_Entries_By_PkArgs = {
  _inc?: InputMaybe<Quest_Log_Entries_Inc_Input>;
  _set?: InputMaybe<Quest_Log_Entries_Set_Input>;
  pk_columns: Quest_Log_Entries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_TagsArgs = {
  _inc?: InputMaybe<Quest_Tags_Inc_Input>;
  _set?: InputMaybe<Quest_Tags_Set_Input>;
  where: Quest_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Tags_By_PkArgs = {
  _inc?: InputMaybe<Quest_Tags_Inc_Input>;
  _set?: InputMaybe<Quest_Tags_Set_Input>;
  pk_columns: Quest_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestsArgs = {
  _inc?: InputMaybe<Quests_Inc_Input>;
  _set?: InputMaybe<Quests_Set_Input>;
  where: Quests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quests_By_PkArgs = {
  _inc?: InputMaybe<Quests_Inc_Input>;
  _set?: InputMaybe<Quests_Set_Input>;
  pk_columns: Quests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RewardsArgs = {
  _inc?: InputMaybe<Rewards_Inc_Input>;
  _set?: InputMaybe<Rewards_Set_Input>;
  where: Rewards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rewards_By_PkArgs = {
  _inc?: InputMaybe<Rewards_Inc_Input>;
  _set?: InputMaybe<Rewards_Set_Input>;
  pk_columns: Rewards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StatusesArgs = {
  _set?: InputMaybe<Statuses_Set_Input>;
  where: Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Statuses_By_PkArgs = {
  _set?: InputMaybe<Statuses_Set_Input>;
  pk_columns: Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _set?: InputMaybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _set?: InputMaybe<Tags_Set_Input>;
  pk_columns: Tags_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "quest_log_entries" */
  quest_log_entries: Array<Quest_Log_Entries>;
  /** fetch aggregated fields from the table: "quest_log_entries" */
  quest_log_entries_aggregate: Quest_Log_Entries_Aggregate;
  /** fetch data from the table: "quest_log_entries" using primary key columns */
  quest_log_entries_by_pk?: Maybe<Quest_Log_Entries>;
  /** An array relationship */
  quest_tags: Array<Quest_Tags>;
  /** An aggregate relationship */
  quest_tags_aggregate: Quest_Tags_Aggregate;
  /** fetch data from the table: "quest_tags" using primary key columns */
  quest_tags_by_pk?: Maybe<Quest_Tags>;
  /** fetch data from the table: "quests" */
  quests: Array<Quests>;
  /** fetch aggregated fields from the table: "quests" */
  quests_aggregate: Quests_Aggregate;
  /** fetch data from the table: "quests" using primary key columns */
  quests_by_pk?: Maybe<Quests>;
  /** An array relationship */
  rewards: Array<Rewards>;
  /** An aggregate relationship */
  rewards_aggregate: Rewards_Aggregate;
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>;
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>;
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate;
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootQuest_Log_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entries_Order_By>>;
  where?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
};


export type Query_RootQuest_Log_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entries_Order_By>>;
  where?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
};


export type Query_RootQuest_Log_Entries_By_PkArgs = {
  quest_id: Scalars['Int'];
  step: Scalars['Int'];
};


export type Query_RootQuest_TagsArgs = {
  distinct_on?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Tags_Order_By>>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};


export type Query_RootQuest_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Tags_Order_By>>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};


export type Query_RootQuest_Tags_By_PkArgs = {
  quest_id: Scalars['Int'];
  tag_name: Scalars['String'];
};


export type Query_RootQuestsArgs = {
  distinct_on?: InputMaybe<Array<Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quests_Order_By>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Query_RootQuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quests_Order_By>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Query_RootQuests_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRewardsArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Query_RootRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Query_RootRewards_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStatusesArgs = {
  distinct_on?: InputMaybe<Array<Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Statuses_Order_By>>;
  where?: InputMaybe<Statuses_Bool_Exp>;
};


export type Query_RootStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Statuses_Order_By>>;
  where?: InputMaybe<Statuses_Bool_Exp>;
};


export type Query_RootStatuses_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "quest_log_entries" */
export type Quest_Log_Entries = {
  __typename?: 'quest_log_entries';
  body: Scalars['String'];
  created_at: Scalars['timestamptz'];
  imageURL?: Maybe<Scalars['String']>;
  /** An object relationship */
  quest: Quests;
  quest_id: Scalars['Int'];
  /** An array relationship */
  rewards: Array<Rewards>;
  /** An aggregate relationship */
  rewards_aggregate: Rewards_Aggregate;
  status: Statuses_Enum;
  step: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "quest_log_entries" */
export type Quest_Log_EntriesRewardsArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


/** columns and relationships of "quest_log_entries" */
export type Quest_Log_EntriesRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};

/** aggregated selection of "quest_log_entries" */
export type Quest_Log_Entries_Aggregate = {
  __typename?: 'quest_log_entries_aggregate';
  aggregate?: Maybe<Quest_Log_Entries_Aggregate_Fields>;
  nodes: Array<Quest_Log_Entries>;
};

/** aggregate fields of "quest_log_entries" */
export type Quest_Log_Entries_Aggregate_Fields = {
  __typename?: 'quest_log_entries_aggregate_fields';
  avg?: Maybe<Quest_Log_Entries_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quest_Log_Entries_Max_Fields>;
  min?: Maybe<Quest_Log_Entries_Min_Fields>;
  stddev?: Maybe<Quest_Log_Entries_Stddev_Fields>;
  stddev_pop?: Maybe<Quest_Log_Entries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quest_Log_Entries_Stddev_Samp_Fields>;
  sum?: Maybe<Quest_Log_Entries_Sum_Fields>;
  var_pop?: Maybe<Quest_Log_Entries_Var_Pop_Fields>;
  var_samp?: Maybe<Quest_Log_Entries_Var_Samp_Fields>;
  variance?: Maybe<Quest_Log_Entries_Variance_Fields>;
};


/** aggregate fields of "quest_log_entries" */
export type Quest_Log_Entries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quest_Log_Entries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest_log_entries" */
export type Quest_Log_Entries_Aggregate_Order_By = {
  avg?: InputMaybe<Quest_Log_Entries_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Quest_Log_Entries_Max_Order_By>;
  min?: InputMaybe<Quest_Log_Entries_Min_Order_By>;
  stddev?: InputMaybe<Quest_Log_Entries_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Quest_Log_Entries_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Quest_Log_Entries_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Quest_Log_Entries_Sum_Order_By>;
  var_pop?: InputMaybe<Quest_Log_Entries_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Quest_Log_Entries_Var_Samp_Order_By>;
  variance?: InputMaybe<Quest_Log_Entries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "quest_log_entries" */
export type Quest_Log_Entries_Arr_Rel_Insert_Input = {
  data: Array<Quest_Log_Entries_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Quest_Log_Entries_On_Conflict>;
};

/** aggregate avg on columns */
export type Quest_Log_Entries_Avg_Fields = {
  __typename?: 'quest_log_entries_avg_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Avg_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "quest_log_entries". All fields are combined with a logical 'AND'. */
export type Quest_Log_Entries_Bool_Exp = {
  _and?: InputMaybe<Array<Quest_Log_Entries_Bool_Exp>>;
  _not?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
  _or?: InputMaybe<Array<Quest_Log_Entries_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  imageURL?: InputMaybe<String_Comparison_Exp>;
  quest?: InputMaybe<Quests_Bool_Exp>;
  quest_id?: InputMaybe<Int_Comparison_Exp>;
  rewards?: InputMaybe<Rewards_Bool_Exp>;
  status?: InputMaybe<Statuses_Enum_Comparison_Exp>;
  step?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest_log_entries" */
export enum Quest_Log_Entries_Constraint {
  /** unique or primary key constraint */
  QuestLogEntriesPkey = 'quest_log_entries_pkey'
}

/** input type for incrementing numeric columns in table "quest_log_entries" */
export type Quest_Log_Entries_Inc_Input = {
  quest_id?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quest_log_entries" */
export type Quest_Log_Entries_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  imageURL?: InputMaybe<Scalars['String']>;
  quest?: InputMaybe<Quests_Obj_Rel_Insert_Input>;
  quest_id?: InputMaybe<Scalars['Int']>;
  rewards?: InputMaybe<Rewards_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Statuses_Enum>;
  step?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quest_Log_Entries_Max_Fields = {
  __typename?: 'quest_log_entries_max_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  imageURL?: Maybe<Scalars['String']>;
  quest_id?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Log_Entries_Min_Fields = {
  __typename?: 'quest_log_entries_min_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  imageURL?: Maybe<Scalars['String']>;
  quest_id?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "quest_log_entries" */
export type Quest_Log_Entries_Mutation_Response = {
  __typename?: 'quest_log_entries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quest_Log_Entries>;
};

/** input type for inserting object relation for remote table "quest_log_entries" */
export type Quest_Log_Entries_Obj_Rel_Insert_Input = {
  data: Quest_Log_Entries_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Quest_Log_Entries_On_Conflict>;
};

/** on_conflict condition type for table "quest_log_entries" */
export type Quest_Log_Entries_On_Conflict = {
  constraint: Quest_Log_Entries_Constraint;
  update_columns?: Array<Quest_Log_Entries_Update_Column>;
  where?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
};

/** Ordering options when selecting data from "quest_log_entries". */
export type Quest_Log_Entries_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  quest?: InputMaybe<Quests_Order_By>;
  quest_id?: InputMaybe<Order_By>;
  rewards_aggregate?: InputMaybe<Rewards_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quest_log_entries */
export type Quest_Log_Entries_Pk_Columns_Input = {
  quest_id: Scalars['Int'];
  step: Scalars['Int'];
};

/** select columns of table "quest_log_entries" */
export enum Quest_Log_Entries_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  Status = 'status',
  /** column name */
  Step = 'step',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "quest_log_entries" */
export type Quest_Log_Entries_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  imageURL?: InputMaybe<Scalars['String']>;
  quest_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Statuses_Enum>;
  step?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quest_Log_Entries_Stddev_Fields = {
  __typename?: 'quest_log_entries_stddev_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Stddev_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quest_Log_Entries_Stddev_Pop_Fields = {
  __typename?: 'quest_log_entries_stddev_pop_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Stddev_Pop_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quest_Log_Entries_Stddev_Samp_Fields = {
  __typename?: 'quest_log_entries_stddev_samp_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Stddev_Samp_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Quest_Log_Entries_Sum_Fields = {
  __typename?: 'quest_log_entries_sum_fields';
  quest_id?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Sum_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** update columns of table "quest_log_entries" */
export enum Quest_Log_Entries_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  Status = 'status',
  /** column name */
  Step = 'step',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Quest_Log_Entries_Var_Pop_Fields = {
  __typename?: 'quest_log_entries_var_pop_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Var_Pop_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quest_Log_Entries_Var_Samp_Fields = {
  __typename?: 'quest_log_entries_var_samp_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Var_Samp_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Quest_Log_Entries_Variance_Fields = {
  __typename?: 'quest_log_entries_variance_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quest_log_entries" */
export type Quest_Log_Entries_Variance_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** columns and relationships of "quest_tags" */
export type Quest_Tags = {
  __typename?: 'quest_tags';
  /** An object relationship */
  quest: Quests;
  quest_id: Scalars['Int'];
  /** An object relationship */
  tag: Tags;
  tag_name: Scalars['String'];
};

/** aggregated selection of "quest_tags" */
export type Quest_Tags_Aggregate = {
  __typename?: 'quest_tags_aggregate';
  aggregate?: Maybe<Quest_Tags_Aggregate_Fields>;
  nodes: Array<Quest_Tags>;
};

/** aggregate fields of "quest_tags" */
export type Quest_Tags_Aggregate_Fields = {
  __typename?: 'quest_tags_aggregate_fields';
  avg?: Maybe<Quest_Tags_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quest_Tags_Max_Fields>;
  min?: Maybe<Quest_Tags_Min_Fields>;
  stddev?: Maybe<Quest_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Quest_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quest_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Quest_Tags_Sum_Fields>;
  var_pop?: Maybe<Quest_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Quest_Tags_Var_Samp_Fields>;
  variance?: Maybe<Quest_Tags_Variance_Fields>;
};


/** aggregate fields of "quest_tags" */
export type Quest_Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest_tags" */
export type Quest_Tags_Aggregate_Order_By = {
  avg?: InputMaybe<Quest_Tags_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Quest_Tags_Max_Order_By>;
  min?: InputMaybe<Quest_Tags_Min_Order_By>;
  stddev?: InputMaybe<Quest_Tags_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Quest_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Quest_Tags_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Quest_Tags_Sum_Order_By>;
  var_pop?: InputMaybe<Quest_Tags_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Quest_Tags_Var_Samp_Order_By>;
  variance?: InputMaybe<Quest_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "quest_tags" */
export type Quest_Tags_Arr_Rel_Insert_Input = {
  data: Array<Quest_Tags_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Quest_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Quest_Tags_Avg_Fields = {
  __typename?: 'quest_tags_avg_fields';
  quest_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quest_tags" */
export type Quest_Tags_Avg_Order_By = {
  quest_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "quest_tags". All fields are combined with a logical 'AND'. */
export type Quest_Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Quest_Tags_Bool_Exp>>;
  _not?: InputMaybe<Quest_Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Quest_Tags_Bool_Exp>>;
  quest?: InputMaybe<Quests_Bool_Exp>;
  quest_id?: InputMaybe<Int_Comparison_Exp>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tag_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest_tags" */
export enum Quest_Tags_Constraint {
  /** unique or primary key constraint */
  QuestTagsPkey = 'quest_tags_pkey'
}

/** input type for incrementing numeric columns in table "quest_tags" */
export type Quest_Tags_Inc_Input = {
  quest_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quest_tags" */
export type Quest_Tags_Insert_Input = {
  quest?: InputMaybe<Quests_Obj_Rel_Insert_Input>;
  quest_id?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<Tags_Obj_Rel_Insert_Input>;
  tag_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Quest_Tags_Max_Fields = {
  __typename?: 'quest_tags_max_fields';
  quest_id?: Maybe<Scalars['Int']>;
  tag_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "quest_tags" */
export type Quest_Tags_Max_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  tag_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Tags_Min_Fields = {
  __typename?: 'quest_tags_min_fields';
  quest_id?: Maybe<Scalars['Int']>;
  tag_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "quest_tags" */
export type Quest_Tags_Min_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  tag_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "quest_tags" */
export type Quest_Tags_Mutation_Response = {
  __typename?: 'quest_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quest_Tags>;
};

/** on_conflict condition type for table "quest_tags" */
export type Quest_Tags_On_Conflict = {
  constraint: Quest_Tags_Constraint;
  update_columns?: Array<Quest_Tags_Update_Column>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "quest_tags". */
export type Quest_Tags_Order_By = {
  quest?: InputMaybe<Quests_Order_By>;
  quest_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tags_Order_By>;
  tag_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quest_tags */
export type Quest_Tags_Pk_Columns_Input = {
  quest_id: Scalars['Int'];
  tag_name: Scalars['String'];
};

/** select columns of table "quest_tags" */
export enum Quest_Tags_Select_Column {
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  TagName = 'tag_name'
}

/** input type for updating data in table "quest_tags" */
export type Quest_Tags_Set_Input = {
  quest_id?: InputMaybe<Scalars['Int']>;
  tag_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Quest_Tags_Stddev_Fields = {
  __typename?: 'quest_tags_stddev_fields';
  quest_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quest_tags" */
export type Quest_Tags_Stddev_Order_By = {
  quest_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quest_Tags_Stddev_Pop_Fields = {
  __typename?: 'quest_tags_stddev_pop_fields';
  quest_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quest_tags" */
export type Quest_Tags_Stddev_Pop_Order_By = {
  quest_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quest_Tags_Stddev_Samp_Fields = {
  __typename?: 'quest_tags_stddev_samp_fields';
  quest_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quest_tags" */
export type Quest_Tags_Stddev_Samp_Order_By = {
  quest_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Quest_Tags_Sum_Fields = {
  __typename?: 'quest_tags_sum_fields';
  quest_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quest_tags" */
export type Quest_Tags_Sum_Order_By = {
  quest_id?: InputMaybe<Order_By>;
};

/** update columns of table "quest_tags" */
export enum Quest_Tags_Update_Column {
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  TagName = 'tag_name'
}

/** aggregate var_pop on columns */
export type Quest_Tags_Var_Pop_Fields = {
  __typename?: 'quest_tags_var_pop_fields';
  quest_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quest_tags" */
export type Quest_Tags_Var_Pop_Order_By = {
  quest_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quest_Tags_Var_Samp_Fields = {
  __typename?: 'quest_tags_var_samp_fields';
  quest_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quest_tags" */
export type Quest_Tags_Var_Samp_Order_By = {
  quest_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Quest_Tags_Variance_Fields = {
  __typename?: 'quest_tags_variance_fields';
  quest_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quest_tags" */
export type Quest_Tags_Variance_Order_By = {
  quest_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "quests" */
export type Quests = {
  __typename?: 'quests';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  giver: Scalars['String'];
  id: Scalars['Int'];
  imageURL?: Maybe<Scalars['String']>;
  isPublished: Scalars['Boolean'];
  /** An array relationship */
  log_entries: Array<Quest_Log_Entries>;
  /** An aggregate relationship */
  log_entries_aggregate: Quest_Log_Entries_Aggregate;
  /** An array relationship */
  rewards: Array<Rewards>;
  /** An aggregate relationship */
  rewards_aggregate: Rewards_Aggregate;
  /** A computed field, executes function "quest_slug" */
  slug?: Maybe<Scalars['String']>;
  /** An array relationship */
  tags: Array<Quest_Tags>;
  /** An aggregate relationship */
  tags_aggregate: Quest_Tags_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "quests" */
export type QuestsLog_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entries_Order_By>>;
  where?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
};


/** columns and relationships of "quests" */
export type QuestsLog_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entries_Order_By>>;
  where?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
};


/** columns and relationships of "quests" */
export type QuestsRewardsArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


/** columns and relationships of "quests" */
export type QuestsRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


/** columns and relationships of "quests" */
export type QuestsTagsArgs = {
  distinct_on?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Tags_Order_By>>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};


/** columns and relationships of "quests" */
export type QuestsTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Tags_Order_By>>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};

/** aggregated selection of "quests" */
export type Quests_Aggregate = {
  __typename?: 'quests_aggregate';
  aggregate?: Maybe<Quests_Aggregate_Fields>;
  nodes: Array<Quests>;
};

/** aggregate fields of "quests" */
export type Quests_Aggregate_Fields = {
  __typename?: 'quests_aggregate_fields';
  avg?: Maybe<Quests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quests_Max_Fields>;
  min?: Maybe<Quests_Min_Fields>;
  stddev?: Maybe<Quests_Stddev_Fields>;
  stddev_pop?: Maybe<Quests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quests_Stddev_Samp_Fields>;
  sum?: Maybe<Quests_Sum_Fields>;
  var_pop?: Maybe<Quests_Var_Pop_Fields>;
  var_samp?: Maybe<Quests_Var_Samp_Fields>;
  variance?: Maybe<Quests_Variance_Fields>;
};


/** aggregate fields of "quests" */
export type Quests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Quests_Avg_Fields = {
  __typename?: 'quests_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quests". All fields are combined with a logical 'AND'. */
export type Quests_Bool_Exp = {
  _and?: InputMaybe<Array<Quests_Bool_Exp>>;
  _not?: InputMaybe<Quests_Bool_Exp>;
  _or?: InputMaybe<Array<Quests_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  giver?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imageURL?: InputMaybe<String_Comparison_Exp>;
  isPublished?: InputMaybe<Boolean_Comparison_Exp>;
  log_entries?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
  rewards?: InputMaybe<Rewards_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Quest_Tags_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quests" */
export enum Quests_Constraint {
  /** unique or primary key constraint */
  QuestsPkey = 'quests_pkey'
}

/** input type for incrementing numeric columns in table "quests" */
export type Quests_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quests" */
export type Quests_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  giver?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageURL?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  log_entries?: InputMaybe<Quest_Log_Entries_Arr_Rel_Insert_Input>;
  rewards?: InputMaybe<Rewards_Arr_Rel_Insert_Input>;
  tags?: InputMaybe<Quest_Tags_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quests_Max_Fields = {
  __typename?: 'quests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  giver?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Quests_Min_Fields = {
  __typename?: 'quests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  giver?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "quests" */
export type Quests_Mutation_Response = {
  __typename?: 'quests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quests>;
};

/** input type for inserting object relation for remote table "quests" */
export type Quests_Obj_Rel_Insert_Input = {
  data: Quests_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Quests_On_Conflict>;
};

/** on_conflict condition type for table "quests" */
export type Quests_On_Conflict = {
  constraint: Quests_Constraint;
  update_columns?: Array<Quests_Update_Column>;
  where?: InputMaybe<Quests_Bool_Exp>;
};

/** Ordering options when selecting data from "quests". */
export type Quests_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  giver?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  isPublished?: InputMaybe<Order_By>;
  log_entries_aggregate?: InputMaybe<Quest_Log_Entries_Aggregate_Order_By>;
  rewards_aggregate?: InputMaybe<Rewards_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  tags_aggregate?: InputMaybe<Quest_Tags_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quests */
export type Quests_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "quests" */
export enum Quests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Giver = 'giver',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  IsPublished = 'isPublished',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "quests" */
export type Quests_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  giver?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageURL?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quests_Stddev_Fields = {
  __typename?: 'quests_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Quests_Stddev_Pop_Fields = {
  __typename?: 'quests_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Quests_Stddev_Samp_Fields = {
  __typename?: 'quests_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Quests_Sum_Fields = {
  __typename?: 'quests_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "quests" */
export enum Quests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Giver = 'giver',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  IsPublished = 'isPublished',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Quests_Var_Pop_Fields = {
  __typename?: 'quests_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Quests_Var_Samp_Fields = {
  __typename?: 'quests_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Quests_Variance_Fields = {
  __typename?: 'quests_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rewards" */
export type Rewards = {
  __typename?: 'rewards';
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageURL?: Maybe<Scalars['String']>;
  /** An object relationship */
  log_entry?: Maybe<Quest_Log_Entries>;
  name: Scalars['String'];
  /** An object relationship */
  quest: Quests;
  quest_id: Scalars['Int'];
  rarity: Scalars['String'];
  sourceURL?: Maybe<Scalars['String']>;
  step_id?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "rewards" */
export type Rewards_Aggregate = {
  __typename?: 'rewards_aggregate';
  aggregate?: Maybe<Rewards_Aggregate_Fields>;
  nodes: Array<Rewards>;
};

/** aggregate fields of "rewards" */
export type Rewards_Aggregate_Fields = {
  __typename?: 'rewards_aggregate_fields';
  avg?: Maybe<Rewards_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rewards_Max_Fields>;
  min?: Maybe<Rewards_Min_Fields>;
  stddev?: Maybe<Rewards_Stddev_Fields>;
  stddev_pop?: Maybe<Rewards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rewards_Stddev_Samp_Fields>;
  sum?: Maybe<Rewards_Sum_Fields>;
  var_pop?: Maybe<Rewards_Var_Pop_Fields>;
  var_samp?: Maybe<Rewards_Var_Samp_Fields>;
  variance?: Maybe<Rewards_Variance_Fields>;
};


/** aggregate fields of "rewards" */
export type Rewards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rewards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rewards" */
export type Rewards_Aggregate_Order_By = {
  avg?: InputMaybe<Rewards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rewards_Max_Order_By>;
  min?: InputMaybe<Rewards_Min_Order_By>;
  stddev?: InputMaybe<Rewards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rewards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rewards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rewards_Sum_Order_By>;
  var_pop?: InputMaybe<Rewards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rewards_Var_Samp_Order_By>;
  variance?: InputMaybe<Rewards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rewards" */
export type Rewards_Arr_Rel_Insert_Input = {
  data: Array<Rewards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};

/** aggregate avg on columns */
export type Rewards_Avg_Fields = {
  __typename?: 'rewards_avg_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quest_id?: Maybe<Scalars['Float']>;
  step_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rewards" */
export type Rewards_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rewards". All fields are combined with a logical 'AND'. */
export type Rewards_Bool_Exp = {
  _and?: InputMaybe<Array<Rewards_Bool_Exp>>;
  _not?: InputMaybe<Rewards_Bool_Exp>;
  _or?: InputMaybe<Array<Rewards_Bool_Exp>>;
  count?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imageURL?: InputMaybe<String_Comparison_Exp>;
  log_entry?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  quest?: InputMaybe<Quests_Bool_Exp>;
  quest_id?: InputMaybe<Int_Comparison_Exp>;
  rarity?: InputMaybe<String_Comparison_Exp>;
  sourceURL?: InputMaybe<String_Comparison_Exp>;
  step_id?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "rewards" */
export enum Rewards_Constraint {
  /** unique or primary key constraint */
  RewardsPkey = 'rewards_pkey'
}

/** input type for incrementing numeric columns in table "rewards" */
export type Rewards_Inc_Input = {
  count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  quest_id?: InputMaybe<Scalars['Int']>;
  step_id?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rewards" */
export type Rewards_Insert_Input = {
  count?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageURL?: InputMaybe<Scalars['String']>;
  log_entry?: InputMaybe<Quest_Log_Entries_Obj_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  quest?: InputMaybe<Quests_Obj_Rel_Insert_Input>;
  quest_id?: InputMaybe<Scalars['Int']>;
  rarity?: InputMaybe<Scalars['String']>;
  sourceURL?: InputMaybe<Scalars['String']>;
  step_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Rewards_Max_Fields = {
  __typename?: 'rewards_max_fields';
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  quest_id?: Maybe<Scalars['Int']>;
  rarity?: Maybe<Scalars['String']>;
  sourceURL?: Maybe<Scalars['String']>;
  step_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "rewards" */
export type Rewards_Max_Order_By = {
  count?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  rarity?: InputMaybe<Order_By>;
  sourceURL?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rewards_Min_Fields = {
  __typename?: 'rewards_min_fields';
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  quest_id?: Maybe<Scalars['Int']>;
  rarity?: Maybe<Scalars['String']>;
  sourceURL?: Maybe<Scalars['String']>;
  step_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "rewards" */
export type Rewards_Min_Order_By = {
  count?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  rarity?: InputMaybe<Order_By>;
  sourceURL?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rewards" */
export type Rewards_Mutation_Response = {
  __typename?: 'rewards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rewards>;
};

/** on_conflict condition type for table "rewards" */
export type Rewards_On_Conflict = {
  constraint: Rewards_Constraint;
  update_columns?: Array<Rewards_Update_Column>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};

/** Ordering options when selecting data from "rewards". */
export type Rewards_Order_By = {
  count?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  log_entry?: InputMaybe<Quest_Log_Entries_Order_By>;
  name?: InputMaybe<Order_By>;
  quest?: InputMaybe<Quests_Order_By>;
  quest_id?: InputMaybe<Order_By>;
  rarity?: InputMaybe<Order_By>;
  sourceURL?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rewards */
export type Rewards_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rewards" */
export enum Rewards_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  Name = 'name',
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  Rarity = 'rarity',
  /** column name */
  SourceUrl = 'sourceURL',
  /** column name */
  StepId = 'step_id',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "rewards" */
export type Rewards_Set_Input = {
  count?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageURL?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quest_id?: InputMaybe<Scalars['Int']>;
  rarity?: InputMaybe<Scalars['String']>;
  sourceURL?: InputMaybe<Scalars['String']>;
  step_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Rewards_Stddev_Fields = {
  __typename?: 'rewards_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quest_id?: Maybe<Scalars['Float']>;
  step_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rewards" */
export type Rewards_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rewards_Stddev_Pop_Fields = {
  __typename?: 'rewards_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quest_id?: Maybe<Scalars['Float']>;
  step_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rewards" */
export type Rewards_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rewards_Stddev_Samp_Fields = {
  __typename?: 'rewards_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quest_id?: Maybe<Scalars['Float']>;
  step_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rewards" */
export type Rewards_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Rewards_Sum_Fields = {
  __typename?: 'rewards_sum_fields';
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quest_id?: Maybe<Scalars['Int']>;
  step_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rewards" */
export type Rewards_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "rewards" */
export enum Rewards_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  Name = 'name',
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  Rarity = 'rarity',
  /** column name */
  SourceUrl = 'sourceURL',
  /** column name */
  StepId = 'step_id',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Rewards_Var_Pop_Fields = {
  __typename?: 'rewards_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quest_id?: Maybe<Scalars['Float']>;
  step_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rewards" */
export type Rewards_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rewards_Var_Samp_Fields = {
  __typename?: 'rewards_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quest_id?: Maybe<Scalars['Float']>;
  step_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rewards" */
export type Rewards_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rewards_Variance_Fields = {
  __typename?: 'rewards_variance_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quest_id?: Maybe<Scalars['Float']>;
  step_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rewards" */
export type Rewards_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "statuses" */
export type Statuses = {
  __typename?: 'statuses';
  name: Scalars['String'];
};

/** aggregated selection of "statuses" */
export type Statuses_Aggregate = {
  __typename?: 'statuses_aggregate';
  aggregate?: Maybe<Statuses_Aggregate_Fields>;
  nodes: Array<Statuses>;
};

/** aggregate fields of "statuses" */
export type Statuses_Aggregate_Fields = {
  __typename?: 'statuses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Statuses_Max_Fields>;
  min?: Maybe<Statuses_Min_Fields>;
};


/** aggregate fields of "statuses" */
export type Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "statuses". All fields are combined with a logical 'AND'. */
export type Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Statuses_Bool_Exp>>;
  _not?: InputMaybe<Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Statuses_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "statuses" */
export enum Statuses_Constraint {
  /** unique or primary key constraint */
  StatusesPkey = 'statuses_pkey'
}

export enum Statuses_Enum {
  Active = 'active',
  Disabled = 'disabled',
  Expired = 'expired',
  Fail = 'fail',
  Success = 'success'
}

/** Boolean expression to compare columns of type "statuses_enum". All fields are combined with logical 'AND'. */
export type Statuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Statuses_Enum>;
  _in?: InputMaybe<Array<Statuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Statuses_Enum>;
  _nin?: InputMaybe<Array<Statuses_Enum>>;
};

/** input type for inserting data into table "statuses" */
export type Statuses_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Statuses_Max_Fields = {
  __typename?: 'statuses_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Statuses_Min_Fields = {
  __typename?: 'statuses_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "statuses" */
export type Statuses_Mutation_Response = {
  __typename?: 'statuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Statuses>;
};

/** on_conflict condition type for table "statuses" */
export type Statuses_On_Conflict = {
  constraint: Statuses_Constraint;
  update_columns?: Array<Statuses_Update_Column>;
  where?: InputMaybe<Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "statuses". */
export type Statuses_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: statuses */
export type Statuses_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "statuses" */
export enum Statuses_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "statuses" */
export type Statuses_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "statuses" */
export enum Statuses_Update_Column {
  /** column name */
  Name = 'name'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "quest_log_entries" */
  quest_log_entries: Array<Quest_Log_Entries>;
  /** fetch aggregated fields from the table: "quest_log_entries" */
  quest_log_entries_aggregate: Quest_Log_Entries_Aggregate;
  /** fetch data from the table: "quest_log_entries" using primary key columns */
  quest_log_entries_by_pk?: Maybe<Quest_Log_Entries>;
  /** An array relationship */
  quest_tags: Array<Quest_Tags>;
  /** An aggregate relationship */
  quest_tags_aggregate: Quest_Tags_Aggregate;
  /** fetch data from the table: "quest_tags" using primary key columns */
  quest_tags_by_pk?: Maybe<Quest_Tags>;
  /** fetch data from the table: "quests" */
  quests: Array<Quests>;
  /** fetch aggregated fields from the table: "quests" */
  quests_aggregate: Quests_Aggregate;
  /** fetch data from the table: "quests" using primary key columns */
  quests_by_pk?: Maybe<Quests>;
  /** An array relationship */
  rewards: Array<Rewards>;
  /** An aggregate relationship */
  rewards_aggregate: Rewards_Aggregate;
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>;
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>;
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate;
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootQuest_Log_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entries_Order_By>>;
  where?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
};


export type Subscription_RootQuest_Log_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entries_Order_By>>;
  where?: InputMaybe<Quest_Log_Entries_Bool_Exp>;
};


export type Subscription_RootQuest_Log_Entries_By_PkArgs = {
  quest_id: Scalars['Int'];
  step: Scalars['Int'];
};


export type Subscription_RootQuest_TagsArgs = {
  distinct_on?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Tags_Order_By>>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};


export type Subscription_RootQuest_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Tags_Order_By>>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};


export type Subscription_RootQuest_Tags_By_PkArgs = {
  quest_id: Scalars['Int'];
  tag_name: Scalars['String'];
};


export type Subscription_RootQuestsArgs = {
  distinct_on?: InputMaybe<Array<Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quests_Order_By>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Subscription_RootQuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quests_Order_By>>;
  where?: InputMaybe<Quests_Bool_Exp>;
};


export type Subscription_RootQuests_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRewardsArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Subscription_RootRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Subscription_RootRewards_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStatusesArgs = {
  distinct_on?: InputMaybe<Array<Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Statuses_Order_By>>;
  where?: InputMaybe<Statuses_Bool_Exp>;
};


export type Subscription_RootStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Statuses_Order_By>>;
  where?: InputMaybe<Statuses_Bool_Exp>;
};


export type Subscription_RootStatuses_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "tags" */
export type Tags = {
  __typename?: 'tags';
  name: Scalars['String'];
  /** An array relationship */
  quest_tags: Array<Quest_Tags>;
  /** An aggregate relationship */
  quest_tags_aggregate: Quest_Tags_Aggregate;
};


/** columns and relationships of "tags" */
export type TagsQuest_TagsArgs = {
  distinct_on?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Tags_Order_By>>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};


/** columns and relationships of "tags" */
export type TagsQuest_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Tags_Order_By>>;
  where?: InputMaybe<Quest_Tags_Bool_Exp>;
};

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
};

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
};


/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  quest_tags?: InputMaybe<Quest_Tags_Bool_Exp>;
};

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint */
  TagsPkey = 'tags_pkey'
}

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  quest_tags?: InputMaybe<Quest_Tags_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
};

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};

/** on_conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns?: Array<Tags_Update_Column>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  name?: InputMaybe<Order_By>;
  quest_tags_aggregate?: InputMaybe<Quest_Tags_Aggregate_Order_By>;
};

/** primary key columns input for table: tags */
export type Tags_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  Name = 'name'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "auth.users" */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.users" */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type QuestForEditQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type QuestForEditQuery = { __typename?: 'query_root', quests: Array<{ __typename?: 'quests', id: number, title: string, description: string, giver: string, imageURL?: string | null, isPublished: boolean, rewards: Array<{ __typename?: 'rewards', id: number, name: string, description?: string | null, rarity: string, count?: number | null, value?: number | null, type: string, imageURL?: string | null, sourceURL?: string | null }>, log_entries: Array<{ __typename?: 'quest_log_entries', step: number, title: string, body: string, status: Statuses_Enum, imageURL?: string | null, rewards: Array<{ __typename?: 'rewards', id: number, name: string, description?: string | null, rarity: string, count?: number | null, value?: number | null, type: string, imageURL?: string | null, sourceURL?: string | null }> }>, tags: Array<{ __typename?: 'quest_tags', tag_name: string }> }>, tags: Array<{ __typename?: 'tags', name: string }> };

export type RewardWithIdFragment = { __typename?: 'rewards', id: number, name: string, description?: string | null, rarity: string, count?: number | null, value?: number | null, type: string, imageURL?: string | null, sourceURL?: string | null };

export type UpdateQuestByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  giver: Scalars['String'];
  imageURL: Scalars['String'];
}>;


export type UpdateQuestByPkMutation = { __typename?: 'mutation_root', update_quests_by_pk?: { __typename?: 'quests', slug?: string | null } | null };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'query_root', tags: Array<{ __typename?: 'tags', name: string }> };

export type CreateQuestMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  giver: Scalars['String'];
  imageURL: Scalars['String'];
}>;


export type CreateQuestMutation = { __typename?: 'mutation_root', insert_quests_one?: { __typename?: 'quests', slug?: string | null } | null };

export type QuestWithLogForDetailViewQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type QuestWithLogForDetailViewQuery = { __typename?: 'query_root', quests: Array<{ __typename?: 'quests', title: string, description: string, giver: string, imageURL?: string | null, tags: Array<{ __typename?: 'quest_tags', tag_name: string }>, rewards: Array<{ __typename?: 'rewards', name: string, description?: string | null, type: string, rarity: string, count?: number | null, value?: number | null, imageURL?: string | null, sourceURL?: string | null }>, log_entries: Array<{ __typename?: 'quest_log_entries', title: string, body: string, status: Statuses_Enum, step: number, created_at: any, imageURL?: string | null, rewards: Array<{ __typename?: 'rewards', name: string, description?: string | null, type: string, rarity: string, count?: number | null, value?: number | null, imageURL?: string | null, sourceURL?: string | null }> }> }> };

export type RewardFragment = { __typename?: 'rewards', name: string, description?: string | null, type: string, rarity: string, count?: number | null, value?: number | null, imageURL?: string | null, sourceURL?: string | null };

export type QuestListQueryVariables = Exact<{
  filter?: InputMaybe<Quests_Bool_Exp>;
}>;


export type QuestListQuery = { __typename?: 'query_root', quests: Array<{ __typename?: 'quests', title: string, slug?: string | null, description: string, giver: string, imageURL?: string | null, created_at: any, updated_at: any, tags: Array<{ __typename?: 'quest_tags', tag_name: string }> }> };

export const RewardWithIdFragmentDoc = gql`
    fragment rewardWithId on rewards {
  id
  name
  description
  rarity
  count
  value
  type
  imageURL
  sourceURL
}
    `;
export const RewardFragmentDoc = gql`
    fragment reward on rewards {
  name
  description
  type
  rarity
  count
  value
  imageURL
  sourceURL
}
    `;
export const QuestForEditDocument = gql`
    query QuestForEdit($slug: String!) {
  quests(where: {slug: {_eq: $slug}}, limit: 1) {
    id
    title
    description
    giver
    imageURL
    isPublished
    rewards {
      ...rewardWithId
    }
    log_entries {
      step
      title
      body
      status
      imageURL
      rewards {
        ...rewardWithId
      }
    }
    tags {
      tag_name
    }
  }
  tags {
    name
  }
}
    ${RewardWithIdFragmentDoc}`;

/**
 * __useQuestForEditQuery__
 *
 * To run a query within a React component, call `useQuestForEditQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestForEditQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestForEditQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useQuestForEditQuery(baseOptions: Apollo.QueryHookOptions<QuestForEditQuery, QuestForEditQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestForEditQuery, QuestForEditQueryVariables>(QuestForEditDocument, options);
      }
export function useQuestForEditLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestForEditQuery, QuestForEditQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestForEditQuery, QuestForEditQueryVariables>(QuestForEditDocument, options);
        }
export type QuestForEditQueryHookResult = ReturnType<typeof useQuestForEditQuery>;
export type QuestForEditLazyQueryHookResult = ReturnType<typeof useQuestForEditLazyQuery>;
export type QuestForEditQueryResult = Apollo.QueryResult<QuestForEditQuery, QuestForEditQueryVariables>;
export const UpdateQuestByPkDocument = gql`
    mutation UpdateQuestByPK($id: Int!, $title: String!, $description: String!, $giver: String!, $imageURL: String!) {
  update_quests_by_pk(
    pk_columns: {id: $id}
    _set: {title: $title, description: $description, giver: $giver, imageURL: $imageURL}
  ) {
    slug
  }
}
    `;
export type UpdateQuestByPkMutationFn = Apollo.MutationFunction<UpdateQuestByPkMutation, UpdateQuestByPkMutationVariables>;

/**
 * __useUpdateQuestByPkMutation__
 *
 * To run a mutation, you first call `useUpdateQuestByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestByPkMutation, { data, loading, error }] = useUpdateQuestByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      giver: // value for 'giver'
 *      imageURL: // value for 'imageURL'
 *   },
 * });
 */
export function useUpdateQuestByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestByPkMutation, UpdateQuestByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestByPkMutation, UpdateQuestByPkMutationVariables>(UpdateQuestByPkDocument, options);
      }
export type UpdateQuestByPkMutationHookResult = ReturnType<typeof useUpdateQuestByPkMutation>;
export type UpdateQuestByPkMutationResult = Apollo.MutationResult<UpdateQuestByPkMutation>;
export type UpdateQuestByPkMutationOptions = Apollo.BaseMutationOptions<UpdateQuestByPkMutation, UpdateQuestByPkMutationVariables>;
export const AllTagsDocument = gql`
    query AllTags {
  tags {
    name
  }
}
    `;

/**
 * __useAllTagsQuery__
 *
 * To run a query within a React component, call `useAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsDocument, options);
      }
export function useAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsDocument, options);
        }
export type AllTagsQueryHookResult = ReturnType<typeof useAllTagsQuery>;
export type AllTagsLazyQueryHookResult = ReturnType<typeof useAllTagsLazyQuery>;
export type AllTagsQueryResult = Apollo.QueryResult<AllTagsQuery, AllTagsQueryVariables>;
export const CreateQuestDocument = gql`
    mutation CreateQuest($title: String!, $description: String!, $giver: String!, $imageURL: String!) {
  insert_quests_one(
    object: {title: $title, description: $description, giver: $giver, imageURL: $imageURL}
  ) {
    slug
  }
}
    `;
export type CreateQuestMutationFn = Apollo.MutationFunction<CreateQuestMutation, CreateQuestMutationVariables>;

/**
 * __useCreateQuestMutation__
 *
 * To run a mutation, you first call `useCreateQuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestMutation, { data, loading, error }] = useCreateQuestMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      giver: // value for 'giver'
 *      imageURL: // value for 'imageURL'
 *   },
 * });
 */
export function useCreateQuestMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestMutation, CreateQuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestMutation, CreateQuestMutationVariables>(CreateQuestDocument, options);
      }
export type CreateQuestMutationHookResult = ReturnType<typeof useCreateQuestMutation>;
export type CreateQuestMutationResult = Apollo.MutationResult<CreateQuestMutation>;
export type CreateQuestMutationOptions = Apollo.BaseMutationOptions<CreateQuestMutation, CreateQuestMutationVariables>;
export const QuestWithLogForDetailViewDocument = gql`
    query QuestWithLogForDetailView($slug: String) {
  quests(limit: 1, where: {slug: {_eq: $slug}}) {
    title
    description
    giver
    imageURL
    tags {
      tag_name
    }
    rewards(where: {step_id: {_is_null: true}}) {
      ...reward
    }
    log_entries(order_by: {step: desc}) {
      title
      body
      status
      step
      created_at
      imageURL
      rewards {
        ...reward
      }
    }
  }
}
    ${RewardFragmentDoc}`;

/**
 * __useQuestWithLogForDetailViewQuery__
 *
 * To run a query within a React component, call `useQuestWithLogForDetailViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestWithLogForDetailViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestWithLogForDetailViewQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useQuestWithLogForDetailViewQuery(baseOptions?: Apollo.QueryHookOptions<QuestWithLogForDetailViewQuery, QuestWithLogForDetailViewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestWithLogForDetailViewQuery, QuestWithLogForDetailViewQueryVariables>(QuestWithLogForDetailViewDocument, options);
      }
export function useQuestWithLogForDetailViewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestWithLogForDetailViewQuery, QuestWithLogForDetailViewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestWithLogForDetailViewQuery, QuestWithLogForDetailViewQueryVariables>(QuestWithLogForDetailViewDocument, options);
        }
export type QuestWithLogForDetailViewQueryHookResult = ReturnType<typeof useQuestWithLogForDetailViewQuery>;
export type QuestWithLogForDetailViewLazyQueryHookResult = ReturnType<typeof useQuestWithLogForDetailViewLazyQuery>;
export type QuestWithLogForDetailViewQueryResult = Apollo.QueryResult<QuestWithLogForDetailViewQuery, QuestWithLogForDetailViewQueryVariables>;
export const QuestListDocument = gql`
    query QuestList($filter: quests_bool_exp) {
  quests(where: $filter) {
    title
    slug
    description
    giver
    imageURL
    tags {
      tag_name
    }
    created_at
    updated_at
  }
}
    `;

/**
 * __useQuestListQuery__
 *
 * To run a query within a React component, call `useQuestListQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useQuestListQuery(baseOptions?: Apollo.QueryHookOptions<QuestListQuery, QuestListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestListQuery, QuestListQueryVariables>(QuestListDocument, options);
      }
export function useQuestListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestListQuery, QuestListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestListQuery, QuestListQueryVariables>(QuestListDocument, options);
        }
export type QuestListQueryHookResult = ReturnType<typeof useQuestListQuery>;
export type QuestListLazyQueryHookResult = ReturnType<typeof useQuestListLazyQuery>;
export type QuestListQueryResult = Apollo.QueryResult<QuestListQuery, QuestListQueryVariables>;