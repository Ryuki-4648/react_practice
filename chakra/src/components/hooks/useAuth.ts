import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";

export const useAuth = () => {
  // react-router-domのhistoryを利用
  const history = useHistory();

  // loading
  const [loading, setLoading] = useState(false);

  // カスタムフック
  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          // データが見つかった場合はホーム画面に遷移
          if (res.data) {
            history.push("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
          // エラーの場合
        })
        .catch(() => alert("ログインできません"))
        .finally(() => setLoading(false));
    },
    [history]
  ); // [history]とするか、eslint非活性にする
  // カスタムフックから返却
  return { login, loading };
};
