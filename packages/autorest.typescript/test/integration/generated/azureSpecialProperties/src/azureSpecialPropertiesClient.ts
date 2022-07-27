/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  XMsClientRequestIdImpl,
  SubscriptionInCredentialsImpl,
  SubscriptionInMethodImpl,
  ApiVersionDefaultImpl,
  ApiVersionLocalImpl,
  SkipUrlEncodingImpl,
  OdataImpl,
  HeaderImpl
} from "./operations";
import {
  XMsClientRequestId,
  SubscriptionInCredentials,
  SubscriptionInMethod,
  ApiVersionDefault,
  ApiVersionLocal,
  SkipUrlEncoding,
  Odata,
  Header
} from "./operationsInterfaces";
import { AzureSpecialPropertiesClientOptionalParams } from "./models";

export class AzureSpecialPropertiesClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AzureSpecialPropertiesClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription id, which appears in the path, always modeled in credentials.
   *                       The value is always '1234-5678-9012-3456'
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureSpecialPropertiesClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureSpecialPropertiesClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-azure-special-properties/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = [
        "https://microsoft.com/.default",
        "http://microsoft.com/.default"
      ];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint ?? options.baseUri ?? "http://localhost:3000"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
    this.apiVersion = options.apiVersion || "2015-07-01-preview";
    this.xMsClientRequestId = new XMsClientRequestIdImpl(this);
    this.subscriptionInCredentials = new SubscriptionInCredentialsImpl(this);
    this.subscriptionInMethod = new SubscriptionInMethodImpl(this);
    this.apiVersionDefault = new ApiVersionDefaultImpl(this);
    this.apiVersionLocal = new ApiVersionLocalImpl(this);
    this.skipUrlEncoding = new SkipUrlEncodingImpl(this);
    this.odata = new OdataImpl(this);
    this.header = new HeaderImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  xMsClientRequestId: XMsClientRequestId;
  subscriptionInCredentials: SubscriptionInCredentials;
  subscriptionInMethod: SubscriptionInMethod;
  apiVersionDefault: ApiVersionDefault;
  apiVersionLocal: ApiVersionLocal;
  skipUrlEncoding: SkipUrlEncoding;
  odata: Odata;
  header: Header;
}