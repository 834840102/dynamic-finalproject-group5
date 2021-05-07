import Head from 'next/head'
import styled from 'styled-components'
import BackBtn from '../comps/BackBtn'
import GoalBtn from '../comps/GoalBtn'
import LogoComponent from '../comps/LogoComponent'
import TextComponent from '../comps/TextComponent'

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
      flex-grow: 1;
      justify-content:center;
      align-items:space-between;
    }

    .text{
      display:flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-grow:2;
    }

    .btn{
      display:flex;
      flex-grow: 2;
      flex-direction:column;
    }

    .btn div:hover{
      background-color: #6C9083;
      cursor: pointer;
    }
`;

export default function Home() {
  return <PageLayoutContainer>
    
    <div className="back">
           <BackBtn address="/bmipage"/>
    </div>
    <div className="logo">
      <LogoComponent address="/welcomepage"/>
    </div>
    <div className="text">
      <TextComponent Subtitle="What is the goal of your diet plan?" Hint="By choosing your main goal, we’ll be able to help you create a suitable plan for you" h3fontsize="22px" pfontsize="18px"/>
      </div>
    <div className="btn">
      <GoalBtn src="/burger.png" address="/" goal="Effects of fast food" address="/effects"/>
      <GoalBtn src="/wastemoney.png" goal="Wasting money" address="/saving" />
      <GoalBtn src="/trash.png" goal="Package waste" address="/waste" />
    </div>
  </PageLayoutContainer>
}