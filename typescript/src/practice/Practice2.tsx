export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
    // 返却値に型指定した場合
    // return total.toString(); エラーであることがわかる

    // 返却値の型を指定ていない場合
    // getTotalFeeをホバー：引数,返り値ともにナンバー型
    // 型推論がはたらく。returnの方がnumberとなっている
  };

  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
