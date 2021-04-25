import React from 'react';
import styled from 'styled-components';

const TextTitle = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: ${props=>props.h3fs};
    color: ${props=>props.h3color};
    text-align:center;
    font-family: 'Sansita', sans-serif;
  }
`;

const TextDescription = styled.p`
    font-style: normal;
    font-weight: ${props=>props.pfw};
    font-size: ${props=>props.pfs};
    color: #33393E;
    text-align:center;
    font-family: 'Raleway', sans-serif;
`;

const TextComponent = ({
    Subtitle = "What’s your healthy living? ",
    Hint = "By choosing your main goal, we’ll be able to help you create a suitable plan for you",
    h3fontsize = 22,
    pfontsize = 16,
    pfontweight = 500,
    h3color = "#6C9083",
    src="/exclamation_mark.png",
})=>{
    return <div>
            <TextTitle h3fs={h3fontsize} h3color={h3color}>{Subtitle} {src}</TextTitle>
            <TextDescription pfs={pfontsize} pfw={pfontweight}>{Hint}</TextDescription>
        </div>
}


export default TextComponent;