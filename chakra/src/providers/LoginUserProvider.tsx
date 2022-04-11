import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

type LoginUserContextType = {
  loginUser: User | null;
  // useState等の更新関数の型　Dispatch, SetStateActionを使っていく
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

// as 強制的に型を認識させる
const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// 親コンポーネントからchildrenをまとめて受け取る
export const LoginUserProvider = (props: { children: ReactNode }) => {
  // propsの中にchildrenがあるのでそれを渡す
  const { children } = props;

  // loginUserと更新関数
  const [loginUser, setLoginUser] = useState<User | null>(null);

  // contextの値として渡すものをvalueに渡していく
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
