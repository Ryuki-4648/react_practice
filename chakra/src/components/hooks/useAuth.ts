import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";

export const useAuth = () => {
  // react-router-domのhistoryを利用
  const history = useHistory();

  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users${id}`)
        .then((res) => {
          // データが見つかった場合はホーム画面に遷移
          if (res.data) {
            history.push("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
          // エラーの場合
        })
        .catch(() => alert("ログインできません"));
    },
    [history]
  ); // [history]とするか、eslint非活性にする
  return { login };
};
