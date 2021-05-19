import styled from 'styled-components';
import ResultPage from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Overweight, Everyday, Sometimes
//fish, water, dark chocolate
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
        <ResultPage src="/fish.png" text1=" 8 and 12 ounces of a salmon per week" text2="322 calories" text3="for lunch" />
        <ResultPage src="/water.png" text1="17 ounces water  " text2="0 calories" text3="before every meal" />
        <ResultPage src="/dark chocolate.png" text1=" 30-60g" text2="164 calories " text3="for snack" />
    </PageLayoutContainer>
}