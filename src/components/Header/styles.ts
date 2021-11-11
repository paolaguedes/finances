import styled from 'styled-components'

export const Container = styled.header`
  background: var(--black);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img { 
    max-width: 200px ;
  }

  button { 
    font-size: 1.2rem;
    color: #fff;
    background: var(--purple);
    padding: 0 1rem;
    border: none;
    border-radius: .25rem;
    height: 3.2rem;
    transition: all 500ms;

    &:hover {
      filter: brightness(.9);
    }
  }
`