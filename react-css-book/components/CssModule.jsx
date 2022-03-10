// コンポーネントからcssを読み込む
import classes from "./CssModules.module.scss";

// classesの中にclassのかたまりが入ってくる
// 変数に割り当てる

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Css Modules</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
};
