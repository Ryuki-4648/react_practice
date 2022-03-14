import { useParams, useLocation } from "react-router-dom";

/**
 * console.log(useLocation());の出力結果
 * {pathname: "/page2/９９９", search: "?name=hogehoge", hash: "", state: undefined, key: "3axvv3"}
 * 
 * QueryParameterのページに飛ぶと、searchの中身が「?name=hogehoge」となっている
 */

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation(); // searchには?以降の文字列が入る
  console.log(search); // ?name=hogehoge

  // URLSearchParamsはクエリパラメータを便利に扱えるためのメソッドといろいろ提供している
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です。</p>
      <p>クエリメーターは{query.get("name")}です。</p>
    </div>
  );
};
