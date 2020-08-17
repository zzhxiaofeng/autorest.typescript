/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  NetworkInterfacesGetOptionalParams,
  NetworkInterfacesGetResponse,
  NetworkInterface,
  NetworkInterfacesCreateOrUpdateResponse,
  TagsObject,
  NetworkInterfacesUpdateTagsResponse,
  NetworkInterfacesListAllResponse,
  NetworkInterfacesListResponse,
  NetworkInterfacesGetEffectiveRouteTableResponse,
  NetworkInterfacesListEffectiveNetworkSecurityGroupsResponse,
  NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesResponse,
  NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesResponse,
  NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams,
  NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceResponse,
  NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams,
  NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsResponse,
  NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams,
  NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationResponse,
  NetworkInterfacesListAllNextResponse,
  NetworkInterfacesListNextResponse,
  NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesNextResponse,
  NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesNextResponse,
  NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsNextOptionalParams,
  NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsNextResponse
} from "../models";

/**
 * Class representing a NetworkInterfaces.
 */
export class NetworkInterfaces {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class NetworkInterfaces class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets information about the specified network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: NetworkInterfacesGetOptionalParams
  ): Promise<NetworkInterfacesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, networkInterfaceName, options: operationOptions },
      getOperationSpec
    ) as Promise<NetworkInterfacesGetResponse>;
  }

  /**
   * Creates or updates a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param parameters Parameters supplied to the create or update network interface operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    networkInterfaceName: string,
    parameters: NetworkInterface,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkInterfacesCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkInterfacesCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Updates a network interface tags.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param parameters Parameters supplied to update network interface tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    networkInterfaceName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfacesUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkInterfaceName,
        parameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<NetworkInterfacesUpdateTagsResponse>;
  }

  /**
   * Gets all network interfaces in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfacesListAllResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAllOperationSpec
    ) as Promise<NetworkInterfacesListAllResponse>;
  }

  /**
   * Gets all network interfaces in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfacesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listOperationSpec
    ) as Promise<NetworkInterfacesListResponse>;
  }

  /**
   * Gets all route tables applied to a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  async getEffectiveRouteTable(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkInterfacesGetEffectiveRouteTableResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkInterfacesGetEffectiveRouteTableResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getEffectiveRouteTableOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getEffectiveRouteTableOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets all network security groups applied to a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  async listEffectiveNetworkSecurityGroups(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<NetworkInterfacesListEffectiveNetworkSecurityGroupsResponse>
  > {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkInterfacesListEffectiveNetworkSecurityGroupsResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      listEffectiveNetworkSecurityGroupsOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: listEffectiveNetworkSecurityGroupsOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets information about all network interfaces in a virtual machine in a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param options The options parameters.
   */
  listVirtualMachineScaleSetVMNetworkInterfaces(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        options: operationOptions
      },
      listVirtualMachineScaleSetVMNetworkInterfacesOperationSpec
    ) as Promise<
      NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesResponse
    >;
  }

  /**
   * Gets all network interfaces in a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param options The options parameters.
   */
  listVirtualMachineScaleSetNetworkInterfaces(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        options: operationOptions
      },
      listVirtualMachineScaleSetNetworkInterfacesOperationSpec
    ) as Promise<
      NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesResponse
    >;
  }

  /**
   * Get the specified network interface in a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  getVirtualMachineScaleSetNetworkInterface(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    options?: NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams
  ): Promise<
    NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        options: operationOptions
      },
      getVirtualMachineScaleSetNetworkInterfaceOperationSpec
    ) as Promise<
      NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceResponse
    >;
  }

  /**
   * Get the specified network interface ip configuration in a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  listVirtualMachineScaleSetIpConfigurations(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    options?: NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams
  ): Promise<
    NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        options: operationOptions
      },
      listVirtualMachineScaleSetIpConfigurationsOperationSpec
    ) as Promise<
      NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsResponse
    >;
  }

  /**
   * Get the specified network interface ip configuration in a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The name of the network interface.
   * @param ipConfigurationName The name of the ip configuration.
   * @param options The options parameters.
   */
  getVirtualMachineScaleSetIpConfiguration(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    ipConfigurationName: string,
    options?: NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams
  ): Promise<
    NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        ipConfigurationName,
        options: operationOptions
      },
      getVirtualMachineScaleSetIpConfigurationOperationSpec
    ) as Promise<
      NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationResponse
    >;
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  listAllNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfacesListAllNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listAllNextOperationSpec
    ) as Promise<NetworkInterfacesListAllNextResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfacesListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<NetworkInterfacesListNextResponse>;
  }

  /**
   * ListVirtualMachineScaleSetVMNetworkInterfacesNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListVirtualMachineScaleSetVMNetworkInterfaces method.
   * @param options The options parameters.
   */
  listVirtualMachineScaleSetVMNetworkInterfacesNext(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        nextLink,
        options: operationOptions
      },
      listVirtualMachineScaleSetVMNetworkInterfacesNextOperationSpec
    ) as Promise<
      NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesNextResponse
    >;
  }

  /**
   * ListVirtualMachineScaleSetNetworkInterfacesNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListVirtualMachineScaleSetNetworkInterfaces method.
   * @param options The options parameters.
   */
  listVirtualMachineScaleSetNetworkInterfacesNext(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        nextLink,
        options: operationOptions
      },
      listVirtualMachineScaleSetNetworkInterfacesNextOperationSpec
    ) as Promise<
      NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesNextResponse
    >;
  }

  /**
   * ListVirtualMachineScaleSetIpConfigurationsNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The name of the network interface.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListVirtualMachineScaleSetIpConfigurations method.
   * @param options The options parameters.
   */
  listVirtualMachineScaleSetIpConfigurationsNext(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    nextLink: string,
    options?: NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsNextOptionalParams
  ): Promise<
    NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        nextLink,
        options: operationOptions
      },
      listVirtualMachineScaleSetIpConfigurationsNextOperationSpec
    ) as Promise<
      NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsNextResponse
    >;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterface
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterface
    },
    201: {
      bodyMapper: Mappers.NetworkInterface
    },
    202: {
      bodyMapper: Mappers.NetworkInterface
    },
    204: {
      bodyMapper: Mappers.NetworkInterface
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters17,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterface
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const listAllOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/networkInterfaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEffectiveRouteTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/effectiveRouteTable",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EffectiveRouteListResult
    },
    201: {
      bodyMapper: Mappers.EffectiveRouteListResult
    },
    202: {
      bodyMapper: Mappers.EffectiveRouteListResult
    },
    204: {
      bodyMapper: Mappers.EffectiveRouteListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listEffectiveNetworkSecurityGroupsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/effectiveNetworkSecurityGroups",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EffectiveNetworkSecurityGroupListResult
    },
    201: {
      bodyMapper: Mappers.EffectiveNetworkSecurityGroupListResult
    },
    202: {
      bodyMapper: Mappers.EffectiveNetworkSecurityGroupListResult
    },
    204: {
      bodyMapper: Mappers.EffectiveNetworkSecurityGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetVMNetworkInterfacesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetNetworkInterfacesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/networkInterfaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualMachineScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getVirtualMachineScaleSetNetworkInterfaceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterface
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetIpConfigurationsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceIPConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getVirtualMachineScaleSetIpConfigurationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipConfigurations/{ipConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceIPConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex,
    Parameters.ipConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetVMNetworkInterfacesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetNetworkInterfacesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.virtualMachineScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetIpConfigurationsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceIPConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.networkInterfaceName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex
  ],
  headerParameters: [Parameters.accept],
  serializer
};
