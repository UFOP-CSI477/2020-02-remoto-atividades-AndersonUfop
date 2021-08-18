import styled from 'styled-components';
import backgroundHotel from '../../assets/hotelBackground.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${backgroundHotel}) no-repeat center;
  background-size: cover;
  opacity: 0.8;

  a {
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: 0.75rem;
      color: var(--pink);

      margin-top: 0.125rem;
    }
  }
`;

export const FormContainer = styled.div`
  padding: 3.125rem;
  display: flex;
  flex-direction: column;

  width: 39.063rem;
  height: 33.25rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 0.4rem;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    color: var(--dark);
    margin-bottom: 3rem;
  }
`;

export const Legend = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 0.85rem;
  color: #7e02e0;

  margin-bottom: 0.5rem;

  &:nth-child(4) {
    margin-top: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;

  span {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.75rem;
  }
`;
