import Modal from 'react-modal'
import { Container, TransactionTypeContainer, Button } from './styles'
import close from '../../assets/Vector.svg'
import inIcon from '../../assets/Entradas.svg'
import outIcon from '../../assets/Saidas.svg'
import { FormEvent, useState } from 'react'
import { api } from './../../services/api';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type,
    }

    console.log(data)

    api.post('/transactions', data)
  }


  
  return(
      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={close} alt="Fechar modal"/>
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          
          <input 
            placeholder="Título"
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            placeholder="Preço"
            type="number"
            value={value}
            onChange={event => setValue(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <Button 
              type="button"
              onClick={() => { setType('deposit') }}
              isActive={ type === 'deposit'}
              activeColor="green"
            >
              <img src={outIcon} alt=""/>
              <span>Saída</span>
            </Button>
            <Button 
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={ type === 'withdraw'}
              activeColor="red"
            >
            <img src={inIcon} alt=""/>
              <span>Entrada</span>
            </Button>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
            type="text"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  )
}