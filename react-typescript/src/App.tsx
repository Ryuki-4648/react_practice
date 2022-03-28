import axios from "axios";
import "./styles.css";

export default function App() {
  const onCLickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res); // {data: Array(200),....
    });
  };
  return (
    <div className="App">
      <button onClick={onCLickFetchData}>データ取得</button>
    </div>
  );
}
