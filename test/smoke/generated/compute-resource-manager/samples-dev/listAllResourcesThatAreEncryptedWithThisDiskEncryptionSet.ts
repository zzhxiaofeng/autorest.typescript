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
 * This sample demonstrates how to Lists all resources that are encrypted with this disk encryption set.
 *
 * @summary Lists all resources that are encrypted with this disk encryption set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/ListDiskEncryptionSetAssociatedResources.json
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function listAllResourcesThatAreEncryptedWithThisDiskEncryptionSet() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskEncryptionSetName = "myDiskEncryptionSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.diskEncryptionSets.listAssociatedResources(
    resourceGroupName,
    diskEncryptionSetName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllResourcesThatAreEncryptedWithThisDiskEncryptionSet().catch(
  console.error
);
