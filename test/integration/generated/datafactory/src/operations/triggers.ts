import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Triggers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  TriggerResource,
  TriggersListByFactoryNextOptionalParams,
  TriggersListByFactoryOptionalParams,
  TriggersListByFactoryResponse,
  TriggerFilterParameters,
  TriggersQueryByFactoryOptionalParams,
  TriggersQueryByFactoryResponse,
  TriggersCreateOrUpdateOptionalParams,
  TriggersCreateOrUpdateResponse,
  TriggersGetOptionalParams,
  TriggersGetResponse,
  TriggersDeleteOptionalParams,
  TriggersSubscribeToEventsOptionalParams,
  TriggersSubscribeToEventsResponse,
  TriggersGetEventSubscriptionStatusOptionalParams,
  TriggersGetEventSubscriptionStatusResponse,
  TriggersUnsubscribeFromEventsOptionalParams,
  TriggersUnsubscribeFromEventsResponse,
  TriggersStartOptionalParams,
  TriggersStopOptionalParams,
  TriggersListByFactoryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Triggers operations. */
export class TriggersImpl implements Triggers {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class Triggers class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Lists triggers.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  public listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: TriggersListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<TriggerResource> {
    const iter = this.listByFactoryPagingAll(
      resourceGroupName,
      factoryName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByFactoryPagingPage(
          resourceGroupName,
          factoryName,
          options
        );
      }
    };
  }

  private async *listByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    options?: TriggersListByFactoryOptionalParams
  ): AsyncIterableIterator<TriggerResource[]> {
    let result = await this._listByFactory(
      resourceGroupName,
      factoryName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByFactoryNext(
        resourceGroupName,
        factoryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByFactoryPagingAll(
    resourceGroupName: string,
    factoryName: string,
    options?: TriggersListByFactoryOptionalParams
  ): AsyncIterableIterator<TriggerResource> {
    for await (const page of this.listByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists triggers.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  private _listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: TriggersListByFactoryOptionalParams
  ): Promise<TriggersListByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      listByFactoryOperationSpec
    );
  }

  /**
   * Query triggers.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the triggers.
   * @param options The options parameters.
   */
  queryByFactory(
    resourceGroupName: string,
    factoryName: string,
    filterParameters: TriggerFilterParameters,
    options?: TriggersQueryByFactoryOptionalParams
  ): Promise<TriggersQueryByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, filterParameters, options },
      queryByFactoryOperationSpec
    );
  }

  /**
   * Creates or updates a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    trigger: TriggerResource,
    options?: TriggersCreateOrUpdateOptionalParams
  ): Promise<TriggersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, triggerName, trigger, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersGetOptionalParams
  ): Promise<TriggersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, triggerName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, triggerName, options },
      deleteOperationSpec
    );
  }

  /**
   * Subscribe event trigger to events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginSubscribeToEvents(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersSubscribeToEventsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TriggersSubscribeToEventsResponse>,
      TriggersSubscribeToEventsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TriggersSubscribeToEventsResponse> => {
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
      { resourceGroupName, factoryName, triggerName, options },
      subscribeToEventsOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Subscribe event trigger to events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginSubscribeToEventsAndWait(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersSubscribeToEventsOptionalParams
  ): Promise<TriggersSubscribeToEventsResponse> {
    const poller = await this.beginSubscribeToEvents(
      resourceGroupName,
      factoryName,
      triggerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a trigger's event subscription status.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  getEventSubscriptionStatus(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersGetEventSubscriptionStatusOptionalParams
  ): Promise<TriggersGetEventSubscriptionStatusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, triggerName, options },
      getEventSubscriptionStatusOperationSpec
    );
  }

  /**
   * Unsubscribe event trigger from events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginUnsubscribeFromEvents(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersUnsubscribeFromEventsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TriggersUnsubscribeFromEventsResponse>,
      TriggersUnsubscribeFromEventsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TriggersUnsubscribeFromEventsResponse> => {
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
      { resourceGroupName, factoryName, triggerName, options },
      unsubscribeFromEventsOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Unsubscribe event trigger from events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginUnsubscribeFromEventsAndWait(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersUnsubscribeFromEventsOptionalParams
  ): Promise<TriggersUnsubscribeFromEventsResponse> {
    const poller = await this.beginUnsubscribeFromEvents(
      resourceGroupName,
      factoryName,
      triggerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Starts a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersStartOptionalParams
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
      { resourceGroupName, factoryName, triggerName, options },
      startOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Starts a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(
      resourceGroupName,
      factoryName,
      triggerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Stops a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginStop(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersStopOptionalParams
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
      { resourceGroupName, factoryName, triggerName, options },
      stopOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Stops a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginStopAndWait(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersStopOptionalParams
  ): Promise<void> {
    const poller = await this.beginStop(
      resourceGroupName,
      factoryName,
      triggerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param nextLink The nextLink from the previous successful call to the ListByFactory method.
   * @param options The options parameters.
   */
  private _listByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    nextLink: string,
    options?: TriggersListByFactoryNextOptionalParams
  ): Promise<TriggersListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, nextLink, options },
      listByFactoryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFactoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const queryByFactoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/querytriggers",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.filterParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.trigger,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const subscribeToEventsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/subscribeToEvents",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    201: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    202: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    204: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEventSubscriptionStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/getEventSubscriptionStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const unsubscribeFromEventsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/unsubscribeFromEvents",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    201: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    202: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    204: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};