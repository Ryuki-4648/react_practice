import React from "react";

// Linkはaタグみたいなもの。リンクを表現する。ページ遷移処理を行うことができる
// Switch　だし分けを行う。どのパスの時にどのコンポーネントを出していくかという設定。
// Route　ルートにマッチしたものを表示していく
import { BrowserRouter, Link } from "react-router-dom";
// ※ <Route>のところでエラーが発生。"react-router-dom": "5.3.0",に下げた

import { Router } from "./router/Router/";
import "./styles.css";

// BrowserRouterタグで囲んだ中でルーティングを有効にする
/**
 * exact:完全一致したものを対象にするかどうか
 * <Route path="/">の場合・・・
 * pathがルート配下のものはすべて Homeが対象となる
 *
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
}
