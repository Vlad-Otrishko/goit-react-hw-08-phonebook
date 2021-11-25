import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const hasToken = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : hasToken? children :<Redirect to={redirectTo} />}
    </Route>
  );
}