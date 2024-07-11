import {
    
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_LIST_RESET,

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

export const popularCourseListReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case POPULAR_COURSE_LIST_REQUEST:
            return {
                loading: true
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
                courses: []
            }

        default:
            return state
    }
}

export const dualQualificationCourseListReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case DUAL_QUALIFICATION_COURSE_LIST_REQUEST:
            return {
                loading: true
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

export const ourQualificationListReducer = (state = { qualifications: [] }, action) => {
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
                qualifications: []
            }

        default:
            return state
    }
}

export const ourQualificationDetailsReducer = (state = { qualification: [] }, action) => {
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
                qualification: []
            }

        default:
            return state
    }
}

export const courseDetailsReducer = (state = { course: [] }, action) => {
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
                course: []
            }

        default:
            return state
    }
}


export const dualQualificationListReducer = (state = { dualQualifications: [] }, action) => {
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
                dualQualifications: []
            }

        default:
            return state
    }
}


export const dualQualificationCoursesListReducer = (state = { qualifications: [] }, action) => {
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
                qualifications: []
            }

        default:
            return state
    }
}

export const dualQualificationCourseDetailsReducer = (state = { course: [] }, action) => {
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
                course: []
            }

        default:
            return state
    }
}
