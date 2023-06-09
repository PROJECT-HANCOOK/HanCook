# :stew: HanCook - 외국을 위한 음식 소개 서비스
## :calendar: 프로젝트 진행 기간
##### 2023.02.27(월) ~ 2023.04.07(금) (39일간 진행)

##### SSAFY 8기 2학기 특화프로젝트 - HanCook
<br/>

## :computer: 서비스 화면
### 물가분석 / 음식인식 
<p align="center">
<img src=https://user-images.githubusercontent.com/91431779/230371516-77fcfff1-db22-4473-bdf2-d4b10151c1bb.gif width="350" height="500"> 
<img src=https://user-images.githubusercontent.com/91431779/230371913-8eb8499a-a18d-40fd-a9c5-3531f1bc83ca.gif width="350" height="500">
</p>

### 레시피 / 장바구니
<p align="center">
<img src=https://user-images.githubusercontent.com/91431779/230373362-5342a799-8016-49c5-98e7-3f4001b20bff.gif width="350" height="500"> 
<img src=https://user-images.githubusercontent.com/91431779/230372052-430d0050-f524-45eb-9392-56a4719efa45.gif width="350" height="500">
</p>

<br/>

## :dart: 기획배경

##### 최근 인적 이동과 교류로 국내에 거주하는 외국인의 수가 증가하고 있습니다. 

##### 식문화는 한국생활의 적응의 한 분야이며, 각 개인적 특성 및 국적별로 한국음식에 대한 적응의 차이가 있습니다.

##### HanCook은 외국인의 한국 식생활의 적응을 돕고, 위에서 언급한 개인적 국적별 한국 음식에 대한 차이를 줄이는 것을 목표로 두고 개발되었습니다.

<br/>

## 🙆🏼‍♂️외국인을 위한 음식 소개 서비스

##### 1. 음식 인식을 통한 요리 이름 및 레시피 제공

##### 2. 실시간으로 제공되는 평균가, 최저가, 최고가 제공

##### 3. 장바구니 기능

##### 4. 장바구니에 들어있는 재료들의 마트별 판매정보 제공

<br/>

## :computer: 스토리보드

![피그마](https://user-images.githubusercontent.com/91431779/230381038-d6e3125e-55fd-4157-a54c-6b29f9458056.PNG)

<br/>

## 시스템 아키텍처
![HanCook 시스템 아키텍처](https://user-images.githubusercontent.com/91431779/230387050-d23e1a90-327c-4bf2-88bc-2bb7319a7461.png)

<br/>

## :books: 기술 스텍 및 주요 기능
### 🖱️Backend

- IntelliJ
- spring boot 2.7.8
- spring-boot-jpa
- Spring Security
- Java 11
- AWS EC2
- mysql 8.0.32

### 🖱️Frontend

- Visual Studio Code
- React.js
- Node.js 16.18.0
- React-Bootstrap
- React-Router-Dom
- Chart.js
- Canvas
- Usermedia
- Axios

### 🖱️BigData

- Hadoop - 3.2.2
- Spark - 3.3.2
- Kafka 2.12-2.8.0

### 🖱️CI/CD

- aws ec2
- docker
- nginx
- jenkins

### 🖱️협업 툴

- Git
- Jira
- Mattermost
- Discord
- notion

<br/>

## :open_file_folder: 프로젝트 파일 구조
### FrontEnd

<img src=https://user-images.githubusercontent.com/91431779/230377189-633a0359-8e98-4bd3-add3-a882f241aaa9.png width="450" height="500">

### BackEnd

<img src=https://user-images.githubusercontent.com/91431779/230377244-0c025108-6a8f-4cab-8e40-637acda1f362.png width="450" height="500">

### Crawler

<img src=https://user-images.githubusercontent.com/91431779/230377266-4e86f3ca-7405-45af-bece-3f79cc07e84c.png width="450" height="500">

### Kafka

<img src=https://user-images.githubusercontent.com/91431779/230377300-70efc647-462d-4099-8282-05fc8d352546.png width="450" height="500">
<img src=https://user-images.githubusercontent.com/91431779/230377289-50aa0b03-a8e1-4c42-add5-971bb1c4e74a.png width="450" height="500">

### Spark

<img src=https://user-images.githubusercontent.com/91431779/230377123-829cc2dc-df27-4df8-b6c4-4fdc8ef8f710.png width="450" height="500">

<br/>

## :two_men_holding_hands: 협업 환경

### Git Flow
+ 각자 맡은 기능에 맞게 ``` feature ``` 브랜치를 생성하여 개발
+ 완료된 기능은 ``` develop ``` 에 ``` merge ``` 
+ 매일 오전 9시 스크럼 회의가 끝나면 ``` develop ``` 최신 버전을 ``` pull ```
> ### Commit convention
> ``` FEAT ``` : 기능 추가, 프로젝트 생성, 초기 설정 
<br> ``` FIX ``` : 기능 변경, 기능 수정, 오류 수정
<br> ``` REFACTOR ``` : 같은 기능을 하는 코드를 리팩토링

### Notion
+ 팀 전체가 알아야 할 공지사항이나 프로젝트를 진행하면서 나오는 각종 산출물들의 형상관리

### JIRA
+ 협업 및 일정, 업무 관리를 JIRA를 통해 관리하였습니다.
+ 매 주 월요일 한 주동안 진행되어야 할 계획을 수립하여 진행할 이슈들을 스프린트를 만들어 등록

>``` Epic ``` : BackEnd, FrontEnd, 기획, 설계
<br> ``` story ``` : 기획, 설계, 산출물 제작 등 개발외의 업무에 관한 업무 관리
<br> ``` task ``` : 코드 작성과 관련된 개발업무에 관한 업무 관리

<p align="center">
<img src=https://user-images.githubusercontent.com/91431779/219372056-b1257d25-3a76-4020-9628-1a98ca425077.png height="300">
</p>

### MatterMost
+ 일일 스크럼 회의록 관리
+ GitLab과 연동하여 실시간 GitLab 관리
+ Archiving채널을 통해서 각 종 정보 공유

<br/>

## 산출물
+ [포팅 메뉴얼](https://chrome-operation-11b.notion.site/aa85d45be848496d82a03ea3b95e70bc)

<br/>

## 팀원 소개
![역할](https://user-images.githubusercontent.com/91431779/230400163-cfbfda98-cd3a-4c4d-81c4-37fc82f5db8e.PNG)

