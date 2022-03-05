const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value; // 入力値を取得
  document.getElementById('add-text').value = ""; // 入力値を初期化

  if ( inputText != "" ) {
    createIncompleteList(inputText); // 未完了リストに追加する関数
  } else {
    alert('Todoを入力してください。');
  }
};

/* 
  未完了リストから指定の要素を削除する関数
  ※ 完了・削除をクリック → 未完了リストから削除　の処理が同じ
*/
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
}


/*
  未完了リストに追加する関数(共通化)
  ※「todoの追加」と「完了リストから未完了リストへの追加」が共通
  ※ 条件が異なるのは入力値なのでtextを引数として受け取る
*/
const createIncompleteList = (text) => {

  const li = document.createElement('li'); // liを生成する
  li.className = "list-row"; // liにclass名を付与する 

  const p = document.createElement('p'); // pタグ生成
  p.className = "incomplete-item-name"; // class名付与
  p.innerText = text; // 入力した値をpタグ内に挿入

  /*
    完了ボタンを生成
  */
  const completeButton = document.createElement('button');
  completeButton.innerText = "完了";

  // 完了ボタン生成の時点でイベントを設定。
  // 押された完了ボタンの親タグを未完了リストから削除する処理
  completeButton.addEventListener('click', () => {

    deleteFromIncompleteList(completeButton.parentNode); // 削除の処理を関数化

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode; // 完了ボタンの親要素(li.list-row)を取得
    // 親の子であるpタグに設定されているテキストを取得
    // addTargetの最初の要素にpタグが設定されている → firstElementChildを使用
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;  // li.list-row以下を削除

    const p = document.createElement('p');  // pタグ生成
    p.className = 'complete-item-name';
    p.innerText = text;
    
    /*
      戻すボタン生成
    */
    const backButton = document.createElement('button');
    backButton.innerText = "戻す";

    // 戻すボタンを押したときの処理
    backButton.addEventListener('click', () => {
      // 押された戻すボタンの親タグli.list-rowを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById('complete-list').removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.innerText;// テキストを取得
      createIncompleteList(text);
    });

    // liタグの子要素に各要素(p, button)を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById('complete-list').appendChild(addTarget);
  });

  /*
    削除ボタンを生成
  */
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "削除";

  // ボタン生成の時点でイベントを設定
  deleteButton.addEventListener('click', () => {

    // 削除の処理を関数化
    // targetはなに？　クリックされるdeleteButtoの「親要素」！！！
    deleteFromIncompleteList(deleteButton.parentNode);

    // 押された削除ボタンの親タグ(li)を完了リストから削除
      // const deleteTarget = deleteButton.parentNode; 関数化したので削除
    // 該当のliタグをul.incomplete-listから削除する
      // document.getElementById('incomplete-list').removeChild(deleteTarget); 関数化したので削除
  });


  // liの子要素に各要素を配置する
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  // 未完了のリストに追加する
  document.getElementById('incomplete-list').appendChild(li);
};

document.getElementById('add-button')
.addEventListener('click', () => onClickAdd());
// event付与 clickevent





/*
textContent: 全てを表示するための単純なテキストとして扱う
innerText: エスケープ文字がその通りに機能する ¥n
innerHTML: innerHTMLはHTMLタグがあるとタグとして機能
*/