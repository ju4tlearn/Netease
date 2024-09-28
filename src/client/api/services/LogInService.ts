import { withMemo } from "vue";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import type {
  DataKey,
  DataImg,
  DataCode,
  DataLogin,
  Status,
} from "../models/login";

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
export class LogInServiceSend {
  public static getPhoneSend(phone: string): CancelablePromise<DataCode> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/captcha/sent",
      query: {
        phone: phone,
      },
    });
  }
}
export class LogInServicePhone {
  public static getPhonePhone(
    phone: string,
    captcha: string,
  ): CancelablePromise<DataLogin> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/login/cellphone",
      query: {
        phone: phone,
        captcha: captcha,
      },
    });
  }
}
export class LogInServiceEmail {
  public static getEmail(
    email: string,
    password: string,
  ): CancelablePromise<DataLogin> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/login",
      query: {
        email: email,
        password: password,
      },
    });
  }
}

export class LogInService {
  public static getStatus(key: string): CancelablePromise<Status> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/login/qr/check",
      query: {
        key: key,
      },
    });
  }
}
