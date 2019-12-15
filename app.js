const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const url = "http://naver.com";

// 웹 크롤링을 위한 모듈
// request(url, (err, res, html) => {
//   let $ = cheerio.load(html);
//   console.log($.html());
// });

// url을 이용해서 html로 다운받기
request(url, (err, response, html) => {
  fs.writeFile("./html/naver.html", html, err => {
    if (err) throw err;
    console.log("file saved");
  });
});
