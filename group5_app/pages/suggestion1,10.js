import Head from 'next/head';
import styled from 'styled-components';
import BtnComponent from '../comps/BtnComponent';
import TextComponent from '../comps/TextComponent';
import SuggestionBox from '../comps/SuggestionBox';
import ImgComponents from '../comps/ImgComponents';

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    min-height:100vh;
    box-sizing:border-box;
    padding-top:60px;
    background-color: #F2F0EB;


    .text{
      display:flex;
        flex-direction:column;
        margin-top: -55px;
    }

    .box{
        display:flex;
      flex-direction: column;
        margin-top:30px;
    }

    .BoxIcon{
      display:inline-flex;
      justify-content: center;
      margin-bottom: -42px;
      z-index:3;
    }

    .BoxIconYoga{
      display:inline-flex;
      justify-content: center;
      align-items: space-between;
      margin-bottom: -42px;
      z-index:3;
    }

    .Back{
      display:flex;
      flex-direction: column;
    }

    button:hover{
      background-color: #6C9083;
      cursor: pointer;
    }
`;

export default function Home() {
  return <PageLayoutContainer>
    <div className="text">
      <TextComponent Subtitle="SUGGESTION " Hint="According to the BMI, you are currently underweight." h3fontsize="32px" h3color="#6C9083" pfontsize="18px" pfontweight="700" />
      <TextComponent Subtitle="" Hint="We recommend not opting for weight loss, as being underweight can cause as many health concerns for an individual as overweight can occur. You should gain weight for better health." pfontsize="18px" pfontweight="400" />
    </div>
    <div className="SuggestionBox">
    <div className="box">
      <div className="BoxIcon"><ImgComponents src="/heartbeat.png" imgheight="110px" imgwidth="110px" /></div>
      <div><SuggestionBox Boxheight="280px" Boxwidth="300px" title="Tips to boost your weight safely:" suggestion1="Eat frequently" suggestion2="Choose nutrient-rich foods" suggestion3="Exercise" suggestion4="Sleep schedule" suggestion5="Have an occasional treat"  suggestion6="Watch when you drink" suggestion7="Try smoothies and shakes" /></div>
    </div>
    <div className="box">
      <div className="BoxIconYoga"><ImgComponents src="/yoga.png" imgheight="110px" imgwidth="110px" /></div>
      <div><SuggestionBox Boxheight="300px" Boxwidth="300px" title="Yoga Asanas for Gain Weight:" suggestion1="Being underweight can lead to many health problems, including weakened immunity. Yoga enhances the circulation of oxygen and blood, and this helps improve the nutrient absorption. " listyle="none"/></div>
    </div>
    </div>
    <div className="Back">
        <BtnComponent text="Back to home" address="/welcomepage"/>
    </div>
    
  </PageLayoutContainer>
}