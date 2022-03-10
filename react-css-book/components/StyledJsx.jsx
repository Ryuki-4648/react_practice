// styled-jsxをインストールする

/**
 * コンポーネントの中でスタイルタグを書いていく形
 * テンプレート文字列のため``で囲む
 * デフォルトでは擬似要素は使えないのでhoverは削除
 * styled jsxはnext.jsでデフォルトで入っている
 * */

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSX</p>
        <button className="button">ボタン</button>
      </div>

      <style jsx="true">
        {`
          .container {
            border-radius: 20px;
            padding: 20px;
            margin: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border: 1px solid orange;
          }
          .title {
            margin: 0;
            color: #3d84a4;
            font-size: 20px;
          }
          .button {
            background-color: #abedd8;
            border: none;
            padding: 8px;
            border-radius: 8px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};
