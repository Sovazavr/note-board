import React from 'react'
import "./NoteContent.scss"

const ListComponent = ({ arrDoc }) => {
    return (
        <div className='listWrapper'>
            {
                arrDoc.map((obj) => {
                    return (
                        <>
                            <div className='listElement'>
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