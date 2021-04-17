import React from 'react';
import styled from 'styled-components';

const text = styled.button`
    width: 225px;
    height: 60px;
    background-color: #D4D1C7;
    padding:20px;
    border-radius:15px;
    border:none;
    & >*{
        color:#FFFFFF;
    }
`;

const BtnComponent = ({
    text="Get Started",
})=>{
    return <ButtonInput>{text}</ButtonInput>
}

export default BtnComponent;