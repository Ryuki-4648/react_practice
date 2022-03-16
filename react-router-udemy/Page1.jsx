import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  // この配列を遷移先のDetailAに渡したい
  // stateの中に変数を持たせると、情報を持ったままルーティングさせることができる
  // 一覧から詳細に遷移する時に無駄なAPIアクセスをするのを防ぐなどに使える
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>Detail A</Link>
      <br />
      <Link to="/page1/detailB">Detail B</Link>
    </div>
  );
};
