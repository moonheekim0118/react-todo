import React , {memo}from 'react';
import styled from 'styled-components';
import Color from './Color';
 // red black green blue

const StyleBoxDiv =styled.div`
    margin-bottom:15px;
    text-align:center;
`

const Palette = ()=>{
    return(
        <StyleBoxDiv>
            <Color color={"black"}/>
            <Color color={"red"}/>
            <Color color={"green"}/>
            <Color color={"blue"}/>
        </StyleBoxDiv>
    );
}

export default memo(Palette);