import styled from 'styled-components';
import React, {useState} from 'react';

export default function Items(){
    const[sub, setSub] = useState("nothing sub");
    const[sub, setBig] = useState("nothing big");
    return <div>
        <Menu />
        <Card />
    </div>
}