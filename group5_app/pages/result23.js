import styled from 'styled-components';
import ResultPage from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Overweight, None, None
//Turkey, cauliflower, brocolli
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
        <ResultPage src="/cauliflower.png" text1=" One cup of cooked cauliflower" text2="25 calories" text3="for dinner" />
        <ResultPage src="/Brocolli.png" text1=" 2.5 cups of cooked brocolli" text2="46–91 grams" text3="for breakfast" />
        <ResultPage src="/turkey.png" text1=" Turkey breast without skin " text2="194 calories" text3="for lunch" />
    </PageLayoutContainer>
}