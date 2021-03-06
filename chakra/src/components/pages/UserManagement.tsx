/* eslint-disable react-hooks/exhaustive-deps */

import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getUsers, users, loading } = useAllUsers();

  const { onSelectUser, selectedUser } = useSelectUsers();

  const { loginUser } = useLoginUser();
  console.log(loginUser);

  console.log(selectedUser); // user情報を取得できている
  // selectedUserの情報をdetail modalに渡し、モーダルを表示していきたい

  /* 画面表示（マウント）時にユーザー一覧を取得したい
  空配列：初期マウント時一回だけ実行
  */
  useEffect(() => getUsers(), []);

  // idが渡ってくる
  // モーダル開くと入力値が真っ白になっている。useCallBack使うと陥りやすい。
  // usersを依存配列に設定する
  const onClickUser = useCallback(
    (id: number) => {
      console.log(id);
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

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
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}

      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
    </>
  );
});
