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
import { PagingClient } from "../pagingClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  PagingGetNoItemNamePagesResponse,
  PagingGetNullNextLinkNamePagesResponse,
  PagingGetSinglePagesResponse,
  PagingGetMultiplePagesOptionalParams,
  PagingGetMultiplePagesResponse,
  PagingGetWithQueryParamsResponse,
  PagingNextOperationWithQueryParamsResponse,
  PagingGetOdataMultiplePagesOptionalParams,
  PagingGetOdataMultiplePagesResponse,
  PagingGetMultiplePagesWithOffsetOptions,
  PagingGetMultiplePagesWithOffsetOptionalParams,
  PagingGetMultiplePagesWithOffsetResponse,
  PagingGetMultiplePagesRetryFirstResponse,
  PagingGetMultiplePagesRetrySecondResponse,
  PagingGetSinglePagesFailureResponse,
  PagingGetMultiplePagesFailureResponse,
  PagingGetMultiplePagesFailureUriResponse,
  PagingGetMultiplePagesFragmentNextLinkResponse,
  CustomParameterGroup,
  PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse,
  PagingGetMultiplePagesLROOptionalParams,
  PagingGetMultiplePagesLROResponse,
  PagingNextFragmentResponse,
  PagingNextFragmentWithGroupingResponse,
  PagingGetPagingModelWithItemNameWithXMSClientNameResponse,
  PagingGetNoItemNamePagesNextResponse,
  PagingGetSinglePagesNextResponse,
  PagingGetMultiplePagesNextOptionalParams,
  PagingGetMultiplePagesNextResponse,
  PagingGetOdataMultiplePagesNextOptionalParams,
  PagingGetOdataMultiplePagesNextResponse,
  PagingGetMultiplePagesWithOffsetNextOptionalParams,
  PagingGetMultiplePagesWithOffsetNextResponse,
  PagingGetMultiplePagesRetryFirstNextResponse,
  PagingGetMultiplePagesRetrySecondNextResponse,
  PagingGetSinglePagesFailureNextResponse,
  PagingGetMultiplePagesFailureNextResponse,
  PagingGetMultiplePagesFailureUriNextResponse,
  PagingGetMultiplePagesLRONextOptionalParams,
  PagingGetMultiplePagesLRONextResponse,
  PagingGetPagingModelWithItemNameWithXMSClientNameNextResponse
} from "../models";

/**
 * Class representing a Paging.
 */
export class Paging {
  private readonly client: PagingClient;

  /**
   * Initialize a new instance of the class Paging class.
   * @param client Reference to the service client
   */
  constructor(client: PagingClient) {
    this.client = client;
  }

