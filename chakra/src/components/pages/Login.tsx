import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

/**
 * Stack 囲った要素を等間隔に配置してくれる
 */
export const Login: VFC = memo(() => {
  // ユーザーID入力した値をステートに保持していく
  // 型推論：useState<string>としてもいいが、初期値が空文字なのでusrIdは自動でstring型となる
  const [userId, setUserId] = useState("");

  // テキストボックスのイベントの型指定はHTMLInputElement
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
