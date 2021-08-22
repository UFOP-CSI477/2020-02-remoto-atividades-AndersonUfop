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
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  font-size: 3rem;

  margin-bottom: 2rem;
`;

export const LimiteRoomsContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-left: 0.5rem;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: red;
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  padding: 0.5rem;
`;

export const THead = styled.thead`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1.2rem;

  background: var(--blueLight);
  border-bottom: 1px solid var(--light);
`;

export const TBody = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: var(--dark);
`;

export const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;

  border: 1px solid var(--light);

  color: var(--light);

  transition: background-color 0.2s;

  &:hover {
    background: #151111;
    cursor: pointer;
  }
`;

export const Th = styled.thead`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-left: 2rem;
  color: var(--light);
`;

export const Td = styled.td`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-left: 2rem;
  padding: 0.8rem;

  &:nth-child(2) {
    margin-left: 7rem;
  }
  /*
  &:nth-child(3) {
    margin-left: 12rem;
    margin-right: 16rem;
  }

  &:nth-child(4) {
    margin-left: 16rem;
    margin-right: 16rem;
  } */
`;
