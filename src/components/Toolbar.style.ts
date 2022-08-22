import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import {StyledButton as Button} from "../UI/Button.style";
import Modal from 'react-bootstrap/Modal';
import * as palette from '../theme/palette';

export const StyledToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: ${palette.colors.background};
`

export const StyledSearchForm = styled(Form)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`

export const StyledSearchFormControl = styled(Form.Control)`
  width: 250px;
  height: 2.5em;
`

export const StyledButton = styled(Button)`
  margin-left: 3%;
  height: 2.5em;
`

export const StyledModalBody = styled(Modal.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledForm = styled(Form)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  width: 100%;
`
