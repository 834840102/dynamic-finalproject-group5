import Head from 'next/head'
import styled from 'styled-components'
import LogoComponent from '../comps/LogoComponent'

const PageLayoutContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    width:100vw;
    min-height:100vh;
    background-color: #F2F0EB; 
`;


export default function Home(){
    return <PageLayoutContainer><LogoComponent width="200px" height="260px" address="/welcomepage"/></PageLayoutContainer>
} 