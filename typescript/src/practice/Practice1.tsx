export const Practice1 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    calcTotalFee(1000); // 100０でも'1000'でも1100となる 型変換をしてくれる
    // calcTotalFee('1,000'); // NaN
  };

  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
