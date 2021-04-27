import Head from 'next/head'
import styled from 'styled-components'
import BtnComponent from '../comps/BtnComponent'
import LogoComponent from '../comps/LogoComponent'
import TextComponent from '../comps/TextComponent'
import BackBtn from  '../comps/BackBtn'

const BMIContainer = styled.div`
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
      font-size: 20px;
    }
    .logo{
        display:flex;
        flex-grow: -0.1;
        justify-content:center;
        align-items:space-between;
      }

      .text{
        display:flex;
        flex-grow: 0.2;
        color: #FFFFFF;
     }
      .bmi{
        display:flex;      
        margin-right: 40%;
      }
      .btn {
        display:flex;
        flex-direction: column;
        flex-grow: 0.5;
      }
      button:hover{
        background-color: #6C9083;
        cursor: pointer;
      }
    `;

      export default function BMI() {
        return <BMIContainer>
        <div className="back">
           <BackBtn address="/agerange"/>
       </div>
        <div className="logo">
            <LogoComponent address="/welcomepage"/>
            </div>
        <div className="text">
            <TextComponent Subtitle="Your BMI[Body Mass Index]" Hint="BMI is a measure of body fat based on height and weight that applies to adult men and women." h3fontsize="24px" pfontsize="18px"/>
        </div>
        <div className="text">
            <TextComponent Subtitle="" Hint="If you’re not sure about your BMI, you can click here to caculate your BMI" h3fontsize="24px" pfontsize="18px"/>
        </div>
        <div>
            <BtnComponent width="280px" height="70px" text="BMI Calculator" fontsize="20px" address="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm"/>
        </div>
        <div className="bmi">
            <TextComponent Subtitle="" Hint="Your BMI result" pfontsize="20px" pfontweight="700" />
        </div>
        <div className="btn">
            <div>
              <BtnComponent address="/healthyliving" width="280px" height="70px" text="UnderWeight (16-18.4)" fontsize="20px"/>
              </div>
            <div><BtnComponent address="/healthyliving" width="280px" height="70px" text="Normal (18.4-24.9)" fontsize="20px"/>
            </div>
            <div><BtnComponent address="/healthyliving" width="280px" height="70px" text="OverWeight (25.5-40)" fontsize="20px"/>
            </div>
        </div>

  </BMIContainer>
}