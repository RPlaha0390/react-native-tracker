import { GeolocationResponse } from '@react-native-community/geolocation';

export interface RootState {
  token?: null | string;
  errorMessage?: string;
  recording?: boolean;
  locations?: [];
  currentLocation?: null | GeolocationResponse;
}

export type Action =
  | { type: 'error_found'; payload: string }
  | { type: 'clear_error' }
  | { type: 'sign_in'; payload: string }
  | { type: 'sign_out' }
  | { type: 'add_current_location'; payload: GeolocationResponse }
  | { type: 'start_recording' }
  | { type: 'stop_recording' };
