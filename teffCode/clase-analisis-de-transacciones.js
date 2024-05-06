// exercise: Trnasactionn analysis

const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -50 },
    { id: 2, description: 'Salary Deposit', amount: 2000 },
    { id: 3, description: 'Unity Bill Payment', amount: -100 },
    { id: 4, description: 'Online Purchase', amount: -30 },
]

// 1. Calculate Total Balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance);

// 2. Find the largest Transaction (Income or Expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])

console.log('largest Transaction: ', largestTransaction);

// 3. Filter Purchase TRansactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log('purchaseTransactions: ', purchaseTransactions);