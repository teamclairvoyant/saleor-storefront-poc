import { PHI_API_URI } from "@/lib/const";
import { buildSchema } from "graphql";
import gql from "graphql-tag";

export interface CustomApiOptions {
  baseUrl?: string;
}

const defaultOptions = {
  PHI_API_URI,
} as CustomApiOptions;

/**
 *
 * @param baseOptions
 * @returns
 */
export function useCustomApi(baseOptions?: CustomApiOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  const fetchAPI = (endPoint: string, method: "get" | "put" | "post" | "delete", body?: any) =>
    fetch(`${options.baseUrl}/${endPoint}`, {
      method,
      body: body ? JSON.stringify(body) : null,
    });
  const getClient = (endPoint: string) => fetchAPI(endPoint, "get");
  const putClient = (endPoint: string, body: any) => fetchAPI(endPoint, "put", body);
  const postClient = (endPoint: string, body: any) => fetchAPI(endPoint, "post", body);

  return {
    getClient,
    putClient,
    postClient,
  };
}
