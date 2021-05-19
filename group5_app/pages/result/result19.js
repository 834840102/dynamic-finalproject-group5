import styled from 'styled-components';
import ResultPage from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Overweight, Everyday, Everyday
//brocolli, chicken breast, wholegrain
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
        <ResultPage src="/Brocolli.png" text1=" 2.5 cups of cooked brocolli" text2="46–91 grams" text3="for breakfast" />
        <ResultPage src="/Chicken.jpg" text1="	46–91g per day chicken breast" text2="approxiamtely 92 calories" text3="for lunch" />
        <ResultPage src="/whole grain.jpg" text1=" Whole grain flour" text2="46–91 grams per day " text3="In dinner" />
    </PageLayoutContainer>
}