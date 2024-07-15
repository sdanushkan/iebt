import axios from 'axios'
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

    COUNTRY_DETAILS_REQUEST,
    COUNTRY_DETAILS_SUCCESS,
    COUNTRY_DETAILS_FAIL,
    COUNTRY_DETAILS_RESET,

    TESTIMONIAL_LIST_REQUEST,
    TESTIMONIAL_LIST_SUCCESS,
    TESTIMONIAL_LIST_FAIL,
    TESTIMONIAL_LIST_RESET,

} from '../constants/abroadConstants'


export const getMainCountryList = () => async (dispatch) => {
    try {
        dispatch({
            type: MAIN_COUNTRY_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/countries/country/main`,
            config
        )

        dispatch({
            type: MAIN_COUNTRY_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: MAIN_COUNTRY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getEuCountryList = () => async (dispatch) => {
    try {
        dispatch({
            type: EU_COUNTRY_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/countries/country/eu`,
            config
        )

        dispatch({
            type: EU_COUNTRY_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: EU_COUNTRY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getMedicineCountryList = () => async (dispatch) => {
    try {
        dispatch({
            type: MADICINE_COUNTRY_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/countries/country/medicine`,
            config
        )

        dispatch({
            type: MADICINE_COUNTRY_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: MADICINE_COUNTRY_LIST_FAIL,
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
