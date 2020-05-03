import React from 'react'
import HtmlParsor from '../Common/HtmlParsor'
export default function Answers({ ans, question }) {
    if (ans.length == 0) {
        return <h2>No answer found!</h2>
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
