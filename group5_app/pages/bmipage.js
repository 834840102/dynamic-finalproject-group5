import Head from 'next/head'
import styled from 'styled-components'
import BtnComponent from '../comps/BtnComponent'
import LogoComponent from '../comps/LogoComponent'
import TextComponent from '../comps/TextComponent'

const BMIContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:400px;
    height:750px;
    background-color: #F2F0EB;
    border: 55px solid #9FCBBB;
    border-left: 15px solid #9FCBBB; 
    border-right: 15px solid #9FCBBB;
    border-radius: 45px;

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

      .btn {
        display:flex;
        flex-direction: column;
        flex-grow: 0.5;
      }

      .hide {
        display: none;
      }
          
      .myImage:hover + .hide {
        display: block;
        padding: 10px;
        position: absolute;
        width: 225px;
        height: 149px;
        background: #FFFFFF;
        border: 1px solid #6C9083;
        box-sizing: border-box;
        border-radius: 10px;
      }
    `;

      export default function BMI() {
        return <BMIContainer>
        <div className="logo">
            <LogoComponent address="/welcomepage"/>
            </div>
        <div className="text">
            <TextComponent Subtitle="Your BMI[Body Mass Index]" src="/exclamation_mark.png" Hint="If you’re not sure about your BMI, you can click here to caculate your BMI" />
            <div className="myImage">
              <img src="/exclamation_mark.png" width="22px" height="22px"></img>
            </div>
            <div className="hide">
              <div className="info">
                Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
              </div>
            </div>
        </div>
        <div>
            <BtnComponent width="266px" height="77px" text="BMI Calculator" fontsize="22px" address="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm"/>
        </div>
        <div className="bmi">
            <TextComponent Subtitle="" Hint="Your BMI result" pfontsize="18px" pfontweight="700" />
        </div>
        <div className="btn">
            <div>
              <BtnComponent address="/healthyliving" width="266px" height="77px" text="UnderWeight (16-18.4)" fontsize="20px"/>
              </div>
            <div><BtnComponent address="/healthyliving" width="266px" height="77px" text="Normal (18.4-24.9)" fontsize="20px"/>
            </div>
            <div><BtnComponent address="/healthyliving" width="266px" height="77px" text="OverWeight (25.5-40)" fontsize="20px"/>
            </div>
        </div>
  </BMIContainer>
}