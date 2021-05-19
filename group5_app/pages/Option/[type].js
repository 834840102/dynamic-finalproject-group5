import styled from "styled-components";
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

export default function Options() {
  const router = useRouter();
  const {type} = router.query;

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
      alert(text)
        if(type === "bmis"){
            options.bmis = text
        }
        if(type === "fastfood"){
            options.fastfood = text
        }
        if(type === "exercise"){
            options.exercise = text
        }
    }

    const HandleEnd = () =>{
        console.log(options)
        sessionStorage.setItem("options", JSON.stringify(options))
        router.push("/result/result1")
    }

    return <PageLayoutContainer>
        <div className="back">
      <BackBtn address="/welcomepage"/>
    </div>
    <div>
        <BtnComponent text="BMI" onClick={()=>router.push("/Option/bmis")} />
        <BtnComponent text="Fastfood" onClick={()=>router.push("/Option/fastfood")} />
        <BtnComponent text="Exercise" onClick={()=>router.push("/Option/exercise")} />
    </div>
    <div className="MyImg">
    <ImgComponents src={buttontexts.img} imgheight="300px" imgwidth="400px"/>
    </div>
    
      <div>
        <TextComponent Subtitle={buttontexts.title} Hint="" h3fontsize="22px" />
        </div>
        <div className="btn">
      <BtnComponent text={buttontexts.option1} onClick={()=>HandleClick(buttontexts.option1)}/>
      <BtnComponent text={buttontexts.option2} onClick={()=>HandleClick(buttontexts.option2)}/>
      <BtnComponent text={buttontexts.option3} onClick={()=>HandleClick(buttontexts.option3)}/>
      <BtnComponent text="Next" onClick={HandleEnd}/>
    </div>
    </PageLayoutContainer>
}
