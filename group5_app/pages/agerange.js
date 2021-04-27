import Head from 'next/head'
import styled from 'styled-components'
import BtnComponent from '../comps/BtnComponent'
import LogoComponent from '../comps/LogoComponent'
import TextComponent from '../comps/TextComponent'
import BackBtn from '../comps/BackBtn'

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    min-height: 100vh;
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
    }

    .text{
      font-size: 26px;
      flex-grow: 0.1;
    }

    .btn{
      display:flex;
      flex-grow: 0.5;
      flex-direction: spacce-between;
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
           <BackBtn address="/letstartpage"/>
    </div>
    <div className="logo">
      <LogoComponent address="/welcomepage"/>
      </div>
    <div className="text">
      <TextComponent Subtitle="What's your age range? " Hint=""/>
      </div>
    <div className="btn">
      <div><BtnComponent address="/bmipage" width="130px" height="130px" text="15-21" fontsize="22px" /></div>
      <div><BtnComponent address="/bmipage" width="130px" height="130px" text="15-21" fontsize="22px" /></div>
      <div><BtnComponent address="/bmipage" width="130px" height="130px" text="15-21" fontsize="22px" /></div>
    </div>
  </PageLayoutContainer>
}