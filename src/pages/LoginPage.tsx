import React, {useEffect} from 'react';
import Login from "../components/Login/Login";
import {useAppActions, useAppSelector} from "../hooks";
import {User} from "../types/auth";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const {userId, token, authLoading, authError} = useAppSelector(state => state.auth);
  const {login} = useAppActions();
  let navigate = useNavigate();

  useEffect(() => {
    if (!authLoading) {
      if (userId !== null && token !== null) {
        return navigate('/contacts');
      }
    }
  }, [authLoading]);

  const handleSubmit = (formValues: User) => {
    login(formValues);
  }

  return (
    <Login onSubmit={handleSubmit} loading={authLoading} error={authError} />
  );
};

export default LoginPage;
