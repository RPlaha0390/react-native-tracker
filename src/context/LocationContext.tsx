import createDataContext from './createDataContext';
import { Dispatch } from 'react';
import { RootState, Action } from './types';
import { GeolocationResponse } from '@react-native-community/geolocation';

const locationReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'add_location':
      return { ...state, locations: [...state.locations!, action.payload] };
    case 'change_name':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const changeName = (dispatch: Dispatch<Action>) => (name: string) => {
  dispatch({ type: 'change_name', payload: name });
};
const startRecording = (dispatch: Dispatch<Action>) => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = (dispatch: Dispatch<Action>) => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation = (dispatch: Dispatch<Action>) => (
  location: GeolocationResponse,
  recording: boolean
) => {
  dispatch({ type: 'add_current_location', payload: location });
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { name: '', recording: false, locations: [], currentLocation: null }
);
