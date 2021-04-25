import Head from 'next/head'
import styled from 'styled-components'
import BtnComponent from '../comps/BtnComponent'
import LogoComponent from '../comps/SmallLogoComponent'
import TextComponent from '../comps/TextComponent'

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    min-height:100vh;
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

    .SuggestionBox{
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
      <LogoComponent />
      </div>
    <div className="text">
      <TextComponent Subtitle="WARNING " Hint=""/>
      </div>
    <div className="SuggestionBox">
      <div><BtnComponent width="134px" height="126px" text="15-21" /></div>
      <div><BtnComponent width="134px" height="126px" text="22-35" /></div>
    </div>
    <div className="Back">
        <BtnComponent />
    </div>
  </PageLayoutContainer>
}