/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

/** Uri or local path to source data. */
export interface SourcePath {
  /** File source path. */
  source?: string;
}

/** Defines values for ContentType. */
export type ContentType =
  | "application/pdf"
  | "image/jpeg"
  | "image/png"
  | "image/tiff";

/** Optional parameters. */
export interface MediaTypesClientAnalyzeBody$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Input parameter. */
  input?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface MediaTypesClientAnalyzeBody$jsonOptionalParams
  extends coreClient.OperationOptions {
  /** Input parameter. */
  input?: SourcePath;
}

/** Contains response data for the analyzeBody operation. */
export type MediaTypesClientAnalyzeBodyResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface MediaTypesClientContentTypeWithEncodingOptionalParams
  extends coreClient.OperationOptions {
  /** Input parameter. */
  input?: string;
}

/** Contains response data for the contentTypeWithEncoding operation. */
export type MediaTypesClientContentTypeWithEncodingResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface MediaTypesClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}