import styled from 'styled-components'
import LogoComponent from '../comps/LogoComponent'

const PageLayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    min-height:100vh;
    background-color: #F2F0EB;
    animation: move 15s infinite;
  }
  
  @keyframes move {
    0% {background-color: #B6E2D3;}
    17% {background-color: #FAE8E0;}
    34% {background-color: #D3E9E7;}
    50% {background-color: #EFEBE0;}
    67% {background-color: #D3E9E7;}
    84% {background-color: #FAE8E0;}
    100% {background-color: #B6E2D3;}
  }

  img:hover{
      cursor:pointer;
  }
`;


export default function Home(){
    return <PageLayoutContainer>
        <LogoComponent width="90px" height="120px" address="/welcomepage"/>
        </PageLayoutContainer>
}