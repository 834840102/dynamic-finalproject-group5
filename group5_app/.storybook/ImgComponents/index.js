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
    width = 110,
    height = 110,
    src="body-scale.png" 
}) =>{
    return <ImgComponentsBox>
                <ImgComponentsCont width={width} height={height} src={src} />
            </ImgComponentsBox>
}

export default ImgComponents;