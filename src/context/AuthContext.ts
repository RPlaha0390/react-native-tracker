import createDataContext from './createDataContext';
import api, { CreateSignUpParams } from '../api/services/auth';

export interface RootState {
  isSignedIn: boolean;
  errorMessage: string;
}

export type Action = { type: 'error_found'; payload: string };

const authReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'error_found':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signUpAction = (dispatch: any) => {
  return async ({ email, password }: CreateSignUpParams) => {
    try {
      const response = await api.client.post('/sign-up', { email, password });
    } catch (err) {
      dispatch({
        type: 'error_found',
        payload: 'Oops! Something went wrong'
      });
    }
  };
};

const signInAction = (dispatch: any) => {
  return () => {};
};

const signOutAction = (dispatch: any) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUpAction, signInAction, signOutAction },
  { isSignedIn: false, errorMessage: '' }
);
