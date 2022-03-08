/*
  button追加
*/

const btn = document.createElement('button'); // ボタンの生成
btn.textContent = "button"; // ボタンのラベル設定

const divEl = document.querySelector('.container'); // divタグの取得

divEl.appendChild(btn);


/*
  DOMの削除
*/

// 特定の要素を削除
const h2El = document.getElementById('hoge');
const bodyEl = document.querySelector('body');

bodyEl.removeChild(h2El);
// pタグのhogehogeが削除された


// 子要素を全て削除したいとき
const bodyEl2 = document.querySelector('body');
bodyEl2.textContent = null;
// まっさらな状態になる