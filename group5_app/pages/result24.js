import styled from 'styled-components';
import ResultPage from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Overweight, Sometimes, None
//beets, Sprouts, Oats
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
        <ResultPage src="/beets.png" text1=" 50 mg twice daily " text2="22 calories" text3="after lunch" />
        <ResultPage src="/sprout.png" text1="100 to 150 grams sprouts daily " text2="29 calories" text3="for breakfast" />
        <ResultPage src="/oats.png" text1=" 1/2 cups per day" text2="307 calories " text3="for dinner" />
    </PageLayoutContainer>
}