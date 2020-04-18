import createDataContext from './createDataContext';
import api, { AuthParams } from '../api/services/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { Dispatch } from 'react';
import { Action, RootState } from './types';

const authReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'error_found':
      return { ...state, errorMessage: action.payload };
    case 'clear_error':
      return { ...state, errorMessage: '' };
    case 'sign_in':
      return { errorMessage: '', token: action.payload };
    case 'sign_out':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const restoreToken = (dispatch: Dispatch<Action>) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'sign_in', payload: token });
  }
};

const signUp = (dispatch: Dispatch<Action>) => async ({
  email,
  password
}: AuthParams) => {
  try {
    const response = await api.client.post('/sign-up', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_in', payload: response.data.token });
  } catch (err) {
    dispatch({
      type: 'error_found',
      payload: 'Oops! Something went wrong'
    });
  }
};

const signIn = (dispatch: Dispatch<Action>) => async ({
  email,
  password
}: AuthParams) => {
  try {
    const response = await api.client.post('/sign-in', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_in', payload: response.data.token });
  } catch (err) {
    dispatch({
      type: 'error_found',
      payload: 'Oops! Something went wrong'
    });
  }
};

const signOut = (dispatch: Dispatch<Action>) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'sign_out' });
};

const clearError = (dispatch: Dispatch<Action>) => () => {
  dispatch({ type: 'clear_error' });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearError, restoreToken },
  { token: null, errorMessage: '' }
);
