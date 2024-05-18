import { combineReducers, applyMiddleware } from 'redux'
import { thunk }  from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { aboutDetailsReducer, courseListReducer, facultyListReducer, levelListReducer } from './reducers/courseReducers'
import { countryListReducer } from './reducers/abroadReducers'
// import { countryListReducer } from './reducers/countryReducers'
// import { applicationCreateReducer, contactCreateReducer, serviceListReducer } from './reducers/serviceReducers'
// import { userActivationReducer, userForgotPasswordLinkReducer, userForgotPasswordReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers'


const reducer = combineReducers({
    courseList : courseListReducer,
    facultyList : facultyListReducer,
    aboutDetails : aboutDetailsReducer,
    levelList : levelListReducer,

    countryList :countryListReducer,
    
})

// const cartItemsFromStorage = localStorage.getItem('cartItems') ?
//     JSON.parse(localStorage.getItem('cartItems')) : []

// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//     JSON.parse(localStorage.getItem('userInfo')) : null

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
//     JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    // cart: {
    //     cartItems: cartItemsFromStorage,
    //     shippingAddress: shippingAddressFromStorage,
    // },
    // userLogin : {userInfo : userInfoFromStorage}
}

const  middlwere = [thunk]

const store = configureStore({reducer, preloadedState:initialState}, composeWithDevTools(applyMiddleware(...middlwere)))

export default store