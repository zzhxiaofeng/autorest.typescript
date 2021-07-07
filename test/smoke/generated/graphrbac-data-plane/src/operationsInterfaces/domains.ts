/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Domain,
  DomainsListOptionalParams,
  DomainsGetOptionalParams,
  DomainsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Domains. */
export interface Domains {
  /**
   * Gets a list of domains for the current tenant.
   * @param options The options parameters.
   */
  list(options?: DomainsListOptionalParams): PagedAsyncIterableIterator<Domain>;
  /**
   * Gets a specific domain in the current tenant.
   * @param domainName name of the domain.
   * @param options The options parameters.
   */
  get(
    domainName: string,
    options?: DomainsGetOptionalParams
  ): Promise<DomainsGetResponse>;
}