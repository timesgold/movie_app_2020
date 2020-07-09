# 리액트를 사용하여 영화 앱 만들기
### ( 책 : 클론코딩 영화 평점 웹서비스 )

##### IDE : IntelliJ
##### Language : Javascript
##### Library : React

* 1일차 ( **07. 09. Thu** )
    * 프로젝트 생성 및 설정
    * Git Upload
    * Component
        * 각 조각을 재사용 가능하도록 개별적인 여러 조각으로 UI를 나눈 것
        * 작성 시 **이름은 대문자로 시작**해야 함
    * JSX
        * HTML과 Javascript 를 조합한 문법
    * props
        * 읽기 전용이며, 절대 **수정**하여서는 안됨
        * Component에 데이터를 전달할 때 사용 
        * Component에 전달된 데이터는 하나의 객체로 변환
        * ES6의 구조 분해 할당을 사용하면 조금 더 편리한 방법으로 사용 가능
    * map 함수
        * 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환
        * Component를 만들 경우 key props를 추가
            * 리액트의 원소들은 유일해야 하며 각 컴포넌트가 서로 다르다는 것을 알려 줌
            * 중복 된 값은 사용 할 수 없음
            * 리액트 내부적으로 사용되어서 실제 props로 전달되지는 않음
    * README 수정

***React JS Fundamentals Course 2020***