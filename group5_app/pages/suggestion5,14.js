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
      <TextComponent Subtitle="SUGGESTION" Hint="According to the BMI, you currently have an ideal body ratio." h3fontsize="32px" h3color="#6C9083" pfontsize="18px" pfontweight="700" />
      <TextComponent Subtitle="" Hint="Maintaining a healthy weight is important to overall health. You should maintain your weight at normal level, to avoid the risk of facing many diseases affecting your health." pfontsize="18px" pfontweight="400" />
    </div>
    <div className="SuggestionBox">
      <div className="BoxIcon"><ImgComponents src="/body-scale.png" imgheight="110px" imgwidth="110px" /></div>
      <div><SuggestionBox Boxheight="300px" Boxwidth="300px" title="Tips to maintain your weight:" suggestion1="Build more lean muscle" suggestion2="Fight off huger with more filling foods" suggestion3="Eat breakfast" suggestion4="Include dairy in your diet" suggestion5="Consider adding minutes to your exercise plan"  suggestion6="Plan your meals in advance" suggestion7="Advoid temptation" /></div>
    </div>
    <div className="Back">
        <BtnComponent text="Back to home" address="/welcomepage"/>
    </div>
  </PageLayoutContainer>
  </PageBg>
}