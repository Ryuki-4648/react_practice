import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil"; // set関数だけを使用する 値は参照せず、更新だけしていくもの
import { SecondaryButton } from "../atoms/button/SecondaryButton";
//import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // contextの参照　useContextを使用
  // 更新関数であるsetUserInfoを取り出す
  //const { setUserInfo } = useContext(UserContext);

  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users"); // stateを渡さなくて良くなる
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
