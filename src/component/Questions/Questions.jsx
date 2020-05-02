import React, { useState } from 'react'
import { FetchQueResponse } from "../../Redux/questions/Action"
import { connect } from "react-redux"
function Questions({ FetchQueResponse }) {
    const [tag, setTag] = useState("")
    function getQuestions() {
        let url = `https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=creation&tagged=${tag}&site=stackoverflow`
        FetchQueResponse(url)
    }
    return (
        <div>
            <input type="text" onChange={(e) => setTag(e.target.value)} />
            <button onClick={getQuestions}>Click me</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questionsReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        FetchQueResponse: url => dispatch(FetchQueResponse(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Questions)