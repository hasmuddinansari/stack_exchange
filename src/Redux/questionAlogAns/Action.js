import axios from "axios"

export const fetchSuccessAns = (data) => {
    return {
        type: "FETCH_SUCCESS",
        payload: data
    }
}

export const fetchSuccessQuestion = (question) => {
    return {
        type: "FETCH_QUESTION_SUCCESS",
        question: question
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

export const fetchQuestionResponse = (qId) => {
    return dispatch => {
        dispatch(fetchRequestAns())
        let url = `https://api.stackexchange.com/2.2/questions/${qId}?order=desc&sort=activity&site=stackoverflow`
        return axios.get(url)
            .then((res) => {
                return dispatch(fetchSuccessQuestion(res.data.items[0].title))

            })
            .catch((err) => {
                return dispatch(fetchFailureAns(err))
            })
    }
}
