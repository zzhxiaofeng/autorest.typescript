import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  DataFlowDebugSessionInfo,
  DataFlowDebugSessionQueryByFactoryOptionalParams,
  CreateDataFlowDebugSessionRequest,
  DataFlowDebugSessionCreateOptionalParams,
  DataFlowDebugSessionCreateResponse,
  DataFlowDebugPackage,
  DataFlowDebugSessionAddDataFlowOptionalParams,
  DataFlowDebugSessionAddDataFlowResponse,
  DeleteDataFlowDebugSessionRequest,
  DataFlowDebugSessionDeleteOptionalParams,
  DataFlowDebugCommandRequest,
  DataFlowDebugSessionExecuteCommandOptionalParams,
  DataFlowDebugSessionExecuteCommandResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DataFlowDebugSession. */
export interface DataFlowDebugSession {
  /**
   * Query all active data flow debug sessions.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listQueryByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowDebugSessionQueryByFactoryOptionalParams,
  ): PagedAsyncIterableIterator<DataFlowDebugSessionInfo>;
  /**
   * Creates a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    factoryName: string,
    request: CreateDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DataFlowDebugSessionCreateResponse>,
      DataFlowDebugSessionCreateResponse
    >
  >;
  /**
   * Creates a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    factoryName: string,
    request: CreateDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionCreateOptionalParams,
  ): Promise<DataFlowDebugSessionCreateResponse>;
  /**
   * Add a data flow into debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition with debug content.
   * @param options The options parameters.
   */
  addDataFlow(
    resourceGroupName: string,
    factoryName: string,
    request: DataFlowDebugPackage,
    options?: DataFlowDebugSessionAddDataFlowOptionalParams,
  ): Promise<DataFlowDebugSessionAddDataFlowResponse>;
  /**
   * Deletes a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition for deletion
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    request: DeleteDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Execute a data flow debug command.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug command definition.
   * @param options The options parameters.
   */
  beginExecuteCommand(
    resourceGroupName: string,
    factoryName: string,
    request: DataFlowDebugCommandRequest,
    options?: DataFlowDebugSessionExecuteCommandOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DataFlowDebugSessionExecuteCommandResponse>,
      DataFlowDebugSessionExecuteCommandResponse
    >
  >;
  /**
   * Execute a data flow debug command.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug command definition.
   * @param options The options parameters.
   */
  beginExecuteCommandAndWait(
    resourceGroupName: string,
    factoryName: string,
    request: DataFlowDebugCommandRequest,
    options?: DataFlowDebugSessionExecuteCommandOptionalParams,
  ): Promise<DataFlowDebugSessionExecuteCommandResponse>;
}
