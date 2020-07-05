import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Form = ({ saveSpending, saveCreateSpending }) => {
    const [name, saveName] = useState('');
    const [count, saveCount] = useState(0);
    const [error, saveError] = useState(false);

    const addBudget = e => {
        e.preventDefault();
        if (count < 1 || isNaN(count) || name.trim() === '') {
            saveError(true)
            return;
        }
        saveError(false)
        const spending = {
            name,
            count,
            id: shortid.generate()
        }
        saveSpending(spending);
        saveCreateSpending(true);
        saveName('');
        saveCount(0);
    }
    return (
        <form onSubmit={addBudget}>
            <h2>Add your expenses here</h2>
            {error
                ? <Error message='both fields are required or incorrect quote' />
                : null
            }
            <div className="field">
                <label>Budget name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transport"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
                <label>Budget count</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 345"
                    value={count}
                    onChange={e => saveCount(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                value="Add budget"
                className="button-primary u-full-width"
            />
        </form>
    )
}
Form.prototype = {
    saveSpending: PropTypes.func.isRequired,
    saveCreateSpending: PropTypes.func.isRequired
}
export default Form