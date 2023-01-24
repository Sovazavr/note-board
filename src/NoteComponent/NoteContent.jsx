import React, { useEffect, useState } from 'react'
import GlobalSVGSelector from '../assets/GlobalSVGSelector'
import "./NoteContent.scss"
import ListComponent from './ListComponent'

const NoteContent = ({ arrDoc, selected, setSelected, setArrDoc, selectedFolder }) => {

    const [valueInput, setValueInput] = useState('')
    const [filterArr, setFilterArr] = useState(arrDoc.filter(e => e.name != selected.name))
    const [openedListLeft, setOpenedListLeft] = useState(false)


    useEffect(() => {
        setFilterArr(arrDoc.filter(e => e.name != selected.name))
    }, [arrDoc]);

    const handleInput = (e) => {

        setOpenedListLeft(true)
        setValueInput(e.target.value)
        if(Object.entries(selectedFolder).length>0){
            setFilterArr(arrDoc.filter(e => e.folderName==selectedFolder.folderName))
        } else {
            setFilterArr(arrDoc.filter(e => e.name != selected.name && e.name.toLowerCase().indexOf(valueInput.toLowerCase()) !== -1))
        }
        
    }

    const changeText = (e) => {
        setSelected({ name: selected.name, content: e.target.value })

    }


    const setParent = (obj) => {
        if (obj === 'Root') {
            arrDoc.map(e => {
                if (e.name == selected.name) {
                    e.parent.name = 'Root'

                }
            })
        } else {
            arrDoc.map(e => {
                if (e.name == selected.name) {
                    e.parent.name = obj.name
                    console.log(obj.name);
                }
            })
            arrDoc.map(e => {
                if (e.name == obj.name) {
                    obj.children.push({ name: selected.name })
                }
            })
        }

        setArrDoc(arrDoc)
        console.log('ARR: ', arrDoc);
    }
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


    const handleElement = (obj) => {
        setParent(obj)
        setOpenedListLeft(false)
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
                    <input type='text' value={selected.parent.name ? selected.parent.name : valueInput} onChange={handleInput} onBlur={() => setOpenedListLeft(false)} />
                    <div className={openedListLeft ? 'arrowVerticalOpen' : 'arrowVertical'} onClick={() => setOpenedListLeft((prev) => !prev)}>
                        <GlobalSVGSelector type={"arrowVertical"} />
                    </div>

                </div>

                {openedListLeft ? <div className='listWrapper'> {arrDoc.filter(e => e.name != selected.name).map(e => {
                    return (
                        <div className='listElement' onClick={() => handleElement(e)}>
                            {e.name}
                        </div>
                    )
                })}</div>
                    // < ListComponent arrDoc={filterArr} setParent={setParent} setOpenedListLeft={setOpenedListLeft} /> 
                    : <></>
                }

            </div>
            <textarea className='textContent' onChange={changeText} value={selected.content} ></textarea>
        </div>
    )
}

export default NoteContent