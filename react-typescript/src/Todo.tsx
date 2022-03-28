import { TodoType } from "./types/todo";

// Todo.tsxはidが不要　pickを使う場合
export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId, completed = false } = props;
  // completed必須じゃない設定なので、デフォルト値を設定しておく

  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
