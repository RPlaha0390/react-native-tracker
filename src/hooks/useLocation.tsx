import { useEffect } from 'react';
import Geolocation, {
  GeolocationResponse
} from '@react-native-community/geolocation';
import { Alert } from 'react-native';

const useLocation = (
  shouldTrack: boolean | undefined,
  watchPositionCallback: (location: GeolocationResponse) => void
) => {
  useEffect(() => {
    let subscriber: number | null;

    const startWatching = () =>
      Geolocation.watchPosition(
        watchPositionCallback,
        err => Alert.alert('Error', err.message),
        {
          enableHighAccuracy: false,
          distanceFilter: 10,
          timeout: 1000
        }
      );

    if (shouldTrack) {
      subscriber = startWatching();
    }

    return () => {
      if (subscriber) {
        Geolocation.clearWatch(subscriber);
        subscriber = null;
      }
    };
  }, [shouldTrack, watchPositionCallback]);

  return [];
};

export default useLocation;
