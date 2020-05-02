
//initial questions state 
const initialQuesState = {
    error: false,
    data: [],
    message: "",
    loading: false
}

export const questionsReducer = (state = initialQuesState, action) => {
    switch (action.type) {
        case "FETCH_QUES_SUCCESS":
            return {
                ...state,
                data: action.payload,
                error: false,
                loading: false,
            }
        case "FETCH_QUES_REQUEST_Q":
            return {
                ...state,
                data: [],
                error: false,
                loading: true,
            }
        case "FETCH_QUES_FAIL":
            return {
                ...state,
                error: true,
                loading: false,
                message: "something error"
            }
        default: return state
    }
}
