import styled from 'styled-components'
 
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -8rem;

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