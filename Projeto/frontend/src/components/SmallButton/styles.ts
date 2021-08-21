import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonContainer = styled.button`
  height: 3.5rem;
  width: 14.063rem;
  border-radius: 0.6rem;
  border: none;
  background-color: var(--blueLight);
  color: var(--light);

  &:hover {
    color: ${shade(0.2, '#F3EEEE')};
  }
`;
