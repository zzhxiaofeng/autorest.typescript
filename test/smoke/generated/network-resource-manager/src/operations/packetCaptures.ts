/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  PacketCapture,
  PacketCapturesCreateResponse,
  PacketCapturesGetResponse,
  PacketCapturesGetStatusResponse,
  PacketCapturesListResponse
} from "../models";

/**
 * Class representing a PacketCaptures.
 */
export class PacketCaptures {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class PacketCaptures class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Create and start a packet capture on the specified VM.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param parameters Parameters that define the create packet capture operation.
   * @param options The options parameters.
   */
  async create(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    parameters: PacketCapture,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<PacketCapturesCreateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        PacketCapturesCreateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Gets a packet capture session by name.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PacketCapturesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        packetCaptureName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<PacketCapturesGetResponse>;
  }

  /**
   * Deletes the specified packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Stops a specified packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param options The options parameters.
   */
  async stop(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(args, stopOperationSpec);

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: stopOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Query the status of a running packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param packetCaptureName The name given to the packet capture session.
   * @param options The options parameters.
   */
  async getStatus(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<PacketCapturesGetStatusResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        PacketCapturesGetStatusResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getStatusOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getStatusOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Lists all packet capture sessions within the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PacketCapturesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, networkWatcherName, options: operationOptions },
      listOperationSpec
    ) as Promise<PacketCapturesListResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    201: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    202: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    204: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getStatusOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}/queryStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    201: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    202: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    204: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCaptureListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
