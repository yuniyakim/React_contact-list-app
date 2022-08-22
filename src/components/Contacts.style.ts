import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import {StyledButton as Button} from '../UI/Button.style';
import * as palette from "../theme/palette";

export const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
`

export const StyledSpinner = styled(Spinner)`
  color: ${palette.colors.primary};
`

export const StyledContactsContainer = styled(ListGroup)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
`

export const StyledContact = styled(ListGroup.Item)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  width: 95%;
`

export const StyledContactText = styled.p`
  margin: 0;
`

export const StyledContactButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1em;
`

export const StyledContactEditButton = styled(Button)`
  margin-right: 3%;
  padding: 0;
  height: 2.5em;
  width: 2.5em;
`

export const StyledContactDeleteButton = styled(Button)`
  padding: 0;
  height: 2.5em;
  width: 2.5em;
`
