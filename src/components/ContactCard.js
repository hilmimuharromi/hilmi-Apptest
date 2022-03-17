import React, { useState, useEffect } from 'react'
import photoDummy from '../assets/photoDummy.png'
import Modal from './Modal'
import DetailCard from './DetailCard'
import Confirmation from './Confirmation'
import { deleteContact, getListContacts } from '../store/action/contactAction'
import { useDispatch, useSelector } from 'react-redux'
import {  toast } from 'react-toastify';

const ContactCard = ({ item }) => {
    const dispatch = useDispatch()
    const dataState = useSelector((state) => state.contactState)
    const [showDetail, setShowDetail] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    useEffect(() => {
        if(dataState.error.path === 'delete') {
            toast.error(dataState.error.message, {
                autoClose: 3000,
                onClose: dispatch(getListContacts())
            })
            toast.clearWaitingQueue();
        }
        //eslint-disable-next-line
    },[dataState.error])

    return (
        <>
            <div className='flex justify-between shadow  w-20 mt-10 rounded-md p-10px align-center pointer bg-secondary'
                onClick={() => setShowDetail(!showDetail)}
            >
                <div className='flex align-center'>
                    <img className='w-50px h-50px rounded-full mr-10' alt={item.firstName} src={item.photo !== 'N/A' ? item.photo : photoDummy} />
                    <div className='font-10 bold'>
                        {item.firstName}  {item.lastName}
                    </div>
                </div>
                <div className='flex flex-col justtify-center align-center'>
                    <div className='font-10'>{item.age} years</div>
                </div>
            </div>

            <Confirmation
                title={'Are You Sure To Delete This Contact?'}
                visible={showConfirm}
                setVisible={setShowConfirm}
                onCancel={() => setShowConfirm(false)}
                onConfirm={() => {
                    dispatch(deleteContact(item.id))
                }}
            />

            <Modal
                visible={showDetail}
                onClose={() => {
                    setShowDetail(false)
                    setShowConfirm(false)
                }}>
                <DetailCard
                    item={item}
                    visible={showDetail}
                    onDelete={() => setShowConfirm(true)}
                />
            </Modal>
        </>
    )
}

export default ContactCard