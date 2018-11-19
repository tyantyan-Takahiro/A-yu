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
  var data = {
    title: '声優一覧画面',
  }
  res.render('seiyu', data);
});

//声優詳細画面

module.exports = router;