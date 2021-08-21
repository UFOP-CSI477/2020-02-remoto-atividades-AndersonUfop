import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3.125rem;

  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  font-size: 3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 3.125rem;

  border: 1px solid #000;
  border-radius: 0.4rem;
`;

export const DescriptionReserve = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export const GeneralInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
`;

export const InfoHotel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    color: #000;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
  }
`;

export const InfoReserve = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: var(--pink);
  }

  input {
    margin-top: 0.9rem;
    border: 1px solid var(--dark);
    padding: 0.875rem;
    border-radius: 0.4rem;
    width: 12rem;
    height: 2.125rem;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 2.625rem;
`;

export const DescriptionApartment = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: #000;
`;

export const TypeApartment = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1.125rem;
`;

export const ValueTotal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;

  span {
    font-weight: 300;
    font-size: 1.125rem;
  }

  p {
    font-weight: 500;
    font-size: 1.25rem;
    color: #000;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  width: 10rem;
  height: 3.625rem;
  border: 1px solid var(--blueLight);
  border-radius: 0.4rem;
  background: transparent;

  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: var(--blueLight);

  transition: background-color 0.4s;

  &:hover {
    background: var(--blueLight);
    color: var(--light);
    font-weight: 500;
  }
`;
export const Divisor = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 0.01rem;
  background: var(--dark);
`;
export const IdentificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;

  p {
    margin-left: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: var(--pink);
  }

  input {
    border: 1px solid var(--dark);
    width: 100%;
    height: 3rem;
    border-radius: 0.4rem;
    padding: 0.5rem;
  }

  .datepicker {
    margin-left: 1rem;
    margin-top: 1rem;
    width: 98.5%;
    border: 1px solid var(--dark);
    color: var(--dark);

    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }

  button {
    width: 18rem;
    height: 3.5rem;

    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.75rem;
  }
`;

export const IdentificationTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
`;
export const IdentificationButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 4rem;
`;
