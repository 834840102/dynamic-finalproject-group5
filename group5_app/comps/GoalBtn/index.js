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
    width: 130px;
    height: 50px;
`;

const GoalBtnText = styled.p`
    font-size: 16px;
    font-weight:normal;
`;

const GoalBtn = ({
    goal="lost weight"
})=>{
    return<GoalBtnCont>
        <GoalBtnImg src="" />
        <GoalBtnText>{goal}</GoalBtnText>
    </GoalBtnCont>
}

export default GoalBtn;