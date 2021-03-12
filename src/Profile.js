import React from 'react'

export default function Profile(prop){
    const red=()=>{
        alert('alert call')
    }
    return(
        <div>
            <h2 onClick={red}>THis text is from the funcation Component + {prop.text.name}</h2>
            <h2>{prop.kaushik}</h2>
        </div>
    )
}