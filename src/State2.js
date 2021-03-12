import React from 'react'

export default class State2 extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "Kaushik",
            email: "kaushik@kaushik.com",
            count:0
        };
    }

    updateState() {
        this.setState({
            name:"KTank",
            email:"ktank@tank.com",
            count:this.state.count+1
        })    
    }

    render() {
        return (
            <div>
                <h2>this is from state</h2>
                <h4>Hello: {this.state.name}</h4>
                <h4>Email: {this.state.email}</h4>
                <h4>Count: {this.state.count}</h4>
                <button onClick={()=>{this.updateState()}}>Update State Val!</button>
            </div>
        );
    }
}