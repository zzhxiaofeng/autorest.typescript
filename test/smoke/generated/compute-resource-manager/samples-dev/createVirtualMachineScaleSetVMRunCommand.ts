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
 * This sample demonstrates how to The operation to create or update the VMSS VM run command.
 *
 * @summary The operation to create or update the VMSS VM run command.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/runCommands/CreateOrUpdateVirtualMachineScaleSetVMRunCommands.json
 */
import {
  VirtualMachineRunCommand,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createVirtualMachineScaleSetVMRunCommand() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const runCommandName = "myRunCommand";
  const runCommand: VirtualMachineRunCommand = {
    asyncExecution: false,
    location: "West US",
    parameters: [
      { name: "param1", value: "value1" },
      { name: "param2", value: "value2" }
    ],
    runAsPassword: "<runAsPassword>",
    runAsUser: "user1",
    source: { script: "Write-Host Hello World!" },
    timeoutInSeconds: 3600
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMRunCommands.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    runCommandName,
    runCommand
  );
  console.log(result);
}

createVirtualMachineScaleSetVMRunCommand().catch(console.error);
