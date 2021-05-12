/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  BackupShortTermRetentionPolicy,
  BackupShortTermRetentionPoliciesListByDatabaseNextOptionalParams,
  BackupShortTermRetentionPoliciesListByDatabaseOptionalParams,
  ShortTermRetentionPolicyName,
  BackupShortTermRetentionPoliciesGetOptionalParams,
  BackupShortTermRetentionPoliciesGetResponse,
  BackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams,
  BackupShortTermRetentionPoliciesCreateOrUpdateResponse,
  BackupShortTermRetentionPoliciesUpdateOptionalParams,
  BackupShortTermRetentionPoliciesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BackupShortTermRetentionPolicies. */
export interface BackupShortTermRetentionPolicies {
  /**
   * Gets a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: BackupShortTermRetentionPoliciesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<BackupShortTermRetentionPolicy>;
  /**
   * Gets a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be "default".
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    policyName: ShortTermRetentionPolicyName,
    options?: BackupShortTermRetentionPoliciesGetOptionalParams
  ): Promise<BackupShortTermRetentionPoliciesGetResponse>;
  /**
   * Updates a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be "default".
   * @param parameters The short term retention policy info.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    policyName: ShortTermRetentionPolicyName,
    parameters: BackupShortTermRetentionPolicy,
    options?: BackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        BackupShortTermRetentionPoliciesCreateOrUpdateResponse
      >,
      BackupShortTermRetentionPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Updates a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be "default".
   * @param parameters The short term retention policy info.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    policyName: ShortTermRetentionPolicyName,
    parameters: BackupShortTermRetentionPolicy,
    options?: BackupShortTermRetentionPoliciesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupShortTermRetentionPoliciesUpdateResponse>,
      BackupShortTermRetentionPoliciesUpdateResponse
    >
  >;
}
