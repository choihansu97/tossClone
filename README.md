<p align="center">
  <a href="" rel="noopener">
    <img src="https://i.ibb.co/ncnqyQB/68747470733a2f2f692e696d6775722e636f6d2f63647a727772742e706e67.png" alt="tossTechLogo" border="0"></a>
  </a>
</p>

<h3 align="center">toss-tech-clone</h3>

## 🧐 프로젝트 설명 <a name = "about"></a>
([toss.tech](https://toss.tech/)) 토스 테크 사이트를 자바스크립트를 이용하여 SPA로 구현하였습니다.

## 🏁 프로젝트 실행방법 <a name = "getting_started"></a>
### Requirements
For building and running the application you need:
- [Node v18.16.0](https://nodejs.org/ca/blog/release/v18.16.0)
- [npm 9.6.6](https://www.npmjs.com/package/npm)

### CLI

```
git clone https://github.com/choihansu97/tossClone.git
npm install
npm run start
```


## 화면구성📺
![작업내용](https://github.com/choihansu97/tossClone/assets/60763027/57596e52-c90e-4b9a-88ea-d2bf335cf9bf)

## 작업내용 📦

## 디렉토리구조
```
├── README.md
├── package-lock.json
├── package.json
├── server.ts
├── webpack.config.ts
├── public
    ├── index.html
    ├── mockServiceWorker.js
└── src
    ├── components
    |   ├── Header
    |   |   └── header.ts
    |   ├── Footer
    |   |   └── footer.ts
    ├── dto
    │   ├── articleDto.ts
    │   ├── designDto.ts
    │   └── techDto.ts
    ├── lib
    │   ├── mocks
    │   │  ├── browser.ts  
    │   │  ├── handlers.ts
    │   │  ├── mswServer.ts
    │   │  └── articles.ts
    │   ├── router
    │   │  ├── components.ts
    │   │  └── router.ts
    ├── pages
    │   ├── article
    │   │   └── core     
    │   │   │   └── abstractView.ts     
    │   │   ├──articleView.ts
    │   │   ├──designArticleList.ts
    │   │   ├──techArticleList.ts
    │   └── notFoundPage.ts
    ├── assets
    │   ├── fonts
    │   ├── images
    │   ├── styles
    ├── util
    │   └── http.js
    └── index.ts
```

