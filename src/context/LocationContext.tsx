import createDataContext from './createDataContext';
import { Dispatch } from 'react';
import { RootState, Action } from './types';
import { GeolocationResponse } from '@react-native-community/geolocation';

const locationReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch: Dispatch<Action>) => {};
const stopRecording = (dispatch: Dispatch<Action>) => {};
const addLocation = (dispatch: Dispatch<Action>) => (
  location: GeolocationResponse
) => dispatch({ type: 'add_current_location', payload: location });

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation
  },
  { recording: false, locations: [], currentLocation: null }
);
