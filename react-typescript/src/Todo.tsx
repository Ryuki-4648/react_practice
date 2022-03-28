export const Todo = (props) => {
  const { title, userid, completed } = props;

  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}(ユーザー:${userid})`}</p>;
};

// propsの型指定していない場合。親コンポーネントからcompletedを渡されていないけどコード上エラーになっていない