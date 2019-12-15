const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";

request({ url: url, encoding: "binary" }, (err, response, body) => {
  const Iconv = require("iconv").Iconv;
  const iconv = new Iconv("euc-kr", "UTF-8");
  const html = iconv.convert(new Buffer(body, "binary")).toString();
  let $ = cheerio.load(html);
  let json = [];
  let arr = [];
  for (let i = 2; i < 12; i++) {
    arr.push($(`table.list_ranking tbody tr:nth-child(${i}) .tit3 a`).text());
    json.push({
      [`${i - 1}위`]: arr[i - 2]
    });
  }
  fs.writeFile("./html/naverMovie.json", JSON.stringify(json, null, "\t"));
});

// 웹 크롤링을 위한 모듈
// request(url, (err, res, html) => {
//   let $ = cheerio.load(html);
//   console.log($.html());
// });

// url을 이용해서 html로 다운받기
/* request(url, (err, response, html) => {
  fs.writeFile("./html/naver.html", html, err => {
    if (err) throw err;
    console.log("file saved");
  });
}); */
