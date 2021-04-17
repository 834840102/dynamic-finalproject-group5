import React from 'react';
import styled from 'styled-component';

const LogoComponentImg = styled.img`
    width:43px;
    height:61px;
`; 

const LogoComponent = ({
    width=43,
    height=61,
    src="vercel.svg"
}) =>{
    return <LogoComponentImg width={width} height={height} src={src} />
}

export default LogoComponent;