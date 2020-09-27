import React ,{useContext, memo, useEffect} from 'react';
import {ToDoContext} from './TodoList';
import styled from 'styled-components';
import { ADD } from '../action/actionTypes';

const StyleForm= styled.form`
   display:flex;
   justify-content:space-between;
`

const StyleInput = styled.input`
    border:none;
    border-radius:5px;

    &:focus{
        outline:none;
    }
`

const StyleBtn = styled.button`
    border:none;
    background:#ffff66;
    border-radius:5px;
    padding: 5px 15px;
    cursor:pointer;

    &:hover{
        background:#66ff66;
    }

    &:focus{
        outline:none;
    }
`


const Form =()=>{
    const {dispatch} = useContext(ToDoContext);
    const addNewTodoHandler=(e)=>{
        e.preventDefault();
        const contents=e.target.todo.value;
        e.target.todo.value='';
        dispatch({type:ADD,value:contents});
    }
    return(
        <>
            <StyleForm onSubmit={addNewTodoHandler}>
                <StyleInput type="text" placeholder="new to do" name="todo"></StyleInput>
                <StyleBtn type="submit">등록</StyleBtn>
            </StyleForm>
        </>
    );
};

export default memo(Form);