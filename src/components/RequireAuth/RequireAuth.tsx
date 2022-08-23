import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks";
import React from "react";
import {Routes} from '../../routes/routes';

interface RequireAuthProps {
  children: JSX.Element
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const {userId, token} = useAppSelector(state => state.auth);

  if (userId === null || token === null) {
    return <Navigate to={Routes.LOGIN} replace/>;
  } else {
    return children;
  }
}
