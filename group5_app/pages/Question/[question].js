import QuestionPage from "../../comps/question";
import React, {useState} from 'react';
import {useRouter} from 'next/router';

const texts = {
    
}

export default function Question(){
    // const [choice1, setChoice1] = useState("UnderWeight(16 - 18.4)");
    // const [choice2, setChoice2] = useState("Normal(18.4 - 24.9)");
    // const [choice3, setChoice3] = useState("OverWeight(25.5 - 40)");
    const router = useRouter();
    const {Question} = router.query;

    var choice1 = "UnderWeight(16 - 18.4)";
    var choice2 = "Normal(18.4 - 24.9)";
    var choice3 = "OverWeight(25.5 - 40)";
    return <div>
        <QuestionPage 

            text1 = {choice1}
            text2 = {choice2}
            text3 = {choice3}
        />
        </div>
}
