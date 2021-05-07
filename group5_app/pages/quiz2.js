import styled from "styled-components";
import TextComponent from "../comps/TextComponent";
import LogoComponent from "../comps/LogoComponent";
import BackBtn from "../comps/BackBtn";
import BtnComponent from "../comps/BtnComponent";
import ImgComponents from "../comps/ImgComponents";


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

    .btn{
      display:flex;
      flex-grow: 1;
      flex-direction:column;
    }

    .picture{
        margin-top: 40px;
        margin-bottom: 40px;
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
      <div className="picture">
        <ImgComponents src="https://i.pinimg.com/originals/29/86/2a/29862a40b71e79957c6343a783015c22.gif"  imgheight="300px" imgwidth="350px" />
        </div>
      <div>
        <TextComponent Subtitle="How often do you exercise?" Hint="" h3fontsize="22px" />
        </div>
        <div className="btn">
      <div><BtnComponent text="Everyday" address="/"/></div>
      <div><BtnComponent text="Once a week" address="/"/></div>
      <div><BtnComponent text="2-5 times/ week" address="/"/></div>
    </div>
    </PageLayoutContainer>
  }