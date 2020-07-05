import React from 'react'
import Spending from './Spending'
import PropTypes from 'prop-types'

const List = ({ expenses }) => (
    <div className="expenses-incurred">
        <h2>List</h2>
        {expenses.map(spending => (
            <Spending
                key={spending.id}
                spending={spending}
            />
        ))}
    </div>
)
List.prototype = {
    expenses: PropTypes.array.isRequired
}
export default List