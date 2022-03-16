import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addContact} from '../store/action/formAction'
const AddContact = () => {
  const dispatch = useDispatch()
  const [photo, setPhoto] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [tempImage, setTempImage] = useState('')

  const onChangePhoto = (data) => {
    setPhoto(URL.createObjectURL(data))
    setTempImage(data)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let payload = {
      firstName,
      lastName,
      age,
      photo: tempImage
    }
    console.log('masuk', payload)
    dispatch(addContact(payload))
  }
  return (
    <div className='container'>
      <div>
        Add Contact
        <button>
          <Link to={'/'}>
            Go Home
          </Link>
        </button>
      </div>
      <div 
      className='bg-secondary p-10px shadow rounded-md'>
        <form className='flex flex-col' onSubmit={onSubmit}>
          <div>
            <label>First Name</label>
            <input placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)
            }
            />
          </div>
          <div>
            <label>Last Name</label>
            <input placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label>Age</label>
            <input placeholder='Age' type='number' 
            onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label>Photo</label>
            <input placeholder='Photo' type='file'  onChange={(e) => onChangePhoto(e.target.files[0])} />
          </div>
          {photo && <img src={photo}/>}
          <div className='flex justify-center'>
            <button type='submit'
            className='bg-primary p-10px shadow rounded-sm mt-10'
            >Add Contact</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContact