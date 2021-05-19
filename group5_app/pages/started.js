
import styled from 'styled-components'
import TextComponent from '../comps/TextComponent'
import ImgComponents from '../comps/ImgComponents'
import BackBtn from  '../comps/BackBtn'

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    min-height:100vh;
    background-color: #87dbc8;
    
    .back {
      display: flex;
      margin-right: 80%;
      cursor:pointer;
    }

    .text{
      display:flex;
      flex-direction: column;
    }

    .text2{
      display:flex;
      flex-direction: column;
      margin-bottom: 5%;
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
      margin-top:
    }

    .MyImg1:hover{
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }

    .MyImg2{
      display:flex;
      flex-direction:column;
      cursor: pointer;
      margin-top: 40px;
    }

    .MyImg2:hover{
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
`;

export default function Home() {
  return <PageLayoutContainer>
    <div className="back">
      <BackBtn address="/welcompage"/>
    </div>
    <div className="MyImg">
      <ImgComponents src="https://i.pinimg.com/originals/50/40/fd/5040fd96a0a711f15102ce46ae011c1c.gif" imgheight="280px" imgwidth="280px"/>
    </div>
    <div className="text">
      <TextComponent Subtitle = "Before you start..." Hint=""  />
    </div>
    <div className="text2">
      <TextComponent Subtitle = "" Hint="We’ve got your back every step of the way. Before you begin your jouney, let’s go through some important things!" h3color="#33393E"/>
    </div>
    <div className="MyImg1">
      <ImgComponents src="pizza-slice.png" imgheight="110px" imgwidth="110px" address="/infor1"/>
    </div>
    <div>
      <TextComponent Subtitle = " Why should not eat fast food" Hint="" h3color="#33393E" />
    </div>
    <div className="MyImg2">
      <ImgComponents src="diet 1.png" imgheight="110px" imgwidth="110px" address="/Option/bmis"/>
    </div>
    <div>
      <TextComponent Subtitle = "What should you eat to maintain your health" Hint="" h3color="#33393E"  h3fontweight=""/>
    </div>

  </PageLayoutContainer>
}
