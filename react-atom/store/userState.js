// Recoilを使ってグローバルなstateを作成する

import { atom } from "recoil";

export const userState = atom({
  key: "userState", // 一意のキー
  default: { isAdmin: false } // 初期値設定
});
