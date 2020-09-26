import React, {useState, createContext, useMemo, memo, useEffect} from 'react';
import Form from './Form';
import Todo from './Todo';

export const ToDoContext = createContext({
    addNewTodoHandler:()=>{},
    todoStateHanlder:()=>{},
    todoRemoveHandler:()=>{}
})

const TodoList =()=>{

    // state로 배열을 가진다.
    // 투두 등록할 때마다 배열에 새로운 투두가 등록된다.
    // state는 배열 속 객체형태 {contents:'dfdf', done:t/f}

    const [ list, setList ]=useState([]);

    const addNewTodoHandler=(e)=>{ // 새로운 투두 등록하기 핸들러 
        e.preventDefault();
        const contents=e.target.todo.value;
        e.target.todo.value='';
        const newTodo={key:'',contents:contents,done:false};
        setList((prevList)=>{
            newTodo.key=contents+prevList.length;
            return [...prevList, newTodo]});
    }

    const todoStateHanlder=(e)=>{ // 투두 체크 핸들러 
        // 선택된 투두의 key값을 이용하여 done 을 바꾸어준다.
        const key=e.target.id;
        const value=e.target.value;
        setList((prevList)=>{
            const modifiedList=[...prevList];
            const idx= modifiedList.findIndex(x=>x.key===key);
            if(idx>=0){
                modifiedList[idx].done=true;
            }
            return modifiedList;
        })
    }

    const todoRemoveHandler=(e)=>{ // 투두 삭제 핸들러 

    }
    const value = useMemo(() => ({addNewTodoHandler, todoStateHanlder, todoRemoveHandler}), []); // memo로 캐싱해주기 
    return(
        <ToDoContext.Provider value={value}>
            <Form/>
            {list.map((v,i)=><Todo key={v.key} id={v.key}>{v.contents}</Todo>)}
        </ToDoContext.Provider>
    );

};

export default memo(TodoList);