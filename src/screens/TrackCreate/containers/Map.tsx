import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import Geolocation, {
  GeolocationError,
  GeolocationResponse
} from '@react-native-community/geolocation';

const Map = () => {
  const [locationError, setLocationError] = useState<null | GeolocationError>(
    null
  );
  const [location, setLocation] = useState<null | GeolocationResponse>(null);
  let points = [];

  for (let index = 0; index < 20; index++) {
    points.push({
      latitude: 51.48058 + index * 0.001,
      longitude: -0.39383 + index * 0.001
    });
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(
      locationInfo => setLocation(locationInfo),
      err => setLocationError(err)
    );
  }, []);

  console.log(location);
  console.log(locationError);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 51.48058,
        latitudeDelta: 0.02,
        longitude: -0.39383,
        longitudeDelta: 0.02
      }}>
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
