import { TodoType } from "./types/todo";

// omit　不要なものを記述する場合
export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  // completed必須じゃない設定なので、デフォルト値を設定しておく

  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
