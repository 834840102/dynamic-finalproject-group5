import styled from 'styled-components';
import Result from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//underweight, everyday, somtimes
//egg, beans, cucumber
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
        <Result src="/fried-egg.png" text1="two eggs" text2="98 gram per egg" text3="for breakfast" />
        <Result src="/beans.png" text1="1 to 3 cup per week" text2="113.40 grams per cup" text3="as your snack" />
        <Result src="/cucumber.png" text1="2 to 3 cucumber per day" text2=" 45 calories per one" text3="as your snack" />
    </PageLayoutContainer>
}