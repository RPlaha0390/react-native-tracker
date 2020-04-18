import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Headline } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from '../../components/Spacer/Spacer';
import Map from './containers/Map';
import Geolocation, {
  GeolocationError,
  GeolocationResponse
} from '@react-native-community/geolocation';
import { Context as LocationContext } from '../../context/LocationContext';

const TrackCreateScreen = () => {
  const { actions } = useContext(LocationContext);
  const [location, setLocation] = useState<null | GeolocationResponse>(null);
  const watchPositionOptions = {
    enableHighAccuracy: false,
    distanceFilter: 10,
    timeout: 1000
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      locationInfo => setLocation(locationInfo),
      err => Alert.alert('Error', err.message)
    );

    Geolocation.watchPosition(
      success => actions.addLocation(success),
      error => console.log('error', error),
      watchPositionOptions
    );
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Headline>Create Track</Headline>
      </Spacer>
      <Spacer>
        <Map />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
