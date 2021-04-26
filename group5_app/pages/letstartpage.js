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
      flex-grow:1;
    }

    .text{
      display:flex;
      flex-grow:3;
      flex-direction: column;
      margin-right: 20px;
    }

    .MyImg{
      display:flex;
      flex-grow: 8;
      flex-direction:column;
    }

    .startbtn{
      display:flex;
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
      <TextComponent Subtitle = "" Hint="Great! Now you know a lot more about healthy diet." pfontsize="27px" h3color="#33393E"/>
      <TextComponent Subtitle = "" Hint=" Ready to find out a proper diet for you? " pfontsize="25px" h3color="#33393E"/> 
    </div>
    <div className="MyImg">
      <ImgComponents src="lunch-box.png" imgheight="330px" imgwidth="330px" address="/welcomepage"/>
    </div>
    <div className="startbtn">
          <BtnComponent address="/agerange" width="255px" height="70px" text="Let's Start"/>
    </div>
  </PageLayoutContainer>
}