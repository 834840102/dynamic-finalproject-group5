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

    .text {
        flex-grow: 1;
    }

    .picture{
      display:flex;
      flex-grow:1;
    }

    .slogan{
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      flex-grow: 1;
    }

    .btn{
      display:flex;
      flex-grow: 5;
      flex-direction:column;
    }

    button:hover{
      background-color: #6C9083;
      cursor: pointer;
    }
`;

export default function Home() {
    return <PageLayoutContainer>
      <div className="text">
        <TextComponent Subtitle="NUTRITIONAL SPACES" Hint="" h3fontsize="26px"/>
        </div>
      <div className="picture">
        <ImgComponents src="/mainpic.jpeg" borderradius="50%" imgheight="270px" imgwidth="270px" />
        </div>
      <div className="slogan">
        <div ><TextComponent Subtitle="BETTER FOOD," Hint="" h3color="#D7921E" h3fontsize="25px"/></div>
        <div><TextComponent Subtitle="BETTER HEALTH," Hint=""  h3color="#D7921E" h3fontsize="25px"/></div>
        <div><TextComponent Subtitle="BETTER YOU!" Hint=""  h3color="#D7921E" h3fontsize="25px"/></div>
      </div>
      <div className="btn">
      <div><BtnComponent address="/Inforpage" width="200px" height="60px;"/></div>
    </div>
    </PageLayoutContainer>
  }