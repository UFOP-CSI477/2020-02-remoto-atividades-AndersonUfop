import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f0ecec;
  border-radius: 0.4rem;
  padding: 1rem;
  width: 100%;
  opacity: 0.8;

  color: var(--dark);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c14242;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #7e02e0;
    `}

      input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--dark);
    font-weight: 300;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 1.25rem;
  margin-left: 1rem;
  svg {
    margin: 0;
  }

  span {
    background: #c14242;
    color: var(--light);

    &::before {
      border-color: #c14242 transparent;
    }
  }
`;
