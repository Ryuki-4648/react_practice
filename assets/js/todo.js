const onClickAdd = () => {

  // 入力値を取得し変数に入れる
  const inputText = document.getElementById('add-text').value;
  //alert(inputText);

  // 入力ボックスの値を初期化する
  document.getElementById('add-text').value = "";


  // liを生成する
  const li = document.createElement('li');
  // liにclass名を付与する 
  li.className = "list-row";

  // pタグ生成、class名の付与、入力した値をpタグ内に挿入
  const p = document.createElement('p');
  p.className = "item-name";
  p.innerText = inputText; //p.textContent = inputText;
  //console.log(p);

  /*
  textContent: 全てを表示するための単純なテキストとして扱う
  innerText: エスケープ文字がその通りに機能する ¥n
  innerHTML: innerHTMLはHTMLタグがあるとタグとして機能
  */


  // 未完了のリストに追加する
  document.getElementById('incomplete-list').appendChild(li);


  // 完了ボタンを生成
  const completeButton = document.createElement('button');
  completeButton.innerText = "完了";
  //console.log(completeButton);

  // 削除ボタンを生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "削除";
  //console.log(deleteButton);


  // liの子要素に各要素を配置する
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  console.log(li);
};

document.getElementById('add-button')
.addEventListener('click', () => onClickAdd());
// event付与 clickevent