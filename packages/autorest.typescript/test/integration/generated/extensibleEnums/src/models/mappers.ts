/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const PetDef: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PetDef",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      daysOfWeek: {
        defaultValue: "Friday",
        serializedName: "DaysOfWeek",
        type: {
          name: "String",
        },
      },
      intEnum: {
        serializedName: "IntEnum",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};
