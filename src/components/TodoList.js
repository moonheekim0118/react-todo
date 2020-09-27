import React, { createContext,useReducer ,useMemo, memo} from 'react';
import Form from './Form';
import Todo from './Todo';
import Palette from './Palette';
import styled from 'styled-components';
import * as type from '../action/actionTypes';

const initalState={
    list:[],
    color:'black'
};

const addNewTodoHandler=(contents,length,color)=>{ // 새로운 투두 등록하기 핸들러 
    if(contents.length===0) return;
    const newTodo={key:contents+length,contents:contents,done:false,color:color};
    return newTodo;
}



const todoRemoveHandler=(key,list)=>{ // 투두 삭제 핸들러 
    const modifiedList=list.filter((v)=>v.key!==key);
    return modifiedList;
}

const todoStateHanlder=(key,list)=>{ // 투두 체크 핸들러 
    // 선택된 투두의 key값을 이용하여 done 을 바꾸어준다.
    const modifiedList=[...list];
    const idx= modifiedList.findIndex(x=>x.key===key);
    if(idx>=0){
        modifiedList[idx].done=!modifiedList[idx].done;
    }
    return modifiedList;
}



const reducer =(state,action)=>{
    const {list, color}=state;
    switch(action.type){
        case type.ADD:
            let newlist =[...list];
            let newTodo=addNewTodoHandler(action.value,newlist.length,color);
            newlist = [...list,newTodo];
            return{
                ...state,
                list:newlist,
                color
            };
        case type.REMOVE:
            newlist = [...list];
            let modifiedList = todoRemoveHandler(action.value,newlist);
            return{
                ...state,
                list:modifiedList,
                color
            };
        case type.CHANGE_DONE:
            newlist = [...list];
            modifiedList=todoStateHanlder(action.value,newlist);
            return{
                ...state,
                list:modifiedList,
                color
            };
        case type.CHANGE_COLOR:
            return{
                ...state,
                list,
                color:action.value
            };
        default:
            return state;
    }
}

const StyleTodo= styled.div`
    background:#ccff99;
    padding: 20px;
    border-radius:5px;
    width:100%;
`

export const ToDoContext = createContext({
    dispatch:()=>{},
    selectedColor:'black'
})

export const ColorContext=createContext({
    selectedColor:'black'
})

const TodoList =()=>{

    // state로 배열을 가진다.
    // 투두 등록할 때마다 배열에 새로운 투두가 등록된다.
    // state는 배열 속 객체형태 {contents:'dfdf', done:t/f}

    const [state, dispatch]= useReducer(reducer,initalState);
    const {list, color}=state;

    const value = useMemo(() => ({dispatch}), []); // memo로 캐싱해주기 
    const value2 = useMemo(()=>({selectedColor:color}),[color]);
    return(

        <StyleTodo>
            <ToDoContext.Provider value={value}>
                <ColorContext.Provider value={value2}>
                    <Palette/>
                </ColorContext.Provider> 
                <Form/>
                {list && list.map((v,i)=><Todo key={v.key} id={v.key} content={v.contents} done={v.done.toString()} color={v.color}/>)}
            </ToDoContext.Provider>
        </StyleTodo>
    );

};

export default memo(TodoList);