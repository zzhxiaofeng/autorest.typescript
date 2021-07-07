/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { FormdataImpl } from "./operations";
import { Formdata } from "./operationsInterfaces";
import { BodyFormDataClientContext } from "./bodyFormDataClientContext";
import { BodyFormDataClientOptionalParams } from "./models";

export class BodyFormDataClient extends BodyFormDataClientContext {
  /**
   * Initializes a new instance of the BodyFormDataClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyFormDataClientOptionalParams) {
    super(options);
    this.formdata = new FormdataImpl(this);
  }

  formdata: Formdata;
}