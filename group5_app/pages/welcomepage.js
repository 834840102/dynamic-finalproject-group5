import styled from "styled-components";
import TextComponent from "../comps/TextComponent";
import ImgComponents from "../comps/ImgComponents";
import BtnComponent from "../comps/BtnComponent";

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F2F0EB;
    width:100vw;
    min-height: 100vh;

    .picture{
      display:flex;
      margin-top:4%;
    }

    .slogan{
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      flex-grow: 1;
      margin-top:4%;

    }

    .slogan:hover
    {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }

    .btn{
      display:flex;
      flex-grow: 5;
      flex-direction:column;
      margin-top:8%;
    }

    button:hover{
      background-color: #6C9083;
      cursor: pointer;
    }
`;

export default function Home() {
    return <PageLayoutContainer>
      <div className="text">
        <TextComponent Subtitle="NUTRITIONAL SPACES" Hint="" h3fontsize="25px"/>
        </div>
      <div className="picture">
        <ImgComponents src="/mainpic.jpeg" borderradius="50%" imgheight="270px" imgwidth="270px" />
        </div>
      <div className="slogan">
        <div ><TextComponent Subtitle="Promote Healthy Eating Habits!" Hint="Find out how fast food effect the body and how to improve healthy eating habits" h3color="#D7921E" h3fontsize="23px" pfontsize="20px"/></div>
      </div>
      <div className="btn">
      <div><BtnComponent address="/started" width="200px" height="65px;"/></div>
    </div>
    </PageLayoutContainer>
  }