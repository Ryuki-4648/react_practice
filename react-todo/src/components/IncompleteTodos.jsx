import { React } from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incomplete-area common-area">
        <h2 className="title">Incomplete</h2>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p className="incomplete-item-name">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
