import React from 'react';
import Counter from './components/actionProduct.js';



export default function(props){
    return (
        <div>
            <Counter min={1} max={8} value={3}/>
            <Counter min={4} max={12}/>
        </div>
    )
}