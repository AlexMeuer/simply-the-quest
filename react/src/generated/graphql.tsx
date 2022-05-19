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
  jsonb: any;
  timestamptz: any;
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
  /** delete data from the table: "quest" */
  delete_quest?: Maybe<Quest_Mutation_Response>;
  /** delete single row from the table: "quest" */
  delete_quest_by_pk?: Maybe<Quest>;
  /** delete data from the table: "quest_log_entry" */
  delete_quest_log_entry?: Maybe<Quest_Log_Entry_Mutation_Response>;
  /** delete single row from the table: "quest_log_entry" */
  delete_quest_log_entry_by_pk?: Maybe<Quest_Log_Entry>;
  /** delete data from the table: "statuses" */
  delete_statuses?: Maybe<Statuses_Mutation_Response>;
  /** delete single row from the table: "statuses" */
  delete_statuses_by_pk?: Maybe<Statuses>;
  /** insert data into the table: "quest" */
  insert_quest?: Maybe<Quest_Mutation_Response>;
  /** insert data into the table: "quest_log_entry" */
  insert_quest_log_entry?: Maybe<Quest_Log_Entry_Mutation_Response>;
  /** insert a single row into the table: "quest_log_entry" */
  insert_quest_log_entry_one?: Maybe<Quest_Log_Entry>;
  /** insert a single row into the table: "quest" */
  insert_quest_one?: Maybe<Quest>;
  /** insert data into the table: "statuses" */
  insert_statuses?: Maybe<Statuses_Mutation_Response>;
  /** insert a single row into the table: "statuses" */
  insert_statuses_one?: Maybe<Statuses>;
  /** update data of the table: "quest" */
  update_quest?: Maybe<Quest_Mutation_Response>;
  /** update single row of the table: "quest" */
  update_quest_by_pk?: Maybe<Quest>;
  /** update data of the table: "quest_log_entry" */
  update_quest_log_entry?: Maybe<Quest_Log_Entry_Mutation_Response>;
  /** update single row of the table: "quest_log_entry" */
  update_quest_log_entry_by_pk?: Maybe<Quest_Log_Entry>;
  /** update data of the table: "statuses" */
  update_statuses?: Maybe<Statuses_Mutation_Response>;
  /** update single row of the table: "statuses" */
  update_statuses_by_pk?: Maybe<Statuses>;
};


