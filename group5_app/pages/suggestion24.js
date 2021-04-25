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
      <TextComponent Subtitle="SUGGESTION  " Hint="According to the BMI, you currently have an ideal body ratio." h3fontsize="32px" h3color="#6C9083" pfontsize="18px" pfontweight="700" />
      <TextComponent Subtitle="" Hint="Maintaining a healthy weight is important to overall health. We recommend you should maintain your weight at normal BMI level, to avoid the risk of facing many diseases affecting your health.  At middle age, there may be risk factors for disease related to poor diet (cardiovascular diseases, type 2 diabetes, obesity, degenerative spine, gout, diseases gastro-duodenal problems and many other diseases), so nutrition should be directed to the prevention of these diseases." pfontsize="18px" pfontweight="400" />
    </div>
    <div className="SuggestionBox">
      <div className="BoxIcon"><ImgComponents src="/weight-loss.png" imgheight="110px" imgwidth="110px" /></div>
      <div><SuggestionBox Boxheight="300px" Boxwidth="300px" title="Negative Effect of Underweight:" suggestion1="Easily get anemia" suggestion2="Weak immune system" suggestion3="Easy to suffer from impaired memory" suggestion4="Highly risk of infertility " suggestion5="Easily get osteoporosis"  suggestion6="Depression" suggestion7="Diabetes" /></div>
    </div>
    <div className="Back">
        <BtnComponent text="Back to home" address="/welcomepage"/>
    </div>
  </PageLayoutContainer>
  </PageBg>
}