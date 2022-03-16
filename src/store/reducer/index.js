import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage  from 'redux-persist/lib/storage'
import contactState from './contactReducer'
import formContactState from './formContactReducer'

const persistConfig = {
    key: 'root',
    storage,
    timeout: 2000
}

const reducers = combineReducers({
    contactState, formContactState
})

const persistedReducer = persistReducer(persistConfig, reducers)
export default persistedReducer;