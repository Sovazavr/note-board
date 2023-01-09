import React from 'react'
import "./MenuStyle.scss"
import { useState } from "react";
import GlobalSVGSelector from '../assets/GlobalSVGSelector';

const MenuComponent = () => {
  const [create, setCreate] = useState(false)
  const [opened, setOpened] = useState(false)
  const [valueInput, setValueInput] = useState("")
  const [arrDoc, setArrDoc] = useState([])


  const onChangeInput = (e) => {
    setValueInput(e.target.value)

  }
  const onBlurInput = () => {
    setCreate(false)
    if (valueInput) { setArrDoc([arrDoc, valueInput]) }
  }
  return (
    <div id="mySidenav" className={opened ? "MenuOpen" : "MenuClose"}>
      <div className='navigateBlockWrapper'>
        <div className='navigateBlock'>
          <div title='Создать файл' onClick={() => setCreate(true)}>
            <GlobalSVGSelector type="add_file" />
          </div>
          <div title='Создать папку'>
            <GlobalSVGSelector type="add_folder" />
          </div>
          <div title='Обновить'>
            <GlobalSVGSelector type="reload" />
          </div>
        </div>
        <button onClick={() => setOpened(prev => !prev)} className={opened ? "closeButton" : "openButton"}>
          <GlobalSVGSelector type="arrow" />
        </button>
      </div>
      <div className="textBlock">
        {create
          ? <input type="text" autoFocus onBlur={onBlurInput} value={valueInput} onChange={onChangeInput} />

          : <></>
        }
        {arrDoc.map(el=> <div>{el}</div>)}
      </div>
    </div>
  )
}

export default MenuComponent