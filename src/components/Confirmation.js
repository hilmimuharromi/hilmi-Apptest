import React from 'react'


const Confirmation = ({
    title, 
    visible, 
    onCancel,
    onConfirm
}) => {
    return (
        <div className={visible ? 'modal-confirmation shadow' : 'modal-close'}>
            <div>
                {title}
            </div>
            <div className='p-10px flex justify-end'>
                <button 
                onClick={onConfirm}
                className='p-10px mr-10 rounded-sm shadow bg-danger'>Yes</button>
                <button 
                onClick={onCancel}
                className='p-10px rounded-sm shadow'
                >No</button>
            </div>
        </div>
    )
}

export default Confirmation