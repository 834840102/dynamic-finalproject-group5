import Head from 'next/head'
import styled from 'styled-components'
import LogoComponent from '../comps/LogoComponent'
import TextComponent from '../comps/TextComponent'
import ImgComponents from '../comps/ImgComponents'
import BackBtn from  '../comps/BackBtn'

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color: #F2F0EB;
    
    .back {
      display: flex;
      margin-right: 80%;
      cursor:pointer;
      font-size: 20px;
    }

    .logo{
      display:flex;
      justify-content:center;
      align-items:space-between;
    }

    .text{
      display:flex;
      flex-grow:3;
    }

    .MyImg{
      display:flex;
      flex-grow: 5;
      flex-direction:column;
    }

    .MyImg2{
      display:flex;
      flex-grow: 3;
      flex-direction:column;
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
      <TextComponent Subtitle = "Choose the information you want to learn about" Hint="" h3fontsize="28px"/>
      </div>
    <div className="MyImg">
      <ImgComponents src="meal.png" imgheight="200px" imgwidth="200px" address="/welcomepage"/>
      <TextComponent Subtitle = "Healthy Diet" Hint="" h3color="#6C9083" h3fontsize="25px"/>
    </div>
    <div className="MyImg2">
      <ImgComponents src="dangerous.png" imgheight="200px" imgwidth="200px" address="/welcomepage"/>
      <TextComponent Subtitle = "Unhealthy Diet" Hint="" h3color="#6C9083" h3fontsize="25px"/>
    </div>

  </PageLayoutContainer>
}