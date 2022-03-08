/* 
  id指定で要素を取得
*/

const title1 = document.getElementById('title');
console.log(title1);
// <h1 id="title">hello world</h1>

const title2 = document.querySelector('#title');
console.log(title2);
// <h1 id="title">hello world</h1>

/*
HTMLタグのようなものが出力される

document: DOMツリーのエントリーポイント
getElementById: idを指定するDOMの取得方法
querySelector: ()内に各種セレクタを指定。「一致する最初の要素」が返却される。
*/




/*
  class名でelementを取得
*/

const containers = document.getElementsByClassName('container');
console.log(containers);
/*
HTML Collectionに複数のelementが格納されて取得される

この場合は.containerが2つあるのでどちらも取得される
*/


const container = document.querySelector('.container');
console.log(container);

/*
querySelectorは一致した最初の要素を返すので、1つのelementが取得される
*/


const containers2 = document.querySelectorAll('.container');
console.log(containers2);
/*
querySelectorAll: 一致する全てのElementを取得できる

getElementsByClassNameとは違い、NosListが取得される
*/



// 従来のjs: 「何に」対して操作をするのか明示的に指定する必要あり






/* 
  DOMの作成、追加、削除
*/

// document.createElement
const divEl = document.createElement('div');
console.log(divEl);
// <div></div>が生成される

// HTMLUnknownElementの生成
const nullEl = document.createElement('nogizaka');
console.log(nullEl);
// <nogizaka></nogizaka>が生成される



// DOMの追加
// append 後ろにどんどん追加
const divEl2 = document.createElement('div');
const pEl = document.createElement('p');
const h2El = document.createElement('h2');

divEl2.appendChild(pEl);
console.log(divEl2);
/* 
divタグの中にpタグが生成される
あるelementの配下に他の「末尾」にelementを追加することができる
*/

divEl2.appendChild(h2El);
console.log(divEl2);
// <div>の中にp,h2タグが追加される


// prepend 前に追加
const divEl3 = document.createElement('div');
const pEl2 = document.createElement('p');
const h2El2 = document.createElement('h2');

divEl3.prepend(pEl2);
divEl3.prepend(h2El2);
console.log(divEl3);

// divの配下にp,h2の順で追加される