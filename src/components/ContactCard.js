import React, {useState} from 'react'
import photoDummy from '../assets/photoDummy.png'
import Modal from './Modal'
const ContactCard = ({ item }) => {
    const [showDetail, setShowDetail] = useState(false)

    return (
        <>        
        <div className='flex justify-between shadow  w-20 mt-10 rounded-md p-10px align-center pointer bg-secondary'
        onClick={() => setShowDetail(!showDetail)}
        >
            <div className='flex align-center'>
                <img className='w-50px h-50px rounded-full mr-10' src={item.photo !== 'N/A' ? item.photo : photoDummy} />
                <div>
                    {item.firstName}  {item.lastName}
                </div>
            </div>
            <div className='flex flex-col justtify-center'>
                <div>Age :</div>
                <div>{item.age} years</div>
            </div>
        </div>
        <Modal 
            title={'detail'}
            visible={showDetail}
            onClose={() => setShowDetail(false)}>
            <div className='bg-secondary w-30'>
                detail
            </div>
        </Modal>
        </>
    )
}

export default ContactCard