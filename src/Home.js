import React from "react";

class Home extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log("called lyfe cycle")
    }
    render(){
        return(
            <h5>This is from the class component</h5>
        )
    }
}

export default Home;