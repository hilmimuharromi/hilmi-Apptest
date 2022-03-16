import React from 'react'

const Modal = ({ children, visible, title, onClose }) => {
    return (
        <div className={`${visible ? 'modal-open' : 'modal-close'} `} onClick={() => onClose()}>
            <div className='container flex flex-col justify-center'>
                <div className='flex justify-between h-50px'>
                    <div>
                        {title}
                    </div>
                    <button className='h-10' onClick={() => onClose()}>Close</button>
                </div>
                <div>
                {children}
                </div>
            </div>
        </div>
    )
}

export default Modal