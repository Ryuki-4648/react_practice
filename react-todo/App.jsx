import { React } from "react";
import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    // 何行目が押された？ index
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); // 何番目の要素か, いくつ削除するか
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompeleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos); //
    setCompleteTodos(newCompeleteTodos);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    const newCompeleteTodos = [...completeTodos];
    newCompeleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompeleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <section className="todo-area">
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
          disabled={incompleteTodos.length >= 5}
        />
        {incompleteTodos.length >= 5 && (
          <p style={{ color: "red", marginBottom: "10px" }}>
            登録できるtodoは5個までです。
          </p>
        )}
        <IncompleteTodos
          todos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />

        <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
      </section>
    </>
  );
};
