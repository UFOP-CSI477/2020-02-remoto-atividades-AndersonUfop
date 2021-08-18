import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 10rem;
    background: #C14242;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: cal(100% + 0.75rem);
    left: 50%;
    transform: translateX(-50%);

    color: var(--dark);

    &::before {
      content: '';
      border-style: solid;
      border-color: #C14242 transparent;
      border-width: 0.375rem 0.375rem 0 0.375rem;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;