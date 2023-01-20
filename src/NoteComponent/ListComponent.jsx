import React from 'react'
import "./NoteContent.scss"

const ListComponent = ({ arrDoc, setLeftSelected }) => {
    return (
        <div className='listWrapper'>
            {
                arrDoc.map((obj) => {
                    return (
                        <>
                            <div className='listElement' onClick={()=>setLeftSelected(obj)}>
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