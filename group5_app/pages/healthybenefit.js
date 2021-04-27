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
      <BackBtn address="/healthdef"/>
    </div>
    <div className="logo">
        <LogoComponent address="/welcomepage"/>
    </div>
    <div className="text">
        
      <TextComponent Subtitle="Why do we need to have Healthy Diet? " Hint="" h3fontsize="24px" h3color="#6C9083" />
    </div>
    <div className="box">
      <div>
          <SuggestionBox  Boxheight="450px" Boxwidth="420px" title="Benefit of heathy diet" suggestcolor="#6C9083" suggestion1="Opting for a balanced, adequate, and varied diet is an important step towards a happy and healthy lifestyle. A healthy diet can protect the human body against certain types of diseases, particularly non-communicable diseases such as obesity, diabetes, cardiovascular diseases, some types of cancer, and skeletal conditions. Healthy diets can also contribute to adequate body weight.
Healthy eating is a good opportunity to enrich life by experimenting with different foods from different cultures, origins and with different ways to prepare food. The benefits of eating a wide variety of foods are also emotional, as variety and color are important ingredients of a balanced diet." listyle="none" bgsrc="/avocado.png" bgimg="no-repeat center"/></div>
    </div>
    <div className="backhome">
        <BtnComponent text="Got it!" address="/letstartpage"/>
    </div>
  </PageLayoutContainer>
}