import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import type { Data } from "../models/qqq";

export class ProfileService {
  public static getProfileDetail(
    id: number,
    s: number = 8,
  ): CancelablePromise<Data> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/login/status",
      query: {
        id: id,
        s: s,
      },
    });
  }
}
export class ProdetailService {
  public static getProfileDetail(
    id: number,
    s: number = 8,
  ): CancelablePromise<Data> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/account",
      query: {
        id: id,
        s: s,
      },
    });
  }
}
