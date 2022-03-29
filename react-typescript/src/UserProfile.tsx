import { VFC } from "react";
import { User } from "./types/user";

// コンポーネントのpropsを定義
type Props = {
  user: User;
};

/**
 * hobbies 配列になっている
 * jsのjoinを使用　/区切りの文字列で連結する
 * 趣味１ / 趣味２ / 趣味３ / ....となっていく
 *
 * hobbies? とするととで趣味が未記入でもundefinedを渡してくれる
 */
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;

  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
