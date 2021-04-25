import React from 'react'
import styled from 'styled-components';


const ImgComponentsBox = styled.div`

`;

const ImgComponentsCont = styled.img`
    width:${props=>props.imgwidth};
    height:${props=>props.imgheight};
    border-radius: ${props=>props.imgbr};
`;

const ImgComponents = ({
    src="/body-scale.png",
    borderradius = 10,
    imgwidth = 110,
    imgheight = 110,
}) =>{
    return <ImgComponentsBox>
                <ImgComponentsCont src={src} imgbr={borderradius} imgheight={imgheight} imgwidth={imgwidth} />
            </ImgComponentsBox>
}

export default ImgComponents;