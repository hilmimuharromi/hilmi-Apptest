import axios from 'axios'

const saveContact = (payload, id) => {
    let params = id ? `contact/${id}` : 'contact'
    return async (dispatch) => {
        try {
            let dataSubmit = payload
            dispatch(setLoading(true))
            let image = 'N/A'
            if(payload.tempImage) {
                image = await uploadImage(payload.tempImage)
            } else if(!payload.tempImage && id) {
                image = payload.photo
            }
            delete dataSubmit.tempImage
            dataSubmit.photo = image
            const {data} = await await axios({
                url: `${process.env.REACT_APP_API_URL}/${params}`,
                method: id ?'put':'post',
                data: dataSubmit
            })
            dispatch(setStatus('success'))
        } catch(err) {
            dispatch(setError({
                path: 'form',
                message: err.response.data.message,
                validation: err.response.data.validation
            }))
        } finally {
            dispatch(setLoading(false))
        }
    }
}

const uploadImage = async (photo) => {
    const data = new FormData();
    data.append('image', photo);
    try {
        const result = await axios({
            url: 'https://api.imgbb.com/1/upload?key=68f0a2cb8234add30ae895949f18c671',
            method: 'post',
            data
        })
        if(result) {
            return result.data.data.url
        }
    } catch (err) {
        return 'N/A'
    }
}

const setFormContact = (data) => {
    return { type: 'SET_FORM_CONTACT', payload: data };
}

const resetFormContact = () => {
    return { type: 'RESET_FORM_CONTACT' };
}


const setStatus = (data) => {
    return { type: 'SET_STATUS', payload: data };
}

const setLoading = (data) => {
    return { type: 'SET_LOADING', payload: data };
}

const setError = (data) => {
    return { type: 'SET_ERROR_FORM', payload: data };
}

export {
    saveContact, setFormContact, resetFormContact, setError
}