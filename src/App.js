
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.scss';
import MenuComponent from "./MenuComponent/MenuComponent";
import NoteContent from './NoteComponent/NoteContent';
import { AnimatedTree, Tree } from 'react-tree-graph';

function App() {
  const [selected, setSelected] = useState({})
  const [arrDoc, setArrDoc] = useState([])
  const [data, setData] = useState({})
  const [graph, setGraph] = useState(false)
  const [selectedFolder, setSelectedFolder] = useState({})


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
      <MenuComponent
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        data={data}
        setGraph={setGraph}
        setData={setData}
        setStorage={setStorage}
        getStorage={getStorage}
        setSelected={setSelected}
        arrDoc={arrDoc}
        setArrDoc={setArrDoc} />

      <div className="Block" >
        {Object.entries(selected).length === 0 ? <></> : <NoteContent
          selectedFolder={selectedFolder}
          arrDoc={arrDoc}
          setArrDoc={setArrDoc}
          setSelected={setSelected}
          selected={selected} />}
        {graph ? <AnimatedTree data={data}
          
          margins={{ top: 20, bottom: 10, left: 40, right: 40 }}
          svgProps={{
            className: 'custom'
          }}
          height={500}
          width={1200} />
          : <></>
        }
      </div>
    </div>
  );
}

export default App;
