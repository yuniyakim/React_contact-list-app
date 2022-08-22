import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import {StyledButton as Button} from "../UI/Button.style";
import Modal from 'react-bootstrap/Modal';

export const StyledButton = styled(Button)`
  margin-left: 3%;
  height: 2.5em;
  width: 5em;
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

export const StyledFormControl = styled(Form.Control)`
  width: 100%;
  margin: 3%;
  height: 3em;
`
