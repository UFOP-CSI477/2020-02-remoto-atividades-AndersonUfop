import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  
`;

export const Header = styled.div`
  width: 100vw;
  height: 4.063rem;
  background: var(--blue);
  padding: 1.5rem;

  @media(max-width: 1000px) {
    height: 1.5rem;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .login {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--light);
    
    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: ${shade(0.2, '#F3EEEE')};
    }
  }

  .back {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    color: #F3EEEE;

    transition: color 0.2s;

    span {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
    }

    &:hover {
        cursor: pointer;
        color: ${shade(0.2, '#F3EEEE')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 1000px) {
    flex-direction: column;

    img {
      height: 10rem;
    }
  }

  .images-hotel {
    padding: 4rem;

    img { 
      border-radius: 0.4rem;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 8rem;

  @media(max-width: 1000px) {
    margin: 1rem;
  }

  .btn-reserve {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 4rem;

    @media(max-width: 1000px) {
      justify-content: flex-start;
    }
  }

  h1 {
    font-family: 'Heebo', sans-serif;
    font-weight: 700;
    font-size: 3.75rem;

    @media(max-width: 1000px) {
      font-size: 2rem;
    }
  }

`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  margin-top: 2.125rem;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.938rem;

    span {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--dark);
    }
    svg {
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.534rem;

  margin-top: 2.688rem;

  

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    @media(max-width: 1000px) {
      font-size: 0.5rem;
    }
  }
`;