import React from 'react'
import GlobalSVGSelector from '../assets/GlobalSVGSelector'
import "./NoteContent.scss"

const NoteContent = ({arrDoc, selected, setSelected, setArrDoc }) => {
    const changeText=(e)=>{
        setSelected({name: selected.name, content: e.target.value})

    }

    const closeText=()=>{
        setSelected({})
        
        arrDoc.map(el=>{if(el.name===selected.name)  {el.content=selected.content } })
        setArrDoc(arrDoc)
    }
    return (
        <div className='wrapperContent'>
            <div className='headerContent'>
                <h4 className='nameContent'>{selected.name}</h4>
                <div className='closeContent' onClick={closeText}><GlobalSVGSelector type={"close"} /></div>
            </div>
            <textarea className='textContent' onChange={changeText} value={selected.content}></textarea>
        </div>
    )
}

export default NoteContent