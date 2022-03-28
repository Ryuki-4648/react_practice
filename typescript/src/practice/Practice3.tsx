export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  // (num: number)に型指定せず、return.toString()とした場合、下のtotalでエラーが出る

  const onClickPractice = () => {
    let total: number = 0; // 初期化
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
