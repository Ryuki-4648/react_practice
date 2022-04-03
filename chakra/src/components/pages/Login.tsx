import { memo, VFC } from "react";

// 関数コンポーネントなのでVFCで型を定義
// memo化しておく
export const Login: VFC = memo(() => {
  return <p>ログインページ</p>;
});
