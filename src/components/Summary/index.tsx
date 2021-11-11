import { Container } from './styles'

import inCome from '../../assets/Entradas.svg'
import outCome from '../../assets/Saidas.svg'
import total from '../../assets/Total.svg'

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={inCome} alt="Entradas"/>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outCome} alt="Saídas"/>
        </header>
        <strong>- R$ 500,00</strong>
      </div>

      <div className="highlighted-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}