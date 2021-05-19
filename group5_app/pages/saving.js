import Head from 'next/head'
import styled from 'styled-components'
import TextComponent from '../comps/TextComponent'
import ImgComponents from '../comps/ImgComponents'
import BackBtn from  '../comps/BackBtn'
import BtnComponent from "../comps/BtnComponent"
import SuggestionBox from '../comps/SuggestionBox'
import {router, useRouter } from 'next/router'

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
        opacity:0;
        margin-top: 20px;
    }
    
    .MyImg1:hover + .box{
      opacity:1;
      animation: move 3s;
      position: relative;
    }

    .MyImg2{
        display:flex;
        flex-direction:column;
        cursor: pointer;
        margin-bottom: 20px;
    }

    .MyImg2:hover + .box{
      opacity:1;
      animation: move 3s;
      position: relative;
    }

    .MyImg3{
        display:flex;
        flex-direction:column;
        cursor: pointer;
        margin-bottom: 20px;
    }

    .MyImg3:hover + .box{
      opacity:1;
      animation: move 3s;
      position: relative;
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

      @keyframes move {
        from {margin-left: -20%; }
        to {margin-left: 0; }
      }
`;

export default function Home() {
  const router = useRouter()
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
      <ImgComponents src="/wastemoney.png" imgheight="100px" imgwidth="100px"/>
    </div>
    <div className="box">
      <SuggestionBox Boxheight="160px" Boxwidth="320px" title="" listyle="none" suggestion1=" Eating dinner at a fast-food chain isn't cheap. It costs about $30 for a family of four to have dinner at their local McDonald's!  You can also save a lot of money by growing your own vegetables and fruits and cook it." />
    </div>

    <div className="text4">
      <TextComponent Subtitle = "Low nutritional value" Hint="" h3fontsize="18px" h3color="#33393E"/>
    </div>
    <div className="MyImg2">
      <ImgComponents src="/fastfood.png" imgheight="100px" imgwidth="100px"/>
    </div>
    <div className="box">
      <SuggestionBox Boxheight="130px" Boxwidth="320px" title="" listyle="none" suggestion1="Traditional meals with a variety of fresh, clean foods bring health. While fast food is just a waste of money because it has no nutritional value and brings many health risks." />
    </div>

    <div className="text4">
      <TextComponent Subtitle = "Cost more than traditional meal" Hint="" h3fontsize="18px" h3color="#33393E"/>
    </div>
    <div className="MyImg3">
      <ImgComponents src="/save-money.png" imgheight="100px" imgwidth="100px"/>
    </div>
    <div className="box">
      <SuggestionBox display="none" Boxheight="230px" Boxwidth="320px" title="" listyle="none" suggestion1="Based on prices at a superstore grocery store, a McDonald's meal is $14 more than a home-cooked meal. In addition to saving money, home-cooked meals are much healthier. Compare that same meal to an even cheaper dinner of rice and beans with bacon, peppers, and onions to save more than $18." />
    </div>
 
    <div className="btn">
      <BtnComponent onClick={()=>router.push("/waste")} width="200px" height="65px" text="PACKAGE WASTE"/>
    </div>
  </PageLayoutContainer>
}