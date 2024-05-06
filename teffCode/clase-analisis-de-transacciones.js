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

// 4. Find a transaction by description 

function specificTransaction (description) {
    const result = transactions.find(trans => trans.description == description)
   // return result ? console.log(result) : console.log('not found'); Esta linea igual sirve es con este condicional
   if (result) {
    console.log('Specific Transaction: ', result)
   } else {
    console.log('Transaction not found');
   }
}

console.log(specificTransaction('Salary Deposit'));

// 5. Find the index of a transaction by amount

function indexAmountTransaction (monto) {
    const resultado = transactions.findIndex(trans => trans.amount === monto)
   // return resultado ? console.log('Transaction Amount: ', resultado) : console.log('Amount transaction not found');
    if (resultado === -1) {
        console.log('Amount transaction not found') 
    } else {
        console.log(`Index of Transaction Amount ${monto} is ${resultado}`);
    }
}

console.log(indexAmountTransaction(-100));

// 6. Update Transaction Description


function updateTransactionDescriptionByType(transactionsArray) {
    transactionsArray.forEach(transaction => {
      if (transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
      } else {
        transaction.description = `Income: ${transaction.description}`
      }
    });
    return transactionsArray;
  }

  console.log(updateTransactionDescriptionByType(transactions));
