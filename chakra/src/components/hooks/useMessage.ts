import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useMessage = () => {
  // chakra ui toast
  const toast = useToast();

  const showMessage = useCallback(() => {}, []);
  return { showMessage };
};
