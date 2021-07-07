/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Formdata } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyFormDataClientContext } from "../bodyFormDataClientContext";
import {
  FormdataUploadFileOptionalParams,
  FormdataUploadFileResponse,
  FormdataUploadFileViaBodyOptionalParams,
  FormdataUploadFileViaBodyResponse,
  FormdataUploadFilesOptionalParams,
  FormdataUploadFilesResponse
} from "../models";

/** Class representing a Formdata. */
export class FormdataImpl implements Formdata {
  private readonly client: BodyFormDataClientContext;

  /**
   * Initialize a new instance of the class Formdata class.
   * @param client Reference to the service client
   */
  constructor(client: BodyFormDataClientContext) {
    this.client = client;
  }

  /**
   * Upload file
   * @param fileContent File to upload.
   * @param fileName File name to upload. Name has to be spelled exactly as written here.
   * @param options The options parameters.
   */
  uploadFile(
    fileContent: coreRestPipeline.RequestBodyType,
    fileName: string,
    options?: FormdataUploadFileOptionalParams
  ): Promise<FormdataUploadFileResponse> {
    return this.client.sendOperationRequest(
      { fileContent, fileName, options },
      uploadFileOperationSpec
    );
  }

  /**
   * Upload file
   * @param fileContent File to upload.
   * @param options The options parameters.
   */
  uploadFileViaBody(
    fileContent: coreRestPipeline.RequestBodyType,
    options?: FormdataUploadFileViaBodyOptionalParams
  ): Promise<FormdataUploadFileViaBodyResponse> {
    return this.client.sendOperationRequest(
      { fileContent, options },
      uploadFileViaBodyOperationSpec
    );
  }

  /**
   * Upload multiple files
   * @param fileContent Files to upload.
   * @param options The options parameters.
   */
  uploadFiles(
    fileContent: coreRestPipeline.RequestBodyType[],
    options?: FormdataUploadFilesOptionalParams
  ): Promise<FormdataUploadFilesResponse> {
    return this.client.sendOperationRequest(
      { fileContent, options },
      uploadFilesOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const uploadFileOperationSpec: coreClient.OperationSpec = {
  path: "/formdata/stream/uploadfile",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  formDataParameters: [Parameters.fileContent, Parameters.fileName],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  serializer
};
const uploadFileViaBodyOperationSpec: coreClient.OperationSpec = {
  path: "/formdata/stream/uploadfile",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.fileContent1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "binary",
  serializer
};
const uploadFilesOperationSpec: coreClient.OperationSpec = {
  path: "/formdata/stream/uploadfiles",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  formDataParameters: [Parameters.fileContent2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  serializer
};