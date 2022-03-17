import axios from 'axios'

const getListContacts = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const { data, status } = await axios(`${process.env.REACT_APP_API_URL}/contact`)

            if (status === 200) {
                dispatch(setError({
                    path: '',
                    message: ''
                }))
                dispatch(setContact(data.data))
            }
        } catch (err) {
            dispatch(setError({
                path: 'get',
                message: err.response.data.message
            }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

const deleteContact = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/contact/${id}`)
            if(data) {
                dispatch(getListContacts())
            }
        } catch (err) {
            dispatch(setError({
                path: 'delete',
                message: err.response.data.message,
                validation: err.response.data.validation
            }))
        } finally {
            dispatch(setError({
                path: '',
                message: ''
            }))
        }
    } 

}
const setContact = (data) => {
    return {
        type: 'SET_LIST_CONTACT', payload: data
    };
}
const setLoading = (data) => {
    return { type: 'SET_LOADING', payload: data };
}

const setError = (data) => {
    return { type: 'SET_ERROR', payload: data };
}

export {
    getListContacts, deleteContact
}