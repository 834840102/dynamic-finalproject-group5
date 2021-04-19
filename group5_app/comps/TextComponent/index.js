import React from 'react';
import styled from 'styled-components';

const TextBox = styled.div`

`;

const TextTitle = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #6C9083;
    text-align:center;
`;

const TextDescription = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #33393E;
    text-align:center;
`;

const TextComponent = ({
    Subtitle = "What’s your healthy living? ",
    Hint = "By choosing your main goal, we’ll be able to help you create a suitable plan for you",
})=>{
    return <TextBox>
            <TextTitle>{Subtitle}</TextTitle>
            <TextDescription>{Hint}</TextDescription>
        </TextBox>
}


export default TextComponent;