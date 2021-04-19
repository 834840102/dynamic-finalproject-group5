import React from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
    width:43px;
    height:61px;
`; 

const Logo = ({
    width=43,
    height=61,
    src="/vercel.svg"
}) =>{
    return <LogoImg width={width} height={height} src={src} />
}

export default Logo;