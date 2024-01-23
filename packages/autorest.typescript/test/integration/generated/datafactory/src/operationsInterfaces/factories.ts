import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Factory,
  FactoriesListOptionalParams,
  FactoriesListByResourceGroupOptionalParams,
  FactoryRepoUpdate,
  FactoriesConfigureFactoryRepoOptionalParams,
  FactoriesConfigureFactoryRepoResponse,
  FactoriesCreateOrUpdateOptionalParams,
  FactoriesCreateOrUpdateResponse,
  FactoryUpdateParameters,
  FactoriesUpdateOptionalParams,
  FactoriesUpdateResponse,
  FactoriesGetOptionalParams,
  FactoriesGetResponse,
  FactoriesDeleteOptionalParams,
  GitHubAccessTokenRequest,
  FactoriesGetGitHubAccessTokenOptionalParams,
  FactoriesGetGitHubAccessTokenResponse,
  UserAccessPolicy,
  FactoriesGetDataPlaneAccessOptionalParams,
  FactoriesGetDataPlaneAccessResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Factories. */
export interface Factories {
  /**
   * Lists factories under the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: FactoriesListOptionalParams,
  ): PagedAsyncIterableIterator<Factory>;
  /**
   * Lists factories.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: FactoriesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Factory>;
  /**
   * Updates a factory's repo information.
   * @param locationId The location identifier.
   * @param factoryRepoUpdate Update factory repo request definition.
   * @param options The options parameters.
   */
  configureFactoryRepo(
    locationId: string,
    factoryRepoUpdate: FactoryRepoUpdate,
    options?: FactoriesConfigureFactoryRepoOptionalParams,
  ): Promise<FactoriesConfigureFactoryRepoResponse>;
  /**
   * Creates or updates a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factory Factory resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    factory: Factory,
    options?: FactoriesCreateOrUpdateOptionalParams,
  ): Promise<FactoriesCreateOrUpdateResponse>;
  /**
   * Updates a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factoryUpdateParameters The parameters for updating a factory.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    factoryName: string,
    factoryUpdateParameters: FactoryUpdateParameters,
    options?: FactoriesUpdateOptionalParams,
  ): Promise<FactoriesUpdateResponse>;
  /**
   * Gets a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    options?: FactoriesGetOptionalParams,
  ): Promise<FactoriesGetResponse>;
  /**
   * Deletes a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    options?: FactoriesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get GitHub Access Token.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param gitHubAccessTokenRequest Get GitHub access token request definition.
   * @param options The options parameters.
   */
  getGitHubAccessToken(
    resourceGroupName: string,
    factoryName: string,
    gitHubAccessTokenRequest: GitHubAccessTokenRequest,
    options?: FactoriesGetGitHubAccessTokenOptionalParams,
  ): Promise<FactoriesGetGitHubAccessTokenResponse>;
  /**
   * Get Data Plane access.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param policy Data Plane user access policy definition.
   * @param options The options parameters.
   */
  getDataPlaneAccess(
    resourceGroupName: string,
    factoryName: string,
    policy: UserAccessPolicy,
    options?: FactoriesGetDataPlaneAccessOptionalParams,
  ): Promise<FactoriesGetDataPlaneAccessResponse>;
}
