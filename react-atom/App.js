import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Top } from "./components/pages/Top";
import { Users } from "./components/pages/Users";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { UserProvider } from "./providers/UserProvider";
import "./styles.css";

/**
 * レイアウトの出し分け
 * 本来はBrowserRouterを<Router/>に書き換えたいがエラーのためそのまま記述
 *
 * <UserProvider>
 *  <Router />
 * </UserProvider>
 */
export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <DefaultLayout>
                <Top />
              </DefaultLayout>
            </Route>
            <Route path="/users">
              <HeaderOnly>
                <Users />
              </HeaderOnly>
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </RecoilRoot>
  );
}
