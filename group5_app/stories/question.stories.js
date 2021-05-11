import React from 'react';
import Question from '../comps/Question';

export default {
    title:"Example/Question",
    component:<Question />
}

export const MyQuestionPage = () => <Question />
export const MyButtonCustomColor = () => <Question bgcolor="white"/>
export const MyButtonCustomTexts = () => (
    <Question
        firsttext="Everyday"
        secondtext="None"
        thridtext="Sometimes"
    />
)