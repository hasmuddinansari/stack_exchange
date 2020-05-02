import axios from "axios"

export const fetchSuccess = (data) => {
    return {
        type: "FETCH_QUES_SUCCESS",
        payload: data
    }
}

export const fetchRequest = () => {
    return {
        type: "FETCH_QUES_REQUEST"
    }
}
export const fetchFailure = (error) => {
    return {
        type: "FETCH_QUES_FAIL",
        error
    }
}

export const FetchQueResponse = (url) => {
    return (dispatch) => {
        dispatch(fetchRequest())
        return axios.get(url)
            .then((res) => {
                dispatch(fetchSuccess(res.data.items))
            })
            .catch((err) => {
                dispatch(fetchFailure(err))
            })
    }
}

