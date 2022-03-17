import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveContact, resetFormContact, setError } from '../store/action/formAction'
import { ButtonUpload } from '../components'
import iconBack from '../assets/back.png'
import { toast } from 'react-toastify';

const AddContact = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const dataEdit = useSelector((state) => state.formContactState)
  const [photo, setPhoto] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [tempImage, setTempImage] = useState('')
  const [listErrors, setListErrors] = useState([])
  const loading = dataEdit.loading
  const status = dataEdit.status
  const error = dataEdit.error

  useEffect(() => {
    if (status === 'success') {
      let message = params.id ? 'Edit' : 'Add'
      toast.success(`Success ${message}`, {
        onClose: () => {
          dispatch(resetFormContact())
          navigate('/')
        },
        autoClose: 3000,
      })
    }
    //eslint-disable-next-line
  }, [status])

  useEffect(() => {
    if (error.path === 'form') {
      setListErrors(error.validation.keys)
      toast.error(`Error ${error.message}`, {
        onClose: () => {
          dispatch(setError({
            path: '',
            message: '',
          }))
        },
        autoClose: 3000,
      })
      toast.clearWaitingQueue();
    }

  }, [error.path])

  useEffect(() => {
    if (params.id) {
      if (dataEdit.id === params.id) {
        setFirstName(dataEdit.firstName)
        setLastName(dataEdit.lastName)
        setAge(dataEdit.age)
        setPhoto(dataEdit.photo)
        setTempImage(dataEdit.photo)
      } else {
        navigate('/')
      }
    }
    //eslint-disable-next-line
  }, [params])

  const onSubmit = (e) => {
    e.preventDefault()
    let payload = {
      firstName,
      lastName,
      age,
      photo,
      tempImage
    }
    dispatch(saveContact(payload, dataEdit.id ? dataEdit.id : ''))
  }

  const getValidation = (key) => listErrors.find((item) => item === key)

  return (
    <div className='container'>
      <div className='flex justify-between align-center w-20  mb-10'>
        <button
          onClick={() => navigate('/')}
          className='font-10 p-10px rounded-sm shadow flex align-center'>
          <img width={20} height={20} alt='profile' className='mr-10' src={iconBack} />Home
        </button>
        <div className='font-10 bold'>
          {dataEdit.id ? 'Edit Contact Form' : 'Add Contact Form'}
        </div>
      </div>
      <div
        className='bg-secondary p-20px shadow rounded-md'>
        <form className='flex flex-col' onSubmit={onSubmit}>
          <div className='flex justify-center'>
            <ButtonUpload
              photo={photo}
              setPhoto={setPhoto}
              tempImage={tempImage}
              setTempImage={setTempImage}
            />
          </div>
          <div className='flex flex-col mb-10'>
            <label>First Name</label>
            <input
              className={`p-10px rounded-sm ${getValidation('firstName') && 'border-red'}`}
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)
              }
            />
          </div>
          <div className='flex flex-col mb-10'>
            <label>Last Name</label>
            <input
              className={`p-10px rounded-sm ${getValidation('lastName') && 'border-red'}`}
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='flex flex-col mb-10'>
            <label>Age</label>
            <input
              className={`p-10px rounded-sm ${getValidation('age') && 'border-red'}`}

              placeholder='Age' type='number'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className='flex justify-center'>
            <button type='submit'
              className='bg-primary p-10px shadow rounded-sm mt-10 font-10'
            >{
                loading ? 'loading ...' : 'Save Contact'
              }</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContact