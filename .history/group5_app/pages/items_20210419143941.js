import styled from 'styled-components';
import React, {useState} from 'react';

export default function Items(){
    const[sub, setSub] = useState("");
    const[sub, setBig] = useState("");
    return <div>
        <Menu />
        <Card />
    </div>
}