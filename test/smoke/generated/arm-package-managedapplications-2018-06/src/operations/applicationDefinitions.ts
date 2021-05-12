/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApplicationDefinitions } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApplicationClientContext } from "../applicationClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ApplicationDefinition,
  ApplicationDefinitionsListByResourceGroupNextOptionalParams,
  ApplicationDefinitionsListByResourceGroupOptionalParams,
  ApplicationDefinitionsGetOptionalParams,
  ApplicationDefinitionsGetResponse,
  ApplicationDefinitionsDeleteOptionalParams,
  ApplicationDefinitionsCreateOrUpdateOptionalParams,
  ApplicationDefinitionsCreateOrUpdateResponse,
  ApplicationDefinitionsListByResourceGroupResponse,
  ApplicationDefinitionsGetByIdOptionalParams,
  ApplicationDefinitionsGetByIdResponse,
  ApplicationDefinitionsDeleteByIdOptionalParams,
  ApplicationDefinitionsCreateOrUpdateByIdOptionalParams,
  ApplicationDefinitionsCreateOrUpdateByIdResponse,
  ApplicationDefinitionsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ApplicationDefinitions. */
export class ApplicationDefinitionsImpl implements ApplicationDefinitions {
  private readonly client: ApplicationClientContext;

  /**
   * Initialize a new instance of the class ApplicationDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationClientContext) {
    this.client = client;
  }

  /**
   * Lists the managed application definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ApplicationDefinition> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ApplicationDefinition[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ApplicationDefinition> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsGetOptionalParams
  ): Promise<ApplicationDefinitionsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationDefinitionName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ApplicationDefinitionsGetResponse>;
  }

  /**
   * Deletes the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition to delete.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationDefinitionName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Creates a new managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the create or update an managed application definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApplicationDefinitionsCreateOrUpdateResponse>,
      ApplicationDefinitionsCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationDefinitionName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ApplicationDefinitionsCreateOrUpdateResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Lists the managed application definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): Promise<ApplicationDefinitionsListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<ApplicationDefinitionsListByResourceGroupResponse>;
  }

  /**
   * Gets the managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param options The options parameters.
   */
  getById(
    applicationDefinitionId: string,
    options?: ApplicationDefinitionsGetByIdOptionalParams
  ): Promise<ApplicationDefinitionsGetByIdResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      applicationDefinitionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getByIdOperationSpec
    ) as Promise<ApplicationDefinitionsGetByIdResponse>;
  }

  /**
   * Deletes the managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param options The options parameters.
   */
  async beginDeleteById(
    applicationDefinitionId: string,
    options?: ApplicationDefinitionsDeleteByIdOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      applicationDefinitionId,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      deleteByIdOperationSpec,
      sendOperation
    );
  }

  /**
   * Creates a new managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param parameters Parameters supplied to the create or update a managed application definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateById(
    applicationDefinitionId: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApplicationDefinitionsCreateOrUpdateByIdResponse>,
      ApplicationDefinitionsCreateOrUpdateByIdResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      applicationDefinitionId,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ApplicationDefinitionsCreateOrUpdateByIdResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      createOrUpdateByIdOperationSpec,
      sendOperation
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ApplicationDefinitionsListByResourceGroupNextOptionalParams
  ): Promise<ApplicationDefinitionsListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<ApplicationDefinitionsListByResourceGroupNextResponse>;
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

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.applicationDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
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
    Parameters.applicationDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    201: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    202: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    204: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.applicationDefinitionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{applicationDefinitionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationDefinitionId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{applicationDefinitionId}",
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
  urlParameters: [Parameters.$host, Parameters.applicationDefinitionId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{applicationDefinitionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    201: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    202: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    204: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationDefinitionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinitionListResult
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
