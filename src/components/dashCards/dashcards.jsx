import React from 'react'

import "./dashcads.css"






const Thecards = (props) => {
    return (
        <div className='divcard'>
            <div className='divCimg'>{props.svg}</div>
            <div className='divG2card'>
                <div className='divElementsP'>
                    <p className='p1'>{props.p1}</p>
                    <p><svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg></p>
                </div>
                <h1 className='h1'>{props.h1I}</h1>
                <p className='p3'>{props.littleP}</p>
            </div>
        </div>
    )
}

export default Thecards