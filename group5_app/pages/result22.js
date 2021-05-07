import styled from 'styled-components';
import ResultPage from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Overweight, None, Everyday
//Boiled eggs, Milk, Salmon
const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    width:100vw;
    height:100vh;

    img:hover{
        cursor:pointer;
    }
`;

export default function ResultWeb() {
    return <PageLayoutContainer>
        <LogoComponent />
        <TextComponent Subtitle="Your result" Hint="Please click on the images to see more" h3fontsize="30px" />
        <ResultPage src="/egg.png" text1=" 3 whole boiled eggs" text2="234 calories" text3="for dinner" />
        <ResultPage src="/milk.png" text1="732 mL/d of milk   " text2="81 calories" text3="anytime" />
        <ResultPage src="/salmon.png" text1=" 8 and 12 ounces of a salmon per week" text2="322 calories" text3="for lunch" />
    </PageLayoutContainer>
}