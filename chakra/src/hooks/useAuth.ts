import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  // react-router-domのhistoryを利用
  const history = useHistory();

  // ログイン時のメッセージ表示
  const { showMessage } = useMessage();

  const { setLoginUser } = useLoginUser();

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
            // isAdminフラグ
            // id=10のときフラグをtrueにする
            // 10以外でログインするとコンソールでisAdmin: falseとなる
            const isAdmin = res.data.id === 10 ? true : false;
            // 新しくオブジェクトを定義するような形。追加でisAdminを渡す（スプレッド構文）
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
          // エラーの場合
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    // showMessageも追加しないとエラーになる。もしくはeslintで非活性にするのもok
    [history, showMessage, setLoginUser]
  ); // [history]とするか、eslint非活性にする
  // カスタムフックから返却
  return { login, loading };
};
