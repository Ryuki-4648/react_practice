import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  // useState等の更新関数の型　Dispatch, SetStateActionを使っていく
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

// as 強制的に型を認識させる
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// 親コンポーネントからchildrenをまとめて受け取る
export const LoginUserProvider = (props: { children: ReactNode }) => {
  // propsの中にchildrenがあるのでそれを渡す
  const { children } = props;

  // loginUserと更新関数
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  // contextの値として渡すものをvalueに渡していく
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
