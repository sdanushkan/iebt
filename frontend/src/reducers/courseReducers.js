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

export const courseListReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case COURSE_LIST_REQUEST:
            return {
                loading: true
            }

        case COURSE_LIST_SUCCESS:
            return {
                loading: false,
                courses: action.payload
            }

        case COURSE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case COURSE_LIST_RESET:
            return {
                courses: []
            }

        default:
            return state
    }
}

export const facultyListReducer = (state = { faculties: [] }, action) => {
    switch (action.type) {
        case FACULTY_LIST_REQUEST:
            return {
                loading: true
            }

        case FACULTY_LIST_SUCCESS:
            return {
                loading: false,
                faculties: action.payload
            }

        case FACULTY_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case FACULTY_LIST_RESET:
            return {
                faculties: []
            }

        default:
            return state
    }
}


export const aboutDetailsReducer = (state = { about: [] }, action) => {
    switch (action.type) {
        case ABOUT_DETAILS_REQUEST:
            return {
                loading: true
            }

        case ABOUT_DETAILS_SUCCESS:
            return {
                loading: false,
                about: action.payload
            }

        case ABOUT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ABOUT_DETAILS_RESET:
            return {
                about: []
            }

        default:
            return state
    }
}


export const levelListReducer = (state = { levels: [] }, action) => {
    switch (action.type) {
        case LEVEL_LIST_REQUEST:
            return {
                loading: true
            }

        case LEVEL_LIST_SUCCESS:
            return {
                loading: false,
                levels: action.payload
            }

        case LEVEL_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case LEVEL_LIST_RESET:
            return {
                levels: []
            }

        default:
            return state
    }
}
