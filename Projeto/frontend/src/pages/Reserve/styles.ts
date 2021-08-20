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
  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
  }
`;

export const InfoReserve = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
