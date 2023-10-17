// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAnomalyDetectorClient from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectUnivariateChangePoint
 *
 * @summary call operation DetectUnivariateChangePoint
 */
async function detectUnivariateChangePointSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const result = await client
    .path("/timeseries/changepoint/detect")
    .post({
      body: {
        series: [{ timestamp: new Date(), value: 123 }],
        granularity: "yearly",
        customInterval: 123,
        period: 123,
        stableTrendWindow: 123,
        threshold: 123,
      },
    });
  console.log(result);
}

async function main() {
  detectUnivariateChangePointSample();
}

main().catch(console.error);
