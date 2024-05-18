import axios from 'axios'
import {
    
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,
    COUNTRY_LIST_FAIL,
    COUNTRY_LIST_RESET,

} from '../constants/abroadConstants'


export const getCountryList = (id) => async (dispatch) => {
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
