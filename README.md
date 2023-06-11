<p align="center">
  <a href="" rel="noopener">
    <img src="https://i.ibb.co/ncnqyQB/68747470733a2f2f692e696d6775722e636f6d2f63647a727772742e706e67.png" alt="tossTechLogo" border="0"></a>
  </a>
</p>

<h3 align="center">toss-tech-clone</h3>

## 🧐 프로젝트 설명 <a name = "about"></a>
([toss.tech](https://toss.tech/)) 토스 테크 사이트를 바닐라 자바스크립트를 사용하여 SPA(Single Page Application)를 구현한 후<br> TypeScript로 마이그레이션을 한 과정들을 기록하였습니다.

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
데이터는 MockServiceWorker 및 faker.js 라이브러리를 사용하여 데이터를 생성하고 사용자가 입력한 데이터를 검증하기 위해 DTO(Data Transfer Objects)를 구현했습니다.

개발 프로세스를 향상시키기 위해 프로젝트에 다양한 도구와 규칙을 활용하였습니다.<br>
원활한 번들링을 위해 Webpack을 사용했고, Prettier와 ESLint를 Airbnb 컨벤션에 따라 사용하여 일관되게 스타일로 설정했습니다.<br>
Axios 라이브러리는 HTTP 통신 방식의 유연한 구성을 가능하게 하여 더욱 편리하게 했습니다.

Storage Module를 구현하여 Node에서 스토리지를 원활하게 활용할 수 있도록 하였고,<br>
LocalStorage는 3시간 후에 저장된 데이터를 자동으로 삭제하는 자동 만료 메커니즘으로 구현되었습니다.

파일들은 컴포넌트로 분리하여 효율적으로 사용할 수 있고, BEM방법론을 이용하여 클래스 이름에 명확하게 하고 반응형으로 제작하였습니다.

## 디렉토리구조
```
├── README.md
├── package-lock.json
├── package.json
├── server.ts
├── webpack.config.ts
├── tsconfig.json
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
    │   ├── storage.ts
    │   └── http.ts
    ├── tpye.d.ts
    └── index.ts
```

