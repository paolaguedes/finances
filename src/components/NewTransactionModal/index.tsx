import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

import { Container, TransactionTypeContainer, Button } from './styles'
import close from '../../assets/Vector.svg'
import inIcon from '../../assets/Entradas.svg'
import outIcon from '../../assets/Saidas.svg'
interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
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

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    
    onRequestClose()
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
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
          <Button 
              type="button"
              onClick={() => { setType('deposit') }}
              isActive={ type === 'deposit'}
              activeColor="green"
            >
            <img src={inIcon} alt=""/>
            <span>Entrada</span>
            </Button>
            <Button 
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={ type === 'withdraw'}
              activeColor="red"
            >
            <img src={outIcon} alt=""/>
            <span>Saída</span>
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