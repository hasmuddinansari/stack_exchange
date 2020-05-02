import axios from "axios"

export const fetchSuccess = (data) => {
    return {
        type: "FETCH_SUCCESS",
        payload: data
    }
}

export const fetchRequest = () => {
    return {
        type: "FETCH_REQUEST"
    }
}
export const fetchFailure = (error) => {
    return {
        type: "FETCH_FAIL",
        error
    }
}

export const fetchResponse = (url) => {
    return dispatch => {
        fetchRequest()
        axios.get(url)
            .then((res) => {
                return dispatch(fetchSuccess(res.data))
            })
            .catch((err) => {
                return dispatch(fetchFailure(err))
            })
    }
}

