import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Title = styled.div`
  margin-bottom: 2rem;

  p {
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
    font-size: 3rem;
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  p {
    margin-left: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: var(--pink);
  }

  label {
    font-size: 1.2rem;
  }

  &:last-child {
    display: flex;
    gap: 2.5rem;

    margin-bottom: 2rem;
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    border: 1px solid var(--dark);
    border: 1px solid var(--dark);
    padding: 0.875rem;
    border-radius: 0.4rem;
    width: 12rem;
    height: 2.125rem;
  }
`;
