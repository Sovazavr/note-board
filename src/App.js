
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.scss';
import MenuComponent from "./MenuComponent/MenuComponent";
import NoteContent from './NoteComponent/NoteContent';

function App() {
  const [selected, setSelected] = useState({})
  const [arrDoc, setArrDoc] = useState([])
  //Добавить проверку на удаление последнего элемента
  


  let firstRender = useRef(true)
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      const arrDocL = JSON.parse(localStorage.getItem('arrDoc'));
      if (arrDocL) {
        setArrDoc(arrDocL);
      }
    } else {
      localStorage.setItem('arrDoc', JSON.stringify(arrDoc));
    }
  }, [arrDoc, selected])

 

  const setStorage = () => {
    localStorage.setItem('arrDoc', arrDoc)
  }

  const getStorage = () => {
    const arrDocL = JSON.parse(localStorage.getItem('arrDoc'));
      if (arrDocL) {
        setArrDoc(arrDocL);
      }
  }



  return (
    <div className="App">
      <MenuComponent setStorage={setStorage} getStorage={getStorage} setSelected={setSelected} arrDoc={arrDoc} setArrDoc={setArrDoc} />

      <div className="Block" >
        {Object.entries(selected).length === 0 ? <></> : <NoteContent arrDoc={arrDoc} setArrDoc={setArrDoc} setSelected={setSelected} selected={selected} />}

      </div>
    </div>
  );
}

export default App;
