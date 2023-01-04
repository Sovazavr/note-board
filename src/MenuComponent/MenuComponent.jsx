import React from 'react'
import "./MenuStyle.css"
import {useState} from "react";

const MenuComponent = () => {
const [opened, setOpened]=useState(false)
  return (
    <div id="mySidenav" className={opened ? "MenuOpen" : "MenuClose"}>
        <button onClick={()=>setOpened(prev=>!prev)} className={opened ? "closeButton" : "openButton"}>&lt;</button>
    </div>
  )
}

export default MenuComponent