/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SyncMember,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates an existing sync member.
 *
 * @summary Updates an existing sync member.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/SyncMemberPatch.json
 */
async function updateAnExistingSyncMember() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "syncgroupcrud-65440";
  const serverName = "syncgroupcrud-8475";
  const databaseName = "syncgroupcrud-4328";
  const syncGroupName = "syncgroupcrud-3187";
  const syncMemberName = "syncmembercrud-4879";
  const parameters: SyncMember = {
    databaseName: "syncgroupcrud-7421",
    databaseType: "AzureSqlDatabase",
    serverName: "syncgroupcrud-3379.database.windows.net",
    syncDirection: "Bidirectional",
    syncMemberAzureDatabaseResourceId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/syncgroupcrud-65440/providers/Microsoft.Sql/servers/syncgroupcrud-8475/databases/syncgroupcrud-4328",
    usePrivateLinkConnection: true,
    userName: "myUser"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.syncMembers.beginUpdateAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    syncGroupName,
    syncMemberName,
    parameters
  );
  console.log(result);
}

updateAnExistingSyncMember().catch(console.error);
