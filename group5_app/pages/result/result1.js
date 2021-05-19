import styled from 'styled-components';
import Result from '../../comps/ResultBox';
import TextComponent from '../../comps/TextComponent';
import LogoComponent from '../../comps/LogoComponent'
import React, {useEffect, useState} from 'react';
//underweight, everyday, everyday
//mike, rice, nuts
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

const result1 = {
    UnderweightEverydayEveryday:""
}

export default function ResultPage() {
    const [options,setOptions] = useState({
        bmis:null,
        fastfood:null,
        exercise:null
    });

    const [text,setText] = useState()

    const [src,setSrc] = useState()

    useEffect(()=>{
        if(process.browser){
            var o = sessionStorage.getItem("options")
            var obj = JSON.parse(o)
            var key = obj.bmis+obj.fastfood+obj.exercise
            if(result1[key]){
                setOptions(result1[key])
            }
        }
    },[])
    return <PageLayoutContainer>
        
        <LogoComponent />
        <TextComponent Subtitle="Your result" Hint="Please click on the images to see more" h3fontsize="30px" />
        <Result src="/milk.png" text1="one or two glasses of whole milk" text2="149 calories per cup" text3="after a workout" />
        <Result src="/rice.png" text1="1 cup of cooked white rice" text2="158 grams per cup" text3="for your meal" />
        <Result src="/nuts.png" text1="1/4 cup of raw almonds" text2=" 680 calories per cup" text3="as your snack" />
    </PageLayoutContainer>
}