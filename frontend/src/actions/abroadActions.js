import axios from 'axios'
import {
    
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,
    COUNTRY_LIST_FAIL,
    COUNTRY_LIST_RESET,

    COUNTRY_DETAILS_REQUEST,
    COUNTRY_DETAILS_SUCCESS,
    COUNTRY_DETAILS_FAIL,
    COUNTRY_DETAILS_RESET,

    TESTIMONIAL_LIST_REQUEST,
    TESTIMONIAL_LIST_SUCCESS,
    TESTIMONIAL_LIST_FAIL,
    TESTIMONIAL_LIST_RESET,

} from '../constants/abroadConstants'


export const getCountryList = () => async (dispatch) => {
    try {
        dispatch({
            type: COUNTRY_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/countries/`,
            config
        )

        dispatch({
            type: COUNTRY_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: COUNTRY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getCountryDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: COUNTRY_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/countries/${id}`,
            config
        )

        dispatch({
            type: COUNTRY_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: COUNTRY_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getTestimonialList = (page) => async (dispatch) => {
    try {
        dispatch({
            type: TESTIMONIAL_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/countries/testimonials/${page}`,
            config
        )

        dispatch({
            type: TESTIMONIAL_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: TESTIMONIAL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
