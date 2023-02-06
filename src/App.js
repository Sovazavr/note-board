
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
  const [size, setSize] = useState({ height: 0, width: 0, rotate: 'rotate(0)' })

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

  useEffect(() => {
    const widthS = document.documentElement.clientWidth * 0.8
    const heightS = document.documentElement.clientHeight * 0.8
    if (widthS <= 1000) {
      setSize({ height: widthS*0.8, width: heightS, rotate: 'rotate(90)' })
    } else {
      setSize({ height: heightS, width: widthS, rotate: 'rotate(0)' })
    }


  }, [])



  const setStorage = () => {
    localStorage.setItem('arrDoc', arrDoc)
  }

  const getStorage = () => {
    const arrDocL = JSON.parse(localStorage.getItem('arrDoc'));
    if (arrDocL) {
      setArrDoc(arrDocL);
    }
  }

  const handleClick = (event, node) => {
    setGraph(false)
    setSelected(arrDoc.filter(e=>e.name===node)[0])
    

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
          gProps={{
            onClick: handleClick
          }}
          margins={{ top: 20, bottom: 10, left: 40, right: 40 }}
          svgProps={{
            className: 'custom',
            transform: size.rotate
          }}
          height={size.height}
          width={size.width} />
          : <></>
        }
      </div>
    </div>
  );
}

export default App;
