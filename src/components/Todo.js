import React, {useContext,memo, useCallback } from 'react';
import {ToDoContext} from './TodoList';
import styled from 'styled-components';
import { REMOVE, CHANGE_DONE } from '../action/actionTypes';


const StyleBtn= styled.button`
    font-size:5px;
    position:absolute;
    left:0px;
    top:6px;
    background:none;
    border:none;
    cursor:pointer;
    opacity:0;
    
    &:focus{
        outline:none
    }
`

const StyleList=styled.div`
    display:flex;
    position:relative;
    justify-content:space-between;
    margin-top:20px;
    cursor:pointer;
    width:100%;

    &:hover{
     color:#e6b800;
    }

    &:hover ${StyleBtn}{
      opacity:1;
    }
`

const StyleSpan=styled.span
`
    text-decoration:${props=> props.alt==="false" ? 'none':'line-through'};
    margin-left:25px;
    color:${props=>props.className};
`;


const Todo =(props)=>{
    const { dispatch } = useContext(ToDoContext);

    const removeHandler=useCallback((e)=>{
        const key =  e.target.id;
        dispatch({type:REMOVE, value: key});
    });
    
    const doneCheckHandler=useCallback((e)=>{
        const key =  e.target.id;
        dispatch({type:CHANGE_DONE, value:key})
    })
    return(
        <StyleList>
            <StyleBtn id={props.id} onClick={removeHandler}>X</StyleBtn>
            <StyleSpan alt={props.done} className={props.color} id={props.id} name="check" onClick={doneCheckHandler} >
                {props.content}
            </StyleSpan>
            {props.done==='true' && <div>✓</div>}
        </StyleList>
    );
}

export default memo(Todo);