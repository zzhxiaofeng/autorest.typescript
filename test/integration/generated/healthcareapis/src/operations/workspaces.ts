import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Workspaces } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HealthCareApisClient } from "../healthCareApisClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Workspace,
  WorkspacesListBySubscriptionNextOptionalParams,
  WorkspacesListBySubscriptionOptionalParams,
  WorkspacesListByResourceGroupNextOptionalParams,
  WorkspacesListByResourceGroupOptionalParams,
  WorkspacesListBySubscriptionResponse,
  WorkspacesListByResourceGroupResponse,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacePatchResource,
  WorkspacesUpdateOptionalParams,
  WorkspacesUpdateResponse,
  WorkspacesDeleteOptionalParams,
  WorkspacesListBySubscriptionNextResponse,
  WorkspacesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Workspaces operations. */
export class WorkspacesImpl implements Workspaces {
  private readonly client: HealthCareApisClient;

  /**
   * Initialize a new instance of the class Workspaces class.
   * @param client Reference to the service client
   */
  constructor(client: HealthCareApisClient) {
    this.client = client;
  }

  /**
   * Lists all the available workspaces under the specified subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: WorkspacesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Workspace> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: WorkspacesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Workspace[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: WorkspacesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Workspace> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the available workspaces under the specified resource group.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspacesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Workspace> {
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
    options?: WorkspacesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Workspace[]> {
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
    options?: WorkspacesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Workspace> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the available workspaces under the specified subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: WorkspacesListBySubscriptionOptionalParams
  ): Promise<WorkspacesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists all the available workspaces under the specified resource group.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspacesListByResourceGroupOptionalParams
  ): Promise<WorkspacesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets the properties of the specified workspace.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams
  ): Promise<WorkspacesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a workspace resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param workspace The parameters for creating or updating a healthcare workspace.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    workspace: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WorkspacesCreateOrUpdateResponse>,
      WorkspacesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WorkspacesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, workspaceName, workspace, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates a workspace resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param workspace The parameters for creating or updating a healthcare workspace.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    workspace: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<WorkspacesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      workspace,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch workspace details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param workspacePatchResource The parameters for updating a specified workspace.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    workspacePatchResource: WorkspacePatchResource,
    options?: WorkspacesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WorkspacesUpdateResponse>,
      WorkspacesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WorkspacesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, workspaceName, workspacePatchResource, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Patch workspace details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param workspacePatchResource The parameters for updating a specified workspace.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    workspacePatchResource: WorkspacePatchResource,
    options?: WorkspacesUpdateOptionalParams
  ): Promise<WorkspacesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      workspaceName,
      workspacePatchResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a specified workspace.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, workspaceName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a specified workspace.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: WorkspacesListBySubscriptionNextOptionalParams
  ): Promise<WorkspacesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: WorkspacesListByResourceGroupNextOptionalParams
  ): Promise<WorkspacesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/workspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceList
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceList
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace
    },
    201: {
      bodyMapper: Mappers.Workspace
    },
    202: {
      bodyMapper: Mappers.Workspace
    },
    204: {
      bodyMapper: Mappers.Workspace
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.workspace,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace
    },
    201: {
      bodyMapper: Mappers.Workspace
    },
    202: {
      bodyMapper: Mappers.Workspace
    },
    204: {
      bodyMapper: Mappers.Workspace
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.workspacePatchResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceList
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceList
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};