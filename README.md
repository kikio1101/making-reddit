# Making Reddit

사내 스터디 학습을 위한 레딧 따라 만들기

## 개발 환경

### 프로젝트 구성

| Type     | Skill                   | Description | Port / Path |
| -------- | ----------------------- | ----------- | ----------- |
| client   | `next.js`               | 웹 페이지   | 3000        |
| server   | `express.js /  typeorm` | API 서버    | 8000        |
| API Docs | `swagger`               | API 문서    | 8000 / docs |

### 적용 기술

- 사용언어: typescript
- 퍼블리싱: antd, styled-jsx, tailwind
- 배푀: 도커

### 패키지 설치

```sh
터미널에서, npm install ✅ #root 경로에서도 모듈 설치 필요
터미널에서 client 폴더로 이동 후, npm install ✅
터미널에서 server 폴더로 이동 후, npm install ✅
```

### **direnv**로 환경변수 관리

```sh
direnv allow # 허용
.envrc 파일 사용
```

### **asdf**로 버전 관리

## 명령어 실행

```sh
터미널 root 경로에서 npm start # client와 server가 동시에 구동됨
```

## TODO
