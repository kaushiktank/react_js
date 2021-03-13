import './App.css';
import React, { useState } from "react";

function Hooks() {
    const [count, setCount] = useState(100);
    return (
        <div className="App">
            <h3>Hooks in Component {count}</h3>
            <button onClick={() => { setCount(count - 1) }}> click me! </button>
        </div>
    );
}

export default Hooks;