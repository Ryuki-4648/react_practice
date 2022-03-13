import React from "react";

// Linkはaタグみたいなもの。リンクを表現する。ページ遷移処理を行うことができる
// Switch　だし分けを行う。どのパスの時にどのコンポーネントを出していくかという設定。
// Route　ルートにマッチしたものを表示していく
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// ※ <Route>のところでエラーが発生。"react-router-dom": "5.3.0",に下げた

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
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

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {console.log(url)}
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
