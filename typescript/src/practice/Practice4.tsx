export const Practice4 = () => {
  // 引数numに型を指定してあげないとエラーになる。:numberもしくは:any
  // tsconfig.tsxで"noImplicitAny": false　と指定すると型指定しなくてもエラーにならない
  const calcTotalFee = (num: any) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    calcTotalFee(1000);
  };

  return (
    <div>
      <p>練習問題:設定ファイルをさわってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
