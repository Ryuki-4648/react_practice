import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error"; // この4つの文字列しか受け取れない
};

export const useMessage = () => {
  // chakra ui toast
  const toast = useToast();

  // 何をpropsとして受け取るか
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;

      toast({
        title, // 同じ名称なのでコロン以降省略できる
        status,
        position: "top",
        duration: 2000, // message２秒間残る
        isClosable: true // 閉じれるかどうか
      });
    },
    [toast]
  );
  return { showMessage };
};
