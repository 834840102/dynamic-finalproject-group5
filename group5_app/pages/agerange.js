import Head from 'next/head'
import styled from 'styled-components'
import BtnComponent from '../comps/BtnComponent'
import LogoComponent from '../comps/LogoComponent'
import TextComponent from '../comps/TextComponent'

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color: #F2F0EB;

    .logo{
      display:flex;
      flex-grow: 0.1;
      justify-content:center;
      align-items:space-between;
    }

    .text{
      display:flex;
      flex-grow:0.2;
    }

    .btn{
      display:flex;
      flex-grow: 0.5;
      flex-direction:column;
    }
    
    button:hover{
      background-color: #6C9083;
      cursor: pointer;
    }
`;

export default function Home() {
  return <PageLayoutContainer>
    <div className="logo">
      <LogoComponent address="/welcomepage"/>
      </div>
    <div className="text">
      <TextComponent Subtitle="What's your age range? " Hint=""/>
      </div>
    <div className="btn">
      <BtnComponent address="/bmipage" width="135px" height="125px" text="15-21" fontsize="22px" />
      <BtnComponent address="/bmipage" width="135px" height="125px" text="22-35" fontsize="22px" />
      <BtnComponent address="/bmipage" width="135px" height="125px" text="Above 35" fontsize="22px" />
    </div>
  </PageLayoutContainer>
}