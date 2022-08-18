import React, {useEffect} from 'react';
import Login from "../components/Login";
import {useAppActions, useAppSelector} from "../hooks";
import {User} from "../types/auth";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const {userId, token, loading, error} = useAppSelector(state => state.auth);
  const {login} = useAppActions();
  let navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (userId !== null && token !== null) {
        return navigate('/contacts');
      }
    }
  }, [loading]);

  const handleSubmit = (formValues: User) => {
    login(formValues);
  }

  return (
    <Login onSubmit={handleSubmit} error={error} />
  );
};

export default LoginPage;
