import styled from 'styled-components';
import ResultPage from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Overweight, Everyday, None
//bean, tea, fruit
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
        <ResultPage src="/bean.jpg" text1=" Kidney-beans 6-8grams per day" text2="21 calories" text3="for lunch" />
        <ResultPage src="/tea.png" text1="Tea-one time a day " text2="0.8 calories" text3="for breakfast" />
        <ResultPage src="/fruit.png" text1=" vanished from your diet" text2="0 calories " text3="" />
    </PageLayoutContainer>
}