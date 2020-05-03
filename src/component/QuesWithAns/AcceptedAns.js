export const isAcceptedAnsExist = (answers) => {
    if (answers.length == 0) {
        return []
    }
    let accepted_ans = []
    answers.forEach(ans => {
        if (ans.is_accepted) {
            accepted_ans.push(ans)
        }
    })
    if (accepted_ans.length !== 0) {
        return accepted_ans
    }
    else {
        return answers
    }
}