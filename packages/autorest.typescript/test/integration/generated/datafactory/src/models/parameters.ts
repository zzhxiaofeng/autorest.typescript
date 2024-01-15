import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  FactoryRepoUpdate as FactoryRepoUpdateMapper,
  Factory as FactoryMapper,
  FactoryUpdateParameters as FactoryUpdateParametersMapper,
  GitHubAccessTokenRequest as GitHubAccessTokenRequestMapper,
  UserAccessPolicy as UserAccessPolicyMapper,
  ExposureControlRequest as ExposureControlRequestMapper,
  ExposureControlBatchRequest as ExposureControlBatchRequestMapper,
  IntegrationRuntimeResource as IntegrationRuntimeResourceMapper,
  UpdateIntegrationRuntimeRequest as UpdateIntegrationRuntimeRequestMapper,
  IntegrationRuntimeRegenerateKeyParameters as IntegrationRuntimeRegenerateKeyParametersMapper,
  LinkedIntegrationRuntimeRequest as LinkedIntegrationRuntimeRequestMapper,
  CreateLinkedIntegrationRuntimeRequest as CreateLinkedIntegrationRuntimeRequestMapper,
  GetSsisObjectMetadataRequest as GetSsisObjectMetadataRequestMapper,
  UpdateIntegrationRuntimeNodeRequest as UpdateIntegrationRuntimeNodeRequestMapper,
  LinkedServiceResource as LinkedServiceResourceMapper,
  DatasetResource as DatasetResourceMapper,
  PipelineResource as PipelineResourceMapper,
  RunFilterParameters as RunFilterParametersMapper,
  TriggerFilterParameters as TriggerFilterParametersMapper,
  TriggerResource as TriggerResourceMapper,
  DataFlowResource as DataFlowResourceMapper,
  CreateDataFlowDebugSessionRequest as CreateDataFlowDebugSessionRequestMapper,
  DataFlowDebugPackage as DataFlowDebugPackageMapper,
  DeleteDataFlowDebugSessionRequest as DeleteDataFlowDebugSessionRequestMapper,
  DataFlowDebugCommandRequest as DataFlowDebugCommandRequestMapper,
  ManagedVirtualNetworkResource as ManagedVirtualNetworkResourceMapper,
  ManagedPrivateEndpointResource as ManagedPrivateEndpointResourceMapper,
  PrivateLinkConnectionApprovalRequestResource as PrivateLinkConnectionApprovalRequestResourceMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-06-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const factoryRepoUpdate: OperationParameter = {
  parameterPath: "factoryRepoUpdate",
  mapper: FactoryRepoUpdateMapper,
};

export const locationId: OperationURLParameter = {
  parameterPath: "locationId",
  mapper: {
    serializedName: "locationId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const factory: OperationParameter = {
  parameterPath: "factory",
  mapper: FactoryMapper,
};

export const factoryName: OperationURLParameter = {
  parameterPath: "factoryName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "factoryName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String",
    },
  },
};

export const factoryUpdateParameters: OperationParameter = {
  parameterPath: "factoryUpdateParameters",
  mapper: FactoryUpdateParametersMapper,
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String",
    },
  },
};

export const gitHubAccessTokenRequest: OperationParameter = {
  parameterPath: "gitHubAccessTokenRequest",
  mapper: GitHubAccessTokenRequestMapper,
};

export const policy: OperationParameter = {
  parameterPath: "policy",
  mapper: UserAccessPolicyMapper,
};

export const exposureControlRequest: OperationParameter = {
  parameterPath: "exposureControlRequest",
  mapper: ExposureControlRequestMapper,
};

export const exposureControlBatchRequest: OperationParameter = {
  parameterPath: "exposureControlBatchRequest",
  mapper: ExposureControlBatchRequestMapper,
};

export const integrationRuntime: OperationParameter = {
  parameterPath: "integrationRuntime",
  mapper: IntegrationRuntimeResourceMapper,
};

export const integrationRuntimeName: OperationURLParameter = {
  parameterPath: "integrationRuntimeName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "integrationRuntimeName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const updateIntegrationRuntimeRequest: OperationParameter = {
  parameterPath: "updateIntegrationRuntimeRequest",
  mapper: UpdateIntegrationRuntimeRequestMapper,
};

export const regenerateKeyParameters: OperationParameter = {
  parameterPath: "regenerateKeyParameters",
  mapper: IntegrationRuntimeRegenerateKeyParametersMapper,
};

export const linkedIntegrationRuntimeRequest: OperationParameter = {
  parameterPath: "linkedIntegrationRuntimeRequest",
  mapper: LinkedIntegrationRuntimeRequestMapper,
};

export const createLinkedIntegrationRuntimeRequest: OperationParameter = {
  parameterPath: "createLinkedIntegrationRuntimeRequest",
  mapper: CreateLinkedIntegrationRuntimeRequestMapper,
};

export const getMetadataRequest: OperationParameter = {
  parameterPath: ["options", "getMetadataRequest"],
  mapper: GetSsisObjectMetadataRequestMapper,
};

export const nodeName: OperationURLParameter = {
  parameterPath: "nodeName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9A-Z][a-z0-9A-Z_-]{0,149}$"),
      MaxLength: 150,
      MinLength: 1,
    },
    serializedName: "nodeName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const updateIntegrationRuntimeNodeRequest: OperationParameter = {
  parameterPath: "updateIntegrationRuntimeNodeRequest",
  mapper: UpdateIntegrationRuntimeNodeRequestMapper,
};

