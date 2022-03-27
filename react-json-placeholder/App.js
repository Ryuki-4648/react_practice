import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    // https://jsonplaceholder.typicode.com/ のResourcesからURLをとってくる
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //console.log(res); // resには取得したデータの情報が入ってくる 10個の配列が返ってくる
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    /**
     * catch〜：エラーが起きた時に実行する関数
     * Error: Request failed with status code 404
     */
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data); // idが１のユーザーを取得
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}
