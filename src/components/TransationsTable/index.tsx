import { useEffect } from 'react'
import { Container } from './styles'
import { api } from '../../services/api';

export function TransationsTable() {
  useEffect(() => {
    api.get("transactions")
    .then(response => console.log(response.data))
  }, [])

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
          <tr>
            <td className="title">Desenvolvimento de site</td>
            <td className="deposit"> R$ 12.000,00</td>
            <td>Venda</td>
            <td> 13/04/2021 </td>
          </tr>          
          <tr>
            <td className="title">Ir no restaurante</td>
            <td className="withdraw">- R$ 200,00</td>
            <td>Comida</td>
            <td> 14/04/2021 </td>
          </tr>   
        </tbody>
      </table>
    </Container>
  )
}