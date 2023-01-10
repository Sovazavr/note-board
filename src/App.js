
import { useState } from 'react';
import './App.scss';
import MenuComponent from "./MenuComponent/MenuComponent";
import NoteContent from './NoteComponent/NoteContent';

function App() {
  const [selected, setSelected] = useState({})


  return (
    <div className="App">
      <MenuComponent setSelected={setSelected} />

      <div className="Block" >
        {Object.entries(selected).length === 0 ? "Block" : <NoteContent setSelected={setSelected} name={selected.name} content={selected.content} />}
        
      </div>
    </div>
  );
}

export default App;
