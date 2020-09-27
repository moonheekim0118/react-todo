import React , {useContext,memo}from 'react';
import styled from 'styled-components';
import {ToDoContext, ColorContext} from './TodoList';
import { CHANGE_COLOR } from '../action/actionTypes';

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
    const { dispatch } = useContext(ToDoContext);
    const { selectedColor } = useContext(ColorContext);

    const colorHanlder=(e)=>{
        dispatch({type:CHANGE_COLOR, value:e.target.id});
    }

    return(
        <StyleColorBox alt={color} id={color} className={selectedColor===color ? 'active': ''} onClick={colorHanlder}/>
    );
}

export default memo(Color);