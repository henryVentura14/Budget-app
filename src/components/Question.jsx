import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {
    const [count, saveCount] = useState(0)
    const [error, saveError] = useState(false)

    const defineBudget = e => {
        saveCount(parseInt(e.target.value, 10))
    }
    const addBudget = e => {
        e.preventDefault();
        if (count < 1 || isNaN(count)) {
            saveError(true);
            return;
        }
        saveError(false);
        saveBudget(count);
        saveRemaining(count);
        updateQuestion(false);
    }
    return (
        <Fragment>
            <h2>Put your budget</h2>
            {error ? <Error message="The budget is wrong" /> : null}
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="put your budget"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define budget"
                />
            </form>
        </Fragment>
    )
}
Question.prototype = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}
export default Question
