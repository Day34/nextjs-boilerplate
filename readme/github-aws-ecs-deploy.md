# Github Actions으로 ECS에 자동 배포하기

## Github workflows 정의하기
* aws-master.yml  : 운영 서버
* aws-develop.yml : 개발 서버
* aws-test.yml    : 개발 서버에서 테스트용

```
branches                : 자동 배포할 브랜치의 이름을 입력한다
AWS_ACCESS_KEY_ID       : Github -> Settings -> Secrets -> New Repository secrets -> AWS_ACCESS_KEY_ID 등록하기
AWS_SECRET_ACCESS_KEY   : Github -> Settings -> Secrets -> New Repository secrets -> AWS_SECRET_ACCESS_KEY 등록하기
ECR_REPOSITORY          : AWS의 ECR REPOSITORY의 이름을 입력한다
cluster                 : Cluster의 이름을 입력한다
service                 : Service의 이름을 입력한다
container-name          : Container의 이름을 입력한다
```

## AWS 작업 정의서 등록하기
AWS ECS 작업 정의에서 마지막 task를 JSON 복사하여 `task-definition.json`에 붙여넣는다

## 

# ECS 설명
### Cluster (클러스터)
* Amazon ECS 클러스터는 작업 요청을 실행할 수있는 하나 이상의 컨테이너 인스턴스를 지역 그룹으로 묶은 것입니다.
* 각 계정은 Amazon ECS 서비스를 처음 사용할 때 기본 클러스터를받습니다.
* 클러스터에는 둘 이상의 Amazon EC2 인스턴스 유형이 포함될 수 있습니다.
 
### Container Instance (컨테이너 인스턴스)
* 클러스터에 등록된 Amazon ECS 에이전트가 실행되는 EC2 인스턴스

### Task Definition (Task 정의)
* 작업 정의는 작업에 포함되는 컨테이너 수, 사용 리소스, 연결 방법 및 사용할 호스트 포트와 같은 응용 프로그램의 컨테이너 정보를 지정합니다.

### Task
* Task 정의를 이용해 생성된 인스턴스, 컨테이너 인스턴스에서 실행 중

### Container (컨테이너)
* task의 일부로 생성된 리눅스 컨테이너
