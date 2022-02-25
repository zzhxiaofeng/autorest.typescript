/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The operation to get the restore point collection.
 *
 * @summary The operation to get the restore point collection.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/GetRestorePointCollection.json
 */
async function getARestorePointCollectionButNotTheRestorePointsContainedInTheRestorePointCollection() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const restorePointCollectionName = "myRpc";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.restorePointCollections.get(
    resourceGroupName,
    restorePointCollectionName
  );
  console.log(result);
}

getARestorePointCollectionButNotTheRestorePointsContainedInTheRestorePointCollection().catch(
  console.error
);

/**
 * This sample demonstrates how to The operation to get the restore point collection.
 *
 * @summary The operation to get the restore point collection.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/GetRestorePointCollectionWithContainedRestorePoints.json
 */
async function getARestorePointCollectionIncludingTheRestorePointsContainedInTheRestorePointCollection() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const restorePointCollectionName = "rpcName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.restorePointCollections.get(
    resourceGroupName,
    restorePointCollectionName
  );
  console.log(result);
}

getARestorePointCollectionIncludingTheRestorePointsContainedInTheRestorePointCollection().catch(
  console.error
);
