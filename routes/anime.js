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


//アニメ一覧画面
router.get('/',(req, res, next) => {

  //コネクションの用意
  var connection = mysql.createConnection(mysql_setting);

  //データベースに接続
  connection.connect();

  //データを取り出す
  connection.query('SELECT  * from anime_table',function(error,results, fields){
       //データベースアクセス完了時の処理
          if(error == null){
              var data = {
                title:'アニメ一覧画面',
                content:results,
              };
              res.render('anime', data);
          }         
  });
  //接続終了
  connection.end();
});

router.get('/detail',(req, res, next) => {
  var data = {
    title: 'A-yu Top',
  }
  res.render('index', data);
  
});

//POST処理
router.post('/detail',(req, res, next) => {
  console.log("アニメ詳細ページPOST");
  var id = parseInt(req.body.id,10);//ANIMNE_ID
  
  console.log(typeof id );　
  console.log(id);
  
  //コネクションの用意
  var connection = mysql.createConnection(mysql_setting);

  //DBに接続
  connection.connect();
  
  //データを取り出す
  connection.query('SELECT * from `anime_table` WHERE `ANIME_ID` = ' + id,function(error,results, fields){
       //データベースアクセス完了時の処理
       console.log(results);
          
          if(error == null){
              var data = {
                title:'アニメ詳細ページ',
                content:results,
              };
              res.render('anime/detail', data);
          }         
  });
  //接続終了
  connection.end();
});

module.exports = router;
