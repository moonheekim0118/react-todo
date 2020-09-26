import React ,{useContext, memo} from 'react';
import {ToDoContext} from './TodoList';
import styled from 'styled-components';


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
    const {addNewTodoHandler} = useContext(ToDoContext);
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