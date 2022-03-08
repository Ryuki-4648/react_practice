import { useState } from "react";
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

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
};
