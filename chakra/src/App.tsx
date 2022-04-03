// 外部ライブラリからのインポート
import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// 内部
import theme from "./theme/theme";
import { Router } from "./router/Router";

// react-routerを使う場合は　BrowserRouterで囲む
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
