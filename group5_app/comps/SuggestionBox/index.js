import React from 'react';
import styled from 'styled-components';

const SuggestionBoxCont = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:300px;
    height:400px;
    padding: 30px 10px 10px 10px;
    border-radius:10px;
    border: 1px solid #6C9083;
`;

const SuggestionBoxText = styled.p`
    font-family:Raleway;
    font-size: 18px;
    font-weight:400;
`;

const SuggestionBoxSub = styled.h4`
    font-family:Raleway;
    font-size: 18px;
    font-weight:700;
`;

const SuggestionBox = ({
    title="Tips",
    suggestion="Build more lean muscle"
})=>{
    return<SuggestionBoxCont>
        <SuggestionBoxSub>{title}</SuggestionBoxSub>
        <SuggestionBoxText>{suggestion}</SuggestionBoxText>
    </SuggestionBoxCont>
}

export default SuggestionBox;