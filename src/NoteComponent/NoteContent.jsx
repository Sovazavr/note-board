import React from 'react'
import GlobalSVGSelector from '../assets/GlobalSVGSelector'
import "./NoteContent.scss"

const NoteContent = ({ name, content, setSelected }) => {
    return (
        <div className='wrapperContent'>
            <div className='headerContent'>
                <h4 className='nameContent'>{name}</h4>
                <div className='closeContent' onClick={() => setSelected({})}><GlobalSVGSelector type={"close"} /></div>
            </div>
            <textarea className='textContent'></textarea>
        </div>
    )
}

export default NoteContent