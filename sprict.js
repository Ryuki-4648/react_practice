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



/*
  デフォルト値
*/

const sayHello2 = (yourname) => console.log(`こんにちは${yourname}さん。`);
sayHello2();
// こんにちはundefinedさん。　と出力される

const sayHello3 = (yourname = "ゲスト") => console.log(`こんにちは${yourname}さん。`);
sayHello3();

const myProf4 = {
  age6: 24,
};
const { name6 = "guest" } = myProf4;
console.log(`こんにちは${name6}さん。`);


/*
  スプレッド構文
*/

const arr2 = [1, 2, 3, 4, 5, 10];
console.log(...arr2);

// ２つの引数を合計して出力する関数
const arr3 = [1, 2, 3, 4];
const summaryFunc = (num1, num2) => console.log(num1 + num2);
summaryFunc(arr3[0], arr3[1]); // 1 + 2 = 3
summaryFunc(...arr3); // 1 + 2 = 3
console.log(...arr3);

// 要素をまとめる
const arr4 = [10, 20, 30, 40, 50, 60];
const [num1, num2, ...arr5] = arr4;
console.log(num1);
console.log(num2);
console.log(...arr5); // 30 40 50 60

const arr6 = [2, 4, 6, 8];
const arr7 = [1, 3, 5, 7];
const arr8 = [...arr6]; // スプレッド構文でコピー　新しい配列が生成される
const arr9 = [...arr6, ...arr7]; // スプレッド構文で結合
console.log(arr9);

// 複数のオブジェクトの結合
const obj2 = {
  val1: 10,
  val2: 20
};
const obj3 = {
  val3: 30,
  val4: 40
};
const obj4 = {...obj2}; // スプレッド構文でコピー
const obj5 = {...obj2, ...obj3}; // スプレッド構文で結合
console.log(obj4);
console.log(obj5);


// イコールでコピーすると参照値が引き継がれてしまう
const arr10 = [10, 20];
const arr11 = arr10;
console.log(arr10); // 10,20
console.log(arr11); // 10,20

arr11[0] = 50;
console.log(arr10); // 50,20 コピー元の配列にも影響を与える
console.log(arr11); // 50,20

// スプレッド構文だと
const arr14 = [10, 20]; // コピー元
const arr13 = [...arr14];
arr13[0] = 40;
console.log(arr14); // コピー元は10 20のまま




// オブジェクトの省略記法
const membername = "与田祐希";
const yourage = "21";
const nogi1 = {
  membernane: membername,
  yourage: yourage,
};
console.log(nogi1);

// 簡略化バージョン
const nogi2 = {
  membername,
  yourage,
};
console.log(nogi2);




// 繰り返し処理 (map , filter)

// for文の場合
const arr15 = [1, 2, 3, 4, 5, 6];
for ( let i = 0; i < arr15.length; i++ ) {
  console.log(arr15[i]);
}

// map
const nameArr = [1, 2, 3, 4, 5, 6];
//console.log(arr16);
const nameArr2 = nameArr.map( (name) => {
  return name;
} );
// map()の中に関数を書く () => {}
console.log(nameArr2); // 1, 2, 3, 4, 5, 6

nameArr.map((name) => console.log(name));



// filter 条件に一致するものを取り出す
const numArr = [1, 2, 3, 4, 5, 6];
const newNumArr = numArr.filter( (num) => {
  return num % 2 === 1; // 奇数を取り出す場合
} );

const nameArr3 = ["白石", "西野", "橋本"];
nameArr3.map( (name, index) => 
  console.log(`${index + 1}番目は${name}です。`)
);

const newNameArr = nameArr3.map( (name) => {
  if ( name === "白石" ) {
    return name;
  } else {
    return `${name}さん`;
  }
} );
console.log(newNameArr);