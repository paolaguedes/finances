import Modal from 'react-modal'
import { Container, TransactionTypeContainer, Button } from './styles'
import close from '../../assets/Vector.svg'
import inIcon from '../../assets/Entradas.svg'
import outIcon from '../../assets/Saidas.svg'
import { useState } from 'react'

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const [type, setType] = useState('deposit')
  
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

        <Container>
          <h2>Cadastrar transação</h2>
          
          <input 
            placeholder="Título"
            type="text"
            // value={}
            // onChange={() =>}
          />

          <input 
            placeholder="Preço"
            type="number"
            // value={}
            // onChange={() =>}
          />

          <TransactionTypeContainer>
            <Button 
              type="button"
              onClick={() => { setType('deposit') }}
              isActive={ type == 'deposit'}
              activeColor="green"
            >
              <img src={outIcon} alt=""/>
              <span>Saída</span>
            </Button>
            <Button 
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={ type == 'withdraw'}
              activeColor="red"
            >
            <img src={inIcon} alt=""/>
              <span>Entrada</span>
            </Button>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
            type="text"
            // value={}
            // onChange={() =>}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  )
}