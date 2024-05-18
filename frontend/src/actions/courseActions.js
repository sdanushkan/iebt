import axios from 'axios'
import {
    
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_LIST_RESET,

    FACULTY_LIST_REQUEST,
    FACULTY_LIST_SUCCESS,
    FACULTY_LIST_FAIL,
    FACULTY_LIST_RESET,

    ABOUT_DETAILS_REQUEST,
    ABOUT_DETAILS_SUCCESS,
    ABOUT_DETAILS_FAIL,
    ABOUT_DETAILS_RESET,

    LEVEL_LIST_REQUEST,
    LEVEL_LIST_SUCCESS,
    LEVEL_LIST_FAIL,
    LEVEL_LIST_RESET,

} from '../constants/courseConstants'


export const getCourseList = () => async (dispatch) => {
    try {
        dispatch({
            type: COURSE_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/`,
            config
        )

        dispatch({
            type: COURSE_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: COURSE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getFacultyList = () => async (dispatch) => {
    try {
        dispatch({
            type: FACULTY_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/faculties`,
            config
        )

        dispatch({
            type: FACULTY_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: FACULTY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getAboutList = () => async (dispatch) => {
    try {
        dispatch({
            type: ABOUT_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/about`,
            config
        )

        dispatch({
            type: ABOUT_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ABOUT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getLevelList = () => async (dispatch) => {
    try {
        dispatch({
            type: LEVEL_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/levels`,
            config
        )

        dispatch({
            type: LEVEL_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: LEVEL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
