import React, { useState, useEffect } from 'react'
import queIds from "./question_id"
import { fetchQueAnsResponse, fetchQuestionResponse } from "../../Redux/questionAlogAns/Action"
import { connect } from "react-redux"
import { isAcceptedAnsExist } from "./AcceptedAns"
import Answers from "./Answers"
import { Link } from "react-router-dom"
import Loading from '../Common/Loading'

function QuestionsAns({ fetchQueAnsResponse, queAnsReducer, fetchQuestionResponse }) {
    const [qId, setId] = useState(0)
    const [ans, setAns] = useState(null)
    let { data, loading, question } = queAnsReducer

    function searchByQId() {
        //fetching question
        fetchQuestionResponse(qId)
        //answers
        let url = `https://api.stackexchange.com/2.2/questions/${qId}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`
        fetchQueAnsResponse(url)
    }

    useEffect(() => {
        if (!!data) {
            if (data.items) {
                let answers = isAcceptedAnsExist(data.items)
                setAns(answers)
                console.log(answers)
            }
            else {
                setAns([])
            }
        }
    }, [data])

    return (
        <div className="container">
            <Link to="/">Questions</Link>
            <h3>Questions with their Answers</h3>
            <div className="row justify-content-center p-3">
                <input
                    onChange={(e) => setId(e.target.value)}
                    list="queId" type="text"
                    name="ques_id"
                    className="form-control col-lg-7 my-2 col-12 mr-2 p-2"
                    placeholder="Choose an question Id or type .." />
                <datalist id="queId">
                    {queIds.map(ques => {
                        return <option key={ques}>{ques}</option>
                    })}
                </datalist>
                <button onClick={searchByQId} className="btn btn-success col-lg-3 col-12 my-2">Search</button>
            </div>
            {loading ? <Loading /> : <Answers ans={ans} question={question} />}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        queAnsReducer: state.queAnsReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchQueAnsResponse: url => dispatch(fetchQueAnsResponse(url)),
        fetchQuestionResponse: qId => dispatch(fetchQuestionResponse(qId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionsAns)