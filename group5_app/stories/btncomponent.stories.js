import React from 'react';
import styled from 'styled-components';

export default {
        title:"Button",
        component:<Button/>
}
export const MyButton = () => <Button />
export const ButtonWithTextProp = () => <Button text="Press Me" />
export const ButtonWithColorProp = () => (
    <Button 
        text="Color blue"
        bgcolor/>
)