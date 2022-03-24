import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

// memoの使用　propsに変更がない限りは再レンダリングされないようにする
export const UserCard = memo((props) => {
  console.log("usercard");
  const { user } = props;

  // UserIconWithNameにisAdminを渡す
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>電話番号</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB URL</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 52px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
