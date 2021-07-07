/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/** Parameter group */
export interface ParameterGroupingPostRequiredParameters {
  customHeader?: string;
  /** Query parameter with default */
  query?: number;
  /** Path parameter */
  path: string;
  body: number;
}

/** Parameter group */
export interface ParameterGroupingPostOptionalParameters {
  customHeader?: string;
  /** Query parameter with default */
  query?: number;
}

/** Parameter group */
export interface FirstParameterGroup {
  headerOne?: string;
  /** Query parameter with default */
  queryOne?: number;
}

/** Parameter group */
export interface ParameterGroupingPostMultiParamGroupsSecondParamGroup {
  headerTwo?: string;
  /** Query parameter with default */
  queryTwo?: number;
}

/** Optional parameters. */
export interface ParameterGroupingPostRequiredOptionalParams
  extends coreClient.OperationOptions {
  customHeader?: string;
  /** Query parameter with default */
  query?: number;
}

/** Optional parameters. */
export interface ParameterGroupingPostOptionalOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  parameterGroupingPostOptionalParameters?: ParameterGroupingPostOptionalParameters;
}

/** Optional parameters. */
export interface ParameterGroupingPostMultiParamGroupsOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  firstParameterGroup?: FirstParameterGroup;
  /** Parameter group */
  parameterGroupingPostMultiParamGroupsSecondParamGroup?: ParameterGroupingPostMultiParamGroupsSecondParamGroup;
}

/** Optional parameters. */
export interface ParameterGroupingPostSharedParameterGroupObjectOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  firstParameterGroup?: FirstParameterGroup;
}

/** Optional parameters. */
export interface AzureParameterGroupingClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}