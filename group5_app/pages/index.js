import Head from 'next/head'
import styled from 'styled-components'
import LogoComponent from '../comps/LogoComponent'

const PageLayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    height:100vh;
    background-color: #F2F0EB;
    animation: move 15s infinite;
  }
  
  @keyframes move {
    0% {background-color: #F3F3E7;}
    17% {background-color: #abffdf;}
    34% {background-color: #B2C4CB;}
    50% {background-color: #FCC0C5;}
    67% {background-color: #B2C4CB;}
    84% {background-color: #abffdf;}
    100% {background-color: #F3F3E7;}
  }

  img:hover{
      cursor:pointer;
  }
`;


export default function Home(){
    return <PageLayoutContainer>
        <LogoComponent width="120px" height="170px" address="/welcomepage"/>
        </PageLayoutContainer>
} 