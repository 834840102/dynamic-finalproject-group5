import React from 'react'
import styled from 'styled-components';


const PageLayoutContainer = styled.div`
    width:400px;
    height:750px;
    background-color: #F2F0EB;
    border: 55px solid white;
    border-left: 15px solid white;
    border-right: 15px solid white;
    border-radius: 45px;
`;

const PageLayoutCont = styled.div`
 
`;

const PageLayout = ({
}) =>{
    return <PageLayoutContainer>
                <PageLayoutCont />
            </PageLayoutContainer>
}

export default PageLayout;