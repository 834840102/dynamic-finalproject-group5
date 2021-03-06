import Head from 'next/head'
import styled from 'styled-components'
import TextComponent from '../comps/TextComponent'
import ImgComponents from '../comps/ImgComponents'
import BackBtn from  '../comps/BackBtn'
import BtnComponent from "../comps/BtnComponent"
import SuggestionBox from '../comps/SuggestionBox'
import { useRouter } from 'next/router'


const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    min-height:100vh;
    background-color: #F9DEBD;
    
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
      margin-top:-50px;
    }
   
    .MyImg1{
      display:flex;
      flex-direction:column;
      cursor: pointer;
      margin-bottom:20px;
    }
    .box1{
        margin-top: -10px;
        margin-bottom: 20px;
        animation: move 3s;
        position: relative;
    }
     
    .MyImg2{
        display:flex;
        flex-direction:column;
        cursor: pointer;
        margin-bottom: 20px;
    }
    .box2{
      opacity:1;
      animation: move 6s;
      position: relative; 
      margin-top: -10px;
      margin-bottom: 20px;
    }
    .MyImg3{
        display:flex;
        flex-direction:column;
        cursor: pointer;
        margin-bottom: 20px;
    }
    .box3{
      opacity:1;
      animation: move 9s;
      position: relative;
      margin-top: -10px;
      margin-bottom: 20px;
    }
    .MyImg4{
      display:flex;
      flex-direction:column;
      cursor: pointer;
      margin-bottom: 20px;
  }
  .box4{
    opacity:1;
    animation: move 12s;
    position: relative;
    margin-top: -10px;
    margin-bottom: 20px;
  }
    .btn{
        display:flex;
        flex-grow: 5;
        flex-direction:column;
        margin-top:2%;
      }
  
    button:hover{
        background-color: #6C9083;
        cursor: pointer;
      }
      @keyframes move {
        from {left: -50%; opacity:0;}
        to {left: 0; opactiy:1;}
      }
`;


export default function Home() {
  const router = useRouter()
  return <PageLayoutContainer>
    <div className="back">
      <BackBtn address="/started"/>
    </div>
    <div className="MyImg">
      <ImgComponents src="https://i.pinimg.com/originals/22/32/fb/2232fb9bbcef1d760e088a004ffe6bf0.gif" imgheight="300px" imgwidth="400px"/>
    </div>
    <div className="text">
      <TextComponent Subtitle = "The rise of the health conscious fast food consumer" Hint=""/>
    </div>
    <div className="text2">
      <TextComponent Subtitle = "" Hint="Consuming too much fast food will lead to an imbalance in nutrition and cause the body to absorb some harmful substances during processing affecting health." h3color="#33393E"/>
    </div>
    <div className="text3">
      <TextComponent Subtitle = "Why should not eat fast food?" Hint="" h3color="#33393E"/>
    </div>


    <div className="text4">
      <TextComponent Subtitle = "Decreased digestive function" Hint="" h3color="#33393E"/>
    </div>
    <div className="MyImg1">
      <ImgComponents src="stomach.png" imgheight="70px" imgwidth="70px"/>
    </div>
    <div className="box1">
      <SuggestionBox Boxheight="150px" Boxwidth="300px" title="" listyle="none" suggestion1="Fastfood contains a lot of calories and cholesterol, it will cause high blood pressure. If you want to burn off excess energy, you need to increase physical activity and exercise regularly, but fast food makes people more stagnant" />
    </div>


    <div className="text4">
      <TextComponent Subtitle = "Heart Diseases" Hint="" h3color="#33393E"/>
    </div>
    <div className="MyImg2">
      <ImgComponents src="heart.png" imgheight="70px" imgwidth="70px"/>
    </div>
    <div className="box2">
      <SuggestionBox Boxheight="195px" Boxwidth="300px" title="" listyle="none" suggestion1="Junk foods have been identified as a major cause of heart diseases including myocardial infarction, cardiac arrest, and atherosclerosis. This is due to the fact that junk food contains excessive amount of low-density lipoproteins and cholesterol that get deposited on the inner linings of blood vessels." />
    </div>
 
    <div className="text4">
      <TextComponent Subtitle = "Respiratory Sytem" Hint="" h3color="#33393E"/>
    </div>
    <div className="MyImg3">
      <ImgComponents src="brain.png" imgheight="70px" imgwidth="70px"/>
    </div>
    <div className="box3">
      <SuggestionBox Boxheight="220px" Boxwidth="300px" title="" listyle="none" suggestion1="Junk foods are high in saturated fats and Omega-6 fatty acids, individuals are likely to get depressed. When a person consumes junk food in excess, body finds difficult to digest and needs to spend high amount of blood and enzymes as a result, the person feels drowsy and suffers with reduced concentration." />
    </div>

    <div className="text4">
      <TextComponent Subtitle = "Poor Nutrition" Hint="" h3color="#33393E"/>
    </div>
    <div className="MyImg4">
      <ImgComponents src="balance.png" imgheight="70px" imgwidth="70px"/>
    </div>
    <div className="box4">
      <SuggestionBox Boxheight="170px" Boxwidth="300px" title="" listyle="none" suggestion1="When you eat too much junk food, you neglect to eat nutritious food like fruits and vegetables and other wholesome food. This means that your body does not get the necessary nutrition it needs and you end up with a weak immune system." />
    </div>

    <div className="btn">
      <BtnComponent onClick={()=>router.push("/saving")} width="200px" height="60px" text="SAVING"/>
    </div>
  </PageLayoutContainer>
}
