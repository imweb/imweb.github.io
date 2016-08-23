define('mock/postComment', function(require, exports, module) {

  /**
   * 提交评论
   * @author jero
   * @date 2016-07-20
   */
  
  const fs = require('fs');
  
  module.exports = function (req, res) {
    try {
      let comment = JSON.parse(fs.readFileSync(`${"/mock"}/comment.json`, 'utf8'));
      comment.push(req.body);
      fs.writeFileSync(`${"/mock"}/comment.json`, JSON.stringify(comment), 'utf8');
  
      res.json(comment);
    } catch (e) {
      res.json(e);
    }
  };
  

});
