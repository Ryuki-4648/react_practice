/**
 * Router.jsxの中身もコンポーネント化する
 * Routeの配列、ループして表示させる
 * exactかどうか、pathの設定、どのコンポーネントをレンダリングしていくか
 * の3つが異なる
 */

import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
