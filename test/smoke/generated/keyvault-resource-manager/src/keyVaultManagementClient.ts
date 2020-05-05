/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { KeyVaultManagementClientContext } from "./keyVaultManagementClientContext";

class KeyVaultManagementClient extends KeyVaultManagementClientContext {
  /**
   * Initializes a new instance of the KeyVaultManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: Models.KeyVaultManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.vaults = new operations.Vaults(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(
      this
    );
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.operations = new operations.Operations(this);
  }

  vaults: operations.Vaults;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkResources: operations.PrivateLinkResources;
  operations: operations.Operations;
}

// Operation Specifications

export {
  KeyVaultManagementClient,
  KeyVaultManagementClientContext,
  Models as KeyVaultManagementModels,
  Mappers as KeyVaultManagementMappers
};
export * from "./operations";