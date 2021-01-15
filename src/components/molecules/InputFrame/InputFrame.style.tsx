import styled, { css } from 'styled-components';
import * as T from './InputFrame.type';

export const Wrapper = styled.div<T.StyleWrapperProps>`
  ${props => {
    if (props.inline) {
      return css`
        display: flex;
        align-items: center;

        > label {
          margin-right: 16px;
        }
      `;
    }

    return css`
      > label {
        margin-bottom: 8px;
      }
    `;
  }}

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
