// 「追加」ボタン押下時に実行
const onClickAdd = () => {

  // テキストボックスのElementを取得
  const textEl = document.getElementById('add-text');

  // テキストボックスの「値」を取得
  const text = textEl.value;

  // テキストボックスを初期化
  textEl.value = "";

  if( text != "" ) {
    createList(text);
  } else {
    alert('メモを入力してください。');
  }
  

};

const createList = (text) => {
    // liタグを作成
    const li = document.createElement('li');
    li.className = 'list-item';
    const p = document.createElement('p');
    p.className = 'item-name';
    p.textContent = text; // テキストボックスで入力した「値」
  
    li.appendChild(p);
  
    // buttonタグ生成　ラベルは「削除」
    const button = document.createElement('button');
    button.textContent = "Delete";
  
    // ボタン押下時に行を削除する処理
    button.addEventListener('click', () => {
      // 削除対象の行liを取得
      const deleteTarget = button.closest('li');
      // closestは親要素に一致する文字列を探すメソッド
  
      // ulタグ配下から上記で特定した行liを削除
      document.getElementById('memo-list').removeChild(deleteTarget);
    });
  
    // divタグ配下にpタグとbuttonタグを設定
    li.appendChild(button);
  
    // liタグ配下に上記のdivタグを設定
    document.getElementById('memo-list').appendChild(li);
}

// 「追加」ボタン押下時にonClickAdd関数を実行するよう登録
document.getElementById('add-button')
.addEventListener('click', () => onClickAdd());