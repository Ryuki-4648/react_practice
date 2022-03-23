import styled from "styled-components";
import { useLocation } from "react-router-dom"; // 遷移時のstateを取得する
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

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

export const Users = () => {
  // stateを受け取る
  const { state } = useLocation();
  // console.log(state); 管理者のときは{isAdmin: true}　一般のときは{isAdmin: true}となる
  const isAdmin = state ? state.isAdmin : false; // state存在しない場合はfalse
  // UserCardにisAdminを渡す
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
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
