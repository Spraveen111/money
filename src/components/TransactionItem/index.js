const TransactionItem = props => {
  const {eachDetails} = props
  const {title, amount, typeIs} = eachDetails
  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{typeIs}</p>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
