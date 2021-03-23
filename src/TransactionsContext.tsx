import {createContext, ReactNode, useEffect, useState} from 'react'
import api from './services/api'

interface Transaction{
	id:number,
	title:string,
	type: 'deposit'|'withdraw'
	category:string,
	amount:number,
	createdAt: Date
}

interface TransactionsProviderProps {
	children: ReactNode
}

export const TransactionContext = createContext<Transaction[]>([])

export function TransactionProvider({children}:TransactionsProviderProps){
	const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		api.get(`transactions`)
		.then(response=> setTransactions(response.data.transactions))
	}, [])

	return (
		<TransactionContext.Provider value={transactions}>
			{children}
		</TransactionContext.Provider>
	)

}