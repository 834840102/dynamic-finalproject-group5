import styled from "styled-components";
import TextComponent from "../comps/TextComponent";
import BackBtn from "../comps/BackBtn";
import BtnComponent from "../comps/BtnComponent";
import LogoComponent from "../comps/LogoComponent";
import ImgComponents from "../comps/ImgComponents";
import SuggestionBox from "../comps/SuggestionBox";

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:130vh;
    background-color: #FFFFFF;

    .back {
        display: flex;
        margin-right: 80%;
        cursor:pointer;
        font-size: 18px;
    }

    .box{
        display: none;
        position: relative;
        top: -50px;
        left: 11em;
    }
    
    .img{
        display:flex;
        position: relative;
        top: -50px;
        left: 11em;
        cursor: pointer;
    }

    .img:hover + .box{
        display:block;
    }

    .btn{
      display:flex;
      flex-grow: 1;
      flex-direction:column;
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
      <div>
        <TextComponent Subtitle="Your BMI[Body Mass Index]" Hint="" h3fontsize="22px" />
      </div>

       <div className="img">  
          <ImgComponents src="/chat.png" imgwidth="25px" imgheight="25px"/>
      </div>
      <div className="box">
          <SuggestionBox display="none" Boxheight="" Boxwidth="200px" title="" listyle="none" suggestion1="BMI is a measure of body fat based on height and weight that applies to adult men and women." pfontsize="15px"/>
        </div>
      <div className="btn">
        <div><BtnComponent text="UnderWeight (16-18.4)" width="280px" height="70px" address="/quiz1"/></div>
        <div><BtnComponent text="Normal (18.4-24.9)" width="280px" height="70px" address="/quiz1"/></div>
        <div><BtnComponent text="OverWeight (25.5-40)" width="280px" height="70px" address="/quiz1"/></div>
      </div>
    </PageLayoutContainer>
}
