# 리액트연습을 위한 투두 리스트 구현

# <img src="demo/todo_demo.gif?raw=true">


### 요구사항

---

- [x] 투두를 작성 할 수 있다.
- [x] 투두 완료를 체크 할 수 있다.
- [x] 투두를 리스트에서 삭제 할 수 있다.
- [x] 팔레트를 사용하여 투두 작성시 폰트 색상을 고를 수 있다.
- [x] useReducer를 사용하여 상태 관리를 한다.
- [x] Context API를 사용한다.






<br/>


### 컴포넌트 구조

---

<img src="demo/structure.jpg?raw=true">




<br/>

### Action Types

---

1. ADD : 투두 추가 액션
2. REMOVE: 투두 삭제 액션
3. CHANGE_DONE : 투두 체크 액션
4. CHANGE_COLOR : 투두 컬러 변경 액션



<br/>

### Trouble Shooting

---

- 처음에는 ToDoList의 state Color를 useRef로 구현하여, Color 변경에도 리렌더링이 되지 않도록 했으나, Color 변경에 따라서 해당 Color 컴포넌트 CSS의 변화를 줘야 했으므로 Color를 state로 등록함

- 기존에는 TodoContext를 통해 dispatch 함수와 state Color를 함께 전달 하였으나, 이럴 경우 Color컴포넌트와 함께 TodoContext를 제공받는 Form 컴포넌트가 리렌더링 됨

  -  따라서 ColorContext와 TodoContext를 분리하여, state Color를 ColorContext를 통해 전달함으로써, Color변경시에는 Color 컴포넌트만 리렌더링 되도록 최적화함 

  


  

