import Head from 'next/head'
import styled from 'styled-components'
import GoalBtn from '../comps/GoalBtn'
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

    .btn div:hover{
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
      <TextComponent />
      </div>
    <div className="btn">
      <GoalBtn address="/suggestion2,3,11,12,20,21"/>
      <GoalBtn src="/diet.png" goal="Maintain Weight" address="/suggestion2,3,11,12,20,21"/>
      <GoalBtn src="/muscle.png" goal="Gain Weight" address="/suggestion1,10"/>
    </div>
  </PageLayoutContainer>
}