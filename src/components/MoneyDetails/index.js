// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {income, expenses} = moneyDetails

  const totalBalance = income - expenses
  return (
    <>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance"
        />
        <div>
          <p>Your Balance</p>
          <p>Rs{totalBalance}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance"
        />
        <div>
          <p>Your Income</p>
          <p>Rs{income}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="balance"
        />
        <div>
          <p>Your Expenses</p>
          <p>Rs{expenses}</p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
