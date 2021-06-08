import { Safe, SafeTransaction } from '@gnosis.pm/safe-core-sdk'
import React, { useState } from 'react'
import TransactionDetailComponent from './TransactionDetailComponent'

interface Interface {
  safe: Safe
  handleError: (err: Error) => void
  transactions: SafeTransaction[]
  addTransaction: (transaction: SafeTransaction) => void
}

const TransactionsPanel: React.FC<Interface> = ({ safe, handleError, addTransaction, transactions }) => {
  const [newTransaction, setNewTransaction] = useState<{ to: string, value: string, nonce: string }>({ to: '0x3dd03d7d6c3137f1eb7582ba5957b8a2e26f304a', value: '10000', nonce: '1' })

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement>) =>
    setNewTransaction({
      ...newTransaction,
      [evt.currentTarget.id]: evt.currentTarget.value
    })

  const createTransaction = () =>
    safe.createTransaction({
      to: newTransaction.to.toLowerCase(),
      value: newTransaction.value,
      nonce: parseInt(newTransaction.nonce),
      data: '0x'
    })
      .then((transaction: SafeTransaction) => addTransaction(transaction))
      .catch(handleError)

  return (
    <>
      <section className="panel">
        <h3>Pending Transactions</h3>
        {transactions.map((transaction: SafeTransaction, index: number) =>
          <TransactionDetailComponent
            safe={safe}
            transaction={transaction}
            handleError={handleError}
            key={index}
          />
        )}
      </section>

      <section className="panel">
        <h3>Create Transaction</h3>
        <p>
          <label>Recepient:</label>
          <input type="text" id="to" value={newTransaction.to} onChange={handleInputChange} />
        </p>
        <p>
          <label>Value:</label>
          <input type="number" id="value" value={newTransaction.value} onChange={handleInputChange} />
        </p>
        <p>
          <label>Nonce:</label>
          <input type="number" id="nonce" value={newTransaction.nonce} onChange={handleInputChange} />
        </p>
        <button onClick={createTransaction}>Create Transaction</button>
      </section>
    </>
  )
}

export default TransactionsPanel