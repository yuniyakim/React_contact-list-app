import {Navigate} from "react-router-dom";
import {useAppSelector} from "../hooks";

export function RequireAuth({children}: { children: JSX.Element }) {
  const {userId, token} = useAppSelector(state => state.auth);

  if (userId === null || token === null) {
    return <Navigate to="/" replace/>;
  } else {
    return children;
  }
}
