import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { useTransactions } from '../../hooks/useTransactions'


interface NewTransactionModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

export default function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	const { createTransaction } = useTransactions()

	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState(0)
	const [category, setCategory] = useState('')
	const [type, setType] = useState('deposit')

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault()

		await createTransaction({
			title,
			amount,
			category,
			type,
		})
		handleCloseModal()
	}

	function handleCloseModal() {
		setTitle('')
		setAmount(0)
		setCategory('')
		setType('deposit')

		onRequestClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleCloseModal}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>

			<button type="button" onClick={handleCloseModal} className="react-modal-close">
				<img src={closeImg} alt="Fechar modal" />
			</button>
			<Container onSubmit={handleCreateNewTransaction}>
				<h2> Cadastrar transação</h2>

				<input
					type="text"
					value={title}
					onChange={event => setTitle(event.target.value)}
					placeholder="Título"
				/>

				<input
					type="number"
					value={amount}
					onChange={event => setAmount(Number(event.target.value))}
					placeholder="Valor"
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						isActive={type === 'deposit'}
						activeColor="green"
						onClick={() => setType('deposit')}
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						activeColor="red"
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
					>
						<img src={outcomeImg} alt="Saida" />
						<span>Saida</span>
					</RadioBox>

				</TransactionTypeContainer>
				<input
					type="text"
					onChange={event => setCategory(event.target.value)}
					value={category}
					placeholder="Categoria"
				/>

				<button type="submit">Cadastrar</button>
			</Container>

		</Modal>
	)
}


