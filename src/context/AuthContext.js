import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native'
import { navigate } from '../navRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return { token: null, errorMessage: '' }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    default:
      return state;
  }
};

const clearErrMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const tryLocalSignin = dispatch => async () => {
  const token = AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong'
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong'
    })
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({
    type: 'signout'
  })
  navigate('loginFlow')
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
