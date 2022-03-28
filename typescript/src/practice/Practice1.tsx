export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
    // calcTotalFeeをホバー：引数はナンバー型で何も返さない関数（void）であると表示される
  };

  const onClickPractice = () => {
    calcTotalFee(1000); // '1000'にするとエラーになってくれる
  };

  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
