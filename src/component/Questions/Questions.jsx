import React, { useState } from 'react'
import { FetchQueResponse } from "../../Redux/questions/Action"
import { connect } from "react-redux"
function Questions({ FetchQueResponse }) {
    const [tag, setTag] = useState("")
    function getQuestions() {
        let url = `https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=creation&tagged=${tag}&site=stackoverflow`

        //getting questions from api's
        FetchQueResponse(url)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-12">
                    <input placeholder="type any tag Names" className="form-control my-3" type="text" onChange={(e) => setTag(e.target.value)} />
                    <button
                        className="btn btn-outline-info"
                        onClick={getQuestions}>
                        Search Questions
                    </button>
                </div>
            </div>

            {/* all_questions */}

            <div className='row justify-content-center'>
                <div className="col-lg-6 col-12">

                </div>
            </div>



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