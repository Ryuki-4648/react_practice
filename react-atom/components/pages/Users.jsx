import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";

// 何人分も必要なので、配列を作成していく
const users = [...Array(10).keys()].map(() => {
  return {};
});

const user = {
  name: "yuki",
  image: "https://source.unsplash.com/2l0CWTpcChI",
  email: "12345@aaa.com",
  phone: "1211-444-3333",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
