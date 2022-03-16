import axios from 'axios'

const getListContacts = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const { data, status } = await axios(`${process.env.REACT_APP_API_URL}/contact`)

            if (status === 200) {
                dispatch(setError(null))
                dispatch(setContact(data.data))
            }
        } catch (err) {
            dispatch(setError(err))
        } finally {
            dispatch(setLoading(false))
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
    getListContacts
}