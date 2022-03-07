import React from "react";

// css in jsの場合
const style = {
  height: "30px", // 文字列。;ではなく,になる
  display: "flex",
  justifyContent: "space-between", // キャメルケースでかく
  margin: "0 auto 30px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
