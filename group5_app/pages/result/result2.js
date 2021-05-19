import styled from 'styled-components';
import Result from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//underweight, everyday, none
//no-sauce, no-oversized, cucumber
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
        <Result src="/no_sauce.png" text1="get rid of sauce" text2="0 gram of sauce" text3="for all the meal" />
        <Result src="/no-hugeburger.png" text1="prevent oversized burger" text2="no extra meat/drink" text3="for all the meal" />
        <Result src="/cucumber.png" text1="2 to 3 cucumber per day" text2=" 45 calories per one" text3="as your snack" />
    </PageLayoutContainer>
}