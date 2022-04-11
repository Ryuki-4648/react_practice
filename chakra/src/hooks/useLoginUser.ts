import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

// useContext:contextの値を扱える
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
