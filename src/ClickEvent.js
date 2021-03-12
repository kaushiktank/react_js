import React from 'react'

export default function ClickEvent() {
    // function clickFun() {
    //     alert("Kaushik Tank")
    // }

    const clickFun=()=>{
        alert("Kauhsik Tank")
    }
    return(
        <button onClick={clickFun}>Click me!</button>
    )
}

// export default class ClickEvent extends React.Component{
//     clickFun() {
//         alert("Kaushik Tn=ank")
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={()=>{this.clickFun()}}>Click Me!</button>
//             </div>
//         )
//     }
// }