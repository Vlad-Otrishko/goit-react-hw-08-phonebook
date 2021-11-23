import { Suspense, lazy } from 'react';
import { useSelector} from 'react-redux';
import { Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import AuthNav from './components/AuthNav';
import Navigation from './components/Navigation';
import UserMenu from './components/UserMenu';
import Loader from './components/Loader';
import { authSelectors } from './redux/auth';
import s from './App.module.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));


const App = () => {
  
    return (
      <div className={s.container}>
        <Navigation />
        {useSelector(authSelectors.getIsLoggedIn) ? <UserMenu /> : <AuthNav />}
        <Switch>
          <Suspense fallback={<Loader/>}>
            <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/">
            <ContactsView />
            </PrivateRoute>
         </Suspense>
        </Switch>
      </div>
    );

}
export default App;
