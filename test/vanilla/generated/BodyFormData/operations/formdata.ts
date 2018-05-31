/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Mappers from "../models/mappers";
import { AutoRestSwaggerBATFormDataService } from "../autoRestSwaggerBATFormDataService";

const WebResource = msRest.WebResource;

/** Class representing a Formdata. */
export class Formdata {
  private readonly client: AutoRestSwaggerBATFormDataService;
  /**
   * Create a Formdata.
   * @param {AutoRestSwaggerBATFormDataService} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATFormDataService) {
    this.client = client;
  }

  /**
   * Upload file
   *
   * @param {msRest.HttpRequestBody} fileContent File to upload.
   *
   * @param {string} fileName File name to upload. Name has to be spelled exactly
   * as written here.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async uploadFileWithHttpOperationResponse(fileContent: msRest.HttpRequestBody, fileName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (fileContent === null || fileContent === undefined) {
        throw new Error('fileContent cannot be null or undefined and it must be of type msrest.httprequestbody.');
      }
      if (fileName === null || fileName === undefined || typeof fileName.valueOf() !== 'string') {
        throw new Error('fileName cannot be null or undefined and it must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.rawResponse = true;
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          fileContent,
          fileName
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest
        ,operationArgument
        s,{
          httpMethod: "POST",
          baseUrl: this.client.baseUri,
          path: "formdata/stream/uploadfile",
          formDataParameters: [
            {
              parameterName: "fileContent",
              mapper: {
                required: true,
                serializedName: "fileContent",
                type: {
                  name: "Stream"
                }
              }
            },
            {
              parameterName: "fileName",
              mapper: {
                required: true,
                serializedName: "fileName",
                type: {
                  name: "String"
                }
              }
            }
          ],
          contentType: "multipart/form-data"
        });
      let statusCode = operationRes.status;

      if (statusCode !== 200) {
        let error = new msRest.RestError(`Unexpected status code: ${statusCode}`);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }

    } catch(error) {
      return Promise.reject(error);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Upload file
   *
   * @param {msRest.HttpRequestBody} fileContent File to upload.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async uploadFileViaBodyWithHttpOperationResponse(fileContent: msRest.HttpRequestBody, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (fileContent === null || fileContent === undefined) {
        throw new Error('fileContent cannot be null or undefined and it must be of type msrest.httprequestbody.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.rawResponse = true;
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          fileContent
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest
        ,operationArgument
        s,{
          httpMethod: "PUT",
          baseUrl: this.client.baseUri,
          path: "formdata/stream/uploadfile",
          requestBodyMapper: {
            required: true,
            serializedName: "fileContent",
            type: {
              name: "Stream"
            }
          },
          requestBodyName: "fileContent",
          contentType: "application/octet-stream"
        });
      let statusCode = operationRes.status;

      if (statusCode !== 200) {
        let error = new msRest.RestError(`Unexpected status code: ${statusCode}`);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }

    } catch(error) {
      return Promise.reject(error);
    }

    return Promise.resolve(operationRes);
  }

}
