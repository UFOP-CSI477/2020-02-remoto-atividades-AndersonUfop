import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 4.063rem;
  background: var(--blue);
  padding: 1.5rem;

  @media (max-width: 1000px) {
    height: 1.5rem;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .login {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
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
    color: #f3eeee;

    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: ${shade(0.2, '#F3EEEE')};
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

export const UserLogOut = styled.div`
  height: 2rem;
  width: 100%;
  color: var(--light);
  cursor: pointer;

  font-size: 0.8rem;
`;
