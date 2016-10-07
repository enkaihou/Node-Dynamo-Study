##DYNAMO DBのサンプロ

検証方法は：
node XXX.JS で一々実行してください。

 1. createSozaiTbl.js テーブルを作る。
 2. loadSozaiInitData.js 情報内容を初期化する。
 3. scan.js 情報一覧を表せる。
 4. querySozai.js 情報を検索しての結果を表せる。
 5. get.js 指定の情報内容を取得する。
 6. update.js 情報内容を更新する。（楽観ロックのために作る）


Dynamo DBをスタートの命令とは

```cmd
 java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```