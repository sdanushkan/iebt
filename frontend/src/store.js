import { combineReducers, applyMiddleware } from 'redux'
import { thunk }  from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { aboutDetailsReducer, courseDetailsReducer, courseFilterListReducer, courseListReducer, dualQualificationCourseDetailsReducer, dualQualificationCourseListReducer, dualQualificationCoursesListReducer, dualQualificationListReducer, eventListReducer, facultyListReducer, levelListReducer, ourQualificationDetailsReducer, ourQualificationListReducer, popularCourseListReducer, sendApplicationReducer, sendBAReducer, sendCAReducer, sendCUReducer, sendSAReducer, studentVerificationReducer } from './reducers/courseReducers'
import { countryDetailsReducer, countryListReducer, euCountryListReducer, mainCountryListReducer, medicineCountryListReducer, testimonialListReducer } from './reducers/abroadReducers'
// import { countryListReducer } from './reducers/countryReducers'
// import { applicationCreateReducer, contactCreateReducer, serviceListReducer } from './reducers/serviceReducers'
// import { userActivationReducer, userForgotPasswordLinkReducer, userForgotPasswordReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers'


const reducer = combineReducers({
    courseList : courseListReducer,
    courseFilterList : courseFilterListReducer,
    popularCourseList : popularCourseListReducer,
    courseDetails : courseDetailsReducer,
    dualQualificationCourseList : dualQualificationCourseListReducer,
    facultyList : facultyListReducer,
    aboutDetails : aboutDetailsReducer,
    levelList : levelListReducer,
    ourQualificationList : ourQualificationListReducer,
    ourQualificationDetails : ourQualificationDetailsReducer,
    dualQualificationList : dualQualificationListReducer,
    dualQualificationCoursesList : dualQualificationCoursesListReducer,
    dualQualificationCourseDetails : dualQualificationCourseDetailsReducer,

    mainCountryList :mainCountryListReducer,
    euCountryList :euCountryListReducer,
    medicineCountryList : medicineCountryListReducer,
    testimonialList : testimonialListReducer,

    sendApplication : sendApplicationReducer,
    sendSA: sendSAReducer,
    sendCU: sendCUReducer,
    sendBA: sendBAReducer,
    sendCA: sendCAReducer,
    
    eventList: eventListReducer,
    studentVerification: studentVerificationReducer,
    countryDetails: countryDetailsReducer,
    
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

const store = configureStore({reducer, preloadedState:initialState}, applyMiddleware(...middlwere))

export default store