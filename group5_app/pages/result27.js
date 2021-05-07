import styled from 'styled-components';
import ResultPage from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Overweight, Sometimes, Sometimes
//water, Ginger Tea, Boiled Eggs
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
        <ResultPage src="/water.png" text1="17 ounces water  " text2="0 calories" text3="before every meal" />
        <ResultPage src="/tea.png" text1="Tea-one time a day " text2="0.8 calories" text3="for breakfast" />
        <ResultPage src="/egg.png" text1=" 3 whole boiled eggs" text2="234 calories" text3="for dinner" />
    </PageLayoutContainer>
}