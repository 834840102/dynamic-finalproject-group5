import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonInput = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: #D4D1C7;
    padding:20px;
    border-radius:15px;
    border:none;
    color:#FFFFFF;
    margin:10px;
    font-family: 'Sansita', sans-serif;
    font-size: ${props=>props.fs};
`;

const BtnComponent = ({
    text="Get Started",
    width="200px",
    height="60px",
    fontsize="15px",
    onClick=()=>{}
})=>{
    const router = useRouter()
    return <ButtonInput width={width} height={height} fs={fontsize} onClick={onClick}>{text}</ButtonInput>
}

export default BtnComponent;
