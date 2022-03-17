import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListContacts } from '../store/action/contactAction'
import {resetFormContact} from '../store/action/formAction'
import {  useNavigate } from 'react-router-dom'
import { ContactCard } from '../components'
const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const listContacts = useSelector((state) => state.contactState.data)
  const loading = useSelector((state) => state.contactState.loading)
  const errorState = useSelector((state) => state.contactState.error)

  useEffect(() => {
    dispatch(getListContacts())
  }, [dispatch])

  const goToForm = () => {
    dispatch(resetFormContact())
    navigate('add-contact')
    
  }

  if (loading) {
    return <div>Loading ....</div>
  }

  if (errorState.path === 'get') {
    return <div>Error, please refresh this page ....</div>
  }

  return (
    <div className='container'>
      <div className='flex justify-between align-center'>
        {listContacts.length} Contacts
          <button 
          onClick={goToForm}
          className='bg-primary p-10px rounded-sm shadow'>
            Add Contact
          </button>
      </div>
      {
        listContacts.map((item) => (
          <ContactCard key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default Home