import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const LogoImg = styled.img`
    width:${props=>props.width};
    height:${props=>props.height};
    cursor: pointer;
`; 

const LogoComponent = ({
    width="53px",
    height="70px",
    src="/Logo.png",
    address = "/home"
}) =>{
    const router = useRouter()
    return <div onClick={()=>router.push(address)}>
        <LogoImg width={width} height={height} src={src} />
        </div>
}

export default LogoComponent;