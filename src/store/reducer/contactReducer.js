const initialState = {
    data: [],
    loading: false,
    error: {
        path: '',
        message: ''
    }
};

const ContactState = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIST_CONTACT':
            return {
                ...state,
                data: action.payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default ContactState;