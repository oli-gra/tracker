import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'

const SignupScreen = () => {
  const { state, signup, clearErrMessage } = useContext(AuthContext);
  return <View>
    <NavigationEvents onWillFocus={clearErrMessage} />
    <AuthForm
      onSubmit={signup}
      headerText="Sign up for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign Up"
    />
    <NavLink
      route="Signin"
      text="Already have an account? Sign in"
    />
  </View>
};

export default SignupScreen;
