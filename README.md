# recursion-tools

## Tamepermonkey-shortcut.user.js

[Recursion](https://recursionist.io/)でテスト・投稿をショートカットキーで操作するためのスクリプトです。

### 動作コマンドの内容

- 【Macをご利用の場合】

動作|コマンド
--|--
テスト | Command + Shift + s
実行 | Command + Shift + x

- 【Windowsをご利用の場合】

動作|コマンド
--|--
テスト  | Win + Shift + z
実行    | Win + Shift + x

### 動作環境

- Chrome ブラウザ + Mac / Windows での挙動を確認しています。

### 動作イメージ

https://user-images.githubusercontent.com/10017674/194371583-c1398da8-fdb5-4e8d-b769-21b539b6a71a.mov

### 利用方法

- [Tamepermonkeyアドオン](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja) を導入
- https://raw.githubusercontent.com/lirlia/recursion-tools/main/Tamepermonkey-shortcut.user.js にアクセスしインストール

### コマンドの変更方法

入力するコマンドは、各動作の実行関数内にあるkeyConfで設定しています。
コマンドに該当するプロパティを探す場合は、下記Referenceを参照ください。

[KeyboardEvent - プロパティ](https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent#%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3)