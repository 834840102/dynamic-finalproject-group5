import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const BackButtonInput = styled.div`
    color:#33393E;
    margin:10px;
    font-family: 'Raleway', sans-serif;
    font-size: ${props=>props.fs};
    cursor: pointer;
    font-weight: bold;
    
`;

const BackBtn = ({
    text="Back",
    fontsize="18px",
    address="/.."
})=>{
    const router = useRouter();
    return <BackButtonInput fs={fontsize} onClick={()=>router.push(address)}>{text}</BackButtonInput>
}

export default BackBtn;