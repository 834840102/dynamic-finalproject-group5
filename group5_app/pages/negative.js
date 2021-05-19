import Head from 'next/head';
import styled from 'styled-components';
import BtnComponent from '../comps/BtnComponent';
import TextComponent from '../comps/TextComponent';
import SuggestionBox from '../comps/SuggestionBox';
import LogoComponent from '../comps/LogoComponent'
import BackBtn from  '../comps/BackBtn'
import {router, useRouter } from 'next/router';

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    min-height:100vh;
    background-color: #F2F0EB;
    
    .back {
      display: flex;
      margin-right: 80%;
      cursor:pointer;
    }

    .text{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }

    .SuggestionBox{
      display:flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .SuggestionBox+div{
      display:flex;
      align-items:start;
    }

    .backhome{
      display:flex;
      margin-top: 5%;

    }
    button:hover{
      background-color: #6C9083;
      cursor: pointer;
    }
`;

export default function Home() {
  const router = useRouter()
    return <PageLayoutContainer>
      <div className="back">
         <BackBtn address="/unhealthydef"/>
      </div>
      <div className="logo">
          <LogoComponent address="/welcomepage"/>
      </div>
      <div className="text">
        <TextComponent Subtitle="Unhealthy Diet  " Hint=""h3color="#6C9083" />
      </div>
    <div className="box">
      <div>
          <SuggestionBox Boxheight="430px" Boxwidth="400px" title="Negative impact of healthy diet" suggestcolor="#6C9083" suggestion1="Poor nutrition can impair our daily health and wellbeing and reduce our ability to lead an enjoyable and active life. In the short term, poor nutrition can contribute to stress, tiredness and our capacity to work, and over time, it can contribute to the risk of developing some illnesses and other health problems. An unhealthy diet can cause the human body to effects certain types of diseases, particularly non-communicable diseases such as obesity, diabetes, cardiovascular diseases, some types of cancer, and skeletal conditions. Healthy diets can also contribute to adequate body weight." listyle="none" bgsrc="/donut.png" bgimg="no-repeat center"/></div>
    </div>
    <div className="backhome">
        <BtnComponent text="Got it!" onClick={()=>router.push("/letstartpage")}/>
    </div>
  </PageLayoutContainer>
}
