/* eslint-disable react-hooks/exhaustive-deps */

import {
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getUsers, users, loading } = useAllUsers();

  /* 画面表示（マウント）時にユーザー一覧を取得したい
  空配列：初期マウント時一回だけ実行
  */
  useEffect(() => getUsers(), []);

  const onClickUser = () => onOpen();

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <p>test</p>
        </ModalContent>
      </Modal>
    </>
  );
});
