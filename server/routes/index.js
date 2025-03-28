var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    title: '메인화면입니다.',
    description: '메인화면에 대한 설명입니다.'
  });
});

module.exports = router;
