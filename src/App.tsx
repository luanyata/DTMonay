import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import Header from "./components/Header"
import Dashboard from './components/Dashboard'
import Modal from 'react-modal'
import NewTransactionModal from './components/NewTransactionModal'
import { TransactionProvider } from './hooks/useTransactions'


Modal.setAppElement("#root")

function App() {

	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

	return (
		<TransactionProvider>
			<GlobalStyle />
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>

			<Dashboard />
		</TransactionProvider>
	);
}

export default App;
