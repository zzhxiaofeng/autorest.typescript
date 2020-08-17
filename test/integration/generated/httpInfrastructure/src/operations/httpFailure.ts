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
import { HttpInfrastructureClient } from "../httpInfrastructureClient";
import {
  HttpFailureGetEmptyErrorResponse,
  HttpFailureGetNoModelErrorResponse,
  HttpFailureGetNoModelEmptyResponse
} from "../models";

/**
 * Class representing a HttpFailure.
 */
export class HttpFailure {
  private readonly client: HttpInfrastructureClient;

  /**
   * Initialize a new instance of the class HttpFailure class.
   * @param client Reference to the service client
   */
  constructor(client: HttpInfrastructureClient) {
    this.client = client;
  }

  /**
   * Get empty error form server
   * @param options The options parameters.
   */
  getEmptyError(
    options?: coreHttp.OperationOptions
  ): Promise<HttpFailureGetEmptyErrorResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getEmptyErrorOperationSpec
    ) as Promise<HttpFailureGetEmptyErrorResponse>;
  }

  /**
   * Get empty error form server
   * @param options The options parameters.
   */
  getNoModelError(
    options?: coreHttp.OperationOptions
  ): Promise<HttpFailureGetNoModelErrorResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNoModelErrorOperationSpec
    ) as Promise<HttpFailureGetNoModelErrorResponse>;
  }

  /**
   * Get empty response from server
   * @param options The options parameters.
   */
  getNoModelEmpty(
    options?: coreHttp.OperationOptions
  ): Promise<HttpFailureGetNoModelEmptyResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNoModelEmptyOperationSpec
    ) as Promise<HttpFailureGetNoModelEmptyResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getEmptyErrorOperationSpec: coreHttp.OperationSpec = {
  path: "/http/failure/emptybody/error",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNoModelErrorOperationSpec: coreHttp.OperationSpec = {
  path: "/http/failure/nomodel/error",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNoModelEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/http/failure/nomodel/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
