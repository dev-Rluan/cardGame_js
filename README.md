# cardGame_js

카드게임을 만들기 위한 JavaScript 개발 실험입니다. 기존 기록의 개발 중 상태를 유지하며, Express 서버와 브라우저 화면 코드를 함께 관리합니다.

## 코드 살펴보기

- [src/server.js](src/server.js): 정적 파일 제공과 첫 화면 라우팅; 기본 포트는 `3000`
- [src/views](src/views): HTML 화면
- [src/public](src/public): 브라우저에서 사용하는 정적 파일
- [package.json](package.json): 의존성 설정

## 로컬 실행

Node.js와 npm을 준비한 뒤 저장소 루트에서 실행합니다.

```bash
npm install
node src/server.js
```

브라우저에서 `http://localhost:3000`을 엽니다. 현재 `npm test`는 기본 안내용 스크립트이며 게임 동작을 검증하는 테스트가 아닙니다.

