# Learning

<div align="center">
<!-- <img width="329" alt="image" src="https://user-images.githubusercontent.com/50205887/207568862-cdc9e2c0-b03c-43ff-bf46-3ba79a110d0c.png"> -->
</div>

# Learning

> **배우기 프로젝트** <br/> **개발기간: 2023.03.28 ~ ING**

<!-- ## 배포 주소 -->

<!-- > **개발 버전** : [http://voluntain.cs.skku.edu/](http://voluntain.cs.skku.edu/) <br>
> **프론트 서버** : [http://voluntain.cs.skku.edu:33307/](http://voluntain.cs.skku.edu:33307/)<br>
> **백엔드 서버** : [http://voluntain.cs.skku.edu:2223/](http://voluntain.cs.skku.edu:2223/)<br> -->

<!-- ## 웹개발팀 소개

|                                  장원용                                   |                                  신아름                                   |
| :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
| <img width="290" alt="profile image" src="./assets/img/profile_jang.png"> | <img width="329" alt="profile image" src="./assets/img/profile_shin.png"> |
|                 [@Jade](https://github.com/Rockbody03182)                 |                 [@Areum](https://github.com/dev-areum93)                  | -->

## 프로젝트 소개

Learning (배우기) 프로젝트입니다.

<!-- ## 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js 14.19.3](https://nodejs.org/ca/blog/release/v14.19.3/)
- [Npm 9.2.0](https://www.npmjs.com/package/npm/v/9.2.0)
- [Strapi 3.6.6](https://www.npmjs.com/package/strapi/v/3.6.6)

### Installation
``` bash
$ git clone https://github.com/Voluntain-SKKU/Voluntain-2nd.git
$ cd Voluntain-2nd
```
#### Backend
```
$ cd strapi-backend
$ nvm use v.14.19.3
$ npm install
$ npm run develop
```

#### Frontend
```
$ cd voluntain-app
$ nvm use v.14.19.3
$ npm install
$ npm run dev
``` -->

---

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)

## 아키텍쳐

### 디렉토리 구조

```bash
├── README.md
├── javascript : 자바스크립트
│   ├── grammar : 문법
│   └── test
├── react : 리액트
│   ├── grammar : 문법
│   ├── react-typescript-webpack-setting
│   │   └── 참고사이트 :https://poiemaweb.com/
│   └── test
└── front
```

<!-- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) -->

<!-- ### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white) -->

<!-- ---
## 화면 구성 📺
| 메인 페이지  |  소개 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://user-images.githubusercontent.com/50205887/208036155-a57900f7-c68a-470d-923c-ff3c296ea635.png"/> |  <img width="329" src="https://user-images.githubusercontent.com/50205887/208036645-a76cf400-85bc-4fa2-af72-86d2abf61366.png"/>|
| 강좌 소개 페이지   |  강의 영상 페이지   |
| <img width="329" src="https://user-images.githubusercontent.com/50205887/208038737-2b32b7d2-25f4-4949-baf5-83b5c02915a3.png"/>   |  <img width="329" src="https://user-images.githubusercontent.com/50205887/208038965-43a6318a-7b05-44bb-97c8-b08b0495fba7.png"/>     | -->

<!-- --- -->

<!-- ## 주요 기능 📦 -->

<!-- ### ⭐️ 코인 물타기 계산기

- 보유평단, 보유수량 입력시 매수금액 자동 계산
- 추가매수 평균단가, 추가 매수 수량 입력시 매수 금액 자동계산
- 종목 최대 5개까지 추가 가능

### ⭐️ 코인 시세 Chart

- 메이저 코인 TOP5 시세 그래프 차트

### ⭐️ Before / After chart

- 물타기 전 평단가와 물타기 후 평단가를 보여주는 그래프

### ⭐️ 공유하기 기능

- 카카오톡, 인스타그램, 트위터, 네이버, 링크복사 -->

<!-- ---
## 아키텍쳐

### 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── strapi-backend :
│   ├── README.md
│   ├── api : db model, api 관련 정보 폴더
│   │   ├── about
│   │   ├── course
│   │   └── lecture
│   ├── config : 서버, 데이터베이스 관련 정보 폴더
│   │   ├── database.js
│   │   ├── env : 배포 환경(NODE_ENV = production) 일 때 설정 정보 폴더
│   │   ├── functions : 프로젝트에서 실행되는 함수 관련 정보 폴더
│   │   └── server.js
│   ├── extensions
│   │   └── users-permissions : 권한 정보
│   ├── favicon.ico
│   ├── package-lock.json
│   ├── package.json
│   └── public
│       ├── robots.txt
│       └── uploads : 강의 별 사진
└── voluntain-app : 프론트엔드
    ├── README.md
    ├── components
    │   ├── CourseCard.js
    │   ├── Footer.js
    │   ├── LectureCards.js
    │   ├── MainBanner.js : 메인 페이지에 있는 남색 배너 컴포넌트, 커뮤니티 이름과 슬로건을 포함.
    │   ├── MainCard.js
    │   ├── MainCookieCard.js
    │   ├── NavigationBar.js : 네비게이션 바 컴포넌트, _app.js에서 공통으로 전체 페이지에 포함됨.
    │   ├── RecentLecture.js
    │   └── useWindowSize.js
    ├── config
    │   └── next.config.js
    ├── lib
    │   ├── context.js
    │   └── ga
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── _app.js
    │   ├── _document.js
    │   ├── about.js
    │   ├── course
    │   ├── index.js
    │   ├── lecture
    │   ├── newcourse
    │   ├── question.js
    │   └── setting.js
    ├── public
    │   ├── favicon.ico
    │   └── logo_about.png
    └── styles
        └── Home.module.css

``` -->
