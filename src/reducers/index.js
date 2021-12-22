import { combineReducers } from 'redux'
import modalsReducer from './modalsReducer'
import validationsReducer from './validationReducer'

export default combineReducers({
    modals: modalsReducer,
    validations: validationsReducer
})