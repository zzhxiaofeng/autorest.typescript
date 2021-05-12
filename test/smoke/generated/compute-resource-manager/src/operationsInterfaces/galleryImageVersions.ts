/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GalleryImageVersion,
  GalleryImageVersionsListByGalleryImageNextOptionalParams,
  GalleryImageVersionsListByGalleryImageOptionalParams,
  GalleryImageVersionsCreateOrUpdateOptionalParams,
  GalleryImageVersionsCreateOrUpdateResponse,
  GalleryImageVersionUpdate,
  GalleryImageVersionsUpdateOptionalParams,
  GalleryImageVersionsUpdateResponse,
  GalleryImageVersionsGetOptionalParams,
  GalleryImageVersionsGetResponse,
  GalleryImageVersionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GalleryImageVersions. */
export interface GalleryImageVersions {
  /**
   * List gallery Image Versions in a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  listByGalleryImage(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: GalleryImageVersionsListByGalleryImageOptionalParams
  ): PagedAsyncIterableIterator<GalleryImageVersion>;
  /**
   * Create or update a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version is to be
   *                         created.
   * @param galleryImageVersionName The name of the gallery Image Version to be created. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the create or update gallery Image Version
   *                            operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersion,
    options?: GalleryImageVersionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryImageVersionsCreateOrUpdateResponse>,
      GalleryImageVersionsCreateOrUpdateResponse
    >
  >;
  /**
   * Update a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version is to be
   *                         updated.
   * @param galleryImageVersionName The name of the gallery Image Version to be updated. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the update gallery Image Version operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersionUpdate,
    options?: GalleryImageVersionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryImageVersionsUpdateResponse>,
      GalleryImageVersionsUpdateResponse
    >
  >;
  /**
   * Retrieves information about a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: GalleryImageVersionsGetOptionalParams
  ): Promise<GalleryImageVersionsGetResponse>;
  /**
   * Delete a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: GalleryImageVersionsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
}
