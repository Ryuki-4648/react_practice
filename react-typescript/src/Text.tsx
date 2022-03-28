import { VFC } from "react";
// 関数コンポーネントの型 childrenを受け取れる

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};

// VFCはchildrenを含まない　現在、FCでは暗黙的にchildrenを含む
// react ver18ではFCにchildrenを含まなくなる
