import React, { useEffect } from 'react'
import "./MenuStyle.scss"
import { useState } from "react";
import GlobalSVGSelector from '../assets/GlobalSVGSelector';
import ListElement from './ListElement';
import * as d3 from "d3";


const MenuComponent = ({ setStorage, getStorage, setSelected, arrDoc, setArrDoc, setData, setGraph, data }) => {
  const [create, setCreate] = useState(false)
  const [createFolder, setCreateFolder] = useState(false)

  const [opened, setOpened] = useState(false)
  const [valueInput, setValueInput] = useState("")
  const [root, setRoot] = useState('')
  const [selectedFolder, setSelectedFolder] = useState('')
  const [grouping, setGrouping] = useState({})

  useEffect(() => {
    setGrouping(d3.group(arrDoc, d => d.parent.name))
  }, [arrDoc]);

  const rootFind = () => {
    setGrouping(d3.group(arrDoc, d => d.parent.name))
    let s = []
    let d = {}
    for (let obj of grouping.keys()) {
      if (obj == "Root") {
        d.name = grouping.get(obj)[0].name

        for (let i = 0; i < grouping.get(obj).length; i++) {
          for (let j = 0; j < grouping.get(obj)[i].children.length; j++) {
            s.push({ name: grouping.get(obj)[i].children[j].name })
          }
          d.children = s
        }
      }

    }

    return d
  }
  const hierarchyCreate = (obj) => {
    let s = [];
    let d = [];
    if ("children" in obj) {
      for (let i = 0; i < obj.children.length; i++) {
        for (let key of grouping.keys()) {
          if (key == obj.children[i].name) {
            for (let j = 0; j < grouping.get(key).length; j++) {
              s.push({ name: grouping.get(key)[j].name });
            }

            obj.children[i].children = s;
            s = []
          }
        }
      }
      for (let i = 0; i < obj.children.length; i++) {
        hierarchyCreate(obj.children[i]);
      }
    } else {
      for (let key of grouping.keys()) {
        if (obj.name == key) {
          for (let i = 0; i < grouping.get(key).length; i++) {
            d.push({ name: grouping.get(key)[i].name });
          }
          obj.children = d;
        }
      }
    }

    return obj;
  }

  const treeParse = () => {
    setSelected(false)
    setGraph(true)

    setData(hierarchyCreate(rootFind()))
    console.log('DATA: ', data);
  
}


const onChangeInput = (e) => {
  setValueInput(e.target.value)

}
const onBlurInput = () => {
  setCreate(false)
  if (valueInput) {
    if (selectedFolder) {
      arrDoc.map(el => {
        if (el.folderName === selectedFolder) {
          el.file.push({ name: valueInput.trim(), content: "" })
        }
      })
      setArrDoc(arrDoc)
    }
    else {
      setArrDoc([...arrDoc, { name: valueInput, content: "", status: 'file', parent: { name: '' }, children: [] }])
    }

    setValueInput('')
    setStorage(arrDoc)
  }
}
const onBlurInputFolder = () => {
  setCreateFolder(false)
  if (valueInput) {
    setArrDoc([...arrDoc, { folderName: valueInput.trim(), file: [], status: 'folder' }])
    setValueInput('')
    setStorage(arrDoc)
  }
}

const enterKeyDown = (e) => {
  if (e.keyCode == 13) {
    onBlurInput()
  }
}
const enterKeyDownFolder = (e) => {
  if (e.keyCode == 13) {
    onBlurInputFolder()
  }
}

const handlechange = (el) => {
  setGraph(false)
  setSelected(el)
}

const deleteElement = (el) => {
  setArrDoc(arrDoc.filter(elem => elem.name !== el.name))

  setSelected({})
}
const deleteFolder = (el) => {
  setArrDoc(arrDoc.filter(elem => elem.folderName !== el.folderName))
  setSelectedFolder('')
}

const reloadStorage = () => {
  getStorage()
}
const selectedFolderFun = () => {
  if (selectedFolder) {
    setSelectedFolder('')
  }
}

return (
  <div id="mySidenav" className={opened ? "MenuOpen" : "MenuClose"} >
    <div className='navigateBlockWrapper'>
      <div className='navigateBlock'>
        <div title='Создать файл' onClick={() => setCreate(true)}>
          <GlobalSVGSelector type="add_file" />
        </div>
        <div title='Создать папку' onClick={() => setCreateFolder(true)}>
          <GlobalSVGSelector type="add_folder" />
        </div>
        <div title='Обновить' onClick={reloadStorage}>
          <GlobalSVGSelector type="reload" />
        </div>
        <div title='Построить дерево' onClick={treeParse}>
          <GlobalSVGSelector type="tree" />
        </div>
      </div>

      <button onClick={() => setOpened(prev => !prev)} className={opened ? "closeButton" : "openButton"}>
        <GlobalSVGSelector type="arrow" />
      </button>

    </div>
    <div className="textBlock" onClick={selectedFolderFun}>
      {create
        ? <>
          <input type="text" autoFocus onBlur={onBlurInput} value={valueInput} onChange={onChangeInput} onKeyDown={enterKeyDown} />
          {arrDoc.map(el => <ListElement el={el}
            handlechange={handlechange}
            deleteElement={deleteElement}
            deleteFolder={deleteFolder}
            setSelectedFolder={setSelectedFolder}
            selectedFolder={selectedFolder} />)}
        </>
        : <>
          {arrDoc.map(el => <ListElement el={el}
            handlechange={handlechange}
            deleteElement={deleteElement}
            deleteFolder={deleteFolder}
            setSelectedFolder={setSelectedFolder}
            selectedFolder={selectedFolder} />)}
        </>
      }
      {
        createFolder
          ? <>
            <input type="text" autoFocus onBlur={onBlurInputFolder} value={valueInput} onChange={onChangeInput} onKeyDown={enterKeyDownFolder} />
            {arrDoc.map(el => {
              <ListElement el={el}
                handlechange={handlechange}
                deleteElement={deleteElement}
                deleteFolder={deleteFolder}
                setSelectedFolder={setSelectedFolder}
                selectedFolder={selectedFolder} />
            })
            }
          </>
          : <></>
      }
    </div>
  </div>
)
}

export default MenuComponent