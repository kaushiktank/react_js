// import logo from './logo.svg';
// import ComponentLifecycle from './ComponentLifecycle'
// import Home from './Home'
// import Profile from './Profile'
// import State2 from './State2'
// import HideShoeToggle from './HideShowToggle'
// import ClickEvent from './ClickEvent'
// import Lifecycle from './Lifecycle'
import './App.css';
import Componwnt_did_update from './Componwnt_did_update'
import Component_will_unmount from './Component_will_unmount'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Componwnt_did_update />
        <Component_will_unmount />
        {/* <ClickEvent />
        <Lifecycle />  */}

        {/* <State2 />
        <HideShoeToggle /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Home />
        This is Kauhsik Tank Learning ReactJs
        <Profile text={{name:'Kauhisk'}} kaushik="This is another prop" />
        <state_k/> */}
      </header>
    </div>
  );
}

export default App;
