import {useEffect} from 'react'
import { Container } from "./styles";
import api from '../../services/api'

export default function TransactionsTable() {

useEffect(() => {

	api.get(`transactions`)
	.then(response=> console.log(response.data))
}, [])


	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Desenvolviment de website</td>
						<td className="deposit">R$12.000</td>
						<td>Desenvolviemnto</td>
						<td>20/02/2021</td>
					</tr>

					<tr>
						<td>Aluguel</td>
						<td className="withdraw">-R$1.000</td>
						<td>Casa</td>
						<td>20/02/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}
