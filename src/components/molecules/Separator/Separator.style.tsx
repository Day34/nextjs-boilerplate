import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  padding: 16px;

  > div {
      color: #fff;

      &:not(:first-child):before {
        content: '|';
        margin: 0 16px;
      }
    }
  }
`;
