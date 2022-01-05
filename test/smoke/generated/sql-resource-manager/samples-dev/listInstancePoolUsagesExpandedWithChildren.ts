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
 * This sample demonstrates how to Gets all instance pool usage metrics
 *
 * @summary Gets all instance pool usage metrics
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/ListInstancePoolUsageExpanded.json
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function listInstancePoolUsagesExpandedWithChildren() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "group1";
  const instancePoolName = "testIP";
  const expandChildren = true;
  const options = { expandChildren: expandChildren };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.usages.listByInstancePool(
    resourceGroupName,
    instancePoolName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listInstancePoolUsagesExpandedWithChildren().catch(console.error);
