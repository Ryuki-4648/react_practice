// スタイルを当てたコンポーネントを作成していく方法

import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>Styled Components</STitle>
      <SButton>ボタン</SButton>
    </SContainer>
  );
};

// スタイルをあてたコンポーネントの作成
// 変数名と　styled.htmlタグ名、バッククオートで囲む
// sassと同じ記法なのでホバーも書ける
const SContainer = styled.div`
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid pink;
`;

const STitle = styled.p`
  margin: 0;
  color: red;
  font-size: 20px;
`;

const SButton = styled.button`
  background-color: beige;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
