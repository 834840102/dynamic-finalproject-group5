import React from 'react';
import styled from 'styled-components';

const Text = styled.text`
    position: absolute;
    width: 145px;
    height: 31px;
    left: 149px;
    top: 720px;
    & >*{
        color:#FFFFFF;
    }
`;

const TextComponent = ({
    text="Get Started",
})=>{
    return <Text>{text}</Text>
}

export default TextComponent;