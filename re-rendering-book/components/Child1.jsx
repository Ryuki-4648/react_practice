import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px"
};

// propsを渡す
export const Child1 = memo((props) => {
  console.log("Child1レンダリング");

  // propsの中から何を渡す？
  // 分割代入でpropsから関数を展開
  const { onClickReset } = props;

  return (
    <div style={style}>
      <p>Child1</p>

      {/* 渡された関数を実行するリセットボタンを設置 */}
      <button onClick={onClickReset}>リセット</button>
      {/* はじめonClickReset={onClickReset}にしてたのでエラーだった
    onClickというイベントは設定されているのでok */}

      <Child2 />
      <Child3 />
    </div>
  );
});
