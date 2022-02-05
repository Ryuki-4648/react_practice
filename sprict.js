/*
  var,let,const
*/

// varは上書きも再宣言も可能
var val1 = "var変数";
console.log(val1);

val1 = "var変数を上書き";
console.log(val1);

var val1 = "var変数を再宣言";
console.log(val1);


// letは上書きが可能。再宣言は不可。
let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2); // 上書きできている

//let val2 = "let変数"
// エラーになる


// constは上書きも再宣言も不可
const val3 = "const変数";
console.log(val3);

//val3 = "const変数を上書き";
// ↑のだとエラーになる。Uncaught TypeError: Assignment to constant variable.


/* オブジェクトや配列などのオブジェクト型は
    constで定義していても中の値を変更できる */
const obj1 = {
  name: "白石麻衣",
  age: 24,
};
console.log(obj1);

// プロパティ値を変更
obj1.name = "渡辺梨加";
console.log(obj1);

// プロパティの追加
obj1.group = "櫻坂";
console.log(obj1);


// 配列の値を変更したり追加したりする例
const arr1 = ["nogizaka", "sakurazaka"];
console.log(arr1);

// 一つ目の値を変更
arr1[0] = "hinatazaka";
console.log(arr1);

// 値の追加
arr1.push("hinatazala"); // ★push
console.log(arr1);



/*
  テンプレートリテラル
*/

const name1 = "白石麻衣";
const age1 = "29";
const message1 = `私の名前は${name1}です。年齢は${age1}才です。`;
console.log(message1);

// テンプレートリテラルの中で、関数の呼び出しを計算を実行
function sayHello() {
  return "こんにちは";
}
const month1 = 1;
const message2 = `みなさん${sayHello()}。今日から${month1 * 3}月ですね。`;
console.log(message2);


/*
  アロー関数
*/

// 方法1
function func1(value) {
  return value;
}
console.log(func1("func1です"));

// 方法2
const func2 = function(value) {
  return value;
};
console.log(func2("func2です"));

// アロー関数
const func3 = (value) => {
  return value;
};
console.log(func3("func3です"));

// アロー関数は省略可能
const func4 = value => {
  return value;
};
console.log(func4("func4です"));

// 単一行 なみかっことreturnを省略できる
const func5 = (num1, num2) => num1 + num2;

// 返却値が複数行の場合
const func6 = (val1, val2) => (
  {
    name2: val1,
    age2: val2,
  }
)
console.log(func6('西野七瀬', 26));


/*
  分割代入
*/

const myProf = {
  name3: "守屋麗奈",
  age3: 23,
};

const { name3, age3 } = myProf;
const message3 = `私の名前は${name3}です。年齢は${age3}歳です。`;
console.log(message3);

// 抽出したプロパティの別の名前をつける
const myProf2 = {
  name4: "平手友梨奈",
  age4: 21,
};
const { name4: newName, age4: newAge } = myProf2;
const message4 = `私の名前は${newName}です。年齢は${newAge}歳です。`;
console.log(message4);

// 配列の分割代入
const myProf3 = ['橋本奈々未', 29];
const [ name5, age5 ] = myProf3;
const message5 = `私の名前は${name5}です。年齢は${age5}歳です。`;
console.log(message5);