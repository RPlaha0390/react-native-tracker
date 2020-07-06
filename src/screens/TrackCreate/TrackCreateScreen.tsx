import React, { useEffect, useState, useContext, useCallback } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Headline } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from '../../components/Spacer/Spacer';
import Map from './containers/Map';
import { Context as LocationContext } from '../../context/LocationContext';
import useLocation from '../../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from './components/TrackForm';
import { GeolocationResponse } from '@react-native-community/geolocation';

const TrackCreateScreen = () => {
  const {
    state: { recording },
    actions: { addLocation }
  } = useContext(LocationContext);
  const isFocused = useIsFocused();
  const callback = useCallback(
    location => {
      if (recording) {
        addLocation(location, recording);
      }
    },
    [recording]
  );

  useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Headline>Create Track</Headline>
      </Spacer>
      <Spacer>
        <Map />
      </Spacer>
      <Spacer>
        <TrackForm />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
