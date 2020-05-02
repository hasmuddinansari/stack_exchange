import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import { queAnsReducer } from "./questionAlogAns/Reducer"
import { questionsReducer } from "./questions/Reducer"


const rootReducer = combineReducers({
    questionsReducer,
    queAnsReducer
})



const store = createStore(rootReducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store