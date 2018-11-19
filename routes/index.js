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

//トップページ
router.get('/', function(req, res, next) {
  var data = {
    title: 'A-yu Top',
  }
  res.render('index', data);
});

//過去クール検索
router.get('/season', function(req, res, next) {
  var data = {
    title: '過去クール一覧',
  }
  res.render('season/index', data);
});

//検索結果ページ
router.post('/search', function(req, res, next) {
  var moji = req.body.text;
  var anisei = req.body.id;

  var data = {
    title: '検索結果一覧',
    kensaku: moji,
    anisei: anisei,
  }
  res.render('search/index', data);
});

module.exports = router;
