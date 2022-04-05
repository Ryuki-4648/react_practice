import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

/**
 * props:ボタンの名称を受け取れたらいい
 * →chilren
 * 親Componentのタグの間に入れられた要素を表示する
 *
 * props.children の型定義には ReactNode を使う
 */

// 何も入力していないときはボタンを押せないようにする
type Props = {
  children: ReactNode;
  disabled?: boolean; // オプションのpropsとする
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
