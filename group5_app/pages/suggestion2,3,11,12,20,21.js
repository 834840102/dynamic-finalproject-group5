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

    .Home{
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
        <TextComponent Subtitle="WARNING " Hint="According to the BMI, you are currently underweight." h3fontsize="30px" h3color="#BA2121" pfontsize="22px" pfontweight="700" />
        <TextComponent Subtitle="" Hint="We recommend not opting for weight loss, as being underweight can cause as many health concerns for an individual as overweight can occur. You should gain weight for better health." pfontsize="22px" pfontweight="400" />
      </div>
      <div className="SuggestionBox">
        <div className="BoxIcon"><ImgComponents src="/weight-loss.png" imgheight="130px" imgwidth="130px" /></div>
        <div><SuggestionBox Boxheight="380px" Boxwidth="400px" title="Negative Effect of Underweight:" suggestion1="Easily get anemia" suggestion2="Weak immune system" suggestion3="Easy to suffer from impaired memory" suggestion4="Highly risk of infertility " suggestion5="Easily get osteoporosis" suggestion6="Depression" suggestion7="Diabetes" /></div>
      </div>
      <div className="Home">
        <BtnComponent text="Back to home" address="/welcomepage" />
      </div>
    </PageLayoutContainer>
}