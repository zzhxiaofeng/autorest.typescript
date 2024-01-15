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
  ExpressRouteCircuitConnection,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Express Route Circuit Connection in the specified express route circuits.
 *
 * @summary Creates or updates a Express Route Circuit Connection in the specified express route circuits.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ExpressRouteCircuitConnectionCreate.json
 */
async function expressRouteCircuitConnectionCreate() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const circuitName = "ExpressRouteARMCircuitA";
  const peeringName = "AzurePrivatePeering";
  const connectionName = "circuitConnectionUSAUS";
  const expressRouteCircuitConnectionParameters: ExpressRouteCircuitConnection =
    {
      addressPrefix: "10.0.0.0/29",
      authorizationKey: "946a1918-b7a2-4917-b43c-8c4cdaee006a",
      expressRouteCircuitPeering: {
        id: "/subscriptions/subid1/resourceGroups/dedharcktinit/providers/Microsoft.Network/expressRouteCircuits/dedharcktlocal/peerings/AzurePrivatePeering",
      },
      ipv6CircuitConnectionConfig: { addressPrefix: "aa:bb::/125" },
      peerExpressRouteCircuitPeering: {
        id: "/subscriptions/subid2/resourceGroups/dedharcktpeer/providers/Microsoft.Network/expressRouteCircuits/dedharcktremote/peerings/AzurePrivatePeering",
      },
    };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.expressRouteCircuitConnections.beginCreateOrUpdateAndWait(
      resourceGroupName,
      circuitName,
      peeringName,
      connectionName,
      expressRouteCircuitConnectionParameters,
    );
  console.log(result);
}

async function main() {
  expressRouteCircuitConnectionCreate();
}

main().catch(console.error);
