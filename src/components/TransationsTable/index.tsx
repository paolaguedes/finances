import { Container } from './styles'
import {  useTransactions } from '../../hooks/useTransactions'

export function TransationsTable() {

  const {transactions} = useTransactions()

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map( transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format( transaction.type === 'deposit' 
                ? transaction.amount 
                : - transaction.amount
                )}
              </td>
              <td>{transaction.category}</td>
              <td>                
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>  
          ))}           
        </tbody>
      </table>
    </Container>
  )
}

function TransationContext(TransationContext: any) {
  throw new Error('Function not implemented.');
}
