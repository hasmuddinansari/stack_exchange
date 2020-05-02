import { combineReducers } from "redux"


//initial questions state 
const initialQuesState = {
    error: false,
    data: [],
    message: "",
    loading: false
}

const questionsReducer = (state = initialQuesState, action) => {
    switch (action.type) {
        default: return state
    }
}


//initial state of Questions along with their answers

const initialQueAnsState = {
    error: false,
    data: [],
    message: "",
    loading: false
}

const queAnsReducer = (state = initialQueAnsState, action) => {
    switch (action.type) {
        default: return state
    }
}


export const rootReducer = combineReducers({
    questionsReducer,
    queAnsReducer
})

