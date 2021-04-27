import Head from 'next/head'
import styled from 'styled-components'
import LogoComponent from '../comps/LogoComponent'
import TextComponent from '../comps/TextComponent'
import ImgComponents from '../comps/ImgComponents'
import BtnComponent from '../comps/BtnComponent'
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
      font-size: 20px;
    }

    .logo{
      display:flex;
      justify-content:center;
      align-items:space-between;
      flex-grow:1;
    }

    .text{
      display:flex;
      flex-grow:3;
      flex-direction: column;
    }

    .MyImg{
      display:flex;
      flex-grow: 5;
      flex-direction:column;
      margin-top: 20px;
    }

    .startbtn{
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
      <BackBtn address="/" />
    </div>
    <div className="logo">
      <LogoComponent address="/welcomepage"/>
      </div>
    <div className="text">
      <TextComponent Subtitle = "Great! Now you know a lot more about healthy diet" Hint="" h3fontsize="22px" h3color="#33393E"/>
      <TextComponent Subtitle = "Ready to find out a proper diet for you? " Hint="" h3fontsize="22px" h3color="#33393E" pfontweight="bold"/> 
    </div>
    <div className="MyImg">
      <ImgComponents src="meal.png" imgheight="260px" imgwidth="260px"/>
    </div>
    <div className="startbtn">
          <BtnComponent address="/agerange" width="225px" height="60px" text="Let's Start"/>
    </div>
  </PageLayoutContainer>
}