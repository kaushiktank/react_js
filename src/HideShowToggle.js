import React from 'react'

class HideShoeToggle extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.show ?
                    <h3>Hisde this text</h3>
                    :null
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Click Me!</button>
            </div>
        )
    }
}

export default HideShoeToggle;