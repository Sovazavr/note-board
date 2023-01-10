import React from 'react'
import GlobalSVGSelector from '../assets/GlobalSVGSelector'
import "./MenuStyle.scss"

const ListElement = ({ el,handlechange, deleteElement }) => {
    return (
        <div className='elementWrapper'>
            <div className='element' onClick={() => { handlechange(el); }}>{el.name}</div>
            <div className='close' onClick={()=>deleteElement(el)}>
                <GlobalSVGSelector type={"close"} />
            </div>
        </div>
    )
}

export default ListElement