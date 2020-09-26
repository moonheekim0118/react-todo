import React , {useContext,memo}from 'react';
import styled from 'styled-components';
import {ToDoContext} from './TodoList';
 // red black green blue

const StyleBoxDiv =styled.div`
    margin-bottom:15px;
    text-align:center;
`
const StyleColorBox=styled.div`
    margin-left:20px;
    display:inline-block;
    width:20px;
    height:20px;
    border-radius:50%;
    background:${props=> props.alt};
    cursor:pointer;
`;



const Palette = ()=>{
    const { colorHanlder } = useContext(ToDoContext);
    return(
        <StyleBoxDiv>
            <StyleColorBox alt={"black"} id={"black"} onClick={colorHanlder}/>
            <StyleColorBox alt={"red"} id={"red"} onClick={colorHanlder}/>
            <StyleColorBox alt={"blue"} id={"blue"} onClick={colorHanlder}/>
            <StyleColorBox alt={"green"} id={"green"} onClick={colorHanlder}/>
        </StyleBoxDiv>
    );
}

export default memo(Palette);