# 웹 크롤링 쉽게 하기

## 필요한 자원

```markdown
# cheerio

npm install cheerio

# python version 필요

npm install --python=python2.7.0 -g

# python을 못찾는다는 에러가 뜨면

npm conifig list
python = python2.7 라는 항목 확인
npm config set python python
(환경변수를 python으로 변경)

# node-gyp(iconv를 설치하기 위해 필요)

npm install node-gyp -g
node-gyp rebuild (반드시 관리자 모드인 vscode나 git bash에서 사용)

# windows-build-tools를 설치한다.(git bash 관리자 권한으로 실행)

npm --add-python-to-path='true' --debug install --global windows-build-tools
npm install --global --production windows-build-tools

# 그래도 안찾아지면 python 경로 세팅

npm config set python "C:\Users\copst\.windows-build-tools\python27\python.exe"

# 캐시 날리기

npm cache clean --force
rm -rf node_modules
npm install

# iconv (euc-kr 문서의 한글처리 위함)

npm install iconv -g

# buffer deprecation
new Buffer(string, encoding)  // Old
Buffer.from(string, encoding) // New

# fs.writeFileSync(...)
fs.writeFile은 callback function이 필요하다고 한다.
fs.writeFileSync(...) 로변경
```

## 실행

```javascript
node app.js
```

## 결과물

```markdown
/html/naverMovie.json
```

## 결과물

```markdown
/html/naver.html
```
