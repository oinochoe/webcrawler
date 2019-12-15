const client = require("cheerio-httpcli");
const url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";
let result = {};

client.fetch(url, result, function(err, $, res) {
  if (err) {
    console.log("Error:", err);
    return;
  }

  result = $.html();
  console.log(result);
});
