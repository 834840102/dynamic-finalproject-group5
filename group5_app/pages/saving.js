import Head from 'next/head'
import styled from 'styled-components'
import TextComponent from '../comps/TextComponent'
import ImgComponents from '../comps/ImgComponents'
import BackBtn from  '../comps/BackBtn'
import BtnComponent from "../comps/BtnComponent"
import SuggestionBox from '../comps/SuggestionBox'

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    min-height:100vh;
    background-color: #FFFFFF;
    
    .back {
      display: flex;
      margin-right: 80%;
      cursor:pointer;
    }

    .text{
      display:flex;
      flex-direction: column;
      margin-top: -5%;
    }

    .text2{
      display:flex;
      flex-direction: column;
      margin-bottom: 4%;
    }

    .text4{
        display:flex;
        flex-direction: column;
        margin-bottom: 0%;
      }
  

    .MyImg{
      display:flex;
      flex-direction:column;
      cursor: pointer;
    }

    .MyImg1{
      display:flex;
      flex-direction:column;
      cursor: pointer;
      margin-bottom:20px;
    }

    .box {
        display: none;
        margin-top: 20px;
    }
    
    .MyImg1:hover + .box{
        display:block;
    }

    .MyImg2{
        display:flex;
        flex-direction:column;
        cursor: pointer;
        margin-bottom: 20px;
    }

    .MyImg2:hover + .box{
        display:block;
    }

    .MyImg3{
        display:flex;
        flex-direction:column;
        cursor: pointer;
        margin-bottom: 20px;
    }

    .MyImg3:hover + .box{
        display:block;
    }

    .MyImg4{
        display:flex;
        flex-direction:column;
        cursor: pointer;
        margin-bottom: 20px;
    }

    .MyImg4:hover + .box{
        display:block;
    }

    .btn{
        display:flex;
        flex-grow: 5;
        flex-direction:column;
        margin-top:12%;
      }
  
    button:hover{
        background-color: #6C9083;
        cursor: pointer;
      }
`;

export default function Home() {
  return <PageLayoutContainer>
    <div className="back">
      <BackBtn address="/effects"/>
    </div>
    <div className="MyImg">
      <ImgComponents src="https://i.pinimg.com/originals/6c/02/af/6c02af8fd72ff6f43cb0234e5e6e3c90.gif" imgheight="300px" imgwidth="400px"/>
    </div>
    <div className="text">
      <TextComponent Subtitle = "Wasting money" Hint="" h3fontsize="22px"/>
    </div>
    <div className="text2">
      <TextComponent Subtitle = "Why is cooking more beneficial than eating fast food habits?" Hint="Eating at home allows you to control the ingredients in the food, instead of using natural ingredients because processed foods are unsafe for health." h3fontsize="20px" h3color="#33393E"/>
    </div>
    <div className="text4">
      <TextComponent Subtitle = "Waste money" Hint="" h3fontsize="18px" h3color="#33393E"/>
    </div>

    <div className="MyImg1">
      <ImgComponents src="wastemoney.png" imgheight="100px" imgwidth="100px"/>
    </div>
    <div className="box">
      <SuggestionBox display="none" Boxheight="170px" Boxwidth="320px" title="" listyle="none" suggestion1=" Eating dinner at a fast-food chain isn't cheap. It costs about $30 for a family of four to have dinner at their local McDonald's!  You can also save a lot of money by growing your own vegetables and fruits and cook it." />
    </div>

    <div className="MyImg1">
      <ImgComponents src="wastemoney.png" imgheight="100px" imgwidth="100px"/>
    </div>
    <div className="box">
      <SuggestionBox display="none" Boxheight="170px" Boxwidth="320px" title="" listyle="none" suggestion1=" Eating dinner at a fast-food chain isn't cheap. It costs about $30 for a family of four to have dinner at their local McDonald's!  You can also save a lot of money by growing your own vegetables and fruits and cook it." />
    </div>
 
    <div className="btn">
      <BtnComponent address="/waste" width="200px" height="65px" text="PACKAGE WASTE"/>
    </div>
  </PageLayoutContainer>
}