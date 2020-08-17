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
import { SqlManagementClient } from "../sqlManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  LongTermRetentionManagedInstanceBackupsGetResponse,
  LongTermRetentionManagedInstanceBackupsListByDatabaseOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByDatabaseResponse,
  LongTermRetentionManagedInstanceBackupsListByInstanceOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByInstanceResponse,
  LongTermRetentionManagedInstanceBackupsListByLocationOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByLocationResponse,
  LongTermRetentionManagedInstanceBackupsGetByResourceGroupResponse,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseResponse,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceResponse,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationResponse,
  LongTermRetentionManagedInstanceBackupsListByDatabaseNextOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByDatabaseNextResponse,
  LongTermRetentionManagedInstanceBackupsListByInstanceNextOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByInstanceNextResponse,
  LongTermRetentionManagedInstanceBackupsListByLocationNextOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByLocationNextResponse,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextResponse,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextResponse,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextResponse
} from "../models";

/**
 * Class representing a LongTermRetentionManagedInstanceBackups.
 */
export class LongTermRetentionManagedInstanceBackups {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class LongTermRetentionManagedInstanceBackups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a long term retention backup for a managed database.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LongTermRetentionManagedInstanceBackupsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        locationName,
        managedInstanceName,
        databaseName,
        backupName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<LongTermRetentionManagedInstanceBackupsGetResponse>;
  }

  /**
   * Deletes a long term retention backup.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  async delete(
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      locationName,
      managedInstanceName,
      databaseName,
      backupName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Lists all long term retention backups for a managed database.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param options The options parameters.
   */
  listByDatabase(
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByDatabaseOptionalParams
  ): Promise<LongTermRetentionManagedInstanceBackupsListByDatabaseResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        locationName,
        managedInstanceName,
        databaseName,
        options: operationOptions
      },
      listByDatabaseOperationSpec
    ) as Promise<LongTermRetentionManagedInstanceBackupsListByDatabaseResponse>;
  }

  /**
   * Lists the long term retention backups for a given managed instance.
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    locationName: string,
    managedInstanceName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByInstanceOptionalParams
  ): Promise<LongTermRetentionManagedInstanceBackupsListByInstanceResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { locationName, managedInstanceName, options: operationOptions },
      listByInstanceOperationSpec
    ) as Promise<LongTermRetentionManagedInstanceBackupsListByInstanceResponse>;
  }

  /**
   * Lists the long term retention backups for managed databases in a given location.
   * @param locationName The location of the database.
   * @param options The options parameters.
   */
  listByLocation(
    locationName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByLocationOptionalParams
  ): Promise<LongTermRetentionManagedInstanceBackupsListByLocationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { locationName, options: operationOptions },
      listByLocationOperationSpec
    ) as Promise<LongTermRetentionManagedInstanceBackupsListByLocationResponse>;
  }

  /**
   * Gets a long term retention backup for a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  getByResourceGroup(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    LongTermRetentionManagedInstanceBackupsGetByResourceGroupResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        locationName,
        managedInstanceName,
        databaseName,
        backupName,
        options: operationOptions
      },
      getByResourceGroupOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsGetByResourceGroupResponse
    >;
  }

  /**
   * Deletes a long term retention backup.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  async deleteByResourceGroup(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      locationName,
      managedInstanceName,
      databaseName,
      backupName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteByResourceGroupOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteByResourceGroupOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Lists all long term retention backups for a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param options The options parameters.
   */
  listByResourceGroupDatabase(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        locationName,
        managedInstanceName,
        databaseName,
        options: operationOptions
      },
      listByResourceGroupDatabaseOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseResponse
    >;
  }

  /**
   * Lists the long term retention backups for a given managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByResourceGroupInstance(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        locationName,
        managedInstanceName,
        options: operationOptions
      },
      listByResourceGroupInstanceOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceResponse
    >;
  }

  /**
   * Lists the long term retention backups for managed databases in a given location.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param options The options parameters.
   */
  listByResourceGroupLocation(
    resourceGroupName: string,
    locationName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, locationName, options: operationOptions },
      listByResourceGroupLocationOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationResponse
    >;
  }

  /**
   * ListByDatabaseNext
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  listByDatabaseNext(
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: LongTermRetentionManagedInstanceBackupsListByDatabaseNextOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByDatabaseNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        locationName,
        managedInstanceName,
        databaseName,
        nextLink,
        options: operationOptions
      },
      listByDatabaseNextOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByDatabaseNextResponse
    >;
  }

  /**
   * ListByInstanceNext
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByInstance method.
   * @param options The options parameters.
   */
  listByInstanceNext(
    locationName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: LongTermRetentionManagedInstanceBackupsListByInstanceNextOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByInstanceNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        locationName,
        managedInstanceName,
        nextLink,
        options: operationOptions
      },
      listByInstanceNextOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByInstanceNextResponse
    >;
  }

  /**
   * ListByLocationNext
   * @param locationName The location of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  listByLocationNext(
    locationName: string,
    nextLink: string,
    options?: LongTermRetentionManagedInstanceBackupsListByLocationNextOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByLocationNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { locationName, nextLink, options: operationOptions },
      listByLocationNextOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByLocationNextResponse
    >;
  }

  /**
   * ListByResourceGroupDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupDatabase
   *                 method.
   * @param options The options parameters.
   */
  listByResourceGroupDatabaseNext(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        locationName,
        managedInstanceName,
        databaseName,
        nextLink,
        options: operationOptions
      },
      listByResourceGroupDatabaseNextOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextResponse
    >;
  }

  /**
   * ListByResourceGroupInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupInstance
   *                 method.
   * @param options The options parameters.
   */
  listByResourceGroupInstanceNext(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        locationName,
        managedInstanceName,
        nextLink,
        options: operationOptions
      },
      listByResourceGroupInstanceNextOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextResponse
    >;
  }

  /**
   * ListByResourceGroupLocationNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupLocation
   *                 method.
   * @param options The options parameters.
   */
  listByResourceGroupLocationNext(
    resourceGroupName: string,
    locationName: string,
    nextLink: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextOptionalParams
  ): Promise<
    LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, locationName, nextLink, options: operationOptions },
      listByResourceGroupLocationNextOperationSpec
    ) as Promise<
      LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextResponse
    >;
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

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstances/{managedInstanceName}/longTermRetentionDatabases/{databaseName}/longTermRetentionManagedInstanceBackups/{backupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.databaseName,
    Parameters.locationName,
    Parameters.backupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstances/{managedInstanceName}/longTermRetentionDatabases/{databaseName}/longTermRetentionManagedInstanceBackups/{backupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.databaseName,
    Parameters.locationName,
    Parameters.backupName,
    Parameters.managedInstanceName
  ],
  serializer
};
const listByDatabaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstances/{managedInstanceName}/longTermRetentionDatabases/{databaseName}/longTermRetentionManagedInstanceBackups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.databaseName,
    Parameters.locationName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInstanceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstances/{managedInstanceName}/longTermRetentionManagedInstanceBackups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstanceBackups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstances/{managedInstanceName}/longTermRetentionDatabases/{databaseName}/longTermRetentionManagedInstanceBackups/{backupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.locationName,
    Parameters.backupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstances/{managedInstanceName}/longTermRetentionDatabases/{databaseName}/longTermRetentionManagedInstanceBackups/{backupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.locationName,
    Parameters.backupName,
    Parameters.managedInstanceName
  ],
  serializer
};
const listByResourceGroupDatabaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstances/{managedInstanceName}/longTermRetentionDatabases/{databaseName}/longTermRetentionManagedInstanceBackups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.locationName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupInstanceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstances/{managedInstanceName}/longTermRetentionManagedInstanceBackups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupLocationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionManagedInstanceBackups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.locationName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInstanceNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.locationName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupDatabaseNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.locationName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupInstanceNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.locationName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupLocationNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceLongTermRetentionBackupListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.onlyLatestPerDatabase,
    Parameters.databaseState1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
