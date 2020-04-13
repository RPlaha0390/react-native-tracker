import createDataContext from './createDataContext';
import api, { AuthParams } from '../api/services/auth';
import AsyncStorage from '@react-native-community/async-storage';

export interface RootState {
  token: null | string;
  errorMessage: string;
}

export type Action =
  | { type: 'error_found'; payload: string }
  | { type: 'clear_error' }
  | { type: 'sign_in'; payload: string };

type Dispatch = ({}: Action) => void;

const authReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'error_found':
      return { ...state, errorMessage: action.payload };
    case 'clear_error':
      return { ...state, errorMessage: '' };
    case 'sign_in':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const restoreToken = (dispatch: Dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'sign_in', payload: token });
  }
};

const signUp = (dispatch: Dispatch) => async ({
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

const signIn = (dispatch: Dispatch) => async ({
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

const signOut = (dispatch: Dispatch) => {
  return () => {};
};

const clearError = (dispatch: Dispatch) => () => {
  dispatch({ type: 'clear_error' });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearError, restoreToken },
  { token: null, errorMessage: '' }
);
