import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const LogoImg = styled.img`
    width:43px;
    height:61px;
`; 

const Logo = ({
    width=43,
    height=61,
    src="/Logo.png",
    address = "/home"
}) =>{
    const router = useRouter()
    return <div onClick={()=>router.push(address)}>
        <LogoImg width={width} height={height} src={src} />
        </div>
}

export default Logo;