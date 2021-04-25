import Head from 'next/head'
import styled from 'styled-components'
import LogoComponent from '../comps/LogoComponent'

const PageLayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:400px;
    height:750px;
    background-color: #F2F0EB;
    border: 55px solid #9FCBBB;
    border-left: 15px solid #9FCBBB;
    border-right: 15px solid #9FCBBB;
    border-radius: 45px;
`;


export default function Home(){
    return <PageLayoutContainer><LogoComponent width="120px" height="170px" address="/welcomepage"/></PageLayoutContainer>
} 