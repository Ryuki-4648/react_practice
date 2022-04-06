import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useMessage = () => {
  // chakra ui toast
  const toast = useToast();

  const showMessage = useCallback(() => {
    toast({
      position: "top",
      duration: 2000, // message２秒間残る
      isClosable: true // 閉じれるかどうか
    });
  }, []);
  return { showMessage };
};
