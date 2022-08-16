import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import * as palette from '../theme/palette';

export const StyledContactsContainer = styled(ListGroup)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledContact = styled(ListGroup.Item)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  width: 95%;
`

export const StyledContactButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1em;
`

export const StyledContactButton = styled(Button)`
  height: 100%;
`
