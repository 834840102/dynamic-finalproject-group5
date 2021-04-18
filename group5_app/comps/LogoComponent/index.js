import React from 'react';
import styled from 'styled-components';

const LogoComponentImg = styled.img`
    width:118px;
    height:168px;
`; 

const LogoComponent = ({
    width=118,
    height=168,
    src="/Logo.png"
}) =>{
    return <LogoComponentImg width={width} height={height} src={src} />
}

export default LogoComponent;