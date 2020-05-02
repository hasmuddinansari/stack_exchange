//initial state of Questions along with their answers

const initialQueAnsState = {
    error: false,
    data: [],
    message: "",
    loading: false
}

export const queAnsReducer = (state = initialQueAnsState, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                ...state,
                data: action.payload,
                error: false,
                loading: false,
            }
        case "FETCH_REQUEST":
            return {
                ...state,
                data: [],
                error: false,
                loading: true,
            }
        case "FETCH_FAIL":
            return {
                ...state,
                error: true,
                loading: false,
                message: action.error
            }
        default: return state
    }
}



