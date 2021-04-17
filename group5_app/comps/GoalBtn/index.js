import React from 'react';
import styled from 'styled-components';

const GoalBtnCont = styled.div`
    display:inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#D4D1C7;
    width:135px;
    height:125px;
    border-radius:10px;
    & >*{
        color:#fff;
    }
`;

const GoalBtnImg = styled.img`
    width: 50px;
    height:50px;
`;

const GoalBtnText = styled.p`
    font-family:Sansita;
    font-size: 16px;
    font-weight:normal;
`;

const GoalBtn = ({
    width=50,
    height=50,
    src="/vercel.svg",
    goal="lost weight"
})=>{
    return<GoalBtnCont>
        <GoalBtnImg width={width} height={height} src={src} />
        <GoalBtnText>{goal}</GoalBtnText>
    </GoalBtnCont>
}

export default GoalBtn;