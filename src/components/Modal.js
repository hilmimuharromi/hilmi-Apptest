import React from 'react'

const Modal = ({ children, visible, onClose }) => {
    return (
        <>
            {
                visible &&
                <div className='modal-bg' onClick={() => onClose()} />
            }
            <div className={`${visible ? 'modal-open' : 'modal-close'} `}>
                <div className='modal-container'>
                    <div className='modal-body'>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal