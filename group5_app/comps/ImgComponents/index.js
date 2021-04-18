import React from 'react'
import styled from 'styled-components';


const ImgComponentsBox = styled.div`
    width:110px;
    height:110px;
`;

const ImgComponentsCont = styled.img`
    width:110px;
    height:110px;
`;

const ImgComponents = ({
    src="/body-scale.png"
}) =>{
    return <ImgComponentsBox>
                <ImgComponentsCont src={src} />
            </ImgComponentsBox>
}

export default ImgComponents;