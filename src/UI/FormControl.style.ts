import styled from "styled-components";
import Form from "react-bootstrap/Form";
import * as palette from "../theme/palette";

export const StyledFormControl = styled(Form.Control)`
  font-family: 'Open Sans', sans-serif;
  padding-left: 1em;
  padding-right: 1em;
  height: 3em;
  border: solid 1px ${palette.colors.border};
  border-radius: 5px;
`