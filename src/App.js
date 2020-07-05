import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'

const App = () => {
  const [budget, saveBudget] = useState(0)
  const [remaining, saveRemaining] = useState(0)
  const [showQuestion, updateQuestion] = useState(true)
  const [expenses, saveExpenses] = useState([])
  const [spending, saveSpending] = useState({})
  const [createSpending, saveCreateSpending] = useState(false)

  useEffect(() => {
    if (createSpending) {
      saveExpenses([...expenses, spending])
    }
    const budgetRemaining = remaining - spending.count
    saveRemaining(budgetRemaining)
    saveCreateSpending(false)
  }, [spending])

  return (
    <div className='container'>
      <header>
        <h1>Budget app</h1>
      </header>
      <div className='content'>
        {showQuestion ? (
          <div className='principal-content '>
            <Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
            />
          </div>
        ) : (
          <div className='secondary-content'>
            <div className='row'>
              <div className='one-half column'>
                <Form
                  saveSpending={saveSpending}
                  saveCreateSpending={saveCreateSpending}
                />
              </div>
              <div className='one-half column'>
                <List expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
