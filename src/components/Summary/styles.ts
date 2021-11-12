import styled from 'styled-components'
 
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: -8rem 0 4rem;

  @media(max-width:426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    max-width:350px; 
    width:100%;
    background: var(--shape);
    padding: 1.5rem 2rem;

    header { 
      display: flex;
      justify-content: space-between;
    }

    img {
      width: 32px;
      height: 32px;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2.2rem;
      font-weight: 500;
      color: var(--text-title);

      @media (max-width: 769px) {
        font-size: 1.5rem;
      }
    }

    &.highlighted-background {
      background: var(--green);
      color: #fff;

      strong {
        color: #fff;
      }
    }

  }
 `