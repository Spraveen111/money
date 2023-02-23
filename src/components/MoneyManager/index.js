// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    income: 0,
    typeId: 'Income',
    expenses: 0,
    transactionList: [],
  }

  onChangeTilt = event => ({titleInput: event.target.value})

  onChangeAmount = event => ({amountInput: parseInt(event.target.value)})

  onSelect = event => {
    console.log(event.target.value)
    this.setState({
      typeId:
        event.target.value === 'INCOME'
          ? transactionTypeOptions[0].displayText
          : transactionTypeOptions[1].displayText,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {amountInput, titleInput, typeId, income, expenses} = this.state
    console.log(this.state)
    const newItem = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      typeIs: typeId,
    }
    console.log(`${income}`)

    if (typeId === 'Income') {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newItem],
        income: prevState.income + amountInput,
        amountInput: '',
        titleInput: '',
      }))
    } else if (typeId === 'Expenses' && amountInput <= income - expenses) {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newItem],
        expenses: prevState.expenses + amountInput,
        amountInput: '',
        titleInput: '',
      }))
    }
  }

  render() {
    const {
      income,
      expenses,
      titleInput,
      amountInput,
      transactionList,
    } = this.state
    console.log(this.state)
    return (
      <div className="container">
        <div className="image1">
          <h1 className="richard">Hi,Richard</h1>
          <p className="para">
            Welcome back to your <span className="para2">Money Manager</span>
          </p>
        </div>
        <div className="details-container">
          <MoneyDetails moneyDetails={{income, expenses}} />
        </div>
        <div className="form-container2">
          <form className="form-container" onSubmit={this.submitForm}>
            <h1>Add Transaction</h1>
            <div className="con">
              <label htmlFor="title">TITLE</label>
              <input
                value={titleInput}
                type="text"
                id="title"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="con">
              <label htmlFor="amount">AMOUNT</label>
              <input
                value={amountInput}
                placeholder="AMOUNT"
                id="amount"
                type="number tel"
                onChange={this.onChangeAmount}
              />
            </div>
            <div className="con">
              <label htmlFor="select">TYPE</label>
              <select id="select" onChange={this.onSelect}>
                <option
                  defaultChecked
                  value={transactionTypeOptions[0].optionId}
                >
                  Income
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  Expenses
                </option>
              </select>
            </div>
            <button type="submit" className="btn-text">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <div className="history">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            {transactionList.length > 0 ? (
              <ul>
                {transactionList.map(eachOne => (
                  <TransactionItem eachDetails={eachOne} key={eachOne.Id} />
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
