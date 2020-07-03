import React, { useContext } from 'react';
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation'


const SigninScreen = () => {
  const { state, signin, clearErrMessage } = useContext(AuthContext);
  return <>
    <NavigationEvents onWillFocus={clearErrMessage} />
    <AuthForm
      onSubmit={signin}
      headerText="Sign in to Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign In"
    />
    <NavLink
      route="Signup"
      text="No account? Sign up"
    />
  </>
}


export default SigninScreen;