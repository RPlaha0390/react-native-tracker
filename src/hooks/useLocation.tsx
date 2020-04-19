import { useState, useEffect } from 'react';
import Geolocation, {
  GeolocationResponse
} from '@react-native-community/geolocation';
import { Alert } from 'react-native';

const useLocation = (
  shouldTrack: boolean,
  watchPositionCallback: () => void
) => {
  const [location, setLocation] = useState<null | GeolocationResponse>(null);
  const [watchId, setWatchId] = useState<number>(0);
  const watchPositionOptions = {
    enableHighAccuracy: false,
    distanceFilter: 10,
    timeout: 1000
  };

  useEffect(() => {
    if (shouldTrack) {
      Geolocation.getCurrentPosition(
        locationInfo => setLocation(locationInfo),
        err => Alert.alert('Error', err.message)
      );

      const subscriber = Geolocation.watchPosition(
        watchPositionCallback,
        err => Alert.alert('Error', err.message),
        watchPositionOptions
      );

      setWatchId(subscriber);
    } else {
      Geolocation.clearWatch(watchId);
      setWatchId(0);
    }
  }, [shouldTrack]);
};

export default useLocation;
