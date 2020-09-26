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

const StyleSpan=styled.span
`
    text-decoration:${props=> props.alt==="false" ? 'none':'line-through'}
`;

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

const Todo =(props)=>{
    const { todoStateHanlder , todoRemoveHandler } = useContext(ToDoContext);

    console.log(props);
    return(
        <StyleList>
            <StyleSpan alt={props.done}>
                {props.content}
            </StyleSpan>
           <div>
                <StyleCheckbox type="checkbox" id={props.id} name="check" onChange={todoStateHanlder} value={props.content} />
                <StyleBtn id={props.id} onClick={todoRemoveHandler}>X</StyleBtn>
           </div>
        </StyleList>
    );
}

export default memo(Todo);