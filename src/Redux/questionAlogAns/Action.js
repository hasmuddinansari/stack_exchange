import axios from "axios"

export const fetchSuccessAns = (data) => {
    return {
        type: "FETCH_SUCCESS",
        payload: data
    }
}

export const fetchRequestAns = () => {
    return {
        type: "FETCH_REQUEST"
    }
}
export const fetchFailureAns = (error) => {
    return {
        type: "FETCH_FAIL",
        error
    }
}

export const fetchQueAnsResponse = (url) => {
    return dispatch => {
        dispatch(fetchRequestAns())
        return axios.get(url)
            .then((res) => {
                return dispatch(fetchSuccessAns(res.data))
            })
            .catch((err) => {
                return dispatch(fetchFailureAns(err))
            })
    }
}

