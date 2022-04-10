import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

// propsとして受け取りたいもの　画像と名前
// どのユーザーが押されたかオンクリックで認識。引数としてユーザーのidを設定
type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;

  return (
    <Box
      w="260"
      h="260"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: ".8" }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
