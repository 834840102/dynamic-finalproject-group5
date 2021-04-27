import Head from 'next/head';
import styled from 'styled-components';
import BtnComponent from '../comps/BtnComponent';
import TextComponent from '../comps/TextComponent';
import SuggestionBox from '../comps/SuggestionBox';
import ImgComponents from '../comps/ImgComponents';
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

    .logo{
        display:flex;
        justify-content:center;
        align-items:space-between;
      }

    .text{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
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
      <BackBtn address="/welcomepage"/>
    </div>
    <div className="logo">
        <LogoComponent address="/welcomepage"/>
    </div>
    <div className="text">
        
      <TextComponent Subtitle="What is healthy diet?  " Hint="" h3fontsize="24px" h3color="#6C9083" />
    </div>
    <div className="box">
     <SuggestionBox Boxheight="420px" Boxwidth="420px" title="What is it?" suggestcolor="#6C9083" suggestion1="Healthy eating means eating a variety of foods that give you the nutrients you need to maintain your health, feel good, and have energy. Consuming a healthy diet throughout the life-course helps to prevent malnutrition in all its forms as well as a range of noncommunicable diseases and conditions. The exact make-up of a diversified, balanced and healthy diet will vary depending on individual characteristics (e.g. age, gender, lifestyle and degree of physical activity), cultural context, locally available foods and dietary customs. However, the basic principles of what constitutes a healthy diet remain the same." listyle="none" bgsrc="/avocado.png" bgimg="no-repeat center" /></div>
    <div className="backhome">
        <BtnComponent text="Next" address="/benefit"/>
        </div>
  </PageLayoutContainer>
}