import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Questions from "../component/Questions/Questions"
import QuestionsAns from "../component/QuesWithAns/QuestionsAns"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Questions} />
                <Route path="/answer" exact component={QuestionsAns} />
                <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
        </BrowserRouter>
    )
}
