import React from 'react'
import "./MenuStyle.scss"
import { useState } from "react";
import GlobalSVGSelector from '../assets/GlobalSVGSelector';

const MenuComponent = () => {

  const [opened, setOpened] = useState(false)

  return (
    <div id="mySidenav" className={opened ? "MenuOpen" : "MenuClose"}>
      <div className='navigateBlockWrapper'>
        <div className='navigateBlock'>
          <div>
            <GlobalSVGSelector type="add_file" />
          </div>
          <div>
            <GlobalSVGSelector type="add_folder" />
          </div>
        </div>
        <button onClick={() => setOpened(prev => !prev)} className={opened ? "closeButton" : "openButton"}>&lt;</button>
      </div>
      <div className="textBlock">
        <div>text 1</div>
        <div>text 2</div>
        <div>text 3</div>
      </div>
    </div>
  )
}

export default MenuComponent