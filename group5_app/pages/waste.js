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
    background-color: #F2F0EB;
    
    .back {
      display: flex;
      margin-right: 80%;
      cursor:pointer;
    }

    .box{
      margin-bottom:40px;
    }

    .text{
      display:flex;
      flex-direction: column;
      margin-top: -2%;
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
      margin-bottom: 50px;
    }

    .MyImg1{
      display:flex;
      flex-direction:column;
      cursor: pointer;
      margin-bottom:30px;
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
        margin-bottom: 30px;
    }

    .MyImg2:hover + .box{
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
      <BackBtn address="/saving"/>
    </div>
    <div className="MyImg">
      <ImgComponents src="https://media2.giphy.com/media/H83GY69pGeNOpZmpkv/giphy.gif" imgheight="300px" imgwidth="300px"/>
    </div>
    <div className="text">
      <TextComponent Subtitle = "How does it effects to the environment?" Hint="From plastics in our waterways to the toxic byproducts of manufacturing, the environmental impact of food packaging is enormous." h3fontsize="22px"/>
    </div>

    <div className="text4">
      <TextComponent Subtitle = "Packaging waste" Hint="" h3fontsize="18px" h3color="#33393E"/>
    </div>
    <div className="MyImg1">
      <ImgComponents src="trash.png" imgheight="110px" imgwidth="110px"/>
    </div>
    <div className="box">
      <SuggestionBox display="none" Boxheight="100px" Boxwidth="320px" listyle="none" suggestion1="40% of the total waste with Styrofoam. What's more, it took an incredible 900 years to decompose in the landfill!" />
    </div>


    <div className="text4">
      <TextComponent Subtitle = "Water Contamination" Hint="" h3fontsize="18px" h3color="#33393E"/>
    </div>
    <div className="MyImg2">
      <ImgComponents src="plastic.png" imgheight="100px" imgwidth="100px"/>
    </div>
    <div className="box">
      <SuggestionBox display="none" Boxheight="240px" Boxwidth="320px" listyle="none" suggestion1="Pathogens, hormones, drugs, and fertilizers that are used to produce fast food, seeping into our water supplies, water quality has suffered dramatically. Outbreaks of waterborne illness including E. Coli, marine life dead zones, and numerous other hazards can all be contributed to fast food." />
    </div>

    <div className="text4">
      <TextComponent Subtitle = "Environmental pollution" Hint="" h3fontsize="18px" h3color="#33393E"/>
    </div>
    <div className="MyImg2">
      <ImgComponents src="contamination.png" imgheight="100px" imgwidth="100px"/>
    </div>
    <div className="box">
      <SuggestionBox display="none" Boxheight="190px" Boxwidth="320px" listyle="none" suggestion1="Every day, tons of fast food is wasted causing more and more waste. Leftovers are the largest constituent of municipal solid waste. At landfills, food is slowly decomposed into methane, a greenhouse gas 86 times stronger than carbon dioxide." />
    </div>
 
 
    <div className="btn">
      <BtnComponent address="/bmipage" width="200px" height="65px" text="Take a quiz"/>
    </div>
  </PageLayoutContainer>
}