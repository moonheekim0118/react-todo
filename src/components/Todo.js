import React, {useContext,memo} from 'react';
import {ToDoContext} from './TodoList';
import styled from 'styled-components';

const StyleList=styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:20px;
    cursor:pointer;

    &:hover{
      color:#e6b800;
    }
`

const StyleCheckbox=styled.input`
    cursor:pointer;
`

const StyleBtn= styled.button`
    font-size:5px;
    background:none;
    border:none;
    cursor:pointer;

    &:hover{
        color:red;
    }

    &:focus{
        outline:none
    }
`

const Todo =({children, id})=>{
    const { todoStateHanlder , todoRemoveHandler } = useContext(ToDoContext);

    return(
        <StyleList>
            {children}
           <div>
                <StyleCheckbox type="checkbox" id={id} name="check" onChange={todoStateHanlder} value={children} />
                <StyleBtn id={id} onClick={todoRemoveHandler}>X</StyleBtn>
           </div>
        </StyleList>
    );
}

export default memo(Todo);