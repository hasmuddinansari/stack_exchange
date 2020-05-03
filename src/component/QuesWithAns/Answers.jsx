import React from 'react'
import HtmlParsor from '../Common/HtmlParsor'

export default function Answers({ ans, question, error }) {
    if (error) {
        return <h3>No Question Exist</h3>
    }
    if (question.length > 0 && Array.isArray(ans)) {
        if (ans.length === 0) {
            return <>
                <h3 className="text-danger">Question: {question}</h3>
                <h5>No Answer found !!</h5>
            </>
        }
    }
    if (ans == null) {
        return <></>
    }
    return (
        <div className="container">
            <h3 className="text-danger">Question: {question}</h3>
            <h5 className="my-2 text-left text-success">Answers: </h5>
            <div className="row justify-content-center">
                {ans && ans.map(a => {
                    return <div key={a.answer_id} className="col-12 my-2 border border-dark shadow shadow-sm">
                        <HtmlParsor html={a.body} />
                    </div>
                })}
            </div>
        </div>
    )
}
