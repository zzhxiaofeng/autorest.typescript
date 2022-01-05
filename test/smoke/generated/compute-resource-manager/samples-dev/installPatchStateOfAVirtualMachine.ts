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
 * This sample demonstrates how to Installs patches on the VM.
 *
 * @summary Installs patches on the VM.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/VirtualMachineInstallPatches.json
 */
import {
  VirtualMachineInstallPatchesParameters,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function installPatchStateOfAVirtualMachine() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroupName";
  const vmName = "myVMName";
  const installPatchesInput: VirtualMachineInstallPatchesParameters = {
    maximumDuration: "PT4H",
    rebootSetting: "IfRequired",
    windowsParameters: {
      classificationsToInclude: ["Critical", "Security"],
      maxPatchPublishDate: new Date("2020-11-19T02:36:43.0539904+00:00")
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginInstallPatchesAndWait(
    resourceGroupName,
    vmName,
    installPatchesInput
  );
  console.log(result);
}

installPatchStateOfAVirtualMachine().catch(console.error);
