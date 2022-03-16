import axios from 'axios'
import { Action } from 'history'

const addContact = (payload) => {
    return async (dispatch) => {
        
        const image = await uploadImage(payload.photo)
        const {data} = await await axios({
            url: `${process.env.REACT_APP_API_URL}/contact`,
            method: 'post',
            data: {
                ...payload,
                photo: image
            }
        })
        console.log('hasil image ==>', data)
        dispatch(setStatus('success'))
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
            console.log('result upload', result.data.data)
            return result.data.data.url
        }
    } catch (err) {
        console.log('result error', err)

    }
}

const setStatus = (data) => {
    return { type: 'SET_STATUS', payload: data };
}

export {
    addContact
}