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
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/gallery/CreateOrUpdateASimpleGalleryImageVersionWithVHD.json
 */
import {
  GalleryImageVersion,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateASimpleGalleryImageVersionUsingVhdAsASource() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherDiskEncryptionSet",
                lun: 1
              }
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myDiskEncryptionSet"
            }
          },
          regionalReplicaCount: 1
        },
        {
          name: "East US",
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS"
        }
      ]
    },
    storageProfile: {
      dataDiskImages: [
        {
          hostCaching: "None",
          lun: 1,
          source: {
            id:
              "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}",
            uri:
              "https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd"
          }
        }
      ],
      osDiskImage: {
        hostCaching: "ReadOnly",
        source: {
          id:
            "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}",
          uri:
            "https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd"
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion
  );
  console.log(result);
}

createOrUpdateASimpleGalleryImageVersionUsingVhdAsASource().catch(
  console.error
);
