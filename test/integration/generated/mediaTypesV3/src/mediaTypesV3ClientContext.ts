/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { MediaTypesV3ClientOptionalParams } from "./models";

export class MediaTypesV3ClientContext extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the MediaTypesV3ClientContext class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: MediaTypesV3ClientOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MediaTypesV3ClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-media-types-v3-client/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.$host = $host;
  }
}
