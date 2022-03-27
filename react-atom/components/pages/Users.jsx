import React from "react";
import styled from "styled-components";
// import { useLocation } from "react-router-dom"; // 遷移時のstateを取得する
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

// 何人分も必要なので、配列を作成していく
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `$名前-${val}`,
    image: "https://source.unsplash.com/2l0CWTpcChI",
    email: "12345@aaa.com",
    phone: "1211-444-3333",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

/*
setUserInfoを読んだ時、usrInfoの値が更新される
Usersコンポーネントは更新される
親が再レンダリングされたらが子もすべて再レンダリングされる
＝　配下にあるSearchInput UserCardも再レンダリングされてしまう
→　memoを使用する
*/
export const Users = () => {
  // contextを使う場合
  // 今のuserInfoのisAdminフラグを見てそれと反対のuserInfoを更新する
  //const { userInfo, setUserInfo } = useContext(UserContext);

  // Recoilを使う場合
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
