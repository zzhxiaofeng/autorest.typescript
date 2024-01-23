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
  ManagedDatabaseSecurityEventsListByDatabaseOptionalParams,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of security events.
 *
 * @summary Gets a list of security events.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedDatabaseSecurityEventsGetMax.json
 */
async function getTheManagedDatabaseSecurityEventsWithMaximalParameters() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "testrg";
  const managedInstanceName = "testcl";
  const databaseName = "database1";
  const filter = "ShowServerRecords eq true";
  const skip = 0;
  const top = 1;
  const skiptoken =
    "eyJCbG9iTmFtZURhdGVUaW1lIjoiXC9EYXRlKDE1MTIyODg4MTIwMTArMDIwMClcLyIsIkJsb2JOYW1lUm9sbG92ZXJJbmRleCI6IjAiLCJFbmREYXRlIjoiXC9EYXRlKDE1MTI0NjYyMDA1MjkpXC8iLCJJc1NraXBUb2tlblNldCI6ZmFsc2UsIklzVjJCbG9iVGltZUZvcm1hdCI6dHJ1ZSwiU2hvd1NlcnZlclJlY29yZHMiOmZhbHNlLCJTa2lwVmFsdWUiOjAsIlRha2VWYWx1ZSI6MTB9";
  const options: ManagedDatabaseSecurityEventsListByDatabaseOptionalParams = {
    filter,
    skip,
    top,
    skiptoken,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseSecurityEvents.listByDatabase(
    resourceGroupName,
    managedInstanceName,
    databaseName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets a list of security events.
 *
 * @summary Gets a list of security events.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedDatabaseSecurityEventsGetMin.json
 */
async function getTheManagedDatabaseSecurityEventsWithMinimalParameters() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "testrg";
  const managedInstanceName = "testcl";
  const databaseName = "database1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseSecurityEvents.listByDatabase(
    resourceGroupName,
    managedInstanceName,
    databaseName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getTheManagedDatabaseSecurityEventsWithMaximalParameters();
  getTheManagedDatabaseSecurityEventsWithMinimalParameters();
}

main().catch(console.error);