  /**
   * A paging operation that must return result of the default 'value' node.
   * @param options The options parameters.
   */
  getNoItemNamePages(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetNoItemNamePagesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNoItemNamePagesOperationSpec
    ) as Promise<PagingGetNoItemNamePagesResponse>;
  }

  /**
   * A paging operation that must ignore any kind of nextLink, and stop after page 1.
   * @param options The options parameters.
   */
  getNullNextLinkNamePages(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetNullNextLinkNamePagesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNullNextLinkNamePagesOperationSpec
    ) as Promise<PagingGetNullNextLinkNamePagesResponse>;
  }

  /**
   * A paging operation that finishes on the first call without a nextlink
   * @param options The options parameters.
   */
  getSinglePages(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetSinglePagesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getSinglePagesOperationSpec
    ) as Promise<PagingGetSinglePagesResponse>;
  }

  /**
   * A paging operation that includes a nextLink that has 10 pages
   * @param options The options parameters.
   */
  getMultiplePages(
    options?: PagingGetMultiplePagesOptionalParams
  ): Promise<PagingGetMultiplePagesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getMultiplePagesOperationSpec
    ) as Promise<PagingGetMultiplePagesResponse>;
  }

  /**
   * A paging operation that includes a next operation. It has a different query parameter from it's next
   * operation nextOperationWithQueryParams. Returns a ProductResult
   * @param requiredQueryParameter A required integer query parameter. Put in value '100' to pass test.
   * @param options The options parameters.
   */
  getWithQueryParams(
    requiredQueryParameter: number,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetWithQueryParamsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { requiredQueryParameter, options: operationOptions },
      getWithQueryParamsOperationSpec
    ) as Promise<PagingGetWithQueryParamsResponse>;
  }

  /**
   * Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult
   * @param options The options parameters.
   */
  nextOperationWithQueryParams(
    options?: coreHttp.OperationOptions
  ): Promise<PagingNextOperationWithQueryParamsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      nextOperationWithQueryParamsOperationSpec
    ) as Promise<PagingNextOperationWithQueryParamsResponse>;
  }

  /**
   * A paging operation that includes a nextLink in odata format that has 10 pages
   * @param options The options parameters.
   */
  getOdataMultiplePages(
    options?: PagingGetOdataMultiplePagesOptionalParams
  ): Promise<PagingGetOdataMultiplePagesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getOdataMultiplePagesOperationSpec
    ) as Promise<PagingGetOdataMultiplePagesResponse>;
  }

  /**
   * A paging operation that includes a nextLink that has 10 pages
   * @param pagingGetMultiplePagesWithOffsetOptions Parameter group
   * @param options The options parameters.
   */
  getMultiplePagesWithOffset(
    pagingGetMultiplePagesWithOffsetOptions: PagingGetMultiplePagesWithOffsetOptions,
    options?: PagingGetMultiplePagesWithOffsetOptionalParams
  ): Promise<PagingGetMultiplePagesWithOffsetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { pagingGetMultiplePagesWithOffsetOptions, options: operationOptions },
      getMultiplePagesWithOffsetOperationSpec
    ) as Promise<PagingGetMultiplePagesWithOffsetResponse>;
  }

  /**
   * A paging operation that fails on the first call with 500 and then retries and then get a response
   * including a nextLink that has 10 pages
   * @param options The options parameters.
   */
  getMultiplePagesRetryFirst(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesRetryFirstResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getMultiplePagesRetryFirstOperationSpec
    ) as Promise<PagingGetMultiplePagesRetryFirstResponse>;
  }

  /**
   * A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first
   * with 500. The client should retry and finish all 10 pages eventually.
   * @param options The options parameters.
   */
  getMultiplePagesRetrySecond(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesRetrySecondResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getMultiplePagesRetrySecondOperationSpec
    ) as Promise<PagingGetMultiplePagesRetrySecondResponse>;
  }

  /**
   * A paging operation that receives a 400 on the first call
   * @param options The options parameters.
   */
  getSinglePagesFailure(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetSinglePagesFailureResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getSinglePagesFailureOperationSpec
    ) as Promise<PagingGetSinglePagesFailureResponse>;
  }

  /**
   * A paging operation that receives a 400 on the second call
   * @param options The options parameters.
   */
  getMultiplePagesFailure(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesFailureResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getMultiplePagesFailureOperationSpec
    ) as Promise<PagingGetMultiplePagesFailureResponse>;
  }

  /**
   * A paging operation that receives an invalid nextLink
   * @param options The options parameters.
   */
  getMultiplePagesFailureUri(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesFailureUriResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getMultiplePagesFailureUriOperationSpec
    ) as Promise<PagingGetMultiplePagesFailureUriResponse>;
  }

  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param apiVersion Sets the api version to use.
   * @param tenant Sets the tenant to use.
   * @param options The options parameters.
   */
  getMultiplePagesFragmentNextLink(
    apiVersion: string,
    tenant: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesFragmentNextLinkResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { apiVersion, tenant, options: operationOptions },
      getMultiplePagesFragmentNextLinkOperationSpec
    ) as Promise<PagingGetMultiplePagesFragmentNextLinkResponse>;
  }

  /**
   * A paging operation that doesn't return a full URL, just a fragment with parameters grouped
   * @param customParameterGroup Parameter group
   * @param options The options parameters.
   */
  getMultiplePagesFragmentWithGroupingNextLink(
    customParameterGroup: CustomParameterGroup,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { customParameterGroup, options: operationOptions },
      getMultiplePagesFragmentWithGroupingNextLinkOperationSpec
    ) as Promise<PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse>;
  }

  /**
   * A long-running paging operation that includes a nextLink that has 10 pages
   * @param options The options parameters.
   */
  async getMultiplePagesLRO(
    options?: PagingGetMultiplePagesLROOptionalParams
  ): Promise<LROPoller<PagingGetMultiplePagesLROResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = { options: operationOptions };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        PagingGetMultiplePagesLROResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getMultiplePagesLROOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getMultiplePagesLROOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param apiVersion Sets the api version to use.
   * @param tenant Sets the tenant to use.
   * @param nextLink Next link for list operation.
   * @param options The options parameters.
   */
  nextFragment(
    apiVersion: string,
    tenant: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingNextFragmentResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { apiVersion, tenant, nextLink, options: operationOptions },
      nextFragmentOperationSpec
    ) as Promise<PagingNextFragmentResponse>;
  }

  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param nextLink Next link for list operation.
   * @param customParameterGroup Parameter group
   * @param options The options parameters.
   */
  nextFragmentWithGrouping(
    nextLink: string,
    customParameterGroup: CustomParameterGroup,
    options?: coreHttp.OperationOptions
  ): Promise<PagingNextFragmentWithGroupingResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, customParameterGroup, options: operationOptions },
      nextFragmentWithGroupingOperationSpec
    ) as Promise<PagingNextFragmentWithGroupingResponse>;
  }

  /**
   * A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name
   * 'indexes'.
   * @param options The options parameters.
   */
  getPagingModelWithItemNameWithXMSClientName(
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetPagingModelWithItemNameWithXMSClientNameResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getPagingModelWithItemNameWithXMSClientNameOperationSpec
    ) as Promise<PagingGetPagingModelWithItemNameWithXMSClientNameResponse>;
  }

  /**
   * GetNoItemNamePagesNext
   * @param nextLink The nextLink from the previous successful call to the GetNoItemNamePages method.
   * @param options The options parameters.
   */
  getNoItemNamePagesNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetNoItemNamePagesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getNoItemNamePagesNextOperationSpec
    ) as Promise<PagingGetNoItemNamePagesNextResponse>;
  }

  /**
   * GetSinglePagesNext
   * @param nextLink The nextLink from the previous successful call to the GetSinglePages method.
   * @param options The options parameters.
   */
  getSinglePagesNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetSinglePagesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getSinglePagesNextOperationSpec
    ) as Promise<PagingGetSinglePagesNextResponse>;
  }

  /**
   * GetMultiplePagesNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePages method.
   * @param options The options parameters.
   */
  getMultiplePagesNext(
    nextLink: string,
    options?: PagingGetMultiplePagesNextOptionalParams
  ): Promise<PagingGetMultiplePagesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getMultiplePagesNextOperationSpec
    ) as Promise<PagingGetMultiplePagesNextResponse>;
  }

  /**
   * GetOdataMultiplePagesNext
   * @param nextLink The nextLink from the previous successful call to the GetOdataMultiplePages method.
   * @param options The options parameters.
   */
  getOdataMultiplePagesNext(
    nextLink: string,
    options?: PagingGetOdataMultiplePagesNextOptionalParams
  ): Promise<PagingGetOdataMultiplePagesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getOdataMultiplePagesNextOperationSpec
    ) as Promise<PagingGetOdataMultiplePagesNextResponse>;
  }

  /**
   * GetMultiplePagesWithOffsetNext
   * @param pagingGetMultiplePagesWithOffsetOptions Parameter group
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesWithOffset
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesWithOffsetNext(
    pagingGetMultiplePagesWithOffsetOptions: PagingGetMultiplePagesWithOffsetOptions,
    nextLink: string,
    options?: PagingGetMultiplePagesWithOffsetNextOptionalParams
  ): Promise<PagingGetMultiplePagesWithOffsetNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        pagingGetMultiplePagesWithOffsetOptions,
        nextLink,
        options: operationOptions
      },
      getMultiplePagesWithOffsetNextOperationSpec
    ) as Promise<PagingGetMultiplePagesWithOffsetNextResponse>;
  }

  /**
   * GetMultiplePagesRetryFirstNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesRetryFirst
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesRetryFirstNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesRetryFirstNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getMultiplePagesRetryFirstNextOperationSpec
    ) as Promise<PagingGetMultiplePagesRetryFirstNextResponse>;
  }

  /**
   * GetMultiplePagesRetrySecondNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesRetrySecond
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesRetrySecondNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesRetrySecondNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getMultiplePagesRetrySecondNextOperationSpec
    ) as Promise<PagingGetMultiplePagesRetrySecondNextResponse>;
  }

  /**
   * GetSinglePagesFailureNext
   * @param nextLink The nextLink from the previous successful call to the GetSinglePagesFailure method.
   * @param options The options parameters.
   */
  getSinglePagesFailureNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetSinglePagesFailureNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getSinglePagesFailureNextOperationSpec
    ) as Promise<PagingGetSinglePagesFailureNextResponse>;
  }

  /**
   * GetMultiplePagesFailureNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesFailure
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesFailureNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesFailureNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getMultiplePagesFailureNextOperationSpec
    ) as Promise<PagingGetMultiplePagesFailureNextResponse>;
  }

  /**
   * GetMultiplePagesFailureUriNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesFailureUri
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesFailureUriNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetMultiplePagesFailureUriNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getMultiplePagesFailureUriNextOperationSpec
    ) as Promise<PagingGetMultiplePagesFailureUriNextResponse>;
  }

  /**
   * GetMultiplePagesLRONext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesLRO method.
   * @param options The options parameters.
   */
  getMultiplePagesLRONext(
    nextLink: string,
    options?: PagingGetMultiplePagesLRONextOptionalParams
  ): Promise<PagingGetMultiplePagesLRONextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getMultiplePagesLRONextOperationSpec
    ) as Promise<PagingGetMultiplePagesLRONextResponse>;
  }

  /**
   * GetPagingModelWithItemNameWithXMSClientNameNext
   * @param nextLink The nextLink from the previous successful call to the
   *                 GetPagingModelWithItemNameWithXMSClientName method.
   * @param options The options parameters.
   */
  getPagingModelWithItemNameWithXMSClientNameNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PagingGetPagingModelWithItemNameWithXMSClientNameNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getPagingModelWithItemNameWithXMSClientNameNextOperationSpec
    ) as Promise<PagingGetPagingModelWithItemNameWithXMSClientNameNextResponse>;
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

const getNoItemNamePagesOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/noitemname",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValue
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNullNextLinkNamePagesOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/nullnextlink",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getSinglePagesOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/single",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults,
    Parameters.timeout
  ],
  serializer
};
const getWithQueryParamsOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/getWithQueryParams",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.requiredQueryParameter,
    Parameters.queryConstant
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const nextOperationWithQueryParamsOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/nextOperationWithQueryParams",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.queryConstant],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOdataMultiplePagesOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/odata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults1,
    Parameters.timeout1
  ],
  serializer
};
const getMultiplePagesWithOffsetOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/withpath/{offset}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.offset],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults2,
    Parameters.timeout2
  ],
  serializer
};
const getMultiplePagesRetryFirstOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/retryfirst",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesRetrySecondOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/retrysecond",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getSinglePagesFailureOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/single/failure",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFailureOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/failure",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFailureUriOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/failureuri",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFragmentNextLinkOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/fragment/{tenant}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenant],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFragmentWithGroupingNextLinkOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/fragmentwithgrouping/{tenant}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.tenant1],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesLROOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/lro",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    201: {
      bodyMapper: Mappers.ProductResult
    },
    202: {
      bodyMapper: Mappers.ProductResult
    },
    204: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults3,
    Parameters.timeout3
  ],
  serializer
};
const nextFragmentOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/fragment/{tenant}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenant, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const nextFragmentWithGroupingOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/multiple/fragmentwithgrouping/{tenant}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.tenant1, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getPagingModelWithItemNameWithXMSClientNameOperationSpec: coreHttp.OperationSpec = {
  path: "/paging/itemNameWithXMSClientName",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValueWithXMSClientName
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNoItemNamePagesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValue
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getSinglePagesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults,
    Parameters.timeout
  ],
  serializer
};
const getOdataMultiplePagesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults1,
    Parameters.timeout1
  ],
  serializer
};
const getMultiplePagesWithOffsetNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.offset, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults2,
    Parameters.timeout2
  ],
  serializer
};
const getMultiplePagesRetryFirstNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesRetrySecondNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getSinglePagesFailureNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFailureNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFailureUriNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesLRONextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    202: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults3,
    Parameters.timeout3
  ],
  serializer
};
const getPagingModelWithItemNameWithXMSClientNameNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValueWithXMSClientName
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
