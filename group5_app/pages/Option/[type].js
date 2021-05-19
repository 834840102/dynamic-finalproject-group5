import styled from "styled-components";
import React, {useState} from 'react';
import TextComponent from "../../comps/TextComponent";
import BackBtn from "../../comps/BackBtn";
import BtnComponent from "../../comps/BtnComponent";
import ImgComponents from "../../comps/ImgComponents";
import {router, useRouter} from 'next/router';

///bmi/underweight
///bmi/underweight
///bmi/underweight

var options = {
    bmis:null,
    fastfood:null,
    exercise:null
}

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
        font-size: 18px;
      }
    .Quiz{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .BtnTitle{
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .btn{
      display:flex;
      flex-grow: 1;
      flex-direction:column;
      margin-top: -15px;
    }
    button:hover{
      background-color: #6C9083;
      cursor: pointer;
    }
    button:focus{
      background-color: #6C9083;
    }
`;


export default function Options() {
  const router = useRouter();
  const {type} = router.query;

  const [end, setEnd] = useState(false)

    var buttontexts = {
        option1:"",
        option2:"",
        option3:"",
        img:"",
        title:"",
        icon:""
    }

  if(type === "bmis"){
    buttontexts.option1 = "Underweight"
    buttontexts.option2 = "Normal"
    buttontexts.option3 = "Overweight"
    buttontexts.img = "https://i.gifer.com/origin/5b/5b0ed1da2d71f7c536e56fba8ee9a069_w200.gif"
    buttontexts.title = "Your BMI[Body Mass Index]"
  }

  if(type === "fastfood"){
      buttontexts.option1 = "Everyday"
      buttontexts.option2 = "None"
      buttontexts.option3 = "Sometimes"
      buttontexts.img = "https://i.pinimg.com/originals/6d/17/b9/6d17b970849f62353e7509daff49db3f.gif"
      buttontexts.title = "How often do you eat fast food?"
  }

  if(type === "exercise"){
      buttontexts.option1 = "Everyday"
      buttontexts.option2 = "None"
      buttontexts.option3 = "Sometimes"
      buttontexts.img = "https://i.pinimg.com/originals/29/86/2a/29862a40b71e79957c6343a783015c22.gif"
      buttontexts.title = "How often do you exercise?"
  }

    const HandleClick = (text) =>{
      //alert(text)
        if(type === "bmis"){
            options.bmis = text
            router.push("/Option/fastfood")
        }
        if(type === "fastfood"){
            options.fastfood = text
            router.push("/Option/exercise")
        }
        if(type === "exercise"){
            options.exercise = text
        }
        if(options.bmis !== null && options.fastfood !== null && options.exercise !== null){
          setEnd(true)
        }
    }

    const HandleEnd = () =>{
        console.log(options)
        sessionStorage.setItem("options", JSON.stringify(options))
        router.push("/result/result")
    }

    return <PageLayoutContainer>
        <div className="back">
      <BackBtn address="/started"/>
    </div>
    <div className="BtnTitle">
        <BtnComponent text="BMI" onClick={()=>router.push("/Option/bmis")}  width="110px" height="50px"/>
        <BtnComponent text="Fastfood" onClick={()=>router.push("/Option/fastfood")} width="110px" height="50px"/>
        <BtnComponent text="Exercise" onClick={()=>router.push("/Option/exercise")} width="110px" height="50px"/>
    </div>
    <div className="MyImg">
    <ImgComponents src={buttontexts.img} imgheight="240px" imgwidth="360px"/>
    </div>
    
      <div className="Quiz">
        <TextComponent Subtitle={buttontexts.title} Hint="" />
        </div>
        <div className="btn">
      <BtnComponent text={buttontexts.option1} onClick={()=>HandleClick(buttontexts.option1)}/>
      <BtnComponent text={buttontexts.option2} onClick={()=>HandleClick(buttontexts.option2)}/>
      <BtnComponent text={buttontexts.option3} onClick={()=>HandleClick(buttontexts.option3)}/>
      {end === true && <BtnComponent text="Result" onClick={HandleEnd}/>}
    </div>
    </PageLayoutContainer>
}
