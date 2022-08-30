import {
  DogsGetDogsParameters,
  DogsSetDogsParameters,
  CatsGetCatsParameters,
  CatsSetCatsParameters,
} from "./parameters";
import {
  DogsGetDogs200Response,
  DogsGetDogsDefaultResponse,
  DogsSetDogs200Response,
  DogsSetDogsDefaultResponse,
  CatsGetCats200Response,
  CatsGetCatsDefaultResponse,
  CatsSetCats200Response,
  CatsSetCatsDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for dogs operations */
export interface dogsOperations {
  getDogs(
    options?: DogsGetDogsParameters
  ): StreamableMethod<DogsGetDogs200Response | DogsGetDogsDefaultResponse>;
  setDogs(
    options?: DogsSetDogsParameters
  ): StreamableMethod<DogsSetDogs200Response | DogsSetDogsDefaultResponse>;
}

/** Contains operations for cats operations */
export interface catsOperations {
  getCats(
    options?: CatsGetCatsParameters
  ): StreamableMethod<CatsGetCats200Response | CatsGetCatsDefaultResponse>;
  setCats(
    options?: CatsSetCatsParameters
  ): StreamableMethod<CatsSetCats200Response | CatsSetCatsDefaultResponse>;
}

export interface DogsGetDogs {
  get(
    options?: DogsGetDogsParameters
  ): StreamableMethod<DogsGetDogs200Response | DogsGetDogsDefaultResponse>;
}

export interface DogsSetDogs {
  put(
    options?: DogsSetDogsParameters
  ): StreamableMethod<DogsSetDogs200Response | DogsSetDogsDefaultResponse>;
}

export interface CatsGetCats {
  get(
    options?: CatsGetCatsParameters
  ): StreamableMethod<CatsGetCats200Response | CatsGetCatsDefaultResponse>;
  put(
    options?: CatsSetCatsParameters
  ): StreamableMethod<CatsSetCats200Response | CatsSetCatsDefaultResponse>;
}

export interface Routes {
  /** Resource for '/dogs' has methods for the following verbs: get */
  (path: "/dogs"): DogsGetDogs;
  /** Resource for '/dogs/models' has methods for the following verbs: put */
  (path: "/dogs/models"): DogsSetDogs;
  /** Resource for '/cats' has methods for the following verbs: get, put */
  (path: "/cats"): CatsGetCats;
}

export type MultiInterfaceClient = Client & {
  path: Routes;
  dogs: dogsOperations;
  cats: catsOperations;
};