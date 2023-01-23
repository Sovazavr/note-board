import React from 'react'
import "./NoteContent.scss"

const ListComponent = ({ arrDoc, setParent, setOpenedListLeft }) => {

    const handleElement = (obj) => {
        setParent(obj)
        setOpenedListLeft(false)
    }
    

    return (
        <div className='listWrapper'>
            <div className='listElementRoot' onClick={() => handleElement('Root')}>
                Корень
            </div>


            {

                arrDoc.map((obj) => {
                    return (
                        <>
                            <div className='listElement' onClick={() => handleElement(obj)}>
                                {obj.name}
                            </div>

                        </>
                    )
                })
            }
        </div>
    )
}

export default ListComponent