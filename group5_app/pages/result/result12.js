import styled from 'styled-components';
import Result from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Normal, Everyday, Sometimes
//tomato, green tea, cucumber(same as 10)
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
        <Result src="/tomato.png" text1="twenty small tomatos" text2="15 ml lycopene" text3="for your snack" />
        <Result src="/green-tea.png" text1="2 kg green tea powder" text2="high in potassium" text3="after meal an hour" />
        <Result src="/cucumber.png" text1="2 to 3 cucumber per day" text2=" 45 calories per one" text3="as your snack" />
    </PageLayoutContainer>
}