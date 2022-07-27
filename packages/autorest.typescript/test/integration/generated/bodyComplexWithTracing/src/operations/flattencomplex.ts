/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { Flattencomplex } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexWithTracing } from "../bodyComplexWithTracing";
import {
  FlattencomplexGetValidOptionalParams,
  FlattencomplexGetValidResponse
} from "../models";

/** Class containing Flattencomplex operations. */
export class FlattencomplexImpl implements Flattencomplex {
  private readonly client: BodyComplexWithTracing;

  /**
   * Initialize a new instance of the class Flattencomplex class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexWithTracing) {
    this.client = client;
  }

  /** @param options The options parameters. */
  async getValid(
    options?: FlattencomplexGetValidOptionalParams
  ): Promise<FlattencomplexGetValidResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getValid",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getValidOperationSpec
        ) as Promise<FlattencomplexGetValidResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/flatten/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyBaseType
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};