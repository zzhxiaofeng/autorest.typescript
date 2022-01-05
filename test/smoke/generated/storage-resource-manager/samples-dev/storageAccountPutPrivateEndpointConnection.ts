/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Update the state of specified private endpoint connection associated with the storage account.
 *
 * @summary Update the state of specified private endpoint connection associated with the storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/StorageAccountPutPrivateEndpointConnection.json
 */
import {
  PrivateEndpointConnection,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function storageAccountPutPrivateEndpointConnection() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res7687";
  const accountName = "sto9699";
  const privateEndpointConnectionName = "{privateEndpointConnectionName}";
  const properties: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Auto-Approved",
      status: "Approved"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.put(
    resourceGroupName,
    accountName,
    privateEndpointConnectionName,
    properties
  );
  console.log(result);
}

storageAccountPutPrivateEndpointConnection().catch(console.error);
