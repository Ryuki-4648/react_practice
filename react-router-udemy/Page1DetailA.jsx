import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);
  // pathname: "/page1/detailA", state: Array(100),...

  const { state } = useLocation();
  console.log(state);
  // (100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, …]

  const history = useHistory();

  const onClickBack = () => history.goBack();
  // goBackを呼び出す。ブラウザのバックボタンを同じ挙動

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
