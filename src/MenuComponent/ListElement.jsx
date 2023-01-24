import React from 'react'
import GlobalSVGSelector from '../assets/GlobalSVGSelector'
import "./MenuStyle.scss"





const ListElement = ({ el, handlechange, deleteElement, selectedFolder, setSelectedFolder, deleteFolder }) => {



    if ('folderName' in el) {
        return (<>
            <div className='elementWrapper'>
                <div className={selectedFolder.folderName == el.folderName ? 'selectElementFolder' : 'elementFolder'}
                    onClick={() => { setSelectedFolder(el) }}>
                    {el.folderName}
                </div>
                <div className='close' onClick={() => deleteFolder(el)}>
                    <GlobalSVGSelector type={"close"} />
                </div>
            </div>
            {el.file.lenght !== 0 ? el.file.map(inEl => <ListElement
                el={inEl}
                handlechange={handlechange}
                deleteElement={deleteElement}
                selectedFolder={selectedFolder}
                setSelectedFolder={setSelectedFolder}
                deleteFolder={deleteFolder} />)
                : <></>}
        </>
        )
    } else {
        return (

            <div className='elementWrapper'>
                <div className='element' onClick={() => { handlechange(el); }}>{el.name}</div>
                <div className='close' onClick={() => deleteElement(el)}>
                    <GlobalSVGSelector type={"close"} />
                </div>
            </div>
        )
    }

}

export default ListElement