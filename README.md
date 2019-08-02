<h1 align="center">yums-vue-default-fw</h1>


<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://firebase.google.com/">
    <img src="https://img.shields.io/badge/firebase-6.3.4-brightgreen.svg" alt="firebase">
  </a>
</p>


[Demo](https://yums-vue-default.firebaseapp.com)


## 1. Setup
```bash
git clone https://github.com/hyyumi/yums-vue-default-fw.git
npm install
npm run serve           #local
npm run build:dev       #개발용 빌드
npm run build:prod      #상용 빌드
npm run build:release   #상용 빌드 && firebase 배포
```


## 2. Folder Structure
```bash       
├── public/
│   ├── index.html
├── src/
│   ├── api/                    # api 함수
│   ├── assets/                 # 정적 리소스
│   ├── components/             # 컴포넌트
│   ├── languages/              # 다국어
│   │   ├── index.js 
│   │   └── (ko.json) 
│   ├── layout                  # 공통 레이아웃
│   │   ├── components/         
│   │   │   └── (Header, Navi, Footer ...)         
│   │   └── (DefaultLayout.vue)   
│   ├── mixins/                 # 믹스인
│   │   ├── index.js            
│   │   └── (pageMixin.js)      
│   ├── plugins/                # 플러그인
│   │   └── ... 
│   ├── routes/                 # 라우터
│   │   ├── index.js            
│   │   └── routerGuard.js      
│   ├── styles/                 # 스타일
│   │   └── index.scss           
│   ├── utils/                  # 유틸
│   │   ├── common.js           
│   │   └── index.js           
│   ├── views                   # 라우터 뷰페이지
│   │   ├── (pages/)              
│   │   └── (Home.vue)            
│   ├── vuex                    # 상태 관리
│   │   ├── modules/            
│   │   │   ├── (app.js)         
│   │   │   └── ...
│   │   ├── getters.js          
│   │   └── store.js            
│   ├── App.vue                 
│   └── main.js                 
│ 
├── .env                        # 공통 환경변수
├── .env.dev                    # 개발
├── .env.local                  # 로컬
├── .env.prod                   # 상용
├── firebase.json               # firebase hosting 설정
├── package.json                # npm 설정
└── vue.config.js               # 웹팩 설정
```

## 3. Firebase

- Hosting 
  1. firebase 프로젝트 생성 및 프로젝트ID 획득  
    : [Firebase Console](https://console.firebase.google.com),
     [Document](https://firebase.google.com/docs/projects/learn-more?authuser=0#setting_up_a_firebase_project_and_connecting_apps)  
  2. ***.firebaserc*** 파일 수정
      ```json
      {
        "projects":{
          "default" : "your-firebase-project-id"
        }
      }
      ```
  3. firebase-tools 설치, 로그인

      ```bash
      npm install -g firebase-tools
      firebase login
      ```
  4. 프로젝트 빌드 및 배포
      ```bash
      npm run build && firebase deploy  # => npm run build:release
      ```