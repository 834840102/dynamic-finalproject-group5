import Head from 'next/head';
import styled from 'styled-components';
import BtnComponent from '../comps/BtnComponent';
import TextComponent from '../comps/TextComponent';
import SuggestionBox from '../comps/SuggestionBox';
import LogoComponent from '../comps/LogoComponent'
import BackBtn from  '../comps/BackBtn'

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
    return <PageLayoutContainer>
      <div className="back">
         <BackBtn address="/Inforpage"/>
      </div>
      <div className="logo">
          <LogoComponent address="/welcomepage"/>
      </div>
      <div className="text">
          
        <TextComponent Subtitle="Unhealthy Diet  " Hint="" h3fontsize="24px" h3color="#6C9083" />
      </div>
      <div className="box">
        <div>
            <SuggestionBox Boxheight="400px" Boxwidth="360px" title="What is it?" suggestcolor="#6C9083" suggestion1="Unhealthy diet is the application of unreasonable diets that cause the body to lose nutritional weight, causing negative effects on health. Losing a lot of weight in a too short time makes the body unable to adapt in time, thus damaging internal organs. Diets high in sugars, saturated and trans- fats, low fibre foods and high-sugar drinks contribute to non-communicable diseases and other health problems. High intake of fast food and processed foods increases these health risks." listyle="none" bgsrc="/donut.png" bgimg="no-repeat center"/></div>
      </div>
      <div className="backhome">
          <BtnComponent text="Next" address="/negative"/>
      </div>
    </PageLayoutContainer>
  }