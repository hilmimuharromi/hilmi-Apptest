const initialState = {
    firstName: '',
    lastName: '',
    age: 0,
    photo: 'N/A',
    loading: false,
    error: null,
    status: ''
};

const ContactState = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM_CONTACT':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age,
                photo: action.payload.photo,
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
        default:
            return state;
    }
};
export default ContactState;