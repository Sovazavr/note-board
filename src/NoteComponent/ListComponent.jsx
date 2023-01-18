import React from 'react'

const ListComponent = ({ arrDoc }) => {
    return (
        <div className='listWrapper'>
            {
                arrDoc.map((obj) => {
                    return (
                        <div>
                            {obj.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListComponent