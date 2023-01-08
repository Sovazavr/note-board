import React from 'react'
import "./MenuStyle.scss"
import {useState} from "react";

const MenuComponent = () => {
const [opened, setOpened]=useState(false)
  return (
    <div id="mySidenav" className={opened ? "MenuOpen" : "MenuClose"}>
        <button onClick={()=>setOpened(prev=>!prev)} className={opened ? "closeButton" : "openButton"}>&lt;</button>
        <div className="textBlock">
          <div>text 1</div>
          <div>text 2</div>
          <div>text 3</div>
        </div>
    </div>
  )
}

export default MenuComponent