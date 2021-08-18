import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 16rem;
  height: 3.2rem;

  border: none;
  border-radius: 0.8rem;
  background-color: var(--blueLight);

  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--light);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1000px) {
    width: 8rem;
    height: 2.4rem;

    font-size: 0.8rem;
  }
`;
