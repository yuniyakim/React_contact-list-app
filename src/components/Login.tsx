import React, {useState} from 'react';
import {
  StyledFormContainer as FormContainer,
  StyledForm as Form,
  StyledTitle as Title,
  StyledFormControl as FormControl,
  StyledErrorContainer as ErrorContainer,
  StyledError as Error,
  StyledButton as Button
} from './Login.style';
import {User} from "../types/auth";

const initialState: User = {
  email: '',
  password: '',
}

const Login = (props: {onSubmit: (values: User) => void, error: string | null}) => {
  const [formValues, setFormValues] = useState<User>(initialState);

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { type, value } = event.target;
    setFormValues({
      ...formValues,
      [type]: value,
    });
  };

  return (
    <FormContainer>
      <Form>
        <Title>
          Sign in
        </Title>
        <FormControl type="email" placeholder="Email" onChange={handleTextFieldChange} />
        <FormControl type="password" placeholder="Password" onChange={handleTextFieldChange} />
        {props.error !== null ? <ErrorContainer><Error>Error</Error>{props.error}</ErrorContainer> : <></>}
        <Button onClick={() => props.onSubmit(formValues)}>
          Sign in
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
