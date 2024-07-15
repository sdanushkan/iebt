import {
    
    MAIN_COUNTRY_LIST_REQUEST,
    MAIN_COUNTRY_LIST_SUCCESS,
    MAIN_COUNTRY_LIST_FAIL,
    MAIN_COUNTRY_LIST_RESET,

    EU_COUNTRY_LIST_REQUEST,
    EU_COUNTRY_LIST_SUCCESS,
    EU_COUNTRY_LIST_FAIL,
    EU_COUNTRY_LIST_RESET,

    MADICINE_COUNTRY_LIST_REQUEST,
    MADICINE_COUNTRY_LIST_SUCCESS,
    MADICINE_COUNTRY_LIST_FAIL,
    MADICINE_COUNTRY_LIST_RESET,

    TESTIMONIAL_LIST_REQUEST, 
    TESTIMONIAL_LIST_SUCCESS,
    TESTIMONIAL_LIST_FAIL,
    TESTIMONIAL_LIST_RESET,

    COUNTRY_DETAILS_REQUEST,
    COUNTRY_DETAILS_SUCCESS,
    COUNTRY_DETAILS_FAIL,
    COUNTRY_DETAILS_RESET,

} from '../constants/abroadConstants'

export const mainCountryListReducer = (state = {  }, action) => {
    switch (action.type) {
        case MAIN_COUNTRY_LIST_REQUEST:
            return {
                loading: true
            }

        case MAIN_COUNTRY_LIST_SUCCESS:
            return {
                loading: false,
                countries: action.payload
            }

        case MAIN_COUNTRY_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case MAIN_COUNTRY_LIST_RESET:
            return {}

        default:
            return state
    }
}

export const euCountryListReducer = (state = {  }, action) => {
    switch (action.type) {
        case EU_COUNTRY_LIST_REQUEST:
            return {
                loading: true
            }

        case EU_COUNTRY_LIST_SUCCESS:
            return {
                loading: false,
                countries: action.payload
            }

        case EU_COUNTRY_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case EU_COUNTRY_LIST_RESET:
            return {}

        default:
            return state
    }
}

export const medicineCountryListReducer = (state = {  }, action) => {
    switch (action.type) {
        case MADICINE_COUNTRY_LIST_REQUEST:
            return {
                loading: true
            }

        case MADICINE_COUNTRY_LIST_SUCCESS:
            return {
                loading: false,
                countries: action.payload
            }

        case MADICINE_COUNTRY_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case MADICINE_COUNTRY_LIST_RESET:
            return {}

        default:
            return state
    }
}

export const testimonialListReducer = (state = { }, action) => {
    switch (action.type) {
        case TESTIMONIAL_LIST_REQUEST:
            return {
                loading: true
            }

        case TESTIMONIAL_LIST_SUCCESS:
            return {
                loading: false,
                testimonials: action.payload
            }

        case TESTIMONIAL_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case TESTIMONIAL_LIST_RESET:
            return {
            }

        default:
            return state
    }
}

export const countryDetailsReducer = (state = { }, action) => {
    switch (action.type) {
        case COUNTRY_DETAILS_REQUEST:
            return {
                loading: true
            }

        case COUNTRY_DETAILS_SUCCESS:
            return {
                loading: false,
                country: action.payload
            }

        case COUNTRY_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case COUNTRY_DETAILS_RESET:
            return {
            }

        default:
            return state
    }
}