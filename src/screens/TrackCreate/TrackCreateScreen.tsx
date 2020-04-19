import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Headline } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from '../../components/Spacer/Spacer';
import Map from './containers/Map';
import { Context as LocationContext } from '../../context/LocationContext';
import useLocation from '../../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from './components/TrackForm';

const TrackCreateScreen = () => {
  const { actions } = useContext(LocationContext);
  const isFocused = useIsFocused();
  useLocation(isFocused, actions.addLocation);

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
