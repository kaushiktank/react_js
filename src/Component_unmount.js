// This is the main file that get rendered firest in the place of App.js file and Component_will_unmount is works as a component that get unmounted
import React from "react";
import Component_will_unmount from "./Component_will_unmount";

class Component_unmount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.name ? <Component_will_unmount /> : null}
        <button
          onClick={() => {
            this.setState({ name: !this.state.name });
          }}
        >
          Click me!
        </button>
        {/* <Component_will_unmount />
        <button
          onClick={() => {
            this.setState({ name: "Kauhsik" });
          }}
        >
          Click me!
        </button> */}
      </div>
    );
  }
}

// function Component_unmount() {
//   return (
//     <div className="Component_unmount">
//       <header className="App-header">
//         <Componwnt_did_update />
//         <Component_will_unmount />
//       </header>
//     </div>
//   );
// }

export default Component_unmount;
