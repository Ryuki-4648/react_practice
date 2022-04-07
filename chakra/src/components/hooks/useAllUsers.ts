/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/api/user"; // Userの型
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  // useState<boolean>としてもいいが型推論でtrue falseでなってくれるのでつけなくてもいい

  const [users, setUsers] = useState<Array<User>>();

  /**
   * axios使ってapiコールしていく
   * getUsers:他のコンポーネントで使う際に再生成されないようuseCallbackで囲む
   */
  const getUsers = useCallback(() => {
    setLoading(true);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, loading, users };
};
