import { FC } from "react";
// 関数コンポーネントの型 childrenを受け取れる

type Props = {
  color: string;
  fontSize: string;
};

export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
