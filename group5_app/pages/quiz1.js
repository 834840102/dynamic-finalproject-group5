import styled from "styled-components";
import TextComponent from "../comps/TextComponent";
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
    <div className="MyImg">
      <ImgComponents src="https://i.pinimg.com/originals/6d/17/b9/6d17b970849f62353e7509daff49db3f.gif" imgheight="300px" imgwidth="400px"/>
    </div>
      <div>
        <TextComponent Subtitle="How often do you eat fast food?" Hint="" h3fontsize="22px" />
        </div>
        <div className="btn">
      <div><BtnComponent text="Everyday" address="/quiz2"/></div>
      <div><BtnComponent text="Once a week" address="/quiz2"/></div>
      <div><BtnComponent text="twice a week" address="/quiz2"/></div>
    </div>
    </PageLayoutContainer>
}
