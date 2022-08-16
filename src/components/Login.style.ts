import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import {StyledFormControl as FormControl} from "../UI/FormControl.style";
import {StyledButton as Button} from "../UI/Button.style";

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
  width: 250px;
  padding: 2em;
  border-radius: 3%;
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
`

export const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 3%;
`

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin: 3%;
`

export const StyledButton = styled(Button)`
  width: calc(100% + 2em);
  margin: 3%;
`