import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUsers = () => {
  // 選択されたユーザー
  // 初期値null　型はUserまたはnull
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // user clickしたときにユーザーを特定する関数
  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    // findメソッド　：条件に一致する「最初」の要素を返す。配列に対して使える。
    // 各ユーザーを見ていく。UserCardから渡されたidとユーザーのidが一致する要素を返す
    const targetUser = users.find((user) => user.id === id);

    /**
     * setSelectedUser(targetUser)がエラーになる件
     * findで見つからない場合はundefinedが返される
     * ??：targetUserがundefinedの場合はnullを返す式を書くことで回避する方法もある
     */
    setSelectedUser(targetUser ?? null);
  }, []);

  return { onSelectUser };
};
