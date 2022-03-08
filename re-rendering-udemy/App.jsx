import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea"; // auto importされる
import "./styles.css";

export const App = () => {
  console.log("App レンダリング");

  // input textのstate 初期値は空文字
  const [text, setText] = useState("");
  // 表示ボタンを押したときにstateの値を切り替え、そのフラグをChilAreaに渡す
  const [open, setOpen] = useState(false); // boolean

  /** 表示ボタンの切り替え → setOpenが更新され再レンダリング
   * ChildAreaはpropsを受け取っているので、setOpenが更新されpropsが変更されるとコンポーネントは再レンダリングされる
   *
   * 入力するたびにonChangeTextが呼ばれ、setTextが更新され再レンダリング
   *
   * 親が再レンダリングされるので子であるChildAreaも再レンダリングされる
   */

  // onChangeはeventを受け取る
  // e.target.value：入力値が入ってくる
  // setTextの引数に与えると、入力値がsetTextの更新関数に入る→textのstateが更新される
  const onChangeText = (e) => setText(e.target.value);

  // 現在とは逆の値に切り替える trueならfalseに更新する動き
  const onClickOpen = () => setOpen(!open);

  /** アロー関数：毎回新しい関数を生成しているとみなされる
   * propsが変更しているとみなされChildAreaも再レンダリングされる
   * ChildArea側でmemo化していても、onClickCLoseは違うものと判断され毎回再レンダリングされる
    → useCallbackを使う！！！！
    []空にしておくと、最初に生成したものを使い回すようになる
   */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  /** 変数自体のメモ化 useMemo 頻繁には使わない
   * 最初に読み込まれた時だけ計算が行われる。tempは４のまま使い回される
   */
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};
