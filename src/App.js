import {useState} from "react";
import './App.css';

function App() {
  const [opened, setOpened]=useState(false)

  return (
    <div className="App">
      <div id="mySidenav" className={opened ? "MenuOpen" : "MenuClose"}>
        <button onClick={()=>setOpened(prev=>!prev)} className={opened ? "closeButton" : "openButton"}>&lt;</button>
      </div>
      <div className="Block">block</div>
    </div>
  );
}

export default App;
