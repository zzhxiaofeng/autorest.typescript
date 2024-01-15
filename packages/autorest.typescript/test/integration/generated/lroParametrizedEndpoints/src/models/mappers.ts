/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number",
        },
      },
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const LroParametrizedEndpointsClientPollWithParameterizedEndpointsHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "LroParametrizedEndpointsClientPollWithParameterizedEndpointsHeaders",
      modelProperties: {
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const LroParametrizedEndpointsClientPollWithConstantParameterizedEndpointsHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "LroParametrizedEndpointsClientPollWithConstantParameterizedEndpointsHeaders",
      modelProperties: {
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };
