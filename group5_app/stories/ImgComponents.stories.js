import React from 'react';
import ImgComponents from '../comps/ImgComponent';

export default {
    title:"Example/ImgComponent",
    component:<ImgComponents />
}


export const MyImage = () => (
    <img src="/Images.png" alt="my image" />
  );


export const MyImage = () => <ImgComponents />
