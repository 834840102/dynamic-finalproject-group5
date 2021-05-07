import styled from "styled-components";
import TextComponent from "../TextComponent";
import BtnComponent from "../BtnComponent";
import ImgComponents from "../ImgComponents";
import React,{useRouter, useState} from 'react';

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:130vh;
    background-color: #FFFFFF;

    .back {
        display: flex;
        margin-right: 80%;
        cursor:pointer;
        font-size: 18px;
      }

    .btn{
      display:flex;
      flex-grow: 1;
      flex-direction:column;
    }
    button:hover{
      background-color: #6C9083;
      cursor: pointer;
    }
`;

const QuestionPage = ({
  onChoice1Click=()=>{},
  onChoice2Click=()=>{},
  onChoice3Click=()=>{},
}) => {
    const [start, setstart] = useState(false);
    return <PageLayoutContainer>
    <div className="MyImg">
      <ImgComponents src="https://i.pinimg.com/originals/6d/17/b9/6d17b970849f62353e7509daff49db3f.gif" imgheight="300px" imgwidth="400px"/>
    </div>
      <div>
        <TextComponent Subtitle="How often do you eat fast food?" Hint="" h3fontsize="22px" />
        </div>
        <div className="btn">
      <div><BtnComponent text1="" onClick={onChoice1Click}/></div>
      <div><BtnComponent text2="" onClick={onChoice2Click}/></div>
      <div><BtnComponent text3="" onClick={onChoice3Click}/></div>
    </div>
    </PageLayoutContainer>
}

export default QuestionPage;