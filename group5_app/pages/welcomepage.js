import styled from "styled-components";
import TextComponent from "../comps/TextComponent";
import ImgComponents from "../comps/ImgComponents";
import BtnComponent from "../comps/BtnComponent";

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:400px;
    height:750px;
    background-color: #F2F0EB;
    border: 55px solid #9FCBBB;
    border-left: 15px solid #9FCBBB; 
    border-right: 15px solid #9FCBBB;
    border-radius: 45px;

    .logo{
      display:flex;
      flex-grow: 0.1;
      justify-content:center;
      align-items:space-between;
    }

    .picture{
      display:flex;
      flex-grow:0.2;
      border-radius:50%;
    }

    .slogan{
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .btn{
      display:flex;
      flex-grow: 0.5;
      flex-direction:column;
    }
`;

export default function Home() {
    return <PageLayoutContainer>
      <div>
        <TextComponent Subtitle="NUTRITIONAL SPACES" Hint="" h3fontsize="30px"/>
        </div>
      <div className="picture">
        <ImgComponents src="/mainpic.jpeg" borderradius="50%" imgheight="280px" imgwidth="280px" />
        </div>
      <div className="slogan">
        <div ><TextComponent Subtitle="BETTER FOOD," Hint="" h3color="#D7921E" h3fontsize="30px"/></div>
        <div><TextComponent Subtitle="BETTER EAT," Hint=""  h3color="#D7921E" h3fontsize="30px"/></div>
        <div><TextComponent Subtitle="BETTER YOU!" Hint=""  h3color="#D7921E" h3fontsize="30px"/></div>
      </div>
      <div className="btn">
      <div><BtnComponent address="/agerange"/></div>
    </div>
    </PageLayoutContainer>
  }