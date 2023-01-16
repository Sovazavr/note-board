import React from 'react'
import "./MenuStyle.scss"
import { useState } from "react";
import GlobalSVGSelector from '../assets/GlobalSVGSelector';
import ListElement from './ListElement';


const MenuComponent = ({ setStorage, getStorage, setSelected, arrDoc, setArrDoc }) => {
  const [create, setCreate] = useState(false)
  const [createFolder, setCreateFolder] = useState(false)

  const [opened, setOpened] = useState(false)
  const [valueInput, setValueInput] = useState("")

  const [selectedFolder, setSelectedFolder] = useState('')

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
        setArrDoc([...arrDoc, { name: valueInput, content: "" }])
      }

      setValueInput('')
      setStorage(arrDoc)
    }
  }
  const onBlurInputFolder = () => {
    setCreateFolder(false)
    if (valueInput) {
      setArrDoc([...arrDoc, { folderName: valueInput.trim(), file: [] }])
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
    setSelected(el)
  }

  const deleteElement = (el) => {
    setArrDoc(arrDoc.filter(elem => elem.name !== el.name))

    setSelected({})
  }
  const deleteFolder=(el)=>{
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