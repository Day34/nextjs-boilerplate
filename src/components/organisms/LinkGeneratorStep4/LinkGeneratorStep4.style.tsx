import styled from 'styled-components';
import { Typography, TextField } from '@material-ui/core';

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography)`
  margin-bottom: 20px !important;
  text-align: center;
`;

export const Input = styled(TextField)`
  text-align: center !important;

  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
`;
