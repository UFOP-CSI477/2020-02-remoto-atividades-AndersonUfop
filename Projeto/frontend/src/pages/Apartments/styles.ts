import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.125rem;

  h1 {
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
    font-size: 3rem;
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: 1.125rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 100rem;
  margin: 3.125rem;

  border: 1px solid #000;
  border-radius: 0.4rem;
`;

export const Search = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.5rem;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const Legend = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1rem;

  margin-bottom: 0.5rem;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10rem;
`;

export const Divisor = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 0.01rem;
  background: var(--dark);
`;

export const Results = styled.div`
  margin-left: 10rem;
  margin-top: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
`;
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;

  margin-left: 10rem;
  margin-top: 2rem;
`;

export const HotelImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 15rem;
    height: 7rem;
  }
`;

export const IconsHotelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  margin-top: 0.3rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;
export const InfoApartment = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
`;
export const NameApartment = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
`;
export const PriceApartment = styled.div`
  margin-top: 0.397rem;
  font-family: 'Heebo', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: var(--blue);
`;
export const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;
