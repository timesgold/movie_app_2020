# 리액트를 사용하여 영화 앱 만들기
### ( 책 : 클론코딩 영화 평점 웹서비스 )

##### IDE : IntelliJ
##### Language : Javascript
##### Library : React, Axios

* 1일차 ( **07. 09. Thu** ) - 04-3
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
            * 중복 된 값은 사용 할 수 없음 ( 전체 어플리케이션 or 단일 컴포넌트 전체에서 고유할 필요는 없음)
            * 리액트 내부적으로 사용되어서 실제 props로 전달되지는 않음

* 2일차 ( **07. 10. Fri** ) - 06-4
    * props validation
        * npm install prop-types 설치
        * props의 자료형(string, number...)과 필수여부(isRequired)를 정의
        
    * state
        * 동적 데이터를 다룰때 사용
        * Class Type Componet에서 사용 가능
        * state 값을 직접적으로 변경은 불가, setState()를 통하여 동일한 값은 그대로 두고, 변경된 값만 변경 ( 새로고침이 발생하지 않음 )
        
    * Class Type Component LifeCycle ( 자주 사용되는 생명주기 메소드 )
        * constructor 함수는 생명주기 함수는 아니지만, Component 생성 시 호출, 자바스크립트 함수
            * 메서드 바인딩 및 state를 초기화 할때 사용
            * 구현 시 super(props)를 우선적으로 호출하여야 하며, 그렇지 않을 경우 this.props가 생성자 내에서 정의되지 않는다
            * setState()를 호출하면 안됨
            
        * rendor 함수는 화면을 그리는 함수로 constructor 함수 다음으로 호출
            * Class Type Component에서 반드시 구현되어야 하는 함수
            * 컴포넌트의 state를 변경하지 않고, 호출 될 때 마다 동일한 결과를 반환
            * 브라우저와 직접적으로 상호작용을 하지 않음
            
        * comoponentDidMount 함수는 화면이 그려지고 나서 호출되는 함수로 rendor 함수 다음으로 호출
            * 초기화 작업, 외부에서 데이터를 불러오기, 네트워크 요청을 보내기 좋은 위치
             
        * comoponentDidUpdate 함수는 화면이 업데이터 될때 호출되는 함수로 rendor 함수가 재실행 될때 호출
            * props의 변경이 없다면 네트워크 요청을 할 필요가 없음
            
        * comoponentWillUnmount 함수는 컴포넌트가 화면에서 떠날 때 실행
            * 타이머 제거, 네트워크 요청 취소
            * 컴포넌트가 재실행되지 않으므로 setState() 호출 금지
        
    * Funtion Type Component, Class Type Component
        * Funtion Type Component 는 return 문이 JSX 를 반환
        * Class Type Component 는 rendor() 함수가 JSX 를 반환
        * Class Type에서는 생명주기를 메서드를 추가하여 사용 할 수 있음
        * React 관점에서는 Funtion Type이든, Class Type이든 동일한 Component 임
        
    * axios
        * npm install axios
        * 데이터를 외부에서 (API 등) 에서 가져오기 위해서 사용하는 HTTP 클라이언트 라이브러리
        
    * async, await
        * 프라미스를 기반으로 한다
        * async 함수는 항상 프라미스를 반환한다
        * async 함수 안에서는 await를 사용할 수 있다 
        * await 키워드를 사용하면 프라미스가 처리될 때까지 대기
        * 함께 사용 시 읽고, 쓰기 쉬운 비동기 코드를 작성할 수 있다

***React JS Fundamentals Course 2020***