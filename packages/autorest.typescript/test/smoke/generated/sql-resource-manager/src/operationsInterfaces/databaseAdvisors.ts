/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  DatabaseAdvisorsListByDatabaseOptionalParams,
  DatabaseAdvisorsListByDatabaseResponse,
  DatabaseAdvisorsGetOptionalParams,
  DatabaseAdvisorsGetResponse,
  Advisor,
  DatabaseAdvisorsUpdateOptionalParams,
  DatabaseAdvisorsUpdateResponse,
} from "../models";

/** Interface representing a DatabaseAdvisors. */
export interface DatabaseAdvisors {
  /**
   * Gets a list of database advisors.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseAdvisorsListByDatabaseOptionalParams,
  ): Promise<DatabaseAdvisorsListByDatabaseResponse>;
  /**
   * Gets a database advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param advisorName The name of the Database Advisor.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    advisorName: string,
    options?: DatabaseAdvisorsGetOptionalParams,
  ): Promise<DatabaseAdvisorsGetResponse>;
  /**
   * Updates a database advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param advisorName The name of the Database Advisor.
   * @param parameters The requested advisor resource state.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    advisorName: string,
    parameters: Advisor,
    options?: DatabaseAdvisorsUpdateOptionalParams,
  ): Promise<DatabaseAdvisorsUpdateResponse>;
}
