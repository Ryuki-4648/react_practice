// inlineでスタイルをあてる方法

export const InlineStyle = () => {
  const contanierStyle = {
    // この中はjsのオブジェクトとなる
    // キャメルケースで書く、プロパティ名と適用する値は文字列でかく
    border: "1px solid #392eff",
    borderRadius: "20px",
    padding: "20px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };

  const titleStyle = {
    margin: 0,
    color: "#3d84a4",
    fontSize: "20px"
  };

  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={contanierStyle}>
      <p style={titleStyle}>Inline Styles</p>
      <button style={buttonStyle}>ボタン</button>
    </div>
  );
};
