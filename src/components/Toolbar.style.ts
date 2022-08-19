import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import {StyledButton as Button} from "../UI/Button.style";
import * as palette from '../theme/palette';

export const StyledToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: ${palette.colors.background};
`

export const StyledForm = styled(Form)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`

export const StyledFormControl = styled(Form.Control)`
  width: 250px;
  margin-right: 5px;
`

export const StyledSearchButton = styled(Button)`
`

export const StyledButton = styled(Button)`
  margin: 3%;
`