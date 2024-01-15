// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Send
 *
 * @summary call operation Send
 */
async function floatsOnlySendSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/floats-only")
    .post({ body: { prop: 1.1 } });
  console.log(result);
}

async function main() {
  floatsOnlySendSample();
}

main().catch(console.error);
