/**
 * このコンポーネントは何の役割があるのかを理解しておく
 */

import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #40415e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 9999px;
  &:hover {
    opacity: 0.8;
  }
`;
