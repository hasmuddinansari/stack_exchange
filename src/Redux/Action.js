
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

