import React from 'react';
import Login from "../components/Login";
import {useAppActions, useAppSelector} from "../hooks";
import {User} from "../types/auth";

const LoginPage = () => {
  const {loading, error} = useAppSelector(state => state.auth);
  const {login} = useAppActions();

  const handleSubmit = (formValues: User) => {
    login(formValues);
  }

  return (
    <Login onSubmit={handleSubmit} />
  );
};

export default LoginPage;
