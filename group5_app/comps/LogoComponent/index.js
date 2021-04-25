import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const LogoImg = styled.img`
    width:${props=>props.width};
    height:${props=>props.height};
`; 

const LogoComponent = ({
    width="43px",
    height="61px",
    src="/Logo.png",
    address = "/home"
}) =>{
    const router = useRouter()
    return <div onClick={()=>router.push(address)}>
        <LogoImg width={width} height={height} src={src} />
        </div>
}

export default LogoComponent;