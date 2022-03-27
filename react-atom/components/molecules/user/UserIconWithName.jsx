import React, { memo } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil"; // 値を参照するだけ
// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

// UserIconWithNameのなかでisAdminの判定を行う
export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName"); // contextの値を参照しているため再レンダリングされる

  const { image, name } = props;
  //const { userInfo } = useContext(UserContext); // 値だけ使用していて更新関数は必要ないことがわかる

  // 値を見るときはuseReoilValueを使ってどのstateかを指定する
  const userInfo = useRecoilValue(userState);

  // userInfoが存在しているかどうか
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={220} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
