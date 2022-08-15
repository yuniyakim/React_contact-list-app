import React, {useState} from 'react';
import {
  StyledFormContainer as FormContainer,
  StyledForm as Form,
  StyledTitle as Title,
  StyledFormControl as FormControl,
  StyledButton as Button
} from './Login.style';

interface LoginFormState {
  email: string;
  password: string;
}

const initialState: LoginFormState = {
  email: '',
  password: '',
}

const Login = () => {
  const [formValues, setFormValues] = useState<LoginFormState>(initialState);

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { type, value } = event.target;
    setFormValues({
      ...formValues,
      [type]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formValues);
  }

  return (
    <FormContainer>
      <Form>
        <Title>
          Sign in
        </Title>
        <FormControl type="email" placeholder="Email" onChange={handleTextFieldChange} />
        <FormControl type="password" placeholder="Password" onChange={handleTextFieldChange} />
        <Button onClick={handleSubmit}>
          Sign in
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