export const linkedService: OperationParameter = {
  parameterPath: "linkedService",
  mapper: LinkedServiceResourceMapper,
};

export const linkedServiceName: OperationURLParameter = {
  parameterPath: "linkedServiceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1,
    },
    serializedName: "linkedServiceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const dataset: OperationParameter = {
  parameterPath: "dataset",
  mapper: DatasetResourceMapper,
};

export const datasetName: OperationURLParameter = {
  parameterPath: "datasetName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1,
    },
    serializedName: "datasetName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const pipeline: OperationParameter = {
  parameterPath: "pipeline",
  mapper: PipelineResourceMapper,
};

export const pipelineName: OperationURLParameter = {
  parameterPath: "pipelineName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1,
    },
    serializedName: "pipelineName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: {
    serializedName: "parameters",
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } },
    },
  },
};

export const referencePipelineRunId: OperationQueryParameter = {
  parameterPath: ["options", "referencePipelineRunId"],
  mapper: {
    serializedName: "referencePipelineRunId",
    type: {
      name: "String",
    },
  },
};

export const isRecovery: OperationQueryParameter = {
  parameterPath: ["options", "isRecovery"],
  mapper: {
    serializedName: "isRecovery",
    type: {
      name: "Boolean",
    },
  },
};

export const startActivityName: OperationQueryParameter = {
  parameterPath: ["options", "startActivityName"],
  mapper: {
    serializedName: "startActivityName",
    type: {
      name: "String",
    },
  },
};

export const startFromFailure: OperationQueryParameter = {
  parameterPath: ["options", "startFromFailure"],
  mapper: {
    serializedName: "startFromFailure",
    type: {
      name: "Boolean",
    },
  },
};

export const filterParameters: OperationParameter = {
  parameterPath: "filterParameters",
  mapper: RunFilterParametersMapper,
};

export const runId: OperationURLParameter = {
  parameterPath: "runId",
  mapper: {
    serializedName: "runId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const isRecursive: OperationQueryParameter = {
  parameterPath: ["options", "isRecursive"],
  mapper: {
    serializedName: "isRecursive",
    type: {
      name: "Boolean",
    },
  },
};

export const filterParameters1: OperationParameter = {
  parameterPath: "filterParameters",
  mapper: TriggerFilterParametersMapper,
};

export const trigger: OperationParameter = {
  parameterPath: "trigger",
  mapper: TriggerResourceMapper,
};

export const triggerName: OperationURLParameter = {
  parameterPath: "triggerName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1,
    },
    serializedName: "triggerName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const dataFlow: OperationParameter = {
  parameterPath: "dataFlow",
  mapper: DataFlowResourceMapper,
};

export const dataFlowName: OperationURLParameter = {
  parameterPath: "dataFlowName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1,
    },
    serializedName: "dataFlowName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: CreateDataFlowDebugSessionRequestMapper,
};

export const request1: OperationParameter = {
  parameterPath: "request",
  mapper: DataFlowDebugPackageMapper,
};

export const request2: OperationParameter = {
  parameterPath: "request",
  mapper: DeleteDataFlowDebugSessionRequestMapper,
};

export const request3: OperationParameter = {
  parameterPath: "request",
  mapper: DataFlowDebugCommandRequestMapper,
};

export const managedVirtualNetwork: OperationParameter = {
  parameterPath: "managedVirtualNetwork",
  mapper: ManagedVirtualNetworkResourceMapper,
};

export const managedVirtualNetworkName: OperationURLParameter = {
  parameterPath: "managedVirtualNetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^([_A-Za-z0-9]|([_A-Za-z0-9][-_A-Za-z0-9]{0,125}[_A-Za-z0-9]))$",
      ),
      MaxLength: 127,
      MinLength: 1,
    },
    serializedName: "managedVirtualNetworkName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const managedPrivateEndpoint: OperationParameter = {
  parameterPath: "managedPrivateEndpoint",
  mapper: ManagedPrivateEndpointResourceMapper,
};

export const managedPrivateEndpointName: OperationURLParameter = {
  parameterPath: "managedPrivateEndpointName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^([_A-Za-z0-9]|([_A-Za-z0-9][-_A-Za-z0-9]{0,125}[_A-Za-z0-9]))$",
      ),
      MaxLength: 127,
      MinLength: 1,
    },
    serializedName: "managedPrivateEndpointName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const privateEndpointWrapper: OperationParameter = {
  parameterPath: "privateEndpointWrapper",
  mapper: PrivateLinkConnectionApprovalRequestResourceMapper,
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String",
    },
  },
};
