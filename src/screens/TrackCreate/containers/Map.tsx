import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { Context as LocationContext } from '../../../context/LocationContext';
import { ActivityIndicator } from 'react-native-paper';

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);

  return currentLocation ? (
    <MapView
      style={styles.map}
      showsUserLocation
      followsUserLocation
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    />
  ) : (
    <ActivityIndicator size={50} />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
