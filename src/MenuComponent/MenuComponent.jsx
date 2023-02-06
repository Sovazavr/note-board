import React, { useEffect } from 'react'
import "./MenuStyle.scss"
import { useState } from "react";
import GlobalSVGSelector from '../assets/GlobalSVGSelector';
import ListElement from './ListElement';
import * as d3 from "d3";


const MenuComponent = ({ setStorage, getStorage, setSelected, arrDoc, setArrDoc, setData, setGraph, data, setSelectedFolder, selectedFolder }) => {
  const [create, setCreate] = useState(false)
  const [createFolder, setCreateFolder] = useState(false)

  const [opened, setOpened] = useState(false)
  const [valueInput, setValueInput] = useState("")
  const [count, setCount] = useState(0)

  const [grouping, setGrouping] = useState({})



  useEffect(() => {
    if (valueInput) {
      arrDoc.forEach(e => {
        const str = e.name.split(" (")
        if (str.length > 1) {
          if (str[0] == valueInput && str[1].indexOf(")") !== -1) {
            setCount(prev => prev + 1)
          }
        } else {
          if (e.name == valueInput) {
            setCount(prev => prev + 1)
          }
        }


      })
    }
  }, [arrDoc, valueInput])




  const rootFind = () => {
    // if (Object.entries(selectedFolder).length > 0) {
    //   const filterDoc = arrDoc.filter(e => e.folderName == selectedFolder.folderName)
    //   if (filterDoc[0].file.length > 0) {
    //     setGrouping(d3.group(filterDoc.file, d => d.parent.name))
    //   }
    // }
    // else {
    const filterDoc = arrDoc.filter(e => e.status == 'file')
    setGrouping(d3.group(filterDoc, d => d.parent.name))
    // }
    // const filterDoc = arrDoc.filter(e => e.type == 'file')
    // setGrouping(d3.group(filterDoc, d => d.parent.name))
    let s = []
    let d = {}
    for (let obj of grouping.keys()) {

      if (obj == 'Root') {

        d.name = grouping.get(obj)[0].name

        for (let i = 0; i < grouping.get(obj).length; i++) {
          for (let j = 0; j < grouping.get(obj)[i].children.length; j++) {
            s.push({ name: grouping.get(obj)[i].children[j].name, textProps: { x: -25, y: 25 } })
          }
          d.children = s

        }
        d.textProps = { x: -25, y: 25 }

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
              s.push({ name: grouping.get(key)[j].name, textProps: { x: -25, y: 25 } });
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
            d.push({ name: grouping.get(key)[i].name, textProps: { x: -25, y: 25 } });
          }
          obj.children = d;
        }
      }
    }

    return obj;
  }

  const treeParse = () => {
    setData({})
    setSelected({})
    setGraph(true)
    setData(hierarchyCreate(rootFind()))

  }


  const onChangeInput = (e) => {
    setValueInput(e.target.value)

  }
  const onBlurInput = () => {
    setCreate(false)
    if (valueInput) {
      if (Object.entries(selectedFolder).length > 0) {
        arrDoc.map(el => {
          if (el.folderName === selectedFolder.folderName) {
            el.file.push({ name: valueInput.trim(), content: "" })
          }
        })
        setArrDoc(arrDoc)
      }
      else {




        if (count > 0) {
          setArrDoc([...arrDoc, { name: valueInput + ' (' + count + ')', content: "", status: 'file', parent: { name: '' }, children: [] }])
          // alert("Имя должно быть уникальным")
          console.log(count);
          setCount(0)
        }
        else {
          setArrDoc([...arrDoc, { name: valueInput, content: "", status: 'file', parent: { name: '' }, children: [] }])
        }



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
    setData({})
  }

  const deleteElement = (el) => {

    if (el.parent.name == 'Root' && el.children.length == 1) {
      const newRoot = el.children[0]
      console.log(newRoot);
      arrDoc.map(e => {
        if (e.name == newRoot.name) {
          e.parent.name = 'Root'
        }
      })
    } else if (el.parent.name == 'Root' && el.children.length > 1) {
      setArrDoc([...arrDoc, { name: 'Удаленный корень', content: "Корень был удален и нельзя однозначно установить новый", status: 'file', parent: { name: 'Root' }, children: el.children }])
    } else if (el.parent.name !== 'Root') {
      const newParent = el.parent.name
      const newChildren = el.children
      arrDoc.map(e => {
        for (let i = 0; i < newChildren.length; i++) {
          if (e.name == newChildren[i].name) {
            e.parent.name = newParent
          }
        }
        if (e.name == newParent) {
          e.children = e.children.filter(ch => ch.name !== el.name)
          e.children.concat(newChildren)
        }
      })
    }
    setArrDoc(arrDoc.filter(elem => elem.name !== el.name))
    console.log('delDoc: ', arrDoc);

    setSelected({})
  }
  const deleteFolder = (el) => {
    setArrDoc(arrDoc.filter(elem => elem.folderName !== el.folderName))
    setSelectedFolder({})
  }

  const reloadStorage = () => {
    getStorage()
  }
  const selectedFolderFun = () => {

    if (Object.entries(selectedFolder).length > 0) {
      setSelectedFolder({})
    }
  }

  const createFile = () => {
    setCreate(true)
    setGraph(false)
  }

  return (
    <div id="mySidenav" className={opened ? "MenuOpen" : "MenuClose"} >
      <div className='navigateBlockWrapper'>
        <div className='navigateBlock'>
          <div title='Создать файл' onClick={createFile}>
            <GlobalSVGSelector type="add_file" />
          </div>
          <div title='Создать папку' className='add_folder' onClick={() => setCreateFolder(true)}>
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