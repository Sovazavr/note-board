
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.scss';
import MenuComponent from "./MenuComponent/MenuComponent";
import NoteContent from './NoteComponent/NoteContent';

function App() {
  const [selected, setSelected] = useState({})
  const [arrDoc, setArrDoc] = useState([])
  //Добавить проверку на удаление последнего элемента



  useEffect(() => {
    if (arrDoc.length !== 0) {
      localStorage.setItem('arrDoc', JSON.stringify(arrDoc));
    }

  }, [arrDoc]);

  useEffect(() => {

    const arrDocL = JSON.parse(localStorage.getItem('arrDoc'));
    if (arrDocL) {
      setArrDoc(arrDocL);

    }
  }, []);

  const setStorage = () => {
    localStorage.setItem('arrDoc', arrDoc)
  }

  const getStorage = () => {
    if (!!localStorage.getItem('arrDoc')) {
      setArrDoc(localStorage.getItem('arrDoc'))
    }
    console.log(localStorage.getItem('arrDoc'));
  }



  return (
    <div className="App">
      <MenuComponent setStorage={setStorage} setSelected={setSelected} arrDoc={arrDoc} setArrDoc={setArrDoc} />

      <div className="Block" >
        {Object.entries(selected).length === 0 ? <></> : <NoteContent arrDoc={arrDoc} setArrDoc={setArrDoc} setSelected={setSelected} selected={selected} />}

      </div>
    </div>
  );
}

export default App;
