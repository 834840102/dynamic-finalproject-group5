import styled from 'styled-components';
import Result from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//underweight, sometimes, none
//fish, oil, cheese
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

export default function ResultPage() {
    return <PageLayoutContainer>
        <LogoComponent />
        <TextComponent Subtitle="Your result" Hint="Please click on the images to see more" h3fontsize="30px" />
        <Result src="/fish.png" text1="4 oz uncooked fish" text2="113.40 gram per fish" text3="for a meal" />
        <Result src="/oil.png" text1="5 to 6 Tbsp per day" text2="120 calories per Tbsp" text3="for your meal" />
        <Result src="/cheese.png" text1="place some on the food" text2="40 grams per day" text3="as your sauce" />
    </PageLayoutContainer>
}