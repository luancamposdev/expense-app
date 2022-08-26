const ulElement = document.querySelector('#transactions')
const balanceDisplay = document.querySelector('#balance')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')

const dumyTransactions = [
  {id: 1, name: 'Fatura Cartão Nubank', amount: -50},
  {id: 2, name: 'Salário', amount: 1500},
  {id: 3, name: 'Sorvete 2L', amount: -10},
  {id: 4, name: 'Freela IDEAs Books', amount: 300},
]

const addTransactionIntoDom = transaction => {
  const operator = transaction.amount < 0 ? '-' : '+';
  const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
  const amountWithoutOperator = Math.abs(transaction.amount)

  const liElement = document.createElement('li')
  liElement.classList.add(CSSClass)
  liElement.innerHTML = `
      ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
  `

  ulElement.appendChild(liElement)

}

const updateBalanceValues = () => {
  const transactionsAmount = dumyTransactions.map(transation => transation.amount)
  const totalAmount = transactionsAmount
    .reduce((accumulator, number) => accumulator + number, 0)
    .toFixed(2)
  const income = transactionsAmount
    .filter(number => number > 0)
    .reduce((accumulator, number) => accumulator + number, 0)
    .toFixed(2)
  const expense = Math.abs(transactionsAmount
    .filter(number => number < 0)
    .reduce((accumulator, number) => accumulator + number, 0))
    .toFixed(2)

    balanceDisplay.textContent = `R$ ${totalAmount}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}

const main = () => {
  dumyTransactions.forEach(addTransactionIntoDom)

  updateBalanceValues()
}

main()