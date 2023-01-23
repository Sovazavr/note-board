
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.scss';
import MenuComponent from "./MenuComponent/MenuComponent";
import NoteContent from './NoteComponent/NoteContent';
import { Tree } from 'react-tree-graph';

function App() {
  const [selected, setSelected] = useState({})
  const [arrDoc, setArrDoc] = useState([])
  const [data, setData] = useState({})
  const [graph, setGraph] = useState(false)


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
      <MenuComponent data={data} setGraph={setGraph} setData={setData} setStorage={setStorage} getStorage={getStorage} setSelected={setSelected} arrDoc={arrDoc} setArrDoc={setArrDoc} />

      <div className="Block" >
        {Object.entries(selected).length === 0 ? <></> : <NoteContent arrDoc={arrDoc} setArrDoc={setArrDoc} setSelected={setSelected} selected={selected} />}
        {graph ? <Tree data={data}
          height={400}
          width={400} />
          : <></>
        }
      </div>
    </div>
  );
}

export default App;
