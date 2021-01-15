FROM node:lts-alpine

# /app 폴더 생성
RUN mkdir -p /usr/src/app

# /app 폴더를 WORKDIR로 설정
WORKDIR /usr/src/app

# package 복사
COPY package.json ./
COPY yarn.lock ./

# package 설치
RUN yarn

# 소스 복사
COPY . .

# 폴더 구조 확인
RUN ls -l

# 포트 설정
EXPOSE 3000

# 빌드
RUN yarn build

# 실행할 명령어
ENTRYPOINT ["yarn", "start"]
