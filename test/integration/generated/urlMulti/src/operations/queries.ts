/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Queries } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { UrlMultiClientContext } from "../urlMultiClientContext";
import {
  QueriesArrayStringMultiNullOptionalParams,
  QueriesArrayStringMultiEmptyOptionalParams,
  QueriesArrayStringMultiValidOptionalParams
} from "../models";

/** Class representing a Queries. */
export class QueriesImpl implements Queries {
  private readonly client: UrlMultiClientContext;

  /**
   * Initialize a new instance of the class Queries class.
   * @param client Reference to the service client
   */
  constructor(client: UrlMultiClientContext) {
    this.client = client;
  }

  /**
   * Get a null array of string using the multi-array format
   * @param options The options parameters.
   */
  arrayStringMultiNull(
    options?: QueriesArrayStringMultiNullOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      arrayStringMultiNullOperationSpec
    );
  }

  /**
   * Get an empty array [] of string using the multi-array format
   * @param options The options parameters.
   */
  arrayStringMultiEmpty(
    options?: QueriesArrayStringMultiEmptyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      arrayStringMultiEmptyOperationSpec
    );
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * mult-array format
   * @param options The options parameters.
   */
  arrayStringMultiValid(
    options?: QueriesArrayStringMultiValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      arrayStringMultiValidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const arrayStringMultiNullOperationSpec: coreClient.OperationSpec = {
  path: "/queries/array/multi/string/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const arrayStringMultiEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/queries/array/multi/string/empty",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const arrayStringMultiValidOperationSpec: coreClient.OperationSpec = {
  path: "/queries/array/multi/string/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};