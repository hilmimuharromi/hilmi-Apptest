const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    photo: 'N/A',
    loading: false,
    error: {
        path: '',
        message: ''
    },
    status: ''
};

const ContactState = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM_CONTACT':
            return {
                ...state,
                id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age,
                photo: action.payload.photo,
            };
        case 'RESET_FORM_CONTACT':
            return {
                ...state,
                id: '',
                firstName: '',
                lastName: '',
                age: 0,
                photo: 'N/A',
                status: '',
                error: {
                    path: '',
                    message: ''
                }
            };
        case 'SET_PHOTO':
            return {
                ...state,
                photo: action.payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'SET_STATUS':
            return {
                ...state,
                status: action.payload,
            };
        case 'SET_ERROR_FORM':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default ContactState;