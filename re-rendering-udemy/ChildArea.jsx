import { React } from "react";
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// openという名前のpropsにopenというstateを渡す

/** propsが変更されない限り、再レンダリングしないようにする
 * memoを使ってコンポーネント全体を囲む
 */
export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされた");

  // 200件の値を用意 forEachでループ
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
