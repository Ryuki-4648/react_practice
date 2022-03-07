import { React } from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <>
      <div className="complete-area common-area">
        <h2 className="title">Completed</h2>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p className="complete-item-name">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
