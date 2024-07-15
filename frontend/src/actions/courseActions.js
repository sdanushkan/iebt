import axios from 'axios'
import {
    
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_LIST_RESET,

    COURSE_FILTER_LIST_REQUEST,
    COURSE_FILTER_LIST_SUCCESS,
    COURSE_FILTER_LIST_FAIL,
    COURSE_FILTER_LIST_RESET,

    POPULAR_COURSE_LIST_REQUEST,
    POPULAR_COURSE_LIST_SUCCESS,
    POPULAR_COURSE_LIST_FAIL,
    POPULAR_COURSE_LIST_RESET,
    
    DUAL_QUALIFICATION_COURSE_LIST_REQUEST,
    DUAL_QUALIFICATION_COURSE_LIST_SUCCESS,
    DUAL_QUALIFICATION_COURSE_LIST_FAIL,
    DUAL_QUALIFICATION_COURSE_LIST_RESET,

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

    OUR_QUALIFICATION_LIST_REQUEST,
    OUR_QUALIFICATION_LIST_SUCCESS,
    OUR_QUALIFICATION_LIST_FAIL,
    OUR_QUALIFICATION_LIST_RESET,
    
    OUR_QUALIFICATION_DETAILS_REQUEST,
    OUR_QUALIFICATION_DETAILS_SUCCESS,
    OUR_QUALIFICATION_DETAILS_FAIL,
    OUR_QUALIFICATION_DETAILS_RESET,

    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    COURSE_DETAILS_RESET,

    DUAL_QUALIFICATION_LIST_REQUEST,
    DUAL_QUALIFICATION_LIST_SUCCESS,
    DUAL_QUALIFICATION_LIST_FAIL,
    DUAL_QUALIFICATION_LIST_RESET,
    
    DUAL_QUALIFICATION_COURSES_LIST_REQUEST,
    DUAL_QUALIFICATION_COURSES_LIST_SUCCESS,
    DUAL_QUALIFICATION_COURSES_LIST_FAIL,
    DUAL_QUALIFICATION_COURSES_LIST_RESET,
    
    DUAL_QUALIFICATION_COURSE_DETAILS_REQUEST,
    DUAL_QUALIFICATION_COURSE_DETAILS_SUCCESS,
    DUAL_QUALIFICATION_COURSE_DETAILS_FAIL,
    DUAL_QUALIFICATION_COURSE_DETAILS_RESET,

    APPLICATION_SEND_REQUEST,
    APPLICATION_SEND_SUCCESS,
    APPLICATION_SEND_FAIL,
    APPLICATION_SEND_RESET,

    SA_SEND_REQUEST,
    SA_SEND_SUCCESS,
    SA_SEND_FAIL,
    SA_SEND_RESET,

    CU_SEND_REQUEST,
    CU_SEND_SUCCESS,
    CU_SEND_FAIL,
    CU_SEND_RESET,

    BA_SEND_REQUEST,
    BA_SEND_SUCCESS,
    BA_SEND_FAIL,
    BA_SEND_RESET,

    CA_SEND_REQUEST,
    CA_SEND_SUCCESS,
    CA_SEND_FAIL,
    CA_SEND_RESET,


    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_LIST_FAIL,
    EVENT_LIST_RESET,

    STUDENT_VERIFY_CHECK_REQUEST,
    STUDENT_VERIFY_CHECK_SUCCESS,
    STUDENT_VERIFY_CHECK_FAIL,
    STUDENT_VERIFY_CHECK_RESET,

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
            `/api/courses/faculties/programes/qualifications/credits`,
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

export const getFilterCourseList = (faculty, programe, qualification, credits) => async (dispatch) => {
    try {
        dispatch({
            type: COURSE_FILTER_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/${faculty}/${programe}/${qualification}/${credits}`,
            config
        )

        dispatch({
            type: COURSE_FILTER_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: COURSE_FILTER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getPopularCourseList = () => async (dispatch) => {
    try {
        dispatch({
            type: POPULAR_COURSE_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/popular`,
            config
        )

        dispatch({
            type: POPULAR_COURSE_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: POPULAR_COURSE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getDualQualificationCourseList = () => async (dispatch) => {
    try {
        dispatch({
            type: DUAL_QUALIFICATION_COURSE_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/dualqualification`,
            config
        )

        dispatch({
            type: DUAL_QUALIFICATION_COURSE_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: DUAL_QUALIFICATION_COURSE_LIST_FAIL,
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

export const getOurQualificationList = () => async (dispatch) => {
    try {
        dispatch({
            type: OUR_QUALIFICATION_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/qualifications`,
            config
        )

        dispatch({
            type: OUR_QUALIFICATION_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: OUR_QUALIFICATION_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getOurQualificationDetails = (slug) => async (dispatch) => {
    try {
        dispatch({
            type: OUR_QUALIFICATION_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/qualifications/${slug}`,
            config
        )

        dispatch({
            type: OUR_QUALIFICATION_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: OUR_QUALIFICATION_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getCourseDetails = (slug) => async (dispatch) => {
    try {
        dispatch({
            type: COURSE_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/${slug}`,
            config
        )

        dispatch({
            type: COURSE_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: COURSE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getDualQualificationList = () => async (dispatch) => {
    try {
        dispatch({
            type: DUAL_QUALIFICATION_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/dual/qualification`,
            config
        )

        dispatch({
            type: DUAL_QUALIFICATION_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: DUAL_QUALIFICATION_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getDualQualificationCoursesList = (slug) => async (dispatch) => {
    try {
        dispatch({
            type: DUAL_QUALIFICATION_COURSES_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/dual/qualification/${slug}`,
            config
        )

        dispatch({
            type: DUAL_QUALIFICATION_COURSES_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: DUAL_QUALIFICATION_COURSES_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getDualQualificationCourseDetails = (slug) => async (dispatch) => {
    try {
        dispatch({
            type: DUAL_QUALIFICATION_COURSE_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/dual/qualification/courses/${slug}`,
            config
        )

        dispatch({ 
            type: DUAL_QUALIFICATION_COURSE_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: DUAL_QUALIFICATION_COURSE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const sendApplication = (details) => async (dispatch) => {
    try {
        dispatch({
            type: APPLICATION_SEND_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/courses/send-application/',
            details,
            config
        )

        dispatch({
            type: APPLICATION_SEND_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: APPLICATION_SEND_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const sendSA = (details) => async (dispatch) => {
    try {
        dispatch({
            type: SA_SEND_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/courses/send-sa/',
            details,
            config
        )

        dispatch({
            type: SA_SEND_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SA_SEND_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const sendCU = (details) => async (dispatch) => {
    try {
        dispatch({
            type: CU_SEND_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/courses/send-cu/',
            details,
            config
        )

        dispatch({ 
            type: CU_SEND_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CU_SEND_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const sendBA = (details) => async (dispatch) => {
    try {
        dispatch({
            type: BA_SEND_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/courses/send-ba/',
            details,
            config
        )

        dispatch({ 
            type: BA_SEND_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BA_SEND_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const sendCA = (details) => async (dispatch) => {
    try {
        dispatch({
            type: CA_SEND_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/courses/send-ca/',
            details,
            config
        )

        dispatch({ 
            type: CA_SEND_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CA_SEND_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getEventList = () => async (dispatch) => {
    try {
        dispatch({
            type: EVENT_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/events/list`,
            config
        )

        dispatch({
            type: EVENT_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: EVENT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const checkVerifiedStudent = (NIC) => async (dispatch) => {
    try {
        dispatch({
            type: STUDENT_VERIFY_CHECK_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/api/courses/studentVerification/${NIC}`,
            config
        )

        dispatch({
            type: STUDENT_VERIFY_CHECK_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: STUDENT_VERIFY_CHECK_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
