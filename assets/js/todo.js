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

  // ボタン生成の時点でイベントを設定
  // 押された完了ボタンの親タグを未完了リストから削除
  completeButton.addEventListener('click', () => {
    const completeTarget = completeButton.parentNode;
    document.getElementById('incomplete-list').removeChild(completeTarget);
    //document.getElementById('complete-list').appendChild(completeTarget);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "削除";
  //console.log(deleteButton);

  // ボタン生成の時点でイベントを設定
  deleteButton.addEventListener('click', () => {
    //alert('削除');
    // 押された削除ボタンの親タグ(li)を完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    //console.log(deleteTarget);

    // 該当のliタグをul.incomplete-listから削除する
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });


  // liの子要素に各要素を配置する
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  console.log(li);

  /*
  ★ 次に完了と削除ボタンにidを付与するのではなくボタン生成の時点でイベントを割り振る
  */
};


// 完了ボタン・削除ボタンをクリック→未完了リストから削除　の処理が同じ
// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
}

document.getElementById('add-button')
.addEventListener('click', () => onClickAdd());
// event付与 clickevent