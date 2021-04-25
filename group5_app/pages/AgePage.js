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

    .text{
      display:flex;
      flex-grow:0.2;
    }

    .btn{
      display:flex;
      flex-grow: 0.5;
      flex-direction:column;
    }
`;

export default function Home() {
  return <PageLayoutContainer>
    <div className="logo">
      <LogoComponent />
      </div>
    <div className="text">
      <TextComponent Subtitle="What's your age range? " Hint=""/>
      </div>
    <div className="btn">
      <div><BtnComponent width="134px" height="126px" text="15-21" /></div>
      <div><BtnComponent width="134px" height="126px" text="22-35" /></div>
      <div><BtnComponent width="134px" height="126px" text="Above 35" /></div>
    </div>
  </PageLayoutContainer>
}