import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";

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
    <div>
      <Form>
        <div>
          Sign in
        </div>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={handleTextFieldChange} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handleTextFieldChange} />
        </Form.Group>
        <Button onClick={handleSubmit}>
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
