import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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

export const StyledFormControl = styled(Form.Control)`
  font-family: 'Open Sans', sans-serif;
  padding-left: 1em;
  padding-right: 1em;
  height: 3em;
  width: 100%;
  border: solid 1px ${palette.colors.border};
  border-radius: 5px;
  margin: 3%;
`

export const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
  height: 3em;
  width: 100%;
  border: solid 1px ${palette.colors.border};
  border-radius: 20px;
  background-color: ${palette.colors.primary};
  color: ${palette.colors.text};
  margin: 3%;
  cursor: pointer;
  
  :hover {
    background-color: ${palette.colors.primaryDark};
  }
`