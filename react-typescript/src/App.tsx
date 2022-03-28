import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
/**元の形
 * "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
 */

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onCLickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        //console.log(res); // {data: Array(200),....

        //res.data.map((todo) => todo.userId)
        setTodos(res.data); // 文字列を渡すとエラーになる
      });
  };
  return (
    <div className="App">
      <button onClick={onCLickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
