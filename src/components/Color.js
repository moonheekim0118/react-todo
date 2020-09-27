import React , {useContext,memo}from 'react';
import styled from 'styled-components';
import {ToDoContext} from './TodoList';

const StyleColorBox=styled.div`
    margin-left:20px;
    display:inline-block;
    width:2rem;
    height:2rem;
    opacity:${props=> props.className === 'active' ? '1' : '0.5'};
    border-radius:50%;
    background:${props=> props.alt};
    cursor:pointer;
    
    &:hover{
        opacity:1;
    }

    &:active{
        opacity:1;
    }


`;

const Color =({color})=>{
    const { colorHanlder , selectedColor} = useContext(ToDoContext);
    console.log(selectedColor===color );
    return(
        <StyleColorBox alt={color} id={color} className={selectedColor===color ? 'active': ''} onClick={colorHanlder}/>
    );
}

export default memo(Color);