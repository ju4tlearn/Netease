import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import type { DataKey, DataImg } from "../models/login";

export class LogInServiceKey {
  public static getQuickKey(): CancelablePromise<DataKey> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/login/qr/key",
    });
  }
}
export class LogInServiceImg {
  public static getQuickImg(
    key: string,
    qrimg: boolean = false,
  ): CancelablePromise<DataImg> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/login/qr/create",
      query: {
        key: key,
        qrimg: qrimg,
      },
    });
  }
}
