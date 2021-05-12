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
  ExpressRouteCircuitConnection,
  ExpressRouteCircuitConnectionsListNextOptionalParams,
  ExpressRouteCircuitConnectionsListOptionalParams,
  ExpressRouteCircuitConnectionsDeleteOptionalParams,
  ExpressRouteCircuitConnectionsGetOptionalParams,
  ExpressRouteCircuitConnectionsGetResponse,
  ExpressRouteCircuitConnectionsCreateOrUpdateOptionalParams,
  ExpressRouteCircuitConnectionsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExpressRouteCircuitConnections. */
export interface ExpressRouteCircuitConnections {
  /**
   * Gets all global reach connections associated with a private peering in an express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the circuit.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    options?: ExpressRouteCircuitConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<ExpressRouteCircuitConnection>;
  /**
   * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    connectionName: string,
    options?: ExpressRouteCircuitConnectionsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified Express Route Circuit Connection from the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    connectionName: string,
    options?: ExpressRouteCircuitConnectionsGetOptionalParams
  ): Promise<ExpressRouteCircuitConnectionsGetResponse>;
  /**
   * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param expressRouteCircuitConnectionParameters Parameters supplied to the create or update express
   *                                                route circuit connection operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    connectionName: string,
    expressRouteCircuitConnectionParameters: ExpressRouteCircuitConnection,
    options?: ExpressRouteCircuitConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ExpressRouteCircuitConnectionsCreateOrUpdateResponse>,
      ExpressRouteCircuitConnectionsCreateOrUpdateResponse
    >
  >;
}
