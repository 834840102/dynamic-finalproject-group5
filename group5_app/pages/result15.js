import styled from 'styled-components';
import Result from '../comps/ResultBox';
import TextComponent from '../comps/TextComponent';
import LogoComponent from '../comps/LogoComponent'
import React, {useState} from 'react';
//Normal, None, Sometimes
//wholegrains, vegetables, unsaulted nuts(same as 14)
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
        <Result src="/brown-rice.png" text1="a mix of wholegrains" text2="wheat, maize and rice" text3="for your meal" />
        <Result src="/vegetables.png" text1="plenty of vegetables" text2="any kinds of vegetables" text3="for your meal" />
        <Result src="/nuts.png" text1="1/4 cup of unsaulted nuts" text2=" 680 calories per cup" text3="as your snack" />
    </PageLayoutContainer>
}