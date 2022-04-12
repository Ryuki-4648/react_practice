import {
  Stack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";

import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

// useSelectUsersのsetSelectedUserが渡ってくため、useState<User | null>と同じ型になる
type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  /**
   * valueの値（value={user?.username}など）をstate経由で渡す
   * それぞれ対応したstateを用意
   */
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // 渡されるuserの値が変わるたびに実行させる。　依存配列にはuserを設定。
  useEffect(() => {
    setUsername(user?.username ?? ""); // 左辺がundefined or nullのときに右辺を実行
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onClickUpdate = () => alert("aa");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={username} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>メール</FormLabel>
              <Input value={email} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input value={phone} isReadOnly={!isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
