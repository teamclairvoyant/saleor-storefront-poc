// THIS FILE IS GENERATED WITH `pnpm generate`
import "graphql/language/ast";
import * as Scalar from "../scalars";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from "@apollo/client/cache";
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
};

/**  The Root Mutation for the application */
export type Mutation = {
  __typename?: "Mutation";
  /**     createPost(post: Post) : Post! */
  createPhiData: PhiData;
  updatePhiData: PhiData;
};

/**  The Root Mutation for the application */
export type MutationCreatePhiDataArgs = {
  phiData?: InputMaybe<PhiData>;
};

/**  The Root Mutation for the application */
export type MutationUpdatePhiDataArgs = {
  id: Scalars["ID"];
  phiData: PhiData;
};

/**
 * type Author {
 *     id: ID!
 *     name: String!
 *     thumbnail: String
 * }
 */
export type PhiData = {
  __typename?: "PHIData";
  allergies: Scalars["Boolean"];
  email: Scalars["String"];
  healthCondition: Scalars["Boolean"];
  id: Scalars["ID"];
  takingMedication: Scalars["Boolean"];
};

export type PhiData = {
  allergies: Scalars["Boolean"];
  email: Scalars["String"];
  healthCondition: Scalars["Boolean"];
  takingMedication: Scalars["Boolean"];
};

/**  The Root Query for the application */
export type Query = {
  __typename?: "Query";
  /**
   *     posts:[Post]
   *     post: Post
   */
  getPhi?: Maybe<Array<Maybe<PhiData>>>;
  getPhiByEmail?: Maybe<PhiData>;
  getPhiById?: Maybe<PhiData>;
};

/**  The Root Query for the application */
export type QueryGetPhiByEmailArgs = {
  email?: InputMaybe<Scalars["String"]>;
};

/**  The Root Query for the application */
export type QueryGetPhiByIdArgs = {
  id: Scalars["ID"];
};

export type AddHealthDataMutationVariables = Exact<{
  email: Scalars["String"];
  allergies: Scalars["Boolean"];
  healthCondition: Scalars["Boolean"];
  takingMedication: Scalars["Boolean"];
}>;

export type AddHealthDataMutation = {
  __typename?: "Mutation";
  createPhiData: {
    __typename?: "PHIData";
    id: string;
    allergies: boolean;
    healthCondition: boolean;
    takingMedication: boolean;
    email: string;
  };
};

export type GetPhiQueryVariables = Exact<{ [key: string]: never }>;

export type GetPhiQuery = {
  __typename?: "Query";
  getPhi?: Array<{
    __typename?: "PHIData";
    id: string;
    email: string;
    allergies: boolean;
    healthCondition: boolean;
    takingMedication: boolean;
  } | null> | null;
};

export const AddHealthDataDocument = gql`
  mutation AddHealthData(
    $email: String!
    $allergies: Boolean!
    $healthCondition: Boolean!
    $takingMedication: Boolean!
  ) {
    createPhiData(
      phiData: {
        email: $email
        allergies: $allergies
        healthCondition: $healthCondition
        takingMedication: $takingMedication
      }
    ) {
      id
      allergies
      healthCondition
      takingMedication
      email
    }
  }
`;
export type AddHealthDataMutationFn = Apollo.MutationFunction<
  AddHealthDataMutation,
  AddHealthDataMutationVariables
>;

/**
 * __useAddHealthDataMutation__
 *
 * To run a mutation, you first call `useAddHealthDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddHealthDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addHealthDataMutation, { data, loading, error }] = useAddHealthDataMutation({
 *   variables: {
 *      email: // value for 'email'
 *      allergies: // value for 'allergies'
 *      healthCondition: // value for 'healthCondition'
 *      takingMedication: // value for 'takingMedication'
 *   },
 * });
 */
export function useAddHealthDataMutation(
  baseOptions?: Apollo.MutationHookOptions<AddHealthDataMutation, AddHealthDataMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddHealthDataMutation, AddHealthDataMutationVariables>(
    AddHealthDataDocument,
    options
  );
}
export type AddHealthDataMutationHookResult = ReturnType<typeof useAddHealthDataMutation>;
export type AddHealthDataMutationResult = Apollo.MutationResult<AddHealthDataMutation>;
export type AddHealthDataMutationOptions = Apollo.BaseMutationOptions<
  AddHealthDataMutation,
  AddHealthDataMutationVariables
>;
export const GetPhiDocument = gql`
  query getPhi {
    getPhi {
      id
      email
      allergies
      healthCondition
      takingMedication
    }
  }
`;

/**
 * __useGetPhiQuery__
 *
 * To run a query within a React component, call `useGetPhiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhiQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPhiQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPhiQuery, GetPhiQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPhiQuery, GetPhiQueryVariables>(GetPhiDocument, options);
}
export function useGetPhiLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPhiQuery, GetPhiQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPhiQuery, GetPhiQueryVariables>(GetPhiDocument, options);
}
export type GetPhiQueryHookResult = ReturnType<typeof useGetPhiQuery>;
export type GetPhiLazyQueryHookResult = ReturnType<typeof useGetPhiLazyQuery>;
export type GetPhiQueryResult = Apollo.QueryResult<GetPhiQuery, GetPhiQueryVariables>;
export type MutationKeySpecifier = ("createPhiData" | "updatePhiData" | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
  createPhiData?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePhiData?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PHIDataKeySpecifier = (
  | "allergies"
  | "email"
  | "healthCondition"
  | "id"
  | "takingMedication"
  | PHIDataKeySpecifier
)[];
export type PHIDataFieldPolicy = {
  allergies?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  healthCondition?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  takingMedication?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = ("getPhi" | "getPhiByEmail" | "getPhiById" | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  getPhi?: FieldPolicy<any> | FieldReadFunction<any>;
  getPhiByEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  getPhiById?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  PHIData?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | PHIDataKeySpecifier | (() => undefined | PHIDataKeySpecifier);
    fields?: PHIDataFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
