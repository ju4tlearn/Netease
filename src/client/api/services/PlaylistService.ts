import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import type { PlaylistDetailResponse } from "../models/playlistDetail";

export class PlaylistService {
  public static getPlaylistDetail(
    id: number,
    s: number = 8,
  ): CancelablePromise<PlaylistDetailResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/playlist/detail",
      query: {
        id: id,
        s: s,
      },
    });
  }
}
