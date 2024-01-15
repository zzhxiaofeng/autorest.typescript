/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { Primitive } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexWithTracing } from "../bodyComplexWithTracing";
import {
  PrimitiveGetIntOptionalParams,
  PrimitiveGetIntResponse,
  IntWrapper,
  PrimitivePutIntOptionalParams,
  PrimitiveGetLongOptionalParams,
  PrimitiveGetLongResponse,
  LongWrapper,
  PrimitivePutLongOptionalParams,
  PrimitiveGetFloatOptionalParams,
  PrimitiveGetFloatResponse,
  FloatWrapper,
  PrimitivePutFloatOptionalParams,
  PrimitiveGetDoubleOptionalParams,
  PrimitiveGetDoubleResponse,
  DoubleWrapper,
  PrimitivePutDoubleOptionalParams,
  PrimitiveGetBoolOptionalParams,
  PrimitiveGetBoolResponse,
  BooleanWrapper,
  PrimitivePutBoolOptionalParams,
  PrimitiveGetStringOptionalParams,
  PrimitiveGetStringResponse,
  StringWrapper,
  PrimitivePutStringOptionalParams,
  PrimitiveGetDateOptionalParams,
  PrimitiveGetDateResponse,
  DateWrapper,
  PrimitivePutDateOptionalParams,
  PrimitiveGetDateTimeOptionalParams,
  PrimitiveGetDateTimeResponse,
  DatetimeWrapper,
  PrimitivePutDateTimeOptionalParams,
  PrimitiveGetDateTimeRfc1123OptionalParams,
  PrimitiveGetDateTimeRfc1123Response,
  Datetimerfc1123Wrapper,
  PrimitivePutDateTimeRfc1123OptionalParams,
  PrimitiveGetDurationOptionalParams,
  PrimitiveGetDurationResponse,
  DurationWrapper,
  PrimitivePutDurationOptionalParams,
  PrimitiveGetByteOptionalParams,
  PrimitiveGetByteResponse,
  ByteWrapper,
  PrimitivePutByteOptionalParams,
} from "../models";

/** Class containing Primitive operations. */
export class PrimitiveImpl implements Primitive {
  private readonly client: BodyComplexWithTracing;

