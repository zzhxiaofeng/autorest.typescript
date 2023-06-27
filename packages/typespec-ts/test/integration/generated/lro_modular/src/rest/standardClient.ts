// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { StandardContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `StandardContext`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {}
): StandardContext {
  const baseUrl =
    options.baseUrl ?? `http://localhost:3000/azure/core/lro/standard`;
  options.apiVersion = options.apiVersion ?? "2022-12-01-preview";
  const userAgentInfo = `azsdk-js-lro-modular-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(baseUrl, options) as StandardContext;

  return client;
}
