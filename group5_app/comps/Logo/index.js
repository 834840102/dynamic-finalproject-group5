import React from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
    width:43px;
    height:61px;
`; 

const Logo = ({}) =>{
    return <LogoImg src="/vercel.svg" />
}

export default Logo;