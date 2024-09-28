export interface DataKey {
  data: any;
  code: number;
  unikey: string;
}
export interface DataImg {
  data: any;
  qrurl: string;
  qrimg: string;
}
export interface DataCode {
  code: number;
  data: boolean;
  message: string;
}
export interface DataLogin {
  loginType: number;
  code: number;
  account: Account;
  token: string;
  profile: Profile;
  bindings: Binding[];
  cookie: string;
}

export interface Status {
  code: number;
  message: string;
  cookie: string;
}
export interface Account {
  id: number;
  userName: string;
  type: number;
  status: number;
  whitelistAuthority: number;
  createTime: number;
  salt: string;
  tokenVersion: number;
  ban: number;
  baoyueVersion: number;
  donateVersion: number;
  vipType: number;
  viptypeVersion: number;
  anonimousUser: boolean;
  uninitialized: boolean;
}

export interface Profile {
  userType: number;
  vipType: number;
  authStatus: number;
  djStatus: number;
  detailDescription: string;
  experts: Experts;
  expertTags: any;
  accountStatus: number;
  nickname: string;
  birthday: number;
  gender: number;
  province: number;
  city: number;
  avatarImgId: number;
  backgroundImgId: number;
  avatarUrl: string;
  defaultAvatar: boolean;
  mutual: boolean;
  remarkName: any;
  followed: boolean;
  backgroundUrl: string;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  description: string;
  userId: number;
  signature: string;
  authority: number;
  followeds: number;
  follows: number;
  eventCount: number;
  avatarDetail: any;
  playlistCount: number;
  playlistBeSubscribedCount: number;
}

export interface Experts {}

export interface Binding {
  bindingTime: number;
  refreshTime: number;
  expiresIn: number;
  tokenJsonStr: string;
  url: string;
  expired: boolean;
  userId: number;
  id: number;
  type: number;
}
