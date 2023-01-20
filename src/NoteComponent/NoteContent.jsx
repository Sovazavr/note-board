import React, { useState } from 'react'
import GlobalSVGSelector from '../assets/GlobalSVGSelector'
import "./NoteContent.scss"
import ListComponent from './ListComponent'

const NoteContent = ({ arrDoc, selected, setSelected, setArrDoc }) => {

    const [valueInput, setValueInput] = useState('')
    const [filterArr, setFilterArr] = useState(arrDoc.filter(e => e.name != selected.name))

    const handleInput = (e) => {

        setOpenedListLeft(true)
        setValueInput(e.target.value)
        setFilterArr(arrDoc.filter(e => e.name != selected.name && e.name.toLowerCase().indexOf(valueInput.toLowerCase()) !== -1))
    }

    const changeText = (e) => {
        setSelected({ name: selected.name, content: e.target.value })

    }
    const [openedListLeft, setOpenedListLeft] = useState(false)
    const [leftSelected, setLeftSelected] = useState({})

    const closeText = () => {


        arrDoc.map(el => {
            if (el.name === selected.name) {
                el.content = selected.content
            } else if ('folderName' in el) {
                el.file.map(elIn => {
                    if (elIn.name === selected.name) {
                        elIn.content = selected.content
                    }
                })
            }
        })
        setSelected({})
        setArrDoc(arrDoc)
    }
    return (
        <div className='wrapperContent'>
            <div className='headerContent'>
                <h4 className='nameContent'>{selected.name}</h4>
                <div className='closeContent' onClick={closeText}>
                    <GlobalSVGSelector type={"close"} />
                </div>
            </div>
            <div className='linkBlock' >
                <div className='leftLink'>
                    <input type='text' value={valueInput} onChange={handleInput} onBlur={() => setOpenedListLeft(false)} />
                    <div className={openedListLeft ? 'arrowVerticalOpen' : 'arrowVertical'} onClick={() => setOpenedListLeft((prev) => !prev)}>
                        <GlobalSVGSelector type={"arrowVertical"} />
                    </div>
                   
                </div>

                {openedListLeft ? <ListComponent arrDoc={filterArr} setLeftSelected={setLeftSelected} /> : <></>}
            </div>
            <textarea className='textContent' onChange={changeText} value={selected.content} ></textarea>
        </div>
    )
}

export default NoteContent