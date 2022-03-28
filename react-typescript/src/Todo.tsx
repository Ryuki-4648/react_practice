// propsの型指定
type TodoType = {
  userId: number;
  title: string;
  completed?: boolean; // 必須じゃない場合 オプション的なもの
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  // completed必須じゃない設定なので、デフォルト値を設定しておく

  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
