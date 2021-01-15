# next.js boilerplate

## 패키지 정의
```
Next.js
Typescript
Prettier
ESLint
Folder Structure
Styled Components
Storybook
Redux, Redux-Saga
i18next, react-18next
hesky, lint-staged
jest

axios, qs
```

## 로컬 개발
```
$> yarn dev

http://localhost:3000
```

## 스토리북
```
$> yarn storybook

http://localhost:6006
```

## 로컬 Docker
Docker 빌드
```
$> docker build -f Dockerfile.local -t nextjs-docker:latest .
```

Docker 실행
```
$> docker run -p 3000:3000 --name nextjs nextjs-docker:latest
```

Docker 빌드 후 실행
```
$> docker build -f Dockerfile.local -t nextjs-docker:latest . && docker run -p 3000:3000 --name nextjs nextjs-docker:latest
```

Docker 중지
```
$> docker stop nextjs
```