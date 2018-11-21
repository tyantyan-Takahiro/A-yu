var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//MySQLの設定情報
var mysql_setting = {
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'A-yu_db',
};

//声優一覧画面
router.get('/', function(req, res, next) {
console.log("声優一覧画面");
  //コネクションの用意
  var connection = mysql.createConnection(mysql_setting);

  //データベースに接続
  connection.connect();

  //データを取り出す
  connection.query('SELECT  * from seiyu_table',function(error,results, fields){
       //データベースアクセス完了時の処理
          if(error == null){
              var data = {
                title:'声優一覧画面',
                content:results,
              };
              res.render('seiyu', data);
          }         
  });
  //接続終了
  connection.end();
});

//声優詳細画面
router.post('/detail',(req, res, next) => {
  console.log("声優詳細ページPOST");
  var id = parseInt(req.body.id,10);//ANIMNE_ID
  
  console.log(typeof id );　
  console.log(id);
  
  //コネクションの用意
  var connection = mysql.createConnection(mysql_setting);

  //DBに接続
  connection.connect();
  
  //データを取り出す
  connection.query('SELECT * from `seiyu_table` WHERE `SEIYU_ID` = ' + id,function(error,results, fields){
       //データベースアクセス完了時の処理
       console.log(results);
          
          if(error == null){
              var data = {
                title:'声優詳細ページ',
                content:results,
              };
              res.render('seiyu/detail', data);
          }         
  });
  //接続終了
  connection.end();
});
module.exports = router;