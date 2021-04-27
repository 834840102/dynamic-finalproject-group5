import React from 'react';
import styled from 'styled-components';

const SuggestionBoxCont = styled.div`
    display:flex;
    flex-direction: column;
    align-items: start;
    width:${props=>props.Boxwidth};
    height:${props=>props.Boxheight};
    padding: 30px 10px 10px 10px;
    border-radius:10px;
    border: 1px solid #6C9083;
    background: url("${props=>props.bgsrc}") ${props=>props.bgimg};
    background-color: white;
    line-height: 25px;
`;

const SuggestionBoxText = styled.li`
    font-family:Raleway;
    font-size: 18px;
    font-weight:400;
    color: #33393E;
    list-style: ${props=>props.listyle};
`;

const SuggestionBoxSub = styled.h4`
    font-family:Raleway;
    font-size: 20px;
    font-weight:700;
    color: #6C9083;
`;


const SuggestionBox = ({
    Boxwidth=300,
    Boxheight=300,
    bgimg = "",
    bgsrc = "",
    title="Tips",
    suggestion1="",
    suggestion2="",
    suggestion3="",
    suggestion4="",
    suggestion5="",
    suggestion6="",
    suggestion7="",
    listyle = "point",

})=>{
    return<SuggestionBoxCont Boxheight={Boxheight} Boxwidth={Boxwidth} bgsrc={bgsrc} bgimg={bgimg}>
        <SuggestionBoxSub listyle={listyle}>{title}</SuggestionBoxSub>
        <SuggestionBoxText listyle={listyle}>{suggestion1}</SuggestionBoxText>
        <SuggestionBoxText listyle={listyle}>{suggestion2}</SuggestionBoxText>
        <SuggestionBoxText listyle={listyle}>{suggestion3}</SuggestionBoxText>
        <SuggestionBoxText listyle={listyle}>{suggestion4}</SuggestionBoxText>
        <SuggestionBoxText listyle={listyle}>{suggestion5}</SuggestionBoxText>
        <SuggestionBoxText listyle={listyle}>{suggestion6}</SuggestionBoxText>
        <SuggestionBoxText listyle={listyle}>{suggestion7}</SuggestionBoxText>
    </SuggestionBoxCont>
}

export default SuggestionBox;