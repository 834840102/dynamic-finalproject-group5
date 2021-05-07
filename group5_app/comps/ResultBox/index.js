import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const ResultCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 600px;
    height: 150px;
    background-color: #fff;
    border-radius: 30px;
    border: 3px dashed black;
`;

const Resultletter = styled.div`
    opacity: ${props=>props.opacity};
`;

const Resultimg = styled.img`
    width:${props=>props.imgwidth};
    height:${props=>props.imgheight};
`;

const Resultintro = styled.li`
    font-style: normal;
    font-weight: ${props=>props.pfw};
    font-size: ${props=>props.pfs};
    color: #33393E;
    text-align:center;
    font-family: 'Raleway', sans-serif;
    list-style: ${props=>props.listyle};
    line-height: 40px;
`;

const Result = ({
    imgheight = "80px",
    imgwidth = "80px",
    src = "/diet.png",
    pfontsize = "16px",
    pfontweight = "bold",
    text1 = "Everyday",
    text2 = "eating",
    text3 = "go",
    listyle = "none"
})=>{
    const [open, setText] = useState(false);

    var opacity = 0,display = "none";
    if(open){
        opacity = 1;
        display = "block";
    }
    return<ResultCont>
        <Resultimg onClick={()=>setText(!open)} imgheight={imgheight} imgwidth={imgwidth} src={src} />
        <Resultletter opacity={opacity} display={display}>
            <Resultintro listyle={listyle} pfs={pfontsize} pfw={pfontweight}>{text1}</Resultintro>
            <Resultintro listyle={listyle} pfs={pfontsize} pfw={pfontweight}>{text2}</Resultintro>
            <Resultintro listyle={listyle} pfs={pfontsize} pfw={pfontweight}>{text3}</Resultintro>
        </Resultletter>
    </ResultCont>
}

export default Result;