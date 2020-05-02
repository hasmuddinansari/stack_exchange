import React from 'react'
import HtmlParsor from "../Common/HtmlParsor"

export default function QuesList({ questions }) {
    if (questions) {
        if (questions.length == 0) {
            return <h3>Not Found!!</h3>
        }
    }
    return (
        <div>
            {questions && questions.map((ques, i) => {
                return <div key={ques.question_id}>
                    <div className="shadow shadow-sm mb-2 p-4 ">
                        <h5 className="m-1 p-3">
                            <span className="bg-light">{i + 1}.
                            <HtmlParsor html={ques.title} />
                            </span>
                        </h5>
                        <div className="row">
                            {ques.tags.map((tag, ind) => {
                                return <p
                                    key={ind}
                                    className='border border-dark py-1 px-2 m-1'>
                                    {tag}
                                </p>
                            })}
                        </div>
                    </div>

                </div>
            })}
        </div>
    )
}
