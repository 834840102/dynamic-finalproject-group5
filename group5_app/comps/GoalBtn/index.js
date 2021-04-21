import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const GoalBtnCont = styled.div`
    display:inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#D4D1C7;
    width:135px;
    height:125px;
    margin:10px;
    border-radius:10px;
    & >*{
        color:#fff;
    }
`;

const GoalBtnImg = styled.img`
    width: 51px;
    height: 51px;
`;

const GoalBtnText = styled.p`
    font-size: 16px;
    font-weight:normal;
    font-family: 'Sansita', sans-serif;
`;

const GoalBtn = ({
    src="/lose-weight.png",
    goal="Lose Weight",
    address = "/bmipage"
})=>{
    const router = useRouter()
    return<GoalBtnCont onClick={()=>router.push(address)}>
        <GoalBtnImg src={src} />
        <GoalBtnText>{goal}</GoalBtnText>
    </GoalBtnCont>
}

export default GoalBtn;