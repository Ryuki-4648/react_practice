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