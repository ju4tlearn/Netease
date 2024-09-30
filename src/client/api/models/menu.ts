export interface Root {
  level: number;
  listenSongs: number;
  userPoint: UserPoint;
  mobileSign: boolean;
  pcSign: boolean;
  profile: Profile;
  peopleCanSeeMyPlayRecord: boolean;
  bindings: Binding[];
  adValid: boolean;
  code: number;
  newUser: boolean;
  recallUser: boolean;
  createTime: number;
  createDays: number;
  profileVillageInfo: ProfileVillageInfo;
}

export interface UserPoint {
  userId: number;
  balance: number;
  updateTime: number;
  version: number;
  status: number;
  blockBalance: number;
}
export interface Profile {
  privacyItemUnlimit: PrivacyItemUnlimit;
  avatarDetail: any;
  createTime: number;
  vipType: number;
  nickname: string;
  avatarUrl: string;
  followed: boolean;
  remarkName: any;
  mutual: boolean;
  authStatus: number;
  detailDescription: string;
  experts: Experts;
  expertTags: any;
  userType: number;
  djStatus: number;
  accountStatus: number;
  birthday: number;
  gender: number;
  province: number;
  city: number;
  defaultAvatar: boolean;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  description: string;
  userId: number;
  signature: string;
  authority: number;
  followeds: number;
  follows: number;
  blacklist: boolean;
  eventCount: number;
  allSubscribedCount: number;
  playlistBeSubscribedCount: number;
  followTime: any;
  followMe: boolean;
  artistIdentity: any[];
  cCount: number;
  inBlacklist: boolean;
  sDJPCount: number;
  playlistCount: number;
  sCount: number;
  newFollows: number;
}

export interface PrivacyItemUnlimit {
  area: boolean;
  college: boolean;
  gender: boolean;
  age: boolean;
  villageAge: boolean;
}

export interface Experts {}

export interface Binding {
  expiresIn: number;
  refreshTime: number;
  bindingTime: number;
  tokenJsonStr: any;
  url: string;
  expired: boolean;
  userId: number;
  id: number;
  type: number;
}

export interface ProfileVillageInfo {
  title: string;
  imageUrl: any;
  targetUrl: string;
}
export interface Roots {
  programCount: number;
  djRadioCount: number;
  mvCount: number;
  artistCount: number;
  newProgramCount: number;
  createDjRadioCount: number;
  createdPlaylistCount: number;
  subPlaylistCount: number;
  code: number;
}
export interface Root {
  playlists: Playlist[];
  code: number;
  more: boolean;
  lasttime: number;
  total: number;
}

export interface Playlist {
  name: string;
  id: number;
  trackNumberUpdateTime: number;
  status: number;
  userId: number;
  createTime: number;
  updateTime: number;
  subscribedCount: number;
  trackCount: number;
  cloudTrackCount: number;
  coverImgUrl: string;
  coverImgId: number;
  description: string;
  tags: string[];
  playCount: number;
  trackUpdateTime: number;
  specialType: number;
  totalDuration: number;
  creator: Creator;
  tracks: any;
  subscribers: Subscriber[];
  subscribed: any;
  commentThreadId: string;
  newImported: boolean;
  adType: number;
  highQuality: boolean;
  privacy: number;
  ordered: boolean;
  anonimous: boolean;
  coverStatus: number;
  recommendInfo: any;
  socialPlaylistCover: any;
  recommendText: any;
  shareCount: number;
  coverImgId_str?: string;
  commentCount: number;
  copywriter: string;
  tag: string;
}

export interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: string[];
  experts?: Experts;
  djStatus: number;
  vipType: number;
  remarkName: any;
  authenticationTypes: number;
  avatarDetail: AvatarDetail;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str?: string;
}

export interface Experts {
  "2": string;
  "1"?: string;
}

export interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

export interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags: any;
  experts: any;
  djStatus: number;
  vipType: number;
  remarkName: any;
  authenticationTypes: number;
  avatarDetail: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str?: string;
}
