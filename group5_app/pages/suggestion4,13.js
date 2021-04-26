import Head from 'next/head';
import styled from 'styled-components';
import BtnComponent from '../comps/BtnComponent';
import TextComponent from '../comps/TextComponent';
import SuggestionBox from '../comps/SuggestionBox';
import ImgComponents from '../comps/ImgComponents';
import LogoComponent from '../comps/LogoComponent';

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
      font-size: 20px;
    }

    .text{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }

    .BoxIcon{
      display:inline-flex;
      justify-content: center;
      margin-bottom: -47px;
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

    .HoMe{
      display:flex;
      margin-top: 10%;
    }
`;

export default function Home() {
  return <PageLayoutContainer>
    <div className="logo">
        <LogoComponent address="/welcomepage"/>
    </div>
    <div className="text">
      <TextComponent Subtitle="SUGGESTION" Hint="According to the BMI, you currently have an ideal body ratio." h3fontsize="30px" h3color="#6C9083" pfontsize="22px" pfontweight="700" />
      <TextComponent Subtitle="" Hint="Maintaining a healthy weight is important to overall health. You should maintain your weight at normal level, to avoid the risk of facing many diseases affecting your health. Instead of opting for weight gain, we recommend building muscle mass for a firmer body." pfontsize="22px" pfontweight="400" />
    </div>
    <div className="SuggestionBox">
      <div className="BoxIcon"><ImgComponents src="/muscle.png" imgheight="130px" imgwidth="130px" /></div>
      <div><SuggestionBox Boxheight="410px" Boxwidth="400px" title="Tips to build muscle mass:" suggestion1="Eat breakfast to help build muscle mass" suggestion2="Eat every three hours" suggestion3="Ear protetin with each meal to boost your muscle mass" suggestion4="Eat fruit and vegetables with each meal" suggestion5="Eat carbs only after your workout"  suggestion6="Drink water to help you build muscle mass" suggestion7="Be as physically active as possible" /></div>
    </div>
    <div className="HoMe">
        <BtnComponent text="Back to home" address="/welcomepage" width="255px" height="70px"/>
    </div>
  </PageLayoutContainer>
}