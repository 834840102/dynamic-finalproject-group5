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
           <BackBtn address="/started"/>
    </div>
    <div className="logo">
      <LogoComponent address="/welcomepage"/>
    </div>
    <div className="text">
      <TextComponent Subtitle="Negative effects of fastfood" Hint="By choosing one of them, you can learn more knowledge about effects of fastfood" h3fontsize="18px" pfontsize="16px"/>
      </div>
    <div className="btn">
      <GoalBtn src="/burger.png" address="/" goal="Effects of fast food" address="/effects"/>
      <GoalBtn src="/wastemoney.png" goal="Wasting money" address="/saving" />
      <GoalBtn src="/trash.png" goal="Package waste" address="/waste" />
    </div>
  </PageLayoutContainer>
}
