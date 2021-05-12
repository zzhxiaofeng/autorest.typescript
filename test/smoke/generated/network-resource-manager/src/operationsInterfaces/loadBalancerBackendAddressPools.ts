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
  BackendAddressPool,
  LoadBalancerBackendAddressPoolsListNextOptionalParams,
  LoadBalancerBackendAddressPoolsListOptionalParams,
  LoadBalancerBackendAddressPoolsGetOptionalParams,
  LoadBalancerBackendAddressPoolsGetResponse,
  LoadBalancerBackendAddressPoolsCreateOrUpdateOptionalParams,
  LoadBalancerBackendAddressPoolsCreateOrUpdateResponse,
  LoadBalancerBackendAddressPoolsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LoadBalancerBackendAddressPools. */
export interface LoadBalancerBackendAddressPools {
  /**
   * Gets all the load balancer backed address pools.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancerBackendAddressPoolsListOptionalParams
  ): PagedAsyncIterableIterator<BackendAddressPool>;
  /**
   * Gets load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    options?: LoadBalancerBackendAddressPoolsGetOptionalParams
  ): Promise<LoadBalancerBackendAddressPoolsGetResponse>;
  /**
   * Creates or updates a load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param parameters Parameters supplied to the create or update load balancer backend address pool
   *                   operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    parameters: BackendAddressPool,
    options?: LoadBalancerBackendAddressPoolsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LoadBalancerBackendAddressPoolsCreateOrUpdateResponse>,
      LoadBalancerBackendAddressPoolsCreateOrUpdateResponse
    >
  >;
  /**
   * Deletes the specified load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    options?: LoadBalancerBackendAddressPoolsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
}
