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
  VirtualRouter,
  VirtualRoutersListByResourceGroupNextOptionalParams,
  VirtualRoutersListByResourceGroupOptionalParams,
  VirtualRoutersListNextOptionalParams,
  VirtualRoutersListOptionalParams,
  VirtualRoutersDeleteOptionalParams,
  VirtualRoutersGetOptionalParams,
  VirtualRoutersGetResponse,
  VirtualRoutersCreateOrUpdateOptionalParams,
  VirtualRoutersCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualRouters. */
export interface VirtualRouters {
  /**
   * Lists all Virtual Routers in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: VirtualRoutersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VirtualRouter>;
  /**
   * Gets all the Virtual Routers in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: VirtualRoutersListOptionalParams
  ): PagedAsyncIterableIterator<VirtualRouter>;
  /**
   * Deletes the specified Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: VirtualRoutersDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualRouterName: string,
    options?: VirtualRoutersGetOptionalParams
  ): Promise<VirtualRoutersGetResponse>;
  /**
   * Creates or updates the specified Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param parameters Parameters supplied to the create or update Virtual Router.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    virtualRouterName: string,
    parameters: VirtualRouter,
    options?: VirtualRoutersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualRoutersCreateOrUpdateResponse>,
      VirtualRoutersCreateOrUpdateResponse
    >
  >;
}
