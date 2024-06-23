import {
    
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,
    COUNTRY_LIST_FAIL,
    COUNTRY_LIST_RESET,

    TESTIMONIAL_LIST_REQUEST,
    TESTIMONIAL_LIST_SUCCESS,
    TESTIMONIAL_LIST_FAIL,
    TESTIMONIAL_LIST_RESET,

} from '../constants/abroadConstants'

export const countryListReducer = (state = { countries: [] }, action) => {
    switch (action.type) {
        case COUNTRY_LIST_REQUEST:
            return {
                loading: true
            }

        case COUNTRY_LIST_SUCCESS:
            return {
                loading: false,
                countries: action.payload
            }

        case COUNTRY_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case COUNTRY_LIST_RESET:
            return {
                countries: []
            }

        default:
            return state
    }
}

export const testimonialListReducer = (state = { testimonials: [] }, action) => {
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
                testimonials: []
            }

        default:
            return state
    }
}