/** mutation root */
export type Mutation_RootDelete_QuestArgs = {
  where: Quest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Quest_Log_EntryArgs = {
  where: Quest_Log_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_Log_Entry_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  quest_id: Scalars['Int'];
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
export type Mutation_RootInsert_QuestArgs = {
  objects: Array<Quest_Insert_Input>;
  on_conflict?: InputMaybe<Quest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Log_EntryArgs = {
  objects: Array<Quest_Log_Entry_Insert_Input>;
  on_conflict?: InputMaybe<Quest_Log_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Log_Entry_OneArgs = {
  object: Quest_Log_Entry_Insert_Input;
  on_conflict?: InputMaybe<Quest_Log_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_OneArgs = {
  object: Quest_Insert_Input;
  on_conflict?: InputMaybe<Quest_On_Conflict>;
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
export type Mutation_RootUpdate_QuestArgs = {
  _append?: InputMaybe<Quest_Append_Input>;
  _delete_at_path?: InputMaybe<Quest_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Quest_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Quest_Delete_Key_Input>;
  _inc?: InputMaybe<Quest_Inc_Input>;
  _prepend?: InputMaybe<Quest_Prepend_Input>;
  _set?: InputMaybe<Quest_Set_Input>;
  where: Quest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_By_PkArgs = {
  _append?: InputMaybe<Quest_Append_Input>;
  _delete_at_path?: InputMaybe<Quest_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Quest_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Quest_Delete_Key_Input>;
  _inc?: InputMaybe<Quest_Inc_Input>;
  _prepend?: InputMaybe<Quest_Prepend_Input>;
  _set?: InputMaybe<Quest_Set_Input>;
  pk_columns: Quest_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Log_EntryArgs = {
  _inc?: InputMaybe<Quest_Log_Entry_Inc_Input>;
  _set?: InputMaybe<Quest_Log_Entry_Set_Input>;
  where: Quest_Log_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Log_Entry_By_PkArgs = {
  _inc?: InputMaybe<Quest_Log_Entry_Inc_Input>;
  _set?: InputMaybe<Quest_Log_Entry_Set_Input>;
  pk_columns: Quest_Log_Entry_Pk_Columns_Input;
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
  /** fetch data from the table: "quest" */
  quest: Array<Quest>;
  /** fetch aggregated fields from the table: "quest" */
  quest_aggregate: Quest_Aggregate;
  /** fetch data from the table: "quest" using primary key columns */
  quest_by_pk?: Maybe<Quest>;
  /** fetch data from the table: "quest_log_entry" */
  quest_log_entry: Array<Quest_Log_Entry>;
  /** fetch aggregated fields from the table: "quest_log_entry" */
  quest_log_entry_aggregate: Quest_Log_Entry_Aggregate;
  /** fetch data from the table: "quest_log_entry" using primary key columns */
  quest_log_entry_by_pk?: Maybe<Quest_Log_Entry>;
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>;
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate;
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>;
};


export type Query_RootQuestArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


export type Query_RootQuest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


export type Query_RootQuest_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootQuest_Log_EntryArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entry_Order_By>>;
  where?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
};


export type Query_RootQuest_Log_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entry_Order_By>>;
  where?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
};


export type Query_RootQuest_Log_Entry_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  quest_id: Scalars['Int'];
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

/** columns and relationships of "quest" */
export type Quest = {
  __typename?: 'quest';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  giver: Scalars['String'];
  id: Scalars['Int'];
  imageURL?: Maybe<Scalars['String']>;
  isPublished: Scalars['Boolean'];
  /** An array relationship */
  log_entries: Array<Quest_Log_Entry>;
  /** An aggregate relationship */
  log_entries_aggregate: Quest_Log_Entry_Aggregate;
  /** A computed field, executes function "quest_slug" */
  slug?: Maybe<Scalars['String']>;
  tags: Scalars['jsonb'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "quest" */
export type QuestLog_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entry_Order_By>>;
  where?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestLog_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entry_Order_By>>;
  where?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestTagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "quest" */
export type Quest_Aggregate = {
  __typename?: 'quest_aggregate';
  aggregate?: Maybe<Quest_Aggregate_Fields>;
  nodes: Array<Quest>;
};

/** aggregate fields of "quest" */
export type Quest_Aggregate_Fields = {
  __typename?: 'quest_aggregate_fields';
  avg?: Maybe<Quest_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quest_Max_Fields>;
  min?: Maybe<Quest_Min_Fields>;
  stddev?: Maybe<Quest_Stddev_Fields>;
  stddev_pop?: Maybe<Quest_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quest_Stddev_Samp_Fields>;
  sum?: Maybe<Quest_Sum_Fields>;
  var_pop?: Maybe<Quest_Var_Pop_Fields>;
  var_samp?: Maybe<Quest_Var_Samp_Fields>;
  variance?: Maybe<Quest_Variance_Fields>;
};


/** aggregate fields of "quest" */
export type Quest_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Quest_Append_Input = {
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Quest_Avg_Fields = {
  __typename?: 'quest_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quest". All fields are combined with a logical 'AND'. */
export type Quest_Bool_Exp = {
  _and?: InputMaybe<Array<Quest_Bool_Exp>>;
  _not?: InputMaybe<Quest_Bool_Exp>;
  _or?: InputMaybe<Array<Quest_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  giver?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imageURL?: InputMaybe<String_Comparison_Exp>;
  isPublished?: InputMaybe<Boolean_Comparison_Exp>;
  log_entries?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest" */
export enum Quest_Constraint {
  /** unique or primary key constraint */
  QuestPkey = 'quest_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Quest_Delete_At_Path_Input = {
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Quest_Delete_Elem_Input = {
  tags?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Quest_Delete_Key_Input = {
  tags?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "quest" */
export type Quest_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quest" */
export type Quest_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  giver?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageURL?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  log_entries?: InputMaybe<Quest_Log_Entry_Arr_Rel_Insert_Input>;
  tags?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "quest_log_entry" */
export type Quest_Log_Entry = {
  __typename?: 'quest_log_entry';
  body: Scalars['String'];
  created_at: Scalars['timestamptz'];
  imageURL?: Maybe<Scalars['String']>;
  /** An object relationship */
  quest: Quest;
  quest_id: Scalars['Int'];
  status: Statuses_Enum;
  step: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "quest_log_entry" */
export type Quest_Log_Entry_Aggregate = {
  __typename?: 'quest_log_entry_aggregate';
  aggregate?: Maybe<Quest_Log_Entry_Aggregate_Fields>;
  nodes: Array<Quest_Log_Entry>;
};

/** aggregate fields of "quest_log_entry" */
export type Quest_Log_Entry_Aggregate_Fields = {
  __typename?: 'quest_log_entry_aggregate_fields';
  avg?: Maybe<Quest_Log_Entry_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quest_Log_Entry_Max_Fields>;
  min?: Maybe<Quest_Log_Entry_Min_Fields>;
  stddev?: Maybe<Quest_Log_Entry_Stddev_Fields>;
  stddev_pop?: Maybe<Quest_Log_Entry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quest_Log_Entry_Stddev_Samp_Fields>;
  sum?: Maybe<Quest_Log_Entry_Sum_Fields>;
  var_pop?: Maybe<Quest_Log_Entry_Var_Pop_Fields>;
  var_samp?: Maybe<Quest_Log_Entry_Var_Samp_Fields>;
  variance?: Maybe<Quest_Log_Entry_Variance_Fields>;
};


/** aggregate fields of "quest_log_entry" */
export type Quest_Log_Entry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quest_Log_Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest_log_entry" */
export type Quest_Log_Entry_Aggregate_Order_By = {
  avg?: InputMaybe<Quest_Log_Entry_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Quest_Log_Entry_Max_Order_By>;
  min?: InputMaybe<Quest_Log_Entry_Min_Order_By>;
  stddev?: InputMaybe<Quest_Log_Entry_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Quest_Log_Entry_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Quest_Log_Entry_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Quest_Log_Entry_Sum_Order_By>;
  var_pop?: InputMaybe<Quest_Log_Entry_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Quest_Log_Entry_Var_Samp_Order_By>;
  variance?: InputMaybe<Quest_Log_Entry_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "quest_log_entry" */
export type Quest_Log_Entry_Arr_Rel_Insert_Input = {
  data: Array<Quest_Log_Entry_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Quest_Log_Entry_On_Conflict>;
};

/** aggregate avg on columns */
export type Quest_Log_Entry_Avg_Fields = {
  __typename?: 'quest_log_entry_avg_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Avg_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "quest_log_entry". All fields are combined with a logical 'AND'. */
export type Quest_Log_Entry_Bool_Exp = {
  _and?: InputMaybe<Array<Quest_Log_Entry_Bool_Exp>>;
  _not?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
  _or?: InputMaybe<Array<Quest_Log_Entry_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  imageURL?: InputMaybe<String_Comparison_Exp>;
  quest?: InputMaybe<Quest_Bool_Exp>;
  quest_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Statuses_Enum_Comparison_Exp>;
  step?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest_log_entry" */
export enum Quest_Log_Entry_Constraint {
  /** unique or primary key constraint */
  QuestLogEntryPkey = 'quest_log_entry_pkey'
}

/** input type for incrementing numeric columns in table "quest_log_entry" */
export type Quest_Log_Entry_Inc_Input = {
  quest_id?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quest_log_entry" */
export type Quest_Log_Entry_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  imageURL?: InputMaybe<Scalars['String']>;
  quest?: InputMaybe<Quest_Obj_Rel_Insert_Input>;
  quest_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Statuses_Enum>;
  step?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quest_Log_Entry_Max_Fields = {
  __typename?: 'quest_log_entry_max_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  imageURL?: Maybe<Scalars['String']>;
  quest_id?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Log_Entry_Min_Fields = {
  __typename?: 'quest_log_entry_min_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  imageURL?: Maybe<Scalars['String']>;
  quest_id?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "quest_log_entry" */
export type Quest_Log_Entry_Mutation_Response = {
  __typename?: 'quest_log_entry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quest_Log_Entry>;
};

/** on_conflict condition type for table "quest_log_entry" */
export type Quest_Log_Entry_On_Conflict = {
  constraint: Quest_Log_Entry_Constraint;
  update_columns?: Array<Quest_Log_Entry_Update_Column>;
  where?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
};

/** Ordering options when selecting data from "quest_log_entry". */
export type Quest_Log_Entry_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  quest?: InputMaybe<Quest_Order_By>;
  quest_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quest_log_entry */
export type Quest_Log_Entry_Pk_Columns_Input = {
  created_at: Scalars['timestamptz'];
  quest_id: Scalars['Int'];
};

/** select columns of table "quest_log_entry" */
export enum Quest_Log_Entry_Select_Column {
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

/** input type for updating data in table "quest_log_entry" */
export type Quest_Log_Entry_Set_Input = {
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
export type Quest_Log_Entry_Stddev_Fields = {
  __typename?: 'quest_log_entry_stddev_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Stddev_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quest_Log_Entry_Stddev_Pop_Fields = {
  __typename?: 'quest_log_entry_stddev_pop_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Stddev_Pop_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quest_Log_Entry_Stddev_Samp_Fields = {
  __typename?: 'quest_log_entry_stddev_samp_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Stddev_Samp_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Quest_Log_Entry_Sum_Fields = {
  __typename?: 'quest_log_entry_sum_fields';
  quest_id?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Sum_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** update columns of table "quest_log_entry" */
export enum Quest_Log_Entry_Update_Column {
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
export type Quest_Log_Entry_Var_Pop_Fields = {
  __typename?: 'quest_log_entry_var_pop_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Var_Pop_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quest_Log_Entry_Var_Samp_Fields = {
  __typename?: 'quest_log_entry_var_samp_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Var_Samp_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Quest_Log_Entry_Variance_Fields = {
  __typename?: 'quest_log_entry_variance_fields';
  quest_id?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quest_log_entry" */
export type Quest_Log_Entry_Variance_Order_By = {
  quest_id?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Quest_Max_Fields = {
  __typename?: 'quest_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  giver?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Quest_Min_Fields = {
  __typename?: 'quest_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  giver?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "quest" */
export type Quest_Mutation_Response = {
  __typename?: 'quest_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quest>;
};

/** input type for inserting object relation for remote table "quest" */
export type Quest_Obj_Rel_Insert_Input = {
  data: Quest_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Quest_On_Conflict>;
};

/** on_conflict condition type for table "quest" */
export type Quest_On_Conflict = {
  constraint: Quest_Constraint;
  update_columns?: Array<Quest_Update_Column>;
  where?: InputMaybe<Quest_Bool_Exp>;
};

/** Ordering options when selecting data from "quest". */
export type Quest_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  giver?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  isPublished?: InputMaybe<Order_By>;
  log_entries_aggregate?: InputMaybe<Quest_Log_Entry_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: quest */
export type Quest_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Quest_Prepend_Input = {
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "quest" */
export enum Quest_Select_Column {
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
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "quest" */
export type Quest_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  giver?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageURL?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quest_Stddev_Fields = {
  __typename?: 'quest_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Quest_Stddev_Pop_Fields = {
  __typename?: 'quest_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Quest_Stddev_Samp_Fields = {
  __typename?: 'quest_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Quest_Sum_Fields = {
  __typename?: 'quest_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "quest" */
export enum Quest_Update_Column {
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
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Quest_Var_Pop_Fields = {
  __typename?: 'quest_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Quest_Var_Samp_Fields = {
  __typename?: 'quest_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Quest_Variance_Fields = {
  __typename?: 'quest_variance_fields';
  id?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table: "quest" */
  quest: Array<Quest>;
  /** fetch aggregated fields from the table: "quest" */
  quest_aggregate: Quest_Aggregate;
  /** fetch data from the table: "quest" using primary key columns */
  quest_by_pk?: Maybe<Quest>;
  /** fetch data from the table: "quest_log_entry" */
  quest_log_entry: Array<Quest_Log_Entry>;
  /** fetch aggregated fields from the table: "quest_log_entry" */
  quest_log_entry_aggregate: Quest_Log_Entry_Aggregate;
  /** fetch data from the table: "quest_log_entry" using primary key columns */
  quest_log_entry_by_pk?: Maybe<Quest_Log_Entry>;
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>;
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate;
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>;
};


export type Subscription_RootQuestArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


export type Subscription_RootQuest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Order_By>>;
  where?: InputMaybe<Quest_Bool_Exp>;
};


export type Subscription_RootQuest_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootQuest_Log_EntryArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entry_Order_By>>;
  where?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
};


export type Subscription_RootQuest_Log_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quest_Log_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Quest_Log_Entry_Order_By>>;
  where?: InputMaybe<Quest_Log_Entry_Bool_Exp>;
};


export type Subscription_RootQuest_Log_Entry_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  quest_id: Scalars['Int'];
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

export type QuestWithLogForDetailViewQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type QuestWithLogForDetailViewQuery = { __typename?: 'query_root', quest: Array<{ __typename?: 'quest', title: string, description: string, giver: string, imageURL?: string | null, tags: any, log_entries: Array<{ __typename?: 'quest_log_entry', title: string, body: string, status: Statuses_Enum, step: number, created_at: any, imageURL?: string | null }> }> };

export type QuestsQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestsQuery = { __typename?: 'query_root', quest: Array<{ __typename?: 'quest', title: string, slug?: string | null, description: string, giver: string, imageURL?: string | null, tags: any, created_at: any, updated_at: any }> };

export type QuestBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type QuestBySlugQuery = { __typename?: 'query_root', quest: Array<{ __typename?: 'quest', title: string, description: string, tags: any, imageURL?: string | null, giver: string, created_at: any, updated_at: any }> };


export const QuestWithLogForDetailViewDocument = gql`
    query QuestWithLogForDetailView($slug: String) {
  quest(limit: 1, where: {slug: {_eq: $slug}}) {
    title
    description
    giver
    imageURL
    tags
    log_entries {
      title
      body
      status
      step
      created_at
      imageURL
    }
  }
}
    `;

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
export const QuestsDocument = gql`
    query Quests {
  quest {
    title
    slug
    description
    giver
    imageURL
    tags
    created_at
    updated_at
  }
}
    `;

/**
 * __useQuestsQuery__
 *
 * To run a query within a React component, call `useQuestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuestsQuery(baseOptions?: Apollo.QueryHookOptions<QuestsQuery, QuestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestsQuery, QuestsQueryVariables>(QuestsDocument, options);
      }
export function useQuestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestsQuery, QuestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestsQuery, QuestsQueryVariables>(QuestsDocument, options);
        }
export type QuestsQueryHookResult = ReturnType<typeof useQuestsQuery>;
export type QuestsLazyQueryHookResult = ReturnType<typeof useQuestsLazyQuery>;
export type QuestsQueryResult = Apollo.QueryResult<QuestsQuery, QuestsQueryVariables>;
export const QuestBySlugDocument = gql`
    query QuestBySlug($slug: String) {
  quest(limit: 1, where: {slug: {_eq: $slug}}) {
    title
    description
    tags
    imageURL
    giver
    created_at
    updated_at
  }
}
    `;

/**
 * __useQuestBySlugQuery__
 *
 * To run a query within a React component, call `useQuestBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useQuestBySlugQuery(baseOptions?: Apollo.QueryHookOptions<QuestBySlugQuery, QuestBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestBySlugQuery, QuestBySlugQueryVariables>(QuestBySlugDocument, options);
      }
export function useQuestBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestBySlugQuery, QuestBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestBySlugQuery, QuestBySlugQueryVariables>(QuestBySlugDocument, options);
        }
export type QuestBySlugQueryHookResult = ReturnType<typeof useQuestBySlugQuery>;
export type QuestBySlugLazyQueryHookResult = ReturnType<typeof useQuestBySlugLazyQuery>;
export type QuestBySlugQueryResult = Apollo.QueryResult<QuestBySlugQuery, QuestBySlugQueryVariables>;