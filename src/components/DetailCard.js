import React from 'react'
import photoDummy from '../assets/photoDummy.png'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setFormContact} from '../store/action/formAction'

const DetailCard = ({ item, onDelete }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onEdit = () => {
        dispatch(setFormContact(item))
        navigate(`/edit-contact/${item.id}`);
    }

    return (
        <>
            <div className='rounded-sm p-20px flex flex-col justify-center align-center'>
            <div>
                <img className='w-100px h-100px rounded-full mr-10 shadow' alt={item.firstName} src={item.photo !== 'N/A' ? item.photo : photoDummy} />
            </div>
            <div className='font-14 bold mt-10'>
                {item.firstName} {item.lastName}
            </div>
            <div className='font-12 mt-10'>
                {item.age}  Years
            </div>
            <div className='flex justify-between mt-10 w-10'>
                <button className='p-10px bg-primary w-10 mr-10 rounded-sm shadow'
                onClick={onEdit}>
                    Edit
                </button>
                <button 
                onClick={onDelete}
                className='p-10px bg-primary w-10 rounded-sm shadow'
                >
                    Delete
                </button>
            </div>
        </div>
        
        </>
    )
}

export default DetailCard