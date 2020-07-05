import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { reviewBudget } from '../helpers/helper'

const BudgetControl = ({ budget, remaining }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget : $ {budget}
            </div>
            <div className={reviewBudget(budget, remaining)}>
                Remaining : $ {parseInt(remaining)}
            </div>
        </Fragment>
    )
}
BudgetControl.prototype = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired

}
export default BudgetControl