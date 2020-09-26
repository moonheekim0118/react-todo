import React, {useState, createContext, useMemo, memo, useEffect} from 'react';
import Form from './Form';
import Todo from './Todo';
import styled from 'styled-components';

const StyleTodo= styled.div`
    background:#ccff99;
    padding: 20px;
    border-radius:5px;
    width:100%;
`

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
        if(contents.length===0) return;
        e.target.todo.value='';
        const newTodo={key:'',contents:contents,done:false};
        setList((prevList)=>{
            newTodo.key=contents+prevList.length;
            return [...prevList, newTodo]});
    }

    const todoStateHanlder=(e)=>{ // 투두 체크 핸들러 
        // 선택된 투두의 key값을 이용하여 done 을 바꾸어준다.
        const key=e.target.id;
        setList((prevList)=>{
            const modifiedList=[...prevList];
            const idx= modifiedList.findIndex(x=>x.key===key);
            if(idx>=0){
                modifiedList[idx].done=!modifiedList[idx].done;
            }
            return modifiedList;
        })
    }

    const todoRemoveHandler=(e)=>{ // 투두 삭제 핸들러 
        const key = e.target.id;
        setList((prevList)=>{
            const modifiedList=prevList.filter((v)=>v.key!==key);
            return modifiedList;
        })
    }
    const value = useMemo(() => ({addNewTodoHandler, todoStateHanlder, todoRemoveHandler}), []); // memo로 캐싱해주기 
    return(
        <StyleTodo>
        <ToDoContext.Provider value={value}>
            <Form/>
            {list.map((v,i)=><Todo key={v.key} id={v.key}>{v.contents}</Todo>)}
        </ToDoContext.Provider>
        </StyleTodo>
    );

};

export default memo(TodoList);