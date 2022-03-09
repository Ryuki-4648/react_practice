// React本のほうの練習
// 再レンダリングについて

import { useState, memo, useCallback, useMemo } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("App レンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  // 関数をメモ化　（useCallbackのbackは小文字に注意！）
  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);
  // 関数内で扱っている変数は依存配列に設定すること！！

  // useMemo
  const sum = useMemo(() => 1 + 3, []);
  console.log(sum);

  return (
    <>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>
      {/* propsとして関数を設定 */}
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
