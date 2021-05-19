
import styled from 'styled-components';
import Result from '../../comps/ResultBox';
import TextComponent from '../../comps/TextComponent';
import LogoComponent from '../../comps/LogoComponent';
import BackBtn from '../../comps/BtnComponent'
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router'

const PageLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    width:100vw;
    height:100vh;

    img:hover{
        cursor:pointer;
    }

    button:hover{
        background-color: #6C9083;
        cursor: pointer;
    }
`;

const topImg = {
    UnderweightEverydayEveryday:"/milk.png",
    UnderweightEverydayNone:"/no_sauce.png",
    UnderweightEverydaySometimes:"/fried-egg.png",
    UnderweightNoneEveryday:"/fried-egg.png",
    UnderweightNoneNone:"/fried-egg.png",
    UnderweightNoneSometimes:"/fried-egg.png",
    UnderweightSometimesEveryday:"/fried-egg.png",
    UnderweightSometimesNone:"/fish.png",
    UnderweightSometimesSometimes:"/fried-egg.png",
    
    NormalEverydayEveryday:"/tomato.png",
    NormalEverydayNone:"/tomato.png",
    NormalEverydaySometimes:"/tomato.png",
    NormalNoneEveryday:"/fried-egg.png",
    NormalNoneNone:"/brown-rice.png",
    NormalNoneSometimes:"/brown-rice.png",
    NormalSometimesEveryday:"/fried-egg.png",
    NormalSometimesNone:"/vegetables.png",
    NormalSometimesSometimes:"/vegetables.png",
    
    OverweightEverydayEveryday:"/Brocolli.png",
    OverweightEverydayNone:"/bean.jpg",
    OverweightEverydaySometimes:"/fish.png",
    OverweightNoneEveryday:"/egg.png",
    OverweightNoneNone:"/cauliflower.png",
    OverweightNoneSometimes:"/radish.png",
    OverweightSometimesEveryday:"/hemp.png",
    OverweightSometimesNone:"/sprout.png",
    OverweightSometimesSometimes:"/water.png"
}

const middleImg = {
    UnderweightEverydayEveryday:"/rice.png",
    UnderweightEverydayNone:"/no-hugeburger.png",
    UnderweightEverydaySometimes:"/beans.png",
    UnderweightNoneEveryday:"/beans.png",
    UnderweightNoneNone:"/beans.png",
    UnderweightNoneSometimes:"/beans.png",
    UnderweightSometimesEveryday:"/beans.png",
    UnderweightSometimesNone:"/oil.png",
    UnderweightSometimesSometimes:"/beans.png",
    
    NormalEverydayEveryday:"/green-tea.png",
    NormalEverydayNone:"/green-tea.png",
    NormalEverydaySometimes:"/green-tea.png",
    NormalNoneEveryday:"/beans.png",
    NormalNoneNone:"/vegetables.png",
    NormalNoneSometimes:"/vegetables.png",
    NormalSometimesEveryday:"/beans.png",
    NormalSometimesNone:"/fruits.png",
    NormalSometimesSometimes:"/fruits.png",
    
    OverweightEverydayEveryday:"/Chicken.jpg",
    OverweightEverydayNone:"/tea.png",
    OverweightEverydaySometimes:"/water.png",
    OverweightNoneEveryday:"/milk.png",
    OverweightNoneNone:"/Brocolli.png",
    OverweightNoneSometimes:"/sprout.png",
    OverweightSometimesEveryday:"/quinoa.png",
    OverweightSometimesNone:"/oats.png",
    OverweightSometimesSometimes:"/tea.png"
}

const bottomImg = {
    UnderweightEverydayEveryday:"/nuts.png",
    UnderweightEverydayNone:"/cucumber.png",
    UnderweightEverydaySometimes:"/cucumber.png",
    UnderweightNoneEveryday:"/milk.png",
    UnderweightNoneNone:"/nuts.png",
    UnderweightNoneSometimes:"/nuts.png",
    UnderweightSometimesEveryday:"/nuts.png",
    UnderweightSometimesNone:"/cheese.png",
    UnderweightSometimesSometimes:"/nuts.png",
    
    NormalEverydayEveryday:"/cucumber.png",
    NormalEverydayNone:"/cucumber.png",
    NormalEverydaySometimes:"/cucumber.png",
    NormalNoneEveryday:"/milk.png",
    NormalNoneNone:"/nuts.png",
    NormalNoneSometimes:"/nuts.png",
    NormalSometimesEveryday:"/nuts.png",
    NormalSometimesNone:"/chicken-breast.png",
    NormalSometimesSometimes:"/chicken-breast.png",
    
    OverweightEverydayEveryday:"/whole-grain.jpg",
    OverweightEverydayNone:"/fruit.png",
    OverweightEverydaySometimes:"/dark chocolate.png",
    OverweightNoneEveryday:"/salmon.png",
    OverweightNoneNone:"/turkey.png",
    OverweightNoneSometimes:"/oats.png",
    OverweightSometimesEveryday:"/shrimp.png",
    OverweightSometimesNone:"/olives.png",
    OverweightSometimesSometimes:"/egg.png"
}

const topTexta = {
    UnderweightEverydayEveryday:"one or two glasses of whole milk",
    UnderweightEverydayNone:"get rid of sauce",
    UnderweightEverydaySometimes:"two eggs",
    UnderweightNoneEveryday:"two eggs",
    UnderweightNoneNone:"two eggs",
    UnderweightNoneSometimes:"two eggs",
    UnderweightSometimesEveryday:"two eggs",
    UnderweightSometimesNone:"4 oz uncooked fish",
    UnderweightSometimesSometimes:"two eggs",
    
    NormalEverydayEveryday:"twenty small tomatos",
    NormalEverydayNone:"twenty small tomatos",
    NormalEverydaySometimes:"twenty small tomatos",
    NormalNoneEveryday:"two eggs",
    NormalNoneNone:"a mix of wholegrains",
    NormalNoneSometimes:"a mix of wholegrains",
    NormalSometimesEveryday:"two eggs",
    NormalSometimesNone:"two eggs",
    NormalSometimesSometimes:"two eggs",
    
    OverweightEverydayEveryday:"2.5 cups of cooked brocolli",
    OverweightEverydayNone:"Kidney-beans 6-8grams per day",
    OverweightEverydaySometimes:"8 or 12 ounces of a salmon",
    OverweightNoneEveryday:"3 whole boiled eggs",
    OverweightNoneNone:"One cup of cooked cauliflower",
    OverweightNoneSometimes:"50 mg twice daily",
    OverweightSometimesEveryday:"2-3 tbsp of hemp seeds",
    OverweightSometimesNone:"100 to 150 grams sprouts",
    OverweightSometimesSometimes:"17 ounces water"
}

const middleTexta = {
    UnderweightEverydayEveryday:"1 cup of cooked white rice",
    UnderweightEverydayNone:"prevent oversized burger",
    UnderweightEverydaySometimes:"1 to 3 cup per week",
    UnderweightNoneEveryday:"1 to 3 cup per week",
    UnderweightNoneNone:"1 to 3 cup per week",
    UnderweightNoneSometimes:"1 to 3 cup per week",
    UnderweightSometimesEveryday:"1 to 3 cup per week",
    UnderweightSometimesNone:"5 to 6 Tbsp per day",
    UnderweightSometimesSometimes:"1 to 3 cup per week",
    
    NormalEverydayEveryday:"2 kg green tea powder",
    NormalEverydayNone:"2 kg green tea powder",
    NormalEverydaySometimes:"2 kg green tea powder",
    NormalNoneEveryday:"1 to 3 cup per week",
    NormalNoneNone:"plenty of vegetables",
    NormalNoneSometimes:"plenty of vegetables",
    NormalSometimesEveryday:"1 to 3 cup per week",
    NormalSometimesNone:"1 to 3 cup per week",
    NormalSometimesSometimes:"1 to 3 cup per week",
    
    OverweightEverydayEveryday:"46–91g per day chicken breast",
    OverweightEverydayNone:"Tea-one time a day",
    OverweightEverydaySometimes:"17 ounces water",
    OverweightNoneEveryday:"732 mL/d of milk",
    OverweightNoneNone:"2.5 cups of cooked brocolli",
    OverweightNoneSometimes:"100 to 150 grams sprouts daily",
    OverweightSometimesEveryday:"40 g of cooked quinoa",
    OverweightSometimesNone:"1/2 cups per day",
    OverweightSometimesSometimes:"Tea-one time a day"
}

const bottomTexta = {
    UnderweightEverydayEveryday:"1/4 cup of raw almonds",
    UnderweightEverydayNone:"2 to 3 cucumber per day",
    UnderweightEverydaySometimes:"2 to 3 cucumber per day",
    UnderweightNoneEveryday:"one or two glasses of whole milk",
    UnderweightNoneNone:"1/4 cup of raw almonds",
    UnderweightNoneSometimes:"1/4 cup of raw almonds",
    UnderweightSometimesEveryday:"1/4 cup of raw almonds",
    UnderweightSometimesNone:"place some on the food",
    UnderweightSometimesSometimes:"1/4 cup of raw almonds",
    
    NormalEverydayEveryday:"2 to 3 cucumber per day",
    NormalEverydayNone:"2 to 3 cucumber per day",
    NormalEverydaySometimes:"2 to 3 cucumber per day",
    NormalNoneEveryday:"one or two glasses of whole milk",
    NormalNoneNone:"1/4 cup of unsaulted nuts",
    NormalNoneSometimes:"1/4 cup of unsaulted nuts",
    NormalSometimesEveryday:"1/4 cup of raw almonds",
    NormalSometimesNone:"1/4 cup of raw almonds",
    NormalSometimesSometimes:"1/4 cup of raw almonds",
    
    OverweightEverydayEveryday:"Whole grain flour",
    OverweightEverydayNone:"vanished from your diet",
    OverweightEverydaySometimes:"30-60g",
    OverweightNoneEveryday:"8 and 12 ounces of a salmon",
    OverweightNoneNone:"Turkey breast without skin",
    OverweightNoneSometimes:"1/2 cups per day",
    OverweightSometimesEveryday:"4 oz of cooked shrimp",
    OverweightSometimesNone:"1/2 cups per day",
    OverweightSometimesSometimes:"3 whole boiled eggs"
}

const topTextb = {
    UnderweightEverydayEveryday:"149 calories per cup",
    UnderweightEverydayNone:"0 gram of sauce",
    UnderweightEverydaySometimes:"98 gram per egg",
    UnderweightNoneEveryday:"98 gram per egg",
    UnderweightNoneNone:"98 gram per egg",
    UnderweightNoneSometimes:"98 gram per egg",
    UnderweightSometimesEveryday:"98 gram per egg",
    UnderweightSometimesNone:"113.40 gram per fish",
    UnderweightSometimesSometimes:"98 gram per egg",
    
    NormalEverydayEveryday:"15 ml lycopene",
    NormalEverydayNone:"15 ml lycopene",
    NormalEverydaySometimes:"15 ml lycopene",
    NormalNoneEveryday:"98 gram per egg",
    NormalNoneNone:"wheat, maize and rice",
    NormalNoneSometimes:"wheat, maize and rice",
    NormalSometimesEveryday:"98 gram per egg",
    NormalSometimesNone:"98 gram per egg",
    NormalSometimesSometimes:"98 gram per egg",
    
    OverweightEverydayEveryday:"46–91 grams",
    OverweightEverydayNone:"21 calories",
    OverweightEverydaySometimes:"322 calories per week",
    OverweightNoneEveryday:"234 calories",
    OverweightNoneNone:"25 calories",
    OverweightNoneSometimes:"22 calories",
    OverweightSometimesEveryday:"111 calories",
    OverweightSometimesNone:"29 calories daily",
    OverweightSometimesSometimes:"0 calories"
}

const middleTextb = {
    UnderweightEverydayEveryday:"158 grams per cup",
    UnderweightEverydayNone:"no extra meat/drink",
    UnderweightEverydaySometimes:"113.40 grams per cup",
    UnderweightNoneEveryday:"113.40 grams per cup",
    UnderweightNoneNone:"113.40 grams per cup",
    UnderweightNoneSometimes:"113.40 grams per cup",
    UnderweightSometimesEveryday:"113.40 grams per cup",
    UnderweightSometimesNone:"120 calories per Tbsp",
    UnderweightSometimesSometimes:"113.40 grams per cup",
    
    NormalEverydayEveryday:"450 cc of water",
    NormalEverydayNone:"450 cc of water",
    NormalEverydaySometimes:"450 cc of water",
    NormalNoneEveryday:"113.40 grams per cup",
    NormalNoneNone:"any kinds of vegetables",
    NormalNoneSometimes:"any kinds of vegetables",
    NormalSometimesEveryday:"113.40 grams per cup",
    NormalSometimesNone:"113.40 grams per cup",
    NormalSometimesSometimes:"113.40 grams per cup",
    
    OverweightEverydayEveryday:"approxiamtely 92 calories",
    OverweightEverydayNone:"0.8 calories",
    OverweightEverydaySometimes:"0 calories",
    OverweightNoneEveryday:"81 calories",
    OverweightNoneNone:"46–91 grams",
    OverweightNoneSometimes:"29 calories",
    OverweightSometimesEveryday:"147 calories",
    OverweightSometimesNone:"307 calories",
    OverweightSometimesSometimes:"0.8 calories"
}

const bottomTextb = {
    UnderweightEverydayEveryday:" 680 calories per cup",
    UnderweightEverydayNone:" 45 calories per one",
    UnderweightEverydaySometimes:" 45 calories per one",
    UnderweightNoneEveryday:"149 calories per cup",
    UnderweightNoneNone:"149 calories per cup",
    UnderweightNoneSometimes:"149 calories per cup",
    UnderweightSometimesEveryday:"149 calories per cup",
    UnderweightSometimesNone:"40 grams per day",
    UnderweightSometimesSometimes:"149 calories per cup",
    
    NormalEverydayEveryday:" 45 calories per one",
    NormalEverydayNone:" 45 calories per one",
    NormalEverydaySometimes:" 45 calories per one",
    NormalNoneEveryday:"149 calories per cup",
    NormalNoneNone:" 680 calories per cup",
    NormalNoneSometimes:" 680 calories per cup",
    NormalSometimesEveryday:"149 calories per cup",
    NormalSometimesNone:" 680 calories per cup",
    NormalSometimesSometimes:" 680 calories per cup",
    
    OverweightEverydayEveryday:"46–91 grams per day",
    OverweightEverydayNone:"0 calories",
    OverweightEverydaySometimes:"164 calories",
    OverweightNoneEveryday:"322 calories per week",
    OverweightNoneNone:"194 calories",
    OverweightNoneSometimes:"307 calories",
    OverweightSometimesEveryday:"112 calories",
    OverweightSometimesNone:"78 calories",
    OverweightSometimesSometimes:"234 calories"
}

const topTextc = {
    UnderweightEverydayEveryday:"after a workout",
    UnderweightEverydayNone:"for all the meal",
    UnderweightEverydaySometimes:"for breakfast",
    UnderweightNoneEveryday:"for breakfast",
    UnderweightNoneNone:"for breakfast",
    UnderweightNoneSometimes:"for breakfast",
    UnderweightSometimesEveryday:"for breakfast",
    UnderweightSometimesNone:"for a meal",
    UnderweightSometimesSometimes:"for breakfast",
    
    NormalEverydayEveryday:"for your snack",
    NormalEverydayNone:"for your snack",
    NormalEverydaySometimes:"for your snack",
    NormalNoneEveryday:"for breakfast",
    NormalNoneNone:"for your meal",
    NormalNoneSometimes:"for your meal",
    NormalSometimesEveryday:"for breakfast",
    NormalSometimesNone:"for breakfast",
    NormalSometimesSometimes:"for breakfast",
    
    OverweightEverydayEveryday:"for breakfast",
    OverweightEverydayNone:"for lunch",
    OverweightEverydaySometimes:"for lunch",
    OverweightNoneEveryday:"for dinner",
    OverweightNoneNone:"for dinner",
    OverweightNoneSometimes:"after lunch",
    OverweightSometimesEveryday:"after breakfast",
    OverweightSometimesNone:"for breakfast",
    OverweightSometimesSometimes:"before every meal"
}

const middleTextc = {
    UnderweightEverydayEveryday:"for your meal",
    UnderweightEverydayNone:"for all the meal",
    UnderweightEverydaySometimes:"as your snack",
    UnderweightNoneEveryday:"as your snack",
    UnderweightNoneNone:"as your snack",
    UnderweightNoneSometimes:"as your snack",
    UnderweightSometimesEveryday:"as your snack",
    UnderweightSometimesNone:"for your meal",
    UnderweightSometimesSometimes:"as your snack",
    
    NormalEverydayEveryday:"an hour after meal",
    NormalEverydayNone:"an hour after meal",
    NormalEverydaySometimes:"an hour after meal",
    NormalNoneEveryday:"as your snack",
    NormalNoneNone:"for your meal",
    NormalNoneSometimes:"for your meal",
    NormalSometimesEveryday:"as your snack",
    NormalSometimesNone:"as your snack",
    NormalSometimesSometimes:"as your snack",
    
    OverweightEverydayEveryday:"for lunch",
    OverweightEverydayNone:"for breakfast",
    OverweightEverydaySometimes:"before every meal",
    OverweightNoneEveryday:"anytime",
    OverweightNoneNone:"for breakfast",
    OverweightNoneSometimes:"for breakfast",
    OverweightSometimesEveryday:"for lunch",
    OverweightSometimesNone:"for dinner",
    OverweightSometimesSometimes:"for breakfast"
}

const bottomTextc = {
    UnderweightEverydayEveryday:"as your snack",
    UnderweightEverydayNone:"as your snack",
    UnderweightEverydaySometimes:"as your snack",
    UnderweightNoneEveryday:"after a workout",
    UnderweightNoneNone:"as your snack",
    UnderweightNoneSometimes:"as your snack",
    UnderweightSometimesEveryday:"as your snack",
    UnderweightSometimesNone:"as your sauce",
    UnderweightSometimesSometimes:"as your snack",
    
    NormalEverydayEveryday:"as your snack",
    NormalEverydayNone:"as your snack",
    NormalEverydaySometimes:"as your snack",
    NormalNoneEveryday:"after a workout",
    NormalNoneNone:"as your snack",
    NormalNoneSometimes:"as your snack",
    NormalSometimesEveryday:"as your snack",
    NormalSometimesNone:"as your snack",
    NormalSometimesSometimes:"as your snack",
    
    OverweightEverydayEveryday:"In dinner",
    OverweightEverydayNone:"anytime",
    OverweightEverydaySometimes:"for snack",
    OverweightNoneEveryday:"for lunch",
    OverweightNoneNone:"for lunch",
    OverweightNoneSometimes:"for dinner",
    OverweightSometimesEveryday:"for dinner",
    OverweightSometimesNone:"as a snack",
    OverweightSometimesSometimes:"for dinner"
}

export default function ResultPage() {
    const [options,setOptions] = useState({
        bmis:null,
        fastfood:null,
        exercise:null
    });

    const router = useRouter()

    const [topText1,setTopText1] = useState()
    const [middleText1,setMiddleText1] = useState()
    const [bottomText1,setBottomText1] = useState()

    const [topText2,setTopText2] = useState()
    const [middleText2,setMiddleText2] = useState()
    const [bottomText2,setBottomText2] = useState()

    const [topText3,setTopText3] = useState()
    const [middleText3,setMiddleText3] = useState()
    const [bottomText3,setBottomText3] = useState()

    const [src1,setTopSrc] = useState()
    const [src2,setMiddleSrc] = useState()
    const [src3,setBottomSrc] = useState()

    useEffect(()=>{
        if(process.browser){
            var o = sessionStorage.getItem("options")
            var obj = JSON.parse(o)
            var key = obj.bmis+obj.fastfood+obj.exercise
            if(topImg[key]){
                setTopSrc(topImg[key])
                setMiddleSrc(middleImg[key])
                setBottomSrc(bottomImg[key])
                setTopText1(topTexta[key])
                setMiddleText1(middleTexta[key])
                setBottomText1(bottomTexta[key])

                setTopText2(topTextb[key])
                setMiddleText2(middleTextb[key])
                setBottomText2(bottomTextb[key])

                setTopText3(topTextc[key])
                setMiddleText3(middleTextc[key])
                setBottomText3(bottomTextc[key])
            }
        }
    },[])
    return<PageLayoutContainer>
        <LogoComponent />
        <TextComponent Subtitle="Your result" Hint="Please click on the images to see more" h3fontsize="30px" />
        <Result src={src1} text1={topText1} text2={topText2} text3={topText3} />
        <Result src={src2} text1={middleText1} text2={middleText2} text3={middleText3} />
        <Result src={src3} text1={bottomText1} text2={bottomText2} text3={bottomText3} />
        <BackBtn onClick={()=>router.push("/started")} text="Back to Started"/>
        <BackBtn onClick={()=>router.push("/Option/bmis")} text="Test Again"/>
    </PageLayoutContainer>

}