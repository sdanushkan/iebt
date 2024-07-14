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

    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    COURSE_DETAILS_RESET,

    
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

    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_LIST_FAIL,
    EVENT_LIST_RESET,

    STUDENT_VERIFY_CHECK_REQUEST,
    STUDENT_VERIFY_CHECK_SUCCESS,
    STUDENT_VERIFY_CHECK_FAIL,
    STUDENT_VERIFY_CHECK_RESET,

} from '../constants/courseConstants'

export const courseListReducer = (state = { }, action) => {
    switch (action.type) {
        case COURSE_LIST_REQUEST:
            return {
                loading: true,
            }

        case COURSE_LIST_SUCCESS:
            return {
                loading: false,
            }

        case COURSE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case COURSE_LIST_RESET:
            return {
            }

        default:
            return state
    }
}

export const courseFilterListReducer = (state = { }, action) => {
    switch (action.type) {
        case COURSE_FILTER_LIST_REQUEST:
            return {
                loading: true,
            }

        case COURSE_FILTER_LIST_SUCCESS:
            return {
                loading: false,
                courses: action.payload
            }

        case COURSE_FILTER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case COURSE_FILTER_LIST_RESET:
            return {
            }

        default:
            return state
    }
}

export const popularCourseListReducer = (state = { }, action) => {
    switch (action.type) {
        case POPULAR_COURSE_LIST_REQUEST:
            return {
                loading: true,
            }

        case POPULAR_COURSE_LIST_SUCCESS:
            return {
                loading: false,
                courses: action.payload
            }

        case POPULAR_COURSE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case POPULAR_COURSE_LIST_RESET:
            return {
            }

        default:
            return state
    }
}

export const dualQualificationCourseListReducer = (state = { }, action) => {
    switch (action.type) {
        case DUAL_QUALIFICATION_COURSE_LIST_REQUEST:
            return {
                loading: true,
            }

        case DUAL_QUALIFICATION_COURSE_LIST_SUCCESS:
            return {
                loading: false,
                courses: action.payload
            }

        case DUAL_QUALIFICATION_COURSE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case DUAL_QUALIFICATION_COURSE_LIST_RESET:
            return {
            }

        default:
            return state
    }
}


export const facultyListReducer = (state = {  }, action) => {
    switch (action.type) {
        case FACULTY_LIST_REQUEST:
            return {
                loading: true,
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
            }

        default:
            return state
    }
}


export const aboutDetailsReducer = (state = { }, action) => {
    switch (action.type) {
        case ABOUT_DETAILS_REQUEST:
            return {
                loading: true,
                about: null
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
            }

        default:
            return state
    }
}


export const levelListReducer = (state = {  }, action) => {
    switch (action.type) {
        case LEVEL_LIST_REQUEST:
            return {
                loading: true,
                levels: null
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
            }

        default:
            return state
    }
}

export const ourQualificationListReducer = (state = {  }, action) => {
    switch (action.type) {
        case OUR_QUALIFICATION_LIST_REQUEST:
            return {
                loading: true
            }

        case OUR_QUALIFICATION_LIST_SUCCESS:
            return {
                loading: false,
                qualifications: action.payload
            }

        case OUR_QUALIFICATION_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case OUR_QUALIFICATION_LIST_RESET:
            return {
            }

        default:
            return state
    }
}

export const ourQualificationDetailsReducer = (state = {  }, action) => {
    switch (action.type) {
        case OUR_QUALIFICATION_DETAILS_REQUEST:
            return {
                loading: true
            }

        case OUR_QUALIFICATION_DETAILS_SUCCESS:
            return {
                loading: false,
                qualification: action.payload
            }

        case OUR_QUALIFICATION_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case OUR_QUALIFICATION_DETAILS_RESET:
            return {
            }

        default:
            return state
    }
}

export const courseDetailsReducer = (state = { }, action) => {
    switch (action.type) {
        case COURSE_DETAILS_REQUEST:
            return {
                loading: true
            }

        case COURSE_DETAILS_SUCCESS:
            return {
                loading: false,
                course: action.payload
            }

        case COURSE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case COURSE_DETAILS_RESET:
            return {
            }

        default:
            return state
    }
}


export const dualQualificationListReducer = (state = { }, action) => {
    switch (action.type) {
        case DUAL_QUALIFICATION_LIST_REQUEST:
            return {
                loading: true
            }

        case DUAL_QUALIFICATION_LIST_SUCCESS:
            return {
                loading: false,
                dualQualifications: action.payload
            }

        case DUAL_QUALIFICATION_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case DUAL_QUALIFICATION_LIST_RESET:
            return {
    
            }

        default:
            return state
    }
}


export const dualQualificationCoursesListReducer = (state = {  }, action) => {
    switch (action.type) {
        case DUAL_QUALIFICATION_COURSES_LIST_REQUEST:
            return {
                loading: true
            }

        case DUAL_QUALIFICATION_COURSES_LIST_SUCCESS:
            return {
                loading: false,
                qualifications: action.payload
            }

        case DUAL_QUALIFICATION_COURSES_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case DUAL_QUALIFICATION_COURSES_LIST_RESET:
            return {
            
            }

        default:
            return state
    }
}

export const dualQualificationCourseDetailsReducer = (state = { course: null }, action) => {
    switch (action.type) {
        case DUAL_QUALIFICATION_COURSE_DETAILS_REQUEST:
            return {
                loading: true
            }

        case DUAL_QUALIFICATION_COURSE_DETAILS_SUCCESS:
            return {
                loading: false,
                course: action.payload
            }

        case DUAL_QUALIFICATION_COURSE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case DUAL_QUALIFICATION_COURSE_DETAILS_RESET:
            return {
                course: null
            }

        default:
            return state
    }
}

export const sendApplicationReducer = (state = {}, action) => {
    switch (action.type) {
        case APPLICATION_SEND_REQUEST:
            return { loading: true }

        case APPLICATION_SEND_SUCCESS:
            return { loading: false, success:true }

        case APPLICATION_SEND_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const sendSAReducer = (state = {}, action) => {
    switch (action.type) {
        case SA_SEND_REQUEST:
            return { loading: true }

        case SA_SEND_SUCCESS:
            return { loading: false, success:true }

        case SA_SEND_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const sendCUReducer = (state = {}, action) => {
    switch (action.type) {
        case CU_SEND_REQUEST:
            return { loading: true }

        case CU_SEND_SUCCESS:
            return { loading: false, success:true }

        case CU_SEND_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const eventListReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENT_LIST_REQUEST:
            return { loading: true }

        case EVENT_LIST_SUCCESS:
            return { loading: false, success:true }

        case EVENT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const studentVerificationReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_VERIFY_CHECK_REQUEST:
            return { loading: true }

        case STUDENT_VERIFY_CHECK_SUCCESS:
            return { loading: false, student: action.payload }

        case STUDENT_VERIFY_CHECK_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
