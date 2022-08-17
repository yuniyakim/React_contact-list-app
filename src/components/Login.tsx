import React, {useState} from 'react';
import {
  StyledFormContainer as FormContainer,
  StyledForm as Form,
  StyledTitle as Title,
  StyledFormControl as FormControl,
  StyledButton as Button
} from './Login.style';
import {User} from "../types/auth";

const initialState: User = {
  email: '',
  password: '',
}

const Login = (props: {onSubmit: (values: User) => void}) => {
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
        <Button onClick={() => props.onSubmit(formValues)}>
          Sign in
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
