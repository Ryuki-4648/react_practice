import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

/**
 * Flex:flexboxみたいなのができる
 * as nav:ナビタグとしていく　　asをつけることで、どのタグとしてレンダリングするか指定できる
 *
 * 文字のサイズmd md以上にあったら文字を大きくする
 *
 * flexGrow:伸び率
 */
export const Header: VFC = memo(() => {
  // chakra ui
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  // 画面遷移:homeを押したとき
  const onClickHome = () => history.push("/home");

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
