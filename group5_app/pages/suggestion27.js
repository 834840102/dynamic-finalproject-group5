import Head from 'next/head';
import styled from 'styled-components';
import BtnComponent from '../comps/BtnComponent';
import TextComponent from '../comps/TextComponent';
import SuggestionBox from '../comps/SuggestionBox';
import ImgComponents from '../comps/ImgComponents';

const PageBg = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  box-sizing: border-box;
  width:430px;
  min-height:910px;
  border: solid #9FCBBB;
  border-width: 55px 20px;
  border-radius: 45px;
`;

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:400px;
    min-height:800px;
    box-sizing:border-box;
    padding-top:60px;
    background-color: #F2F0EB;

    .text{
        display:flex;
          flex-direction:column;
          margin-top: -55px;
    }

    .BoxIcon{
      display:inline-flex;
      justify-content: center;
      margin-bottom: -42px;
      z-index:3;
    }

    .SuggestionBox{
      display:flex;
      flex-direction: column;
    }

    .SuggestionBox+div{
      display:flex;
      align-items:start;
    }

    .Back{
      display:flex;
      flex-direction: column;
    }
`;

export default function Home() {
  return <PageBg>
  <PageLayoutContainer>
    <div className="text">
      <TextComponent Subtitle="SUGGESTION  " Hint="According to the BMI, you are currently overweight." h3fontsize="32px" h3color="#6C9083" pfontsize="18px" pfontweight="700" />
      <TextComponent Subtitle="" Hint="We recommend not opting for gain weight, as being overweight can cause as many health concerns for an individual as underweight can occur. You should lose weight for better health." pfontsize="18px" pfontweight="400" />
    </div>
    <div className="SuggestionBox">
      <div className="BoxIcon"><ImgComponents src="/weight-loss.png" imgheight="110px" imgwidth="110px" /></div>
      <div><SuggestionBox Boxheight="310px" Boxwidth="300px" title="Tips to lose your weight safely:" suggestion1="Reduce carbs. Above 35, your daily carb needs may decrease, the best solution is to add more carbs to small meals " suggestion2="Eat protein, fat, and vegetables" suggestion3="Eat a high protein breakfast" suggestion4="Exercise" suggestion5="Drink water before meals"  suggestion6="Avoid sugary drinks, fruit juice, and eat dark chocolate" suggestion7="Get good quality sleep" /></div>
    </div>
    <div className="Back">
        <BtnComponent text="Back to home" address="/welcomepage"/>
    </div>
  </PageLayoutContainer>
  </PageBg>
}