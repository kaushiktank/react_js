import React, { Component } from "react";

export default class Component_will_unmount extends Component {
    componentWillUnmount() {
        console.log("Component has been Unmounted");
    }

    render() {
        return (
            <div>
                <h2>ComponentDidUpdate</h2>
            </div>
        );
    }
}