  /**
   * Initialize a new instance of the class Primitive class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexWithTracing) {
    this.client = client;
  }

  /**
   * Get complex types with integer properties
   * @param options The options parameters.
   */
  async getInt(
    options?: PrimitiveGetIntOptionalParams,
  ): Promise<PrimitiveGetIntResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getInt",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getIntOperationSpec,
        ) as Promise<PrimitiveGetIntResponse>;
      },
    );
  }

  /**
   * Put complex types with integer properties
   * @param complexBody Please put -1 and 2
   * @param options The options parameters.
   */
  async putInt(
    complexBody: IntWrapper,
    options?: PrimitivePutIntOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putInt",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putIntOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with long properties
   * @param options The options parameters.
   */
  async getLong(
    options?: PrimitiveGetLongOptionalParams,
  ): Promise<PrimitiveGetLongResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getLong",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getLongOperationSpec,
        ) as Promise<PrimitiveGetLongResponse>;
      },
    );
  }

  /**
   * Put complex types with long properties
   * @param complexBody Please put 1099511627775 and -999511627788
   * @param options The options parameters.
   */
  async putLong(
    complexBody: LongWrapper,
    options?: PrimitivePutLongOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putLong",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putLongOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with float properties
   * @param options The options parameters.
   */
  async getFloat(
    options?: PrimitiveGetFloatOptionalParams,
  ): Promise<PrimitiveGetFloatResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getFloat",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getFloatOperationSpec,
        ) as Promise<PrimitiveGetFloatResponse>;
      },
    );
  }

  /**
   * Put complex types with float properties
   * @param complexBody Please put 1.05 and -0.003
   * @param options The options parameters.
   */
  async putFloat(
    complexBody: FloatWrapper,
    options?: PrimitivePutFloatOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putFloat",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putFloatOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with double properties
   * @param options The options parameters.
   */
  async getDouble(
    options?: PrimitiveGetDoubleOptionalParams,
  ): Promise<PrimitiveGetDoubleResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getDouble",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getDoubleOperationSpec,
        ) as Promise<PrimitiveGetDoubleResponse>;
      },
    );
  }

  /**
   * Put complex types with double properties
   * @param complexBody Please put 3e-100 and
   *                    -0.000000000000000000000000000000000000000000000000000000005
   * @param options The options parameters.
   */
  async putDouble(
    complexBody: DoubleWrapper,
    options?: PrimitivePutDoubleOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putDouble",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putDoubleOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with bool properties
   * @param options The options parameters.
   */
  async getBool(
    options?: PrimitiveGetBoolOptionalParams,
  ): Promise<PrimitiveGetBoolResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getBool",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getBoolOperationSpec,
        ) as Promise<PrimitiveGetBoolResponse>;
      },
    );
  }

  /**
   * Put complex types with bool properties
   * @param complexBody Please put true and false
   * @param options The options parameters.
   */
  async putBool(
    complexBody: BooleanWrapper,
    options?: PrimitivePutBoolOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putBool",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putBoolOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with string properties
   * @param options The options parameters.
   */
  async getString(
    options?: PrimitiveGetStringOptionalParams,
  ): Promise<PrimitiveGetStringResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getString",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getStringOperationSpec,
        ) as Promise<PrimitiveGetStringResponse>;
      },
    );
  }

  /**
   * Put complex types with string properties
   * @param complexBody Please put 'goodrequest', '', and null
   * @param options The options parameters.
   */
  async putString(
    complexBody: StringWrapper,
    options?: PrimitivePutStringOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putString",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putStringOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with date properties
   * @param options The options parameters.
   */
  async getDate(
    options?: PrimitiveGetDateOptionalParams,
  ): Promise<PrimitiveGetDateResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getDate",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getDateOperationSpec,
        ) as Promise<PrimitiveGetDateResponse>;
      },
    );
  }

  /**
   * Put complex types with date properties
   * @param complexBody Please put '0001-01-01' and '2016-02-29'
   * @param options The options parameters.
   */
  async putDate(
    complexBody: DateWrapper,
    options?: PrimitivePutDateOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putDate",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putDateOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with datetime properties
   * @param options The options parameters.
   */
  async getDateTime(
    options?: PrimitiveGetDateTimeOptionalParams,
  ): Promise<PrimitiveGetDateTimeResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getDateTime",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getDateTimeOperationSpec,
        ) as Promise<PrimitiveGetDateTimeResponse>;
      },
    );
  }

  /**
   * Put complex types with datetime properties
   * @param complexBody Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00'
   * @param options The options parameters.
   */
  async putDateTime(
    complexBody: DatetimeWrapper,
    options?: PrimitivePutDateTimeOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putDateTime",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putDateTimeOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with datetimeRfc1123 properties
   * @param options The options parameters.
   */
  async getDateTimeRfc1123(
    options?: PrimitiveGetDateTimeRfc1123OptionalParams,
  ): Promise<PrimitiveGetDateTimeRfc1123Response> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getDateTimeRfc1123",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getDateTimeRfc1123OperationSpec,
        ) as Promise<PrimitiveGetDateTimeRfc1123Response>;
      },
    );
  }

  /**
   * Put complex types with datetimeRfc1123 properties
   * @param complexBody Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00 GMT'
   * @param options The options parameters.
   */
  async putDateTimeRfc1123(
    complexBody: Datetimerfc1123Wrapper,
    options?: PrimitivePutDateTimeRfc1123OptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putDateTimeRfc1123",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putDateTimeRfc1123OperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with duration properties
   * @param options The options parameters.
   */
  async getDuration(
    options?: PrimitiveGetDurationOptionalParams,
  ): Promise<PrimitiveGetDurationResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getDuration",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getDurationOperationSpec,
        ) as Promise<PrimitiveGetDurationResponse>;
      },
    );
  }

  /**
   * Put complex types with duration properties
   * @param complexBody Please put 'P123DT22H14M12.011S'
   * @param options The options parameters.
   */
  async putDuration(
    complexBody: DurationWrapper,
    options?: PrimitivePutDurationOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putDuration",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putDurationOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with byte properties
   * @param options The options parameters.
   */
  async getByte(
    options?: PrimitiveGetByteOptionalParams,
  ): Promise<PrimitiveGetByteResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getByte",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getByteOperationSpec,
        ) as Promise<PrimitiveGetByteResponse>;
      },
    );
  }

  /**
   * Put complex types with byte properties
   * @param complexBody Please put non-ascii byte string hex(FF FE FD FC 00 FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  async putByte(
    complexBody: ByteWrapper,
    options?: PrimitivePutByteOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putByte",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putByteOperationSpec,
        ) as Promise<void>;
      },
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getIntOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/integer",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putIntOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/integer",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getLongOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/long",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LongWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putLongOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/long",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getFloatOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/float",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FloatWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putFloatOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/float",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/double",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DoubleWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/double",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getBoolOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/bool",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BooleanWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putBoolOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/bool",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody5,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getStringOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/string",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StringWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putStringOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/string",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody6,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDateOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/date",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DateWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putDateOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/date",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody7,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/datetime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatetimeWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/datetime",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody8,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDateTimeRfc1123OperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/datetimerfc1123",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Datetimerfc1123Wrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putDateTimeRfc1123OperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/datetimerfc1123",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody9,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDurationOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/duration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DurationWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putDurationOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/duration",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody10,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getByteOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/byte",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ByteWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putByteOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/byte",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody11,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
