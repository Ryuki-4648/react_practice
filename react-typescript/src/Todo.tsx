import { TodoType } from "./types/todo";
import { VFC } from "react";

// omit　不要なものを記述する場合
export const Todo:VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  // completed必須じゃない設定なので、デフォルト値を設定しておく

  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
