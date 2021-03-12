import React from 'react'

class Componwnt_did_update extends React.Component {
    constructor() {
        super()
        this.state = {
            active: null,
            who: null
        }
    }

    componentDidUpdate() {
        console.log("Componet Updates");
        if (this.state.who == null) {
            this.setState({
                who: "Kauhsik Tank",
            })
        }
    }
    render() {
        return (
            <div>
                <h2>Component Did Update {this.state.who}</h2>
                        <button onClick={() => { this.setState({ active: true }) }}>Activate</button>
            </div>
        )
    }
}

export default Componwnt_did_update;