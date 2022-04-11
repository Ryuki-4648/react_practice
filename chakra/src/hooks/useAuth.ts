import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  // react-router-domのhistoryを利用
  const history = useHistory();

  // ログイン時のメッセージ表示
  const { showMessage } = useMessage();

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
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            //alert("ユーザーが見つかりません");
          }
          // エラーの場合
        })
        .catch(() =>
          showMessage({ title: "ログインできません", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    // showMessageも追加しないとエラーになる。もしくはeslintで非活性にするのもok
    [history, showMessage]
  ); // [history]とするか、eslint非活性にする
  // カスタムフックから返却
  return { login, loading };
};
