import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {StyledButton as Button} from "../UI/Button.style";
import * as palette from '../theme/palette';

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
`

export const StyledForm = styled(Form)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 2em;
  border-radius: 3%;
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
`

export const StyledTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 3%;
`

export const StyledFormControl = styled(Form.Control)`
  width: 100%;
  margin: 3%;
  height: 3em;
`

export const StyledErrorContainer = styled(Alert)`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  width: 100%;
  margin: 3%;
  background-color: ${palette.colors.red};
  color: ${palette.colors.text};
`

export const StyledError = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 0.2em 0;
`

export const StyledButton = styled(Button)`
  width: 100%;
  margin: 3%;
  height: 3em;
`