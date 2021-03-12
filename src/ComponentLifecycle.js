import React from 'react'

export default class ComponentLifecycle extends React.Component{
    constructor(){
        super()
        this.state={
            data:null
        }
        console.log("Constructor")
    }
    componentDidMount(){
        this.setState({
            data: "Updated"
        })
        console.log("component_mount")
    }
    render(){
        console.log("render")
        return(
            <div>
                <h2>hello</h2>
            </div>
        )
    }
}