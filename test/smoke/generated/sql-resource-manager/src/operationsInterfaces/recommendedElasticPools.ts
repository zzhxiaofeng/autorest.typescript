/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RecommendedElasticPool,
  RecommendedElasticPoolsListByServerOptionalParams,
  RecommendedElasticPoolMetric,
  RecommendedElasticPoolsListMetricsOptionalParams,
  RecommendedElasticPoolsGetOptionalParams,
  RecommendedElasticPoolsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RecommendedElasticPools. */
export interface RecommendedElasticPools {
  /**
   * Returns recommended elastic pools.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: RecommendedElasticPoolsListByServerOptionalParams
  ): PagedAsyncIterableIterator<RecommendedElasticPool>;
  /**
   * Returns recommended elastic pool metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    serverName: string,
    recommendedElasticPoolName: string,
    options?: RecommendedElasticPoolsListMetricsOptionalParams
  ): PagedAsyncIterableIterator<RecommendedElasticPoolMetric>;
  /**
   * Gets a recommended elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    recommendedElasticPoolName: string,
    options?: RecommendedElasticPoolsGetOptionalParams
  ): Promise<RecommendedElasticPoolsGetResponse>;
}