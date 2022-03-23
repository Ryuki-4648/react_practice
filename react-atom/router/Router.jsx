import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";

/**
 * switch　画面の出し分け
 * route exact完全一致
 */

// 本来はRouterをここに記述してApp.jsに<Router />をしたいがエラーになる
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
