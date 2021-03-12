import React, { Component } from 'react'

export default class Component_will_unmount extends Component {
    constructor() {
        super()
        this.state = {
            states: true
        }
    }

    componentWillUnmount() {
        alert("Component has been deleted")
    }

    render() {
        return (
            <div>
                <h2>ComponentDidUpdate</h2>
                {
                    this.state.states ?
                        <h3>This is from component did update component</h3>
                        : null
                }
                <button onClick={() => { this.setState({ states: !this.state.states }) }}>click me!</button>
            </div>
        )
    }
}