import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import type { Root, Roots } from "../models/menu";
import type { Playlist } from "../models/playlistDetail";

export class ProdetailService {
  public static getProfileDetail(id: number): CancelablePromise<Root> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/detail",
      query: {
        uid: id,
      },
    });
  }
}
export class ProsubcountService {
  public static getProfileDetail(cookie: string): CancelablePromise<Roots> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/subcount",
      query: {
        cookie: cookie,
      },
    });
  }
}
export class PlayhighqualityService {
  public static getProfileDetail(
    limit: number = 20,
  ): CancelablePromise<Playlist> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/top/playlist/highquality",
      query: {
        limit: limit,
      },
    });
  }
}
